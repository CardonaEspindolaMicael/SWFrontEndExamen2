import { ApiRequests } from "../../api/ApiRequests";

/**
 * Loader de React Router que verifica si el usuario puede acceder a una sala
 * Permite acceso si el usuario es colaborador o host de la sala
 * @param {Object} params - Parámetros de la ruta
 * @returns {Promise<boolean>} - Retorna true si tiene acceso
 * @throws {Response} - Lanza un error de respuesta si no tiene acceso
 */
export const usuarioColaborador = async ({ params }) => {
  // 1) Leer el CI del auth state
  const storedState = localStorage.getItem("_auth_state");
  const userState = storedState ? JSON.parse(storedState) : null;
  const currentCi = userState?.ci;
  
  if (!currentCi) {
    throw new Response("No se pudo verificar al usuario", { status: 401 });
  }
  
  try {
    // 2) Verificar si el usuario es el host de la sala
    const hostResponse = await ApiRequests.getByIdCommon(`/sala/${params.room}/host/${currentCi}`);
    
    // Si es host, permitir acceso inmediatamente
    if (hostResponse && hostResponse.ishost) {
      return true;
    }
    
    // 3) Si no es host, verificar si es colaborador
    const usuarios = await ApiRequests.getByIdCommon(`/sala/${params.room}/usuarios`);
    const isCollaborator = usuarios.some((u) => u.ciUsuario == currentCi);
    
    if (isCollaborator) {
      return true;
    }
    
    // 4) Si no es ni host ni colaborador, denegar acceso
    throw new Response("Usted no tiene permisos para estar en esta sala", { status: 401 });
    
  } catch (error) {
    // Manejo diferenciado de errores
    if (error instanceof Response) {
      // Reenviar errores de respuesta ya formateados
      throw error;
    }
    
    console.error("Error al verificar acceso a la sala:", error);
    throw new Response("Error al verificar permisos de acceso", { status: 500 });
  }
};