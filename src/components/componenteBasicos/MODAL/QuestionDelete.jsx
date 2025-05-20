// ConfirmModal.js
import React, { useState, useEffect } from 'react';

const ConfirmModal = ({ showModal, handleConfirm, handleClose }) => {
  // Estado local para manejar la visibilidad con transición
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      // Pequeño retraso para permitir que el elemento se monte antes de aplicar la transición de entrada
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [showModal]);

  // Función interna para manejar el cierre y la transición
  const internalHandleClose = () => {
    setIsVisible(false);
 
    setTimeout(() => {
        handleClose();
    }, 300);
  };

  const internalHandleConfirm = () => {
    setIsVisible(false);
    setTimeout(() => {
      handleConfirm(); 
    }, 300);
  };

  // Función para manejar el evento onMouseLeave
  const handleMouseLeave = () => {
    console.log("Mouse left modal area - closing."); // Para depuración
    internalHandleClose(); // Cierra el modal cuando el cursor sale
  };


  
  if (!showModal && !isVisible) {
      return null;
  }

  return (
    // Contenedor principal (backdrop)
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' // Controla opacidad y clics
      } bg-white bg-opacity-60`} // Fondo más oscuro para mejor contraste
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      // Opcional: Cerrar al hacer clic en el backdrop (más estándar que onMouseLeave)
      // onClick={internalHandleClose}
    >
      {/* Contenedor del contenido del modal */}
      <div
        className={` bg-gradient-to-br from-white-800 to-white-900 rounded-lg shadow-xl/30 w-full max-w-md mx-4 transition-all duration-300 ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' // Transición de opacidad y escala
        }`}
        // ******** FUNCIONALIDAD SOLICITADA ********
        // Cierra el modal cuando el puntero del ratón sale de este div
        onMouseLeave={handleMouseLeave}
        // *****************************************

        // Previene que el clic dentro del modal cierre el modal (si se activa el onClick en el backdrop)
        // onClick={e => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex justify-center p-5 border-b border-gray-200">
          <h5 className="text-lg font-medium text-black" id="modal-title">
            Confirmación
          </h5>

        </div>

        {/* Cuerpo */}
        <div className="p-5 text-black text-xxl uppercase text-center"> {/* Texto ligeramente más claro que el título */}
          <p>¿Estás seguro de realizar esta acción?</p>
        </div>

        {/* Pie */}
        <div className="flex justify-strecht g-5 p-5 border-t border-gray-200 space-x-3">
          {/* Botón Cancelar (aspecto secundario/neutro) */}
          <button
            type="button"
            className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Anillo de foco azul para indicar interactividad
            onClick={internalHandleClose} // Usa la función interna con transición
          >
            Cancelar
          </button>
          {/* Botón Confirmar (aspecto primario) */}
          <button
            type="button"
            // Paleta de colores Indigo como ejemplo "profesional"
            className="px-3 py-1 bg-indigo-600 border border-transparent text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={internalHandleConfirm} // Usa la función interna con transición
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;