// En tu archivo realTimeColab.js
import { debounce } from 'lodash';

export function setupRealTimeCollaboration(editor, contextSocket, room, currentUser) {
  // Guarda el ID o información del usuario actual para identificación
  const userId = currentUser.ci;
  const userName = currentUser.nombre;
  
  // Variable para almacenar la última versión conocida por página
  let lastKnownPageVersions = {};
  
  const debouncedUpdate = debounce(() => {
    const selectedPage = editor.Pages ? editor.Pages.getSelected() : false;
    if (!selectedPage) {
      return;
    }
    
    const currentPageId = selectedPage.get('id');
    const allPages = editor.Pages.getAll().map(page => ({
      id: page.get('id'),
      name: page.get('name'),
      styles: page.get('styles'),
      components: page === selectedPage ? editor.getComponents() : page.get('components')
    }));

    console.log(allPages);
    
    // Actualizar la versión conocida de esta página
    lastKnownPageVersions[currentPageId] = Date.now();
    
    // Incluir información del usuario que hace los cambios
    contextSocket.updateDiagram({
      html: editor.getHtml(),
      css: editor.getCss(),
      components: editor.getComponents(),
      pages: allPages,
      currentPageId: currentPageId,
      // Añadir información del usuario y timestamp
      userInfo: {
        userId: userId,
        userName: userName,
        cargo: currentUser.cargo
      },
      timestamp: Date.now()
    }, room);
  }, 200);
  
  // Listeners para cambios de contenido (no incluimos page:select)
  editor.on('style:update', debouncedUpdate);
  editor.on('styleManager:change', debouncedUpdate);
  editor.on('component:styleUpdate', debouncedUpdate);
  editor.on('component:add', debouncedUpdate);
  editor.on('component:update', debouncedUpdate);
  editor.on('component:remove', debouncedUpdate);
  editor.on('page:add', debouncedUpdate);
  editor.on('page:remove', debouncedUpdate);
  editor.on('page:update', debouncedUpdate);
  
  // Listener para cuando el usuario cambia de página - SOLUCIÓN CLAVE
  editor.on('page:select', debounce(() => {
    const selectedPage = editor.Pages.getSelected();
    if (!selectedPage) return;
    
    const pageId = selectedPage.get('id');
    
    // Notificar cambio de página (opcional)
    contextSocket.updateUserPageState({
      userId: userId,
      userName: userName,
      pageId: pageId,
      pageName: selectedPage.get('name')
    }, room);
    
    // IMPORTANTE: Solicitar la última versión de la página al servidor
    contextSocket.requestPageData({
      pageId: pageId,
      userId: userId
    }, room);
  }, 200));
  
  // Manejador para actualizaciones remotas
  const handleDiagramUpdate = (data) => {
    // Desactivar listeners temporalmente
    editor.off('style:update', debouncedUpdate);
    editor.off('styleManager:change', debouncedUpdate);
    editor.off('component:styleUpdate', debouncedUpdate);
    editor.off('component:add', debouncedUpdate);
    editor.off('component:update', debouncedUpdate);
    editor.off('component:remove', debouncedUpdate);
    editor.off('page:add', debouncedUpdate);
    editor.off('page:remove', debouncedUpdate);
    editor.off('page:update', debouncedUpdate);
    
    // Actualizar registro de versiones conocidas
    if (data.timestamp && data.currentPageId) {
      const newTimestamp = data.timestamp;
      const currentTimestamp = lastKnownPageVersions[data.currentPageId] || 0;
      
      // Solo actualizar si es una versión más reciente
      if (newTimestamp > currentTimestamp) {
        lastKnownPageVersions[data.currentPageId] = newTimestamp;
      } else if (newTimestamp < currentTimestamp) {
        // Si recibimos una versión más antigua, la ignoramos
        // Reactivar listeners y salir
        reactivateListeners();
        return;
      }
    }
    
    // Actualizar páginas y componentes
    if (data.pages) {
      const currentPages = editor.Pages.getAll();
      const currentPageIds = new Set(currentPages.map(p => p.get('id')));
      const currentSelectedPageId = editor.Pages.getSelected().get('id');
      
      // Procesar páginas entrantes
      data.pages.forEach(pageData => {
        const existingPage = editor.Pages.get(pageData.id);
        
        if (existingPage) {
          // Actualizar página existente
          existingPage.set('name', pageData.name);
          existingPage.set('styles', pageData.styles);
          
          // Si es la página actual del usuario, actualizar componentes
          if (pageData.id === currentSelectedPageId) {
            if (pageData.id === data.currentPageId) {
              editor.setComponents(pageData.components);
              
              if (data.css) {
                editor.setStyle(data.css);
              }
            }
          } else {
            // Para páginas en segundo plano, solo almacenar componentes
            existingPage.set('components', pageData.components);
          }
          
          currentPageIds.delete(pageData.id);
        } else {
          // Añadir nueva página
          editor.Pages.add({
            id: pageData.id,
            name: pageData.name,
            styles: pageData.styles,
            components: pageData.components
          });
        }
      });
      
      // Eliminar páginas que ya no existen
      currentPageIds.forEach(id => {
        if (editor.Pages.getAll().length > 1) {
          editor.Pages.remove(id);
        }
      });
      
      // Notificación opcional
      if (data.userInfo && data.userInfo.userId !== userId) {
        console.log(`${data.userInfo.userName} ha realizado cambios en la página ${data.currentPageId}`);
      }
    } else {
      // Formato antiguo - solo actualizar si estamos en la misma página
      const currentSelectedPageId = editor.Pages.getSelected().get('id');
      
      if (data.currentPageId === currentSelectedPageId) {
        editor.setComponents(data.components);
        
        if (data.css) {
          editor.setStyle(data.css);
        }
      }
    }
    
    // Reactivar listeners
    reactivateListeners();
  };
  
  // Función para reactivar los listeners
  const reactivateListeners = () => {
    editor.on('style:update', debouncedUpdate);
    editor.on('styleManager:change', debouncedUpdate);
    editor.on('component:styleUpdate', debouncedUpdate);
    editor.on('component:add', debouncedUpdate);
    editor.on('component:update', debouncedUpdate);
    editor.on('component:remove', debouncedUpdate);
    editor.on('page:add', debouncedUpdate);
    editor.on('page:remove', debouncedUpdate);
    editor.on('page:update', debouncedUpdate);
  };
  
  // PARTE CLAVE: Manejador para cuando el servidor envía datos específicos de una página
  const handlePageDataResponse = (data) => {
    // Solo procesar si es para la página que estamos viendo
    const currentSelectedPageId = editor.Pages.getSelected().get('id');
    if (data.pageId !== currentSelectedPageId) return;
    
    // Desactivar listeners temporalmente
    editor.off('style:update', debouncedUpdate);
    editor.off('styleManager:change', debouncedUpdate);
    editor.off('component:styleUpdate', debouncedUpdate);
    editor.off('component:add', debouncedUpdate);
    editor.off('component:update', debouncedUpdate);
    editor.off('component:remove', debouncedUpdate);
    editor.off('page:add', debouncedUpdate);
    editor.off('page:remove', debouncedUpdate);
    editor.off('page:update', debouncedUpdate);
    
    // Actualizar componentes y estilos para esta página específica
    if (data.components) {
      editor.setComponents(data.components);
    }
    
    if (data.css) {
      editor.setStyle(data.css);
    }
    
    // Actualizar registro de versiones conocidas
    if (data.timestamp) {
      lastKnownPageVersions[data.pageId] = data.timestamp;
    }
    
    // Reactivar listeners
    reactivateListeners();
  };
  
  // Registrar manejadores de eventos
  contextSocket.onDiagramUpdate(handleDiagramUpdate);
  
  // Registrar manejador para respuestas de datos de página específica
  if (contextSocket.onPageDataResponse) {
    contextSocket.onPageDataResponse(handlePageDataResponse);
  }
  
  // Opcional: Manejador para actualizaciones de estado de página de otros usuarios
  const handleUserPageStateUpdate = (data) => {
    if (data.userId !== userId) {
      console.log(`${data.userName} está ahora en la página "${data.pageName}"`);
    }
  };
  
  // Opcional: Registrar para actualizaciones de estado de página
  if (contextSocket.onUserPageStateUpdate) {
    contextSocket.onUserPageStateUpdate(handleUserPageStateUpdate);
  }
  
  // Función de limpieza
  return () => {
    editor.off('style:update', debouncedUpdate);
    editor.off('styleManager:change', debouncedUpdate);
    editor.off('component:styleUpdate', debouncedUpdate);
    editor.off('component:add', debouncedUpdate);
    editor.off('component:update', debouncedUpdate);
    editor.off('component:remove', debouncedUpdate);
    editor.off('page:add', debouncedUpdate);
    editor.off('page:remove', debouncedUpdate);
    editor.off('page:update', debouncedUpdate);
    editor.off('page:select');
    
    contextSocket.offDiagramUpdate(handleDiagramUpdate);
    
    if (contextSocket.offPageDataResponse) {
      contextSocket.offPageDataResponse(handlePageDataResponse);
    }
    
    if (contextSocket.offUserPageStateUpdate) {
      contextSocket.offUserPageStateUpdate(handleUserPageStateUpdate);
    }
  };
}




// En tu servidor
socket.on('requestPageData', (request, room) => {
    const { pageId, userId } = request;
    
    // Obtener los datos más recientes para esta página desde tu almacenamiento
    const pageData = getLatestPageData(room, pageId);
    
    // Enviar datos solo al usuario que lo solicitó
    socket.to(userId).emit('pageDataResponse', {
      pageId: pageId,
      components: pageData.components,
      css: pageData.css,
      timestamp: pageData.timestamp
    });
  });