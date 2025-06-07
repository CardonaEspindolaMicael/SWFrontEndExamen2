import { ApiRequests } from "../../../api/ApiRequests";
import Swal from 'sweetalert2';

export const flutterCodeMobile = async (editor) => {
  if (!editor) return;

  // Mostrar alerta de carga
  Swal.fire({
    title: 'Generando código Flutter...',
    text: 'Por favor espera mientras se genera el codigo Dart',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    // Obtener todas las páginas del editor
    const pages = editor.Pages.getAll();
    const pagesData = [];

    for (const page of pages) {
      editor.Pages.select(page.id);
      pagesData.push({
        id: page.id,
        name: page.get('name'),
        html: editor.getHtml(),
        css: editor.getCss(),
      });
    }

    const currentPage = editor.Pages.getSelected();
    if (currentPage) {
      editor.Pages.select(currentPage.id);
    }

    // ✅ 1. Primer endpoint: Generar código Dart desde HTML
    const dataDart = await ApiRequests.postCommon(
      '/ai-gemini/html-to-dart/AIzaSyCSE5rW6Qn9JsIoCXGkgdYeGP3QHSP4lho',
      { htmlCode: pagesData }
    );

    Swal.close();

    console.log('Código Flutter generado:', dataDart);

    Swal.fire({
      title: 'Generando ZIP...',
      text: 'Empaquetando el código generado.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

await ApiRequests.postZipDownload(
  '/ai-gemini/generate-zip',
  { dartCode: dataDart.data },
  'flutter_generated.zip'
);
    Swal.close();

    Swal.fire({
      icon: 'success',
      title: '¡Código y ZIP generados!',
      text: 'Revisa la consola o descarga el archivo generado.',
      timer: 3000,
      showConfirmButton: false
    });

  } catch (error) {
    Swal.close();

    Swal.fire({
      icon: 'error',
      title: 'Error al generar el código',
      text: error?.message || 'Ocurrió un error inesperado.'
    });

    console.error('Error al generar código Flutter:', error);
  }
};
