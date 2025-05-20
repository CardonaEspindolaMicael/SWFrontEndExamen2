import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ApiRequests } from '../../api/ApiRequests';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import EditarSalaModal from './EditarSalaModal';
import DeleteButton from '../../components/componenteBasicos/BOTONES/Eliminar';

export const CardRoom = ({ room, fetchRooms, host }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const asignarSala = (id) => {
    navigate(`/diagram/${id}`);
  };

  const handleCreateRoomClick = () => {
    setShowModal(true);
  };

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-br from-white-800 to-white-900 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
      style={{ width: "100%", height: "360px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Room image with overlay on hover */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src="assets/room.png" 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out" 
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          alt="Room" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-90' : ''}`}></div>

        {/* Room status badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="h-2 w-2 mr-1 rounded-full bg-green-500"></span>
            {room.estado || 'Activo'}
          </span>
        </div>
      </div>

      {/* Room information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-black mb-1 line-clamp-1">
            {room.nombre}
          </h3>
          <p className="text-black-300 text-sm line-clamp-2 h-10">
            {room.descripcion || 'Sin descripción disponible para esta sala.'}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => asignarSala(room.id)}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14"></path>
            </svg>
            Entrar
          </button>

          <div className="flex items-center space-x-2">
          {host ?( 
            <>
            <button
              onClick={handleCreateRoomClick}
              className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors duration-300"
              title="Editar sala"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </button>
           <DeleteButton endpoint="/sala" identificador={room.id} fetchCommon={fetchRooms} /> </>):(<></>)}
           
          </div>
        </div>
      </div>


      {/* Modal for editing */}
   
      <EditarSalaModal show={showModal} onClose={() => setShowModal(false)} onRoomCreated={fetchRooms} room={room} />
    </div>
  );
};
