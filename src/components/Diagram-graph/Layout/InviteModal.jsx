import { useEffect, useState } from "react";
import { ApiRequests } from "../../../api/ApiRequests";

// Componente modal para invitar usuarios
export const InviteModal = ({ isOpen, onClose, room }) => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Resetear estado cuando se abre/cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setUserData(null);
      setError("");
      setSuccess("");
    }
  }, [isOpen]);

  // Buscar usuario por correo
  const searchUser = async () => {
    if (!email.trim()) {
      setError("Por favor, ingresa un correo electrónico");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const response = await ApiRequests.getByIdCommon(`/sala/${email}/identificacion`);
      console.log(response)
      if (!response){
        setError("No se encontró ningún usuario con ese correo electrónico");
      } else{
        setUserData(response);
      }
      
    } catch (error) {
      console.error("Error al buscar usuario:", error);
     
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  // Invitar usuario a la sala
  const inviteUser = async () => {
    setLoading(true);
    setError("");
    
    try {
      await ApiRequests.postCommon(`/sala/${room}/usuarios/${email}`, {
        rol:"INVITADO"
    });
      setSuccess(`Usuario ${userData.nombre} invitado exitosamente`);
      
      // Cerrar el modal después de 2 segundos
      setTimeout(() => {
        onClose();
      }, 7000);
    } catch (error) {
      console.error("Error al invitar usuario:", error);
      setError("El usuario ya se encuentra en la sala.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-999 p-4">
      <div className=" rounded-lg shadow-xl w-full max-w-md overflow-hidden  bg-white">
        <div className="px-6 py-4 bg-indigo-600">
          <h3 className="text-lg font-medium text-white">Invitar Usuario</h3>
        </div>
        
        <div className="p-6">
          {success ? (
            <div className="bg-green-50 p-4 rounded-md mb-4">
              <p className="text-green-800">{success}</p>
              <p className="text-black">Ahora envie copie esta url</p>
              <p className="text-green-800">{window.location.href}</p>
            </div>
          ) : (
            <>
              {/* Formulario de búsqueda */}
              {!userData && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <div className="flex items-center">
                    <input
                      type="email"
                      className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="ejemplo@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={searchUser}
                      disabled={loading}
                    >
                      Buscar
                    </button>
                  </div>
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>
              )}

              {/* Tarjeta de información de usuario */}
              {userData && (
                <div className="border rounded-md p-4 mb-4 bg-gray-50">
                  <h4 className="font-medium text-lg mb-2">
                    {userData.nombre} {userData.apellidos}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-gray-500">CI:</p>
                    <p>{userData.ci}</p>
                    
                    <p className="text-gray-500">Correo:</p>
                    <p>{userData.correo}</p>
                    
                    <p className="text-gray-500">Teléfono:</p>
                    <p>{userData.telefono || "No especificado"}</p>
                  </div>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                
                {userData && (
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={inviteUser}
                    disabled={loading}
                  >
                    {loading ? "Invitando..." : "Invitar Usuario"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};