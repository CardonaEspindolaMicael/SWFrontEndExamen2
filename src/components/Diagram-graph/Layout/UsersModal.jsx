import { useEffect, useState } from "react";
import { ApiRequests } from "../../../api/ApiRequests";

// Componente modal para mostrar y gestionar usuarios en la sala
export const UsersModal = ({ isOpen, onClose, room, currentUser, isHost }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Cargar usuarios cuando se abre el modal
  useEffect(() => {
    if (isOpen) {
      fetchUsers();
    }
  }, [isOpen]);

  // Función para obtener usuarios de la sala
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const response = await ApiRequests.getByIdCommon(`/sala/${room}/usuarios`);
      setUsers(response || []);
      console.log(response)
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setError("No se pudieron cargar los usuarios de la sala");
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar un usuario de la sala
  const removeUser = async (correo) => {
    if (!window.confirm(`¿Estás seguro de eliminar a ${correo} de la sala?`)) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      await ApiRequests.deleteCommon(`/sala/${room}/usuarios/${correo}`);
      setSuccess(`Usuario eliminado con éxito`);
      // Actualizar la lista de usuarios después de eliminar
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      setError("No se pudo eliminar al usuario. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-6 py-4 bg-indigo-600 flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Participantes</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          {error && (
            <div className="bg-red-50 p-4 rounded-md mb-4">
              <p className="text-red-800">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 p-4 rounded-md mb-4">
              <p className="text-green-800">{success}</p>
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center py-8">
              <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No hay usuarios en esta sala
            </div>
          ) : (
            <div className="max-h-96 ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuario
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      correo
                    </th>
                    {isHost && (
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.usuario.correo} className={user.correo === currentUser.correo ? "bg-indigo-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {user.usuario.nombre} 
                            </div>
                            <div className="text-sm text-gray-500">{user.correo}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.usuario.correo || "Usuario"}
                        </span>
                      </td>
                      {isHost && (
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     
                            <button
                              onClick={() => removeUser(user.usuario.correo)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Eliminar
                            </button>
                       
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="flex justify-end mt-6">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
