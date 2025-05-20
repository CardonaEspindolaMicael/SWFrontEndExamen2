import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error("Route error:", error);
  
  // Extraer información del error de manera segura
  const status = error?.status || 500;
  const message = error?.statusText || error?.message || "Algo salió mal";
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-12">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl border border-gray-100">
        <div className="text-center">
          {status === 401 ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-100 rounded-full">
                  <svg className="w-16 h-16 text-amber-600" fill="none" stroke="currentColor" viewBox="0 4 23 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Acceso Restringido</h1>
              <p className="text-lg text-gray-700 mb-6">Usted no está autorizado para estar en esta sala.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/salas" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Regresar a las Salas
                </Link>
                <Link 
                  to="/login" 
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  Iniciar Sesión
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Error {status}</h1>
              <div className="h-1 w-20 bg-red-500 mx-auto mb-4"></div>
              <p className="text-lg text-gray-700 mb-6">{message}</p>
              
              <Link 
                to="/" 
                className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Volver al inicio
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}