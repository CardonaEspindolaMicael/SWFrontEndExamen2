import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde react-dom/client
import reportWebVitals from './reportWebVitals';
import createStore from "react-auth-kit/createStore";
import './index.css';
import Main from './main.jsx';
import AuthProvider from "react-auth-kit/AuthProvider"
import { SocketProvider } from "./context/socketContext.js";
import { UserDataProvider } from './context/userData/UserDataContext.js';
// Obtén el elemento raíz del DOM
const store = createStore({
    authName: '_auth',
    authType: 'localstorage',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',

});

const rootElement = document.getElementById('root');

// Crea el root con createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(

    <AuthProvider store={store}>
        <UserDataProvider>
            <SocketProvider >
                <Main />
            </SocketProvider>
        </UserDataProvider>
    </AuthProvider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
