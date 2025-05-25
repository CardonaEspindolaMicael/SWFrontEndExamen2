import { useEffect, useState } from "react";
import { ApiRequests } from "../../../api/ApiRequests";
import { InviteModal } from "./InviteModal";
import { UsersModal } from "./UsersModal";
import { saveDiagram } from "../Func/saveDiagram";
import Swal from "sweetalert2";
import { GeminiImageModal } from "./GeminiImageModal";
import { useFlutterFigures } from "../Components/panels";
import { flutterCodeMobile } from "../Func/flutterFunctions";
// Versión actualizada del DiagramHeader con funcionalidad de invitación
export const DiagramHeader = ({ handleRunAI, editor, room, salirSala, currentUser }) => {

  const [isHost, setIsHost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [usersModalOpen, setUsersModalOpen] = useState(false);
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);

  useEffect(() => {
    const checkHost = async () => {
      try {
        const esHost = await ApiRequests.getByIdCommon(`/sala/${room}/host/${currentUser.ci}`);
        setIsHost(esHost.ishost);
      } catch (error) {
        console.error("Error al verificar host:", error);
        setIsHost(false); // fallback en error
      }
    };

    checkHost();
  }, [room, currentUser.ci]);

  if (isHost === null) {
    return <div className="p-4 text-gray-600">Cargando encabezado...</div>;
  }

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Título */}
            <div className="flex items-center">
              <h1 className="hidden sm:flex text-lg font-semibold text-gray-800">
                Diagramador
              </h1>
            </div>

            {/* Botón hamburguesa para móvil */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center pr-8 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Botones de acción (escondidos en móvil) */}
            <div className="hidden sm:flex items-center gap-3">
              {isHost ? (
                <>
                  {/* Botón de usuarios (siempre visible) */}
                  {/* Nuevo botón Guardar Diagrama */}
                  <button
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    onClick={async () => {
                      await saveDiagram(editor, room)
                    }}
                  >
                    <svg
                      className="h-5 w-5 mr-1.5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    Guardar Diagrama
                  </button>

                  <button
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    onClick={() => setUsersModalOpen(true)}
                  >
                    <svg
                      className="h-5 w-5 mr-1.5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Usuarios
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    onClick={() => {
                      Swal.fire({
                        title: '¿Estás seguro?',
                        text: '¿Quieres exportar y compilar el proyecto?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, exportar',
                        cancelButtonText: 'Cancelar'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          if (!useFlutterFigures) {
                            handleRunAI();
                          } else{
                            flutterCodeMobile(editor);
                          }

                        }
                      });
                    }}
                  >
                    <svg className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Compilar y exportar
                  </button>

                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    onClick={() => {
                      Swal.fire({
                        title: '¿Estás seguro?',
                        text: '¿Quieres generar desde una imagen?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, generar',
                        cancelButtonText: 'Cancelar'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          setIsGeminiModalOpen(true)
                        }
                      });
                    }}
                  >
                    <svg className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Generar desde imagen
                  </button>

                  <button
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    onClick={() => setInviteModalOpen(true)}
                  >
                    <svg
                      className="h-5 w-5 mr-1.5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Hacer colaborador
                  </button>
                </>
              ) : null}

              <button
                className="w-40 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => Swal.fire({
                  title: `La url es: ${window.location.href}`,
                  showClass: {
                    popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `
                  },
                  hideClass: {
                    popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `
                  }
                })}
              >
                Invitacion Url
              </button>

              <button
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                onClick={salirSala}
              >
                <svg className="h-5 w-5 mr-1.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Salir
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="sm:hidden mt-2 flex flex-col gap-2 pr-9">
              {isHost && (

                <>
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={async () => {
                      await saveDiagram(editor, room)
                    }}
                  >
                    Guardar Diagrama
                  </button>


                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => setInviteModalOpen(true)}
                  >
                    Hacer colaborador
                  </button>

                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => Swal.fire({
                      title: `La url es: ${window.location.href}`,
                      showClass: {
                        popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `
                      },
                      hideClass: {
                        popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `
                      }
                    })}
                  >
                    Invitacion Url
                  </button>
                </>
              )}

              <button
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={salirSala}
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Modal de invitación */}
      <InviteModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
        room={room}
      />
      <UsersModal
        isOpen={usersModalOpen}
        onClose={() => setUsersModalOpen(false)}
        room={room}
        currentUser={currentUser}
        isHost={isHost}
      />

      <GeminiImageModal
        editor={editor}
        isOpen={isGeminiModalOpen}
        onClose={() => setIsGeminiModalOpen(false)}
      />
    </>
  );
};