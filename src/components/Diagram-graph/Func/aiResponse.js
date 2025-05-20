export const fetchAIResponse2 = (setAiResponse, editor) => {
  setAiResponse('Analizando el contenido...');
  
  try {
    const pages = editor.Pages.getAll();
    
    // Extraer HTML de cada página y añadir respuesta estática
    const pagesData = pages.map(page => {
      const pageId = page.id;
      const pageName = page.get('name');
      
      // Importante: necesitamos seleccionar la página antes de obtener su HTML
      editor.Pages.select(pageId);
      const pageHtml = editor.getHtml();
      
      // Generar respuesta estática basada en el nombre de la página
      // Esta respuesta INCLUYE el HTML de la página seguido de las instrucciones
      const staticResponse = buildStaticResponseWithHtml(pageName, pageHtml);
      
      return {
        id: pageId,
        name: pageName,
        html: pageHtml,
        staticResponse: staticResponse
      };
    });
    
    // Volver a la página original si es necesario
    if (pages.length > 0) {
      const currentPage = editor.Pages.getSelected();
      if (currentPage) {
        editor.Pages.select(currentPage.id);
      }
    }
    
    // Configurar la respuesta como un array de objetos página
    setAiResponse(pagesData);
  } catch (error) {
    console.error('Error al obtener HTML de las páginas:', error);
    setAiResponse('Error al procesar el contenido HTML.');
  }
};

// Función para generar respuestas estáticas con el HTML incluido
function buildStaticResponseWithHtml(pageName, pageHtml) {
  // El HTML de la página con formato de código

  
  // Determinar las instrucciones según el nombre de la página
  let instructions = '';
  
  if (pageName.toLowerCase() === 'home' || pageName.toLowerCase() === 'home page') {
    instructions = `
<div class="instructions-container p-4 bg-blue-50 rounded-md border border-blue-200">
  <h3 class="text-lg font-semibold mb-2">Instrucciones para la página Home</h3>
  <p class="mb-2">Estas son las instruccion para cargar el HTML de la pagina Home. Para verlo en Angular:</p>
  <ol class="list-decimal pl-6 mb-4">
    <li>Espere a que carguen las dependencias del editor a la izquierda.</li>
    <li>Una vez cargado debera ser capaz de visualizar un mensaje de <h1>Hello Home</h1> .</li>
    <li>Copie el código HTML que esta abajo del todo de la parte derecha apretando el boton Copiar HTML</li>
    <li>En la parte inferior derecha del visualizador vera el boton <strong>Editor</strong>.</li>
    <li>Una vez presionado vera el codigo html de la aplicacion, pegue el código aqui apretando <kbd>Ctrl + A</kbd> seguido de <kbd>Ctrl + V</kbd>.</li>
    <li>Guarde el archivo presionando <kbd>Ctrl + S</kbd> (o <kbd>Cmd + S</kbd> en Mac).</li>
    <li>Vaya a la esquina inferior derecha del editor y presione <strong>Preview</strong>.</li>
  </ol>
  <p class="mb-2">Si todo salió bien, verá su diagrama compilado en Angular.</p>
  <p>Para descargar el proyecto, vaya a la esquina superior izquierda del editor, presione el menú de hamburguesa y luego el icono de nube junto a PROJECT.</p>
</div>`;
  } else if (pageName.toLowerCase() === 'test' || pageName.toLowerCase() === 'test page') {
    instructions = `
<div class="instructions-container p-4 bg-blue-50 rounded-md border border-blue-200">
  <h3 class="text-lg font-semibold mb-2">Instrucciones para la página Test</h3>
  <p class="mb-2">Este es el HTML del diagrama Test. Para verlo en Angular:</p>
  <ol class="list-decimal pl-6 mb-4">
    <li>Copie el código HTML de arriba.</li>
    <li>En el editor izquierdo, encuentre <strong>src/app/components/test/test.component.html</strong>.</li>
    <li>Pegue el código y guarde presionando <kbd>Ctrl + S</kbd>.</li>
    <li>En la barra de navegación del preview, escriba <strong>/test</strong> para ver esta página.</li>
  </ol>
  <p class="text-sm italic mt-4">La ruta para esta página ya está configurada en app.routes.ts</p>
</div>`;
  } else {
    // Para cualquier otra página, proporcionar instrucciones para crear un nuevo componente
    instructions = `
<div class="instructions-container p-4 bg-blue-50 rounded-md border border-blue-200">
  <h3 class="text-lg font-semibold mb-2">Instrucciones para la página ${pageName}</h3>
  <p class="mb-2">Este es el HTML del diagrama ${pageName}. Para implementarlo en Angular:</p>
  <ol class="list-decimal pl-6 mb-4">
    <li>Copie el código HTML de arriba.</li>
    <li>En el editor izquierdo, abra el terminal (botón "Terminal" en la parte inferior).</li>
    <li>Ejecute el comando: <kbd>ng generate component components/${pageName.toLowerCase().replace(/\s+/g, '-')}</kbd></li>
    <li>Navegue al archivo <strong>src/app/components/${pageName.toLowerCase().replace(/\s+/g, '-')}/${pageName.toLowerCase().replace(/\s+/g, '-')}.component.html</strong>.</li>
    <li>Pegue el código y guarde presionando <kbd>Ctrl + S</kbd>.</li>
    <li>Abra el archivo <strong>src/app/app.routes.ts</strong> y añada la ruta:</li>
  </ol>
  <pre class="bg-gray-100 p-2 rounded-md mb-4 overflow-auto">
import { ${capitalizeFirstLetter(pageName.toLowerCase().replace(/\s+/g, '-'))}Component } from './components/${pageName.toLowerCase().replace(/\s+/g, '-')}/${pageName.toLowerCase().replace(/\s+/g, '-')}.component';

export const routes: Routes = [
    // Rutas existentes...
    {path:'${pageName.toLowerCase().replace(/\s+/g, '-')}', component: ${capitalizeFirstLetter(pageName.toLowerCase().replace(/\s+/g, '-'))}Component, title:'${pageName}'}
];
  </pre>
  <p class="mb-2">Para ver la página, escriba <strong>/${pageName.toLowerCase().replace(/\s+/g, '-')}</strong> en la barra de navegación del preview.</p>
</div>`;
  }
  
  return  instructions;
}



// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


import { generateAngularFiles } from './exportToAngular';

// Función para obtener la respuesta de IA y generar la aplicación Angular
export const fetchAIResponse = async (setAiResponse, editor) => {
  try {
    // Indicar que estamos procesando
    setAiResponse('Analizando páginas y generando aplicación Angular...');
    
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
    
    // Regresar a la página que estaba activa
    const currentPage = editor.Pages.getSelected();
    if (currentPage) {
      editor.Pages.select(currentPage.id);
    }
    
    // Formatear HTML para mostrarlo mejor
    const formattedHtml = pages.map(page => {
      return {
        name: page.get('name'),
        html: formatHtml(pagesData.find(p => p.id === page.id)?.html || '')
      };
    });
    
    // Devolver el resultado formateado
    setAiResponse(JSON.stringify(formattedHtml, null, 2));
    
  } catch (error) {
    console.error('Error al procesar páginas:', error);
    setAiResponse('Error al procesar las páginas del editor: ' + error.message);
  }
};

// Función para formatear HTML de manera más legible
function formatHtml(html) {
  if (!html) return '';
  
  const tab = '  ';
  let formatted = '';
  let indent = '';
  
  html.split(/>\s*</).forEach((node) => {
    if (node.match(/^\/\w/)) {
      indent = indent.substring(0, indent.length - tab.length); // closing tag
    }
    
    formatted += indent + '<' + node + '>\n';
    
    if (node.match(/^<?\w[^>]*[^/]$/) && !node.match(/^<(br|hr|img|input|link|meta|area|base|col|command|embed|keygen|param|source|track|wbr)/)) {
      indent += tab; // opening tag
    }
  });
  
  return formatted.trim();
}

// Función para generar la respuesta en el formato necesario
export const response = (pagesData) => {
  // Genera los archivos Angular basados en las páginas de GrapesJS
  return generateAngularFiles(pagesData);
};