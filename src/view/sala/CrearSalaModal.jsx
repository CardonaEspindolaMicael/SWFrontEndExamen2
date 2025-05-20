import React, { useState } from 'react';
import { ApiRequests } from '../../api/ApiRequests';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Swal from 'sweetalert2';

const CrearSalaModal = ({ show, onClose, onRoomCreated }) => {
  const [nombre, setNombre] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [esPrivada, setEsPrivada] = useState(false);
  const currentUser = useAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevaSala = {
        nombre,
        capacidad: 4,
        descripcion,
        esPrivada: false,
        ciHost: currentUser.ci,
        diagrama: {},
      };

      const response = await ApiRequests.postCommon("/sala", nuevaSala);
      console.log(response);

      onRoomCreated(); // Refresh rooms after creating a new one
      Swal.fire('Sala creada', 'La sala se ha creado con éxito', 'success', { timer: 2000 });
      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      alert('Hubo un error al crear la sala');
    }
  };

  if (!show) return null; // Don't render if modal is not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="p-4 border-b flex justify-between items-center">
          <h5 className="text-lg font-semibold text-gray-900">Crear Sala</h5>
          <button type="button" className="text-gray-600 hover:text-gray-800" onClick={onClose}>✖</button>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la Sala</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Crear Sala</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearSalaModal;
