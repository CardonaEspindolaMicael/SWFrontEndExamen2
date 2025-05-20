import React, { useContext, useEffect, useState } from 'react';
import { ApiRequests } from '../../api/ApiRequests.js';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { CardRoom } from './CardRoom.jsx';
import CrearSalaModal from './CrearSalaModal.jsx';
import Swal from 'sweetalert2';
import { UserDataContext } from '../../context/userData/UserDataContext.js';
import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const RoomManager = () => {
  const [data, setData] = useState([]);
  const [roomInvitado, setRoomInvitado] = useState([]);
  const user = useAuthUser();
  const [showModal, setShowModal] = useState(false);
  const currentUser = useAuthUser();
  const [invitaciones, setInvitaciones] = useState([]);
  const { state } = useContext(UserDataContext);
  const invitacion = state.invitacion;
  const navigate = useNavigate();
  const signOut = useSignOut();
  
  useEffect(() => {
    fetchRooms();
    fetchRoomsGuest();
  }, []);
  
  const fetchRooms = async () => {
    try {
      const response = await ApiRequests.getByIdCommon(`/sala/host-sala/${currentUser.ci}`);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRoomsGuest = async () => {
    try {
      const response = await ApiRequests.getByIdCommon(`/sala/usuarios/${currentUser.ci}`);
      setRoomInvitado(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut();
    navigate("/login");
  };

  useEffect(() => {
    if (invitacion) {
      setInvitaciones(invitacion);
    }
  }, [invitacion]);

  useEffect(() => {
    if (invitaciones.length > 0) {
      Swal.fire({
        title: 'Invitaciones',
        text: `Haz sido invitado a una sala`,
        icon: 'info',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        window.location.href = invitaciones;
      });
    }
  }, [invitaciones, navigate]);

  const handleCreateRoomClick = () => {
    setShowModal(true);
  };

  return (
    <div className="bg-gradient-to-b from-white-900 to-white-800 text-black min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section with user info */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Gestor de projectos
          </h1>
          <div className="bg-white-800 bg-opacity-60 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-white-700 flex items-center">
            <span className="text-black mr-2">Usuario:</span> 
            <span className="font-bold text-blue-300">{user.nombre.toUpperCase()}</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full shadow-lg"></div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <button 
            onClick={handleCreateRoomClick} 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg sm:w-auto w-full"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Crear Projecto
          </button>
          
          <button 
            onClick={logout} 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg sm:w-auto w-full"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Cerrar Sesión
          </button>
        </div>
        
        {/* Content area - Always show both sections if they have data */}
        <div className="space-y-8">
          {/* My Rooms Section */}
          <div className="bg-white-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl/30 border border-white-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-300 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              Mis Projectos
            </h2>
            
            {data.length === 0 ? (
              <div className="bg-white-700 bg-opacity-40 rounded-lg p-8 text-center shadow-xl/30">
                <svg className="w-16 h-16 text-black mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <h3 className="text-xl font-medium text-black-400">No ha creado ninguna sala</h3>
                <p className="text-black-500 mt-2">Haga clic en "Crear Sala" para comenzar</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((room, index) => (
                  <div key={index} className="transform transition-all duration-200 hover:scale-105">
                    <CardRoom room={room} fetchRooms={fetchRooms} host={true} />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Invited Rooms Section - Always display this section */}
          <div className="bg-white-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white-700">
            <h2 className="text-2xl font-bold mb-6 text-green-300 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Projecto colaborador
            </h2>
            
            {roomInvitado.length === 0 ? (
              <div className="bg-white-700 bg-opacity-40 rounded-lg p-8 text-center shadow-xl/30">
                <svg className="w-16 h-16 text-black-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <h3 className="text-xl font-medium text-black-400">No ha sido invitado a ninguna sala</h3>
                <p className="text-black-500 mt-2">Las invitaciones aparecerán aquí</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {roomInvitado.map((room, index) => (
                  <div key={index} className="transform transition-all duration-200 hover:scale-105">
                    <CardRoom room={room} fetchRooms={fetchRoomsGuest} host={false}/>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for creating a room */}
      <CrearSalaModal show={showModal} onClose={() => setShowModal(false)} onRoomCreated={fetchRooms} />
    </div>
  );
};

export default RoomManager;