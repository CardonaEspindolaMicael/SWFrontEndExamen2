import React from 'react';
import { Link } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import './notFound.css';

export const NotFound = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <h2 className="text-4xl font-semibold mb-3">¡Oops! Página no encontrada</h2>
        <p className="text-lg mb-4">
          {window.location.href} <br />NO EXISTE
        </p>
        <div className="flex justify-center">
          <img src="assets/astronautaPerdido.png" alt="Astronauta perdido" className="astronaut-img" />
        </div>
        <p className="mb-4">
          {isAuthenticated ? (
            <Link to="/salas" className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700">
              Volver a las salas
            </Link>
          ) : (
            <Link to="/login" className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700">
              Regresar al login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
