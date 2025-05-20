import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import './AppGraph.css';
import { useEffect, useState, useRef } from 'react';
import { useSocketContext } from '../../context/socketContext';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { figuresGrape } from './Components/blocks/figures';
import { sectors } from './Components/styleManager';
import { panels } from './Components/panels';
import { setupPageManager } from './UI/setupAndRefresh.js';
import { setupRealTimeCollaboration } from './Sockets/realTimeColab.js';
import { EditorContainer } from './UI/EditorContainer.jsx';
import sdk from '@stackblitz/sdk';
import { fetchAIResponse } from './Func/aiResponse.js';
import { generateAngularFiles } from './Func/exportToAngular.js';
import { ArtificialModal } from './UI/ArtificialModal.jsx';
import { DiagramHeader } from './Layout/DiagramHeader.jsx';
import { updateStackblitzProject } from './Func/stackBlitz.js';
import { saveDiagram } from './Func/saveDiagram.js';

export default function AppGraph2() {
  const contextSocket = useSocketContext();
  const [editor, setEditor] = useState(null);
  const [showIframe, setShowIframe] = useState(false);
  const [aiResponse, setAiResponse] = useState('Cargando respuesta...');
  const [stackblitzInitialized, setStackblitzInitialized] = useState(false);
  const [stackblitzVM, setStackblitzVM] = useState(null);
  const { room } = useParams();
  const currentUser = useAuthUser();
  const navigate = useNavigate();
  const editorContainerRef = useRef(null);
  const responseRef = useRef(null);
  const stackblitzContainerRef = useRef(null);

  function salirSala() {
    contextSocket.leaveRoom(room);
    navigate('/salas');
  }

  useEffect(() => {
    if (contextSocket.online) {
      contextSocket.joinRoom(room);
      console.log(currentUser)
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
      blockManager: { appendTo: '.blocks-panel', blocks: figuresGrape },
      styleManager: { appendTo: '.styles-panel', sectors },
      layerManager: { appendTo: '.layers-panel' },
      panels: { defaults: panels },
      pageManager: {
        pages: [
          { id: 'page-1', name: 'Home Page', styles: '', component: '<div className="page-content">Home Page Content</div>' }
        ]
      },
      canvas: { styles: ['https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'] }
    });

    setupPageManager(editorContainer, editor);
    setEditor(editor);

    return () => {
      editor.destroy();
    };
  }, []);

  useEffect(() => {
    if (editor && contextSocket.online) {
      const cleanupRealTime = setupRealTimeCollaboration(editor, contextSocket, room, currentUser);
      return () => cleanupRealTime();
    }
  }, [editor, contextSocket, room, currentUser]);



  // Cargar StackBlitz y la respuesta IA cuando se muestra por primera vez
  useEffect(() => {
    if (showIframe && stackblitzContainerRef.current && !stackblitzInitialized) {
      const initializeStackblitz = async () => {
        try {
          // Generar proyecto Angular
          const  files  = await updateStackblitzProject();

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
              view: 'preview',
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

  // Función para ejecutar cuando se presiona el botón "Run AI"
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
    } else {
      // Primera vez, solo mostrar iframe (la inicialización se maneja en el useEffect)
      setShowIframe(true);
    }
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

      <div className="flex-grow overflow-hidden">
        <div id="gjs" ref={editorContainerRef} className="h-full">
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
      />
    </div>
  );
}