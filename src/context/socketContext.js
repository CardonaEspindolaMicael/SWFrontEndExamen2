import React, { useContext, useEffect, useCallback, useState } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { UserDataContext } from './userData/UserDataContext.js';

export const SocketContext = createContext(); 

export const SocketProvider = ({ children }) => {
    const { socket, online, conectarSocket, desconectarSocket } = useSocket(process.env.REACT_APP_VITE_BASE_URL_SOCKET);
    let isAuthenticated = useIsAuthenticated();
    const { dispatch } = useContext(UserDataContext);

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

    // Funciones existentes
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
            socket.emit('diagram-update', data, room);
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

    // **NUEVAS FUNCIONES PARA CHAT IA**
    const joinAiChat = useCallback((room) => {
        if (socket) {
            socket.emit('join-ai-chat', room);
        }
    }, [socket]);

    const leaveAiChat = useCallback((room) => {
        if (socket) {
            socket.emit('leave-ai-chat', room);
        }
    }, [socket]);

    const sendAiMessage = useCallback((room, message, htmlCode = '') => {
        if (socket) {
            socket.emit('send-ai-message', { room, message, htmlCode });
        }
    }, [socket]);

    // Listeners para mensajes del chat IA
    const onUserMessage = useCallback((callback) => {
        if (socket) {
            socket.on('user-message', callback);
        }
    }, [socket]);

    const offUserMessage = useCallback((callback) => {
        if (socket) {
            socket.off('user-message', callback);
        }
    }, [socket]);

    const onAiMessage = useCallback((callback) => {
        if (socket) {
            socket.on('ai-message', callback);
        }
    }, [socket]);

    const offAiMessage = useCallback((callback) => {
        if (socket) {
            socket.off('ai-message', callback);
        }
    }, [socket]);

    const onAiTyping = useCallback((callback) => {
        if (socket) {
            socket.on('ai-typing', callback);
        }
    }, [socket]);

    const offAiTyping = useCallback((callback) => {
        if (socket) {
            socket.off('ai-typing', callback);
        }
    }, [socket]);

    const onAiChatError = useCallback((callback) => {
        if (socket) {
            socket.on('ai-chat-error', callback);
        }
    }, [socket]);

    const offAiChatError = useCallback((callback) => {
        if (socket) {
            socket.off('ai-chat-error', callback);
        }
    }, [socket]);

    return (
        <SocketContext.Provider value={{
            socket,
            online,
            // Funciones existentes
            updateDiagram,
            onDiagramUpdate,
            offDiagramUpdate,
            joinRoom,
            leaveRoom,
            updateUserPageState,
            offUserPageStateUpdate,
            requestPageData,
            // Nuevas funciones para chat IA
            joinAiChat,
            leaveAiChat,
            sendAiMessage,
            onUserMessage,
            offUserMessage,
            onAiMessage,
            offAiMessage,
            onAiTyping,
            offAiTyping,
            onAiChatError,
            offAiChatError
        }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => useContext(SocketContext);