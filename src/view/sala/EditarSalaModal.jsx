import React, { useState, useEffect, useRef } from 'react';
import { ApiRequests } from '../../api/ApiRequests';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Swal from 'sweetalert2';

const EditarSalaModal = ({ show, onClose, onRoomCreated, room }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const currentUser = useAuthUser();
  const modalRef = useRef(null);
  
  // Use useEffect to update state when room changes
  useEffect(() => {
    if (room) {
      setNombre(room.nombre || '');
      setDescripcion(room.descripcion || '');
    }
  }, [room]);

  // Add event listeners for mouseenter and mouseleave
  useEffect(() => {
    const modalElement = modalRef.current;
    
    if (modalElement && show) {
      const handleMouseLeave = () => {
        onClose();
      };
      
      modalElement.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        modalElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [show, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevaSala = {
        nombre,
        descripcion,
      };
      
      const response = await ApiRequests.putCommon(`/sala/${room.id}/room`, nuevaSala);
      console.log(response);
      onRoomCreated(); // Refresh rooms after updating
      
      Swal.fire({
        title: 'Sala actualizada',
        text: 'La sala se ha editado con éxito',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
      
      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo actualizar la sala',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  };
  
  if (!show) return null; // Don't render if modal is not visible

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60">
      <div 
        ref={modalRef} 
        className="w-full max-w-md" 
      
      >
        {/* La tarjeta utiliza todo el ancho disponible dentro del contenedor */}
        <div className="w-full bg-gradient-to-br from-white-800 to-white-900 rounded-lg shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-br from-white-800 to-white-900 px-6 pt-3 flex items-center justify-between rounded-t-lg border-b h-full">
            <h3 className="text-xl font-bold text-gray-800">
              Editar projecto
            </h3>
          </div>
          
          {/* Body */}
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del proyecto
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingrese el nombre de la sala"
                  required
                />
              </div>
              
              <div className="mb-2">
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Ingrese la descripción"
                  required
                ></textarea>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between space-x-3 ">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Guardar 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarSalaModal;