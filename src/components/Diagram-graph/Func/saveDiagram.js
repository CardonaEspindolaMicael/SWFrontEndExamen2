import { ApiRequests } from "../../../api/ApiRequests";
import Swal from 'sweetalert2';

export const saveDiagram = async (editor, room) => {
  if (!editor) return;

  try {
    Swal.fire({
      title: 'Guardando diagrama',
      text: 'Por favor espera...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading()
    });

    // 1) Datos de todas las páginas
    const pages      = editor.Pages.getAll();
    const selected   = editor.Pages.getSelected();
    const originalId = selected?.id || null;
    const allPages   = [];

    for (const page of pages) {
      // Selecciona la página y espera a que GrapesJS monte el canvas
      editor.Pages.select(page.id);
      await new Promise(r => setTimeout(r, 100));
      allPages.push({
        id:         page.id,
        name:       page.get('name'),
        components: editor.getComponents(),  // sigues guardando el JSON
        component:  editor.getHtml(),        // ↱ esto mapeará a page.component
      });
      
      
    }

    // 2) Restaurar pestaña original
    if (originalId) {
      editor.Pages.select(originalId);
      await new Promise(r => setTimeout(r, 50));
    }

    // 3) Payload
    const diagramData = {
      pages:         allPages,
      currentPageId: originalId
    };

    // 4) Envío a tu API
    const response = await ApiRequests.putCommon(
      `/sala/${room}/sala`,
      { diagrama: JSON.stringify(diagramData) }
    );

    // 5) Feedback
    if (response) {
      Swal.fire({ icon: 'success', title: '¡Guardado!', timer: 1500, showConfirmButton: false });
    } else {
      throw new Error('Respuesta inválida del servidor');
    }

  } catch (error) {
    console.error('Error al guardar el diagrama:', error);
    Swal.fire({ icon: 'error', title: 'Error', text: `No se pudo guardar: ${error.message}` });
  }
};
