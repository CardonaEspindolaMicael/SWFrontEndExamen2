import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import './AppGraph.css';
import { useEffect, useState, useRef } from 'react';
import { useSocketContext } from '../../context/socketContext';
import { useNavigate, useParams } from 'react-router';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { figuresGrape } from './Components/blocks/figures';
import { sectors } from './Components/styleManager';
import { panels, updateFigures } from './Components/panels';
import { setupPageManager } from './UI/setupAndRefresh.js';
import { setupRealTimeCollaboration } from './Sockets/realTimeColab.js';
import { EditorContainer } from './UI/EditorContainer.jsx';
import sdk from '@stackblitz/sdk';
import { fetchAIResponse } from './Func/aiResponse.js';
import { generateAngularFiles } from './Func/exportToAngular.js';
import { ArtificialModal } from './UI/ArtificialModal.jsx';
import { DiagramHeader } from './Layout/DiagramHeader.jsx';
import { ApiRequests } from '../../api/ApiRequests.js';



export default function AppGraph2() {
  const contextSocket = useSocketContext();
  const [editor, setEditor] = useState(null);
  const [showIframe, setShowIframe] = useState(false);
  const [aiResponse, setAiResponse] = useState('Cargando respuesta...');
  const [stackblitzInitialized, setStackblitzInitialized] = useState(false);
  const [stackblitzVM, setStackblitzVM] = useState(null);
  const [roomData, setRoomData] = useState(null); // Add state for room data
  const { room } = useParams();
  const currentUser = useAuthUser();
  const navigate = useNavigate();
  const editorContainerRef = useRef(null);
  const responseRef = useRef(null);
  const stackblitzContainerRef = useRef(null);

  // Fetch room data when component mounts
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await ApiRequests.getByIdCommon(`/sala/${room}`);
        setRoomData(response);
      } catch (error) {
        console.log("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [room]);

  function salirSala() {
    contextSocket.leaveRoom(room);
    navigate('/salas');
  }

  useEffect(() => {
    if (contextSocket.online) {
      contextSocket.joinRoom(room);
    }
  }, [contextSocket.online, room]);
  
useEffect(() => {
  const editorContainer = editorContainerRef.current;
  if (!editorContainer) return;

  const editor = grapesjs.init({
    container: '.editor-canvas',
    fromElement: true,
    height: '100%',
    width: 'auto',
    storageManager: false,
    blockManager: { 
      appendTo: '.blocks-panel', 
      blocks: updateFigures() // Initial blocks
    },
    styleManager: { appendTo: '.styles-panel', sectors },
    layerManager:{ appendTo:'.layers-panel'},
    deviceManager: {
      devices: [
        {
          name: 'Escritorio',
          width: '', // default full width
        },
        {
          name: 'Tablet',
          width: '768px',
          widthMedia: '992px',
        },
        {
          name: 'Movil',
          width: '375px',
          widthMedia: '576px',
        }
      ]
    },
    panels: { 
      defaults: panels 
    },
    pageManager: {
      pages: [
        { id: 'page-1', name: 'Home Page', styles: '', component: '<div className="page-content">Home Page Content</div>' }
      ]
    },
    canvas: { 
      styles: ['https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'] 
    }
  });

  // Set up custom command to ensure that device switching updates blocks
  editor.Commands.add('update-blocks', (editor) => {
    updateFigures(editor);
  });

  // Add our editor to panels.js (allows access in command callbacks)
  // This is optional if you're already passing editor in updateFigures calls
  window.editorInstance = editor;

  setupPageManager(editorContainer, editor);
  setEditor(editor);

  return () => {
    delete window.editorInstance;
    editor.destroy();
  };
}, []);
  // Load diagram from roomData when both editor and roomData are available
  useEffect(() => {
    if (!editor || !roomData?.diagrama) return;
  
    try {
      const diagramData = typeof roomData.diagrama === 'string'
        ? JSON.parse(roomData.diagrama)
        : roomData.diagrama;
  
      // 1) Limpio páginas extras
      editor.Pages.getAll().forEach(p => {
        if (p.id !== 'page-1') editor.Pages.remove(p.id);
      });
  
      // 2) Cargo cada página desde diagramData.pages
      diagramData.pages.forEach(page => {
        if (page.id === 'page-1') {
          // primera página: setComponents + setStyle
          if (page.components) {
            editor.setComponents(page.components);
          }
          if (page.styles) {
            editor.setStyle(page.styles);
          }
        } else {
          // resto de páginas: las añado
          editor.Pages.add({
            id:       page.id,
            name:     page.name,
            component: page.component  || '',  // aquí html guardado
            styles:    page.styles     || ''   // aquí css guardado
          });
        }
      });
  
      // 3) (Opcional) selecciono la página activa original
      if (diagramData.currentPageId) {
        editor.Pages.select(diagramData.currentPageId);
      }
  
      console.log("Diagrama cargado exitosamente");
    } catch (error) {
      console.error("Error loading diagram:", error);
    }
  }, [editor, roomData]);
  
  useEffect(() => {
    if (editor && contextSocket.online) {
      const cleanupRealTime = setupRealTimeCollaboration(editor, contextSocket, room, currentUser);
      return () => cleanupRealTime();
    }
  }, [editor, contextSocket, room, currentUser]);

  // Función para actualizar el proyecto de StackBlitz con nuevas páginas
  const updateStackblitzProject = async () => {
    // Your existing code...
    if (!editor) return;
    
    // Obtener todas las páginas del editor
    const pages = editor.Pages.getAll();
    
    // Extraer información de cada página
    const pagesData = [];
    
    // Por cada página, obtener su HTML
    for (const page of pages) {
      // Seleccionar la página actual para obtener su HTML
      editor.Pages.select(page.id);
      
      // Obtener nombre y contenido HTML
      pagesData.push({
        id: page.id,
        name: page.get('name'),
        html: editor.getHtml()
      });
    }
    
    // Volver a la página original
    const currentPage = editor.Pages.getSelected();
    if (currentPage) {
      editor.Pages.select(currentPage.id);
    }
    
    // Generar archivos Angular con las páginas
    const generatedFiles = generateAngularFiles(pagesData);
    
    return { files: generatedFiles, pagesData };
  };

  // useEffect for StackBlitz...
  useEffect(() => {
    if (showIframe && stackblitzContainerRef.current && !stackblitzInitialized) {
      const initializeStackblitz = async () => {
        try {
          // Generar proyecto Angular
          const { files, pagesData } = await updateStackblitzProject();
          
          // Cargar StackBlitz SDK con los archivos generados
          const vm = await sdk.embedProject(
            stackblitzContainerRef.current,
            {
              title: 'Angular App from GrapesJS',
              description: 'Generated from GrapesJS editor',
              template: 'angular-cli',
              files
            },
            {
              height: '100%',
              hideNavigation: false,
              hideExplorer: false,
              openFile: 'src/app.component.html',
              view: 'editor',
              terminalHeight: 30,
              theme: 'light',
              clickToLoad: false
            }
          );
          
          // Guardar la VM para actualizaciones futuras
          setStackblitzVM(vm);
          
          // Actualizar la respuesta AI con información de las páginas
          fetchAIResponse(setAiResponse, editor);
          
          setStackblitzInitialized(true);
        } catch (error) {
          console.error('Error al inicializar StackBlitz:', error);
          setAiResponse('Error al cargar el proyecto en StackBlitz: ' + error.message);
        }
      };
      
      initializeStackblitz(); 
    }
  }, [showIframe, stackblitzInitialized, editor]);

  // Your existing handleRunAI function...
  const handleRunAI = async () => {
    if (stackblitzInitialized && stackblitzVM) {
      // Si ya está inicializado, actualizar el proyecto
      try {
        setAiResponse('Actualizando proyecto Angular con nuevas páginas...');
        
        const { files, pagesData } = await updateStackblitzProject();
        
        // Actualizar archivos en StackBlitz
        await stackblitzVM.applyFsDiff({
          create: files,
          destroy: []
        });
        
        // Actualizar respuesta AI
        fetchAIResponse(setAiResponse, editor);
      } catch (error) {
        console.error('Error al actualizar StackBlitz:', error);
        setAiResponse('Error al actualizar el proyecto: ' + error.message);
      }
    } 
      // Primera vez, solo mostrar iframe (la inicialización se maneja en el useEffect)
      setShowIframe(true);
 
  };

  return (
    <div className="app-graph-container relative h-screen flex flex-col bg-gray-50">
      {/* Header con navegación y botones de acción */}
      <DiagramHeader
        handleRunAI={handleRunAI}
        editor={editor}
        room={room}
        salirSala={salirSala}
        currentUser={currentUser}
      />

      <div className="flex-grow overflow-scroll">
        <div id="gjs" ref={editorContainerRef} >
          <EditorContainer />
        </div>
      </div>

      <ArtificialModal
        navigator={navigator}
        responseRef={responseRef}
        setShowIframe={setShowIframe}
        showIframe={showIframe}
        stackblitzContainerRef={stackblitzContainerRef}
        aiResponse={aiResponse}
        setStackblitzInitialized={setStackblitzInitialized}
      />
    </div>
  );
}