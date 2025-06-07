import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useSocketContext } from "../../../context/socketContext";  // Ajusta la ruta según tu estructura

// Modal para chat con AI
export const ChatModal = ({ isOpen, onClose, room, currentUser, editor }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [aiTyping, setAiTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Obtener funciones del SocketProvider
    const {
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
    } = useSocketContext();

    // Mantener scroll abajo
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    // Configurar Socket.IO cuando se abre el modal
    useEffect(() => {
        if (!isOpen) return;

        // Unirse a la sala de chat IA
        joinAiChat(room);

        // Handlers para los eventos
        const handleUserMessage = (data) => {
            setMessages(prev => [...prev, {
                sender: 'user',
                text: data.text,
                timestamp: data.timestamp,
                userId: data.userId
            }]);
        };

        const handleAiMessage = (data) => {
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: data.text,
                newHtml: data.newHtml,
                timestamp: data.timestamp
            }]);
            setAiTyping(false);

            // Si hay HTML nuevo y se proporcionó callback, actualizar el HTML del diagrama
            if (data.newHtml && editor) {
                editor.setComponents(data.newHtml);
            }

        };

        const handleAiTyping = (data) => {
            setAiTyping(data.isTyping);
        };

        const handleAiError = (data) => {
            setAiTyping(false);
            Swal.fire({
                icon: 'error',
                title: 'Error de Chat AI',
                text: data.error
            });
        };

        // Registrar eventos
        onUserMessage(handleUserMessage);
        onAiMessage(handleAiMessage);
        onAiTyping(handleAiTyping);
        onAiChatError(handleAiError);

        // Cleanup al cerrar el modal
        return () => {
            offUserMessage(handleUserMessage);
            offAiMessage(handleAiMessage);
            offAiTyping(handleAiTyping);
            offAiChatError(handleAiError);
            leaveAiChat(room);
        };
    }, [isOpen, room, joinAiChat, leaveAiChat, onUserMessage, offUserMessage, onAiMessage, offAiMessage, onAiTyping, offAiTyping, onAiChatError, offAiChatError]);

    // Enviar mensaje usando el SocketProvider
    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput("");

        // Enviar mensaje a través del SocketProvider con HTML actual
        const html = editor.getHtml();
        console.log(html)
        sendAiMessage(room, userMsg, html);

    };

    // Enviar con Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed  ">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 flex flex-col max-h-[80vh]">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-200 px-4 py-3">
                    <h2 className="text-lg font-semibold">Chat con AI</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Mensajes */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[300px] max-h-[400px]">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={
                                msg.sender === 'user'
                                    ? 'text-right'
                                    : 'text-left'
                            }
                        >
                            <span className={
                                `inline-block px-3 py-2 rounded-lg max-w-xs break-words ${msg.sender === 'user'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                                }`
                            }>
                                {msg.text}
                                {/* Mostrar indicador si hay HTML nuevo */}
                                {msg.newHtml && (
                                    <div className="mt-2 text-xs italic opacity-75">
                                        ✨ Diagrama actualizado
                                    </div>
                                )}
                            </span>
                            <div className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'
                                }`}>
                                {msg.timestamp && new Date(msg.timestamp).toLocaleTimeString()}
                            </div>
                        </div>
                    ))}

                    {/* Indicador de typing de la IA */}
                    {aiTyping && (
                        <div className="text-left">
                            <span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-gray-800">
                                <div className="flex items-center space-x-1">
                                    <span>AI está escribiendo</span>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-gray-200 px-4 py-3 flex items-center gap-2">
                    <textarea
                        rows={1}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 resize-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Escribe tu mensaje..."
                        disabled={aiTyping}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={aiTyping || !input.trim()}
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

ChatModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    room: PropTypes.string.isRequired,
    currentUser: PropTypes.object.isRequired,
    editor: PropTypes.object.isRequired
};
