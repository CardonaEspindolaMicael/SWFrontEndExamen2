// En tu archivo realTimeColab.js
import { debounce } from 'lodash';

export function setupRealTimeCollaboration(editor, contextSocket, room, currentUser) {
  // Guarda el ID o información del usuario actual para identificación
  const userId = currentUser.ci;
  const userName = currentUser.nombre;
  
  const debouncedUpdate = debounce(() => {
    const selectedPage = editor.Pages ? editor.Pages.getSelected() : false;
    if (!selectedPage) {
      return;
    }
    
    const allPages = editor.Pages.getAll().map(page => ({
      id: page.get('id'),
      name: page.get('name'),
      styles: page.get('styles'),
      components: page === selectedPage ? editor.getComponents() : page.get('components')
    }));

    console.log(allPages);
    
    // Incluir información del usuario que hace los cambios
    contextSocket.updateDiagram({
      html: editor.getHtml(),
      css: editor.getCss(),
      components: editor.getComponents(),
      pages: allPages,
      currentPageId: selectedPage.get('id'),
      // Añadir información del usuario que está haciendo los cambios
      userInfo: {
        userId: userId,
        userName: userName,
        cargo: currentUser.cargo
      }
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
  editor.on('page:undo',debouncedUpdate)
  // No incluimos page:select para evitar sincronización de navegación
  
  // Opcional: Listener separado para notificar cambio de página sin forzar sincronización
  editor.on('page:select', debounce(() => {
    const selectedPage = editor.Pages.getSelected();
    if (selectedPage) {
      contextSocket.updateUserPageState({
        userId: userId,
        userName: userName,
        pageId: selectedPage.get('id'),
        pageName: selectedPage.get('name')
      }, room);
    }
  }, 200));
  
  // Set up listener for remote changes
  const handleDiagramUpdate = (data) => {
    // Temporarily remove event listeners to prevent infinite loops
    editor.off('style:update', debouncedUpdate);
    editor.off('styleManager:change', debouncedUpdate);
    editor.off('component:styleUpdate', debouncedUpdate);
    editor.off('component:add', debouncedUpdate);
    editor.off('component:update', debouncedUpdate);
    editor.off('component:remove', debouncedUpdate);
    editor.off('page:add', debouncedUpdate);
    editor.off('page:remove', debouncedUpdate);
    editor.off('page:update', debouncedUpdate);
    editor.off('page:undo',debouncedUpdate)
    
    // Update pages and components with their styles
    if (data.pages) {
      const currentPages = editor.Pages.getAll();
      const currentPageIds = new Set(currentPages.map(p => p.get('id')));
      const currentSelectedPageId = editor.Pages.getSelected().get('id');
      
      // Process incoming pages
      data.pages.forEach(pageData => {
        const existingPage = editor.Pages.get(pageData.id);
        
        if (existingPage) {
          // Update existing page
          existingPage.set('name', pageData.name);
          existingPage.set('styles', pageData.styles);
          
          // Si la página de actualización es la misma que está viendo el usuario,
          // actualiza los componentes directamente
          if (pageData.id === currentSelectedPageId) {
            if (pageData.id === data.currentPageId) {
              editor.setComponents(pageData.components);
              
              // Asegúrate de que el CSS se actualiza también
              if (data.css) {
                editor.setStyle(data.css);
              }
            }
          } else {
            // Para otras páginas, solo almacena los componentes
            existingPage.set('components', pageData.components);
          }
          
          currentPageIds.delete(pageData.id);
        } else {
          // Add new page
          editor.Pages.add({
            id: pageData.id,
            name: pageData.name,
            styles: pageData.styles,
            components: pageData.components
          });
        }
      });
      
      // Remove pages that no longer exist
      currentPageIds.forEach(id => {
        if (editor.Pages.getAll().length > 1) { // Prevent removing the last page
          editor.Pages.remove(id);
        }
      });
      

      // Opcional: Mostrar notificación de quién modificó qué página
      if (data.userInfo && data.userInfo.userId !== userId) {
        console.log(`${data.userInfo.userName} ha realizado cambios en la página ${data.currentPageId}`);
        // Aquí podrías implementar una notificación visual para el usuario
      }
    } else {
      // Legacy support for older format - solo actualiza si el usuario está en la misma página
      const currentSelectedPageId = editor.Pages.getSelected().get('id');
      
      if (data.currentPageId === currentSelectedPageId) {
        editor.setComponents(data.components);
        
        // Asegúrate de que el CSS se actualiza también
        if (data.css) {
          editor.setStyle(data.css);
        }
      }
    }
    
    // Restore event listeners
    editor.on('style:update', debouncedUpdate);
    editor.on('styleManager:change', debouncedUpdate);
    editor.on('component:styleUpdate', debouncedUpdate);
    editor.on('component:add', debouncedUpdate);
    editor.on('component:update', debouncedUpdate);
    editor.on('component:remove', debouncedUpdate);
    editor.on('page:add', debouncedUpdate);
    editor.on('page:remove', debouncedUpdate);
    editor.on('page:update', debouncedUpdate);
    editor.on('page:undo',debouncedUpdate)
  };
  
  contextSocket.onDiagramUpdate(handleDiagramUpdate);
  
  // Opcional: Función para manejar actualizaciones de estado de página de otros usuarios
  const handleUserPageStateUpdate = (data) => {
    if (data.userId !== userId) {
      console.log(`${data.userName} está ahora en la página "${data.pageName}"`);
      // Podrías implementar alguna visualización para mostrar dónde están los otros usuarios
    }
  };
  
  // Opcional: Registrarse para recibir actualizaciones de estado de página
  if (contextSocket.onUserPageStateUpdate) {
    contextSocket.onUserPageStateUpdate(handleUserPageStateUpdate);
  }
  
  // Return cleanup function
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
    editor.off('page:undo',debouncedUpdate)
    
    // Opcional: Limpiar el listener de estado de página
    editor.off('page:select');
    
    contextSocket.offDiagramUpdate(handleDiagramUpdate);
    
    // Opcional: Desregistrar listener de estado de página
    if (contextSocket.offUserPageStateUpdate) {
      contextSocket.offUserPageStateUpdate(handleUserPageStateUpdate);
    }
  };
}