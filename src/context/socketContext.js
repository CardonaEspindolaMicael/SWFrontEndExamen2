import React, { useContext, useEffect, useCallback, useState } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { UserDataContext } from './userData/UserDataContext.js';
import { types } from '../type/types.js';

export const SocketContext = createContext(); 

export const SocketProvider = ({ children }) => {
    const { socket, online, conectarSocket, desconectarSocket } = useSocket( process.env.REACT_APP_VITE_BASE_URL_SOCKET);
    let isAuthenticated = useIsAuthenticated();
    const {dispatch} = useContext(UserDataContext);

    useEffect(() => {
        console.log(isAuthenticated)
        if (isAuthenticated) { 
            conectarSocket();
        }
    }, [conectarSocket, isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated) {
            desconectarSocket();
        }
    }, [desconectarSocket, isAuthenticated]);

    const joinRoom = useCallback((room) => {
        if (socket) {
            socket.emit('join-room', room);
        }
    }, [socket]);

    const leaveRoom = useCallback((room) => {
        if (socket) {
            socket.emit('leave-room', room); 
        }
    }, [socket]);

    const updateDiagram = useCallback((data, room) => {
        if (socket) {
            socket.emit('diagram-update', data, room);  // El `data` ahora incluye `{ action, cell }`
        }
    }, [socket]);

    const onDiagramUpdate = useCallback((callback) => {
        if (socket) {
            socket.on('diagram-update', callback);
        }
    }, [socket]);

    const offDiagramUpdate = useCallback((callback) => {
        if (socket) {
            socket.off('diagram-update', callback);
        }
    }, [socket]);

    const updateUserPageState = useCallback((callback) => {
        if (socket) {
            socket.on('user-update', callback);
        }
    }, [socket]);
    const offUserPageStateUpdate = useCallback((callback) => {
        if (socket) {
            socket.off('user-update', callback);
        }
    }, [socket]);

    const requestPageData = useCallback((callback) => {
        if (socket) {
            socket.on('requestPageData', callback);
        }
    }, [socket]);



    return (
        <SocketContext.Provider value={{
            socket,
            online,
            updateDiagram,
            onDiagramUpdate,
            offDiagramUpdate,
            joinRoom,
            leaveRoom,
            updateUserPageState,
            offUserPageStateUpdate ,
            requestPageData
        }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => useContext(SocketContext);
