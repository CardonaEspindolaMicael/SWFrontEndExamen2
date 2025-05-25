 export const flutterCodeMobile = async (editor) => {

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
         html: editor.getHtml(),
         css: editor.getCss(),
       });
     }
     
     // Volver a la página original
     const currentPage = editor.Pages.getSelected();
     if (currentPage) {
       editor.Pages.select(currentPage.id);
     }
     window.alert('Todo posi estas en cel')
     console.log(pagesData)
   return currentPage
      }