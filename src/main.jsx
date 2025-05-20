
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Login from "./view/admin/login/login.jsx";
import NotFound from "./components/componenteBasicos/notFound/notFound.jsx";
import RoomManager from "./view/sala/RoomManager.jsx";
import CrearSalaModal from "./view/sala/CrearSalaModal.jsx";
import NuevoUsuario from "./view/admin/USUARIOS/NuevoUsuario.jsx";
import AppGraph from "./components/Diagram-graph/AppGraph.jsx";
import AppGraph2 from "./components/Diagram-graph/AppGraph2.jsx";
import { usuarioColaborador } from "./router/validations/usuarioColaborador.js";
import { ErrorPage } from "./router/validations/ErrorPage.jsx";




const router = createBrowserRouter([
  {
    element: <AuthOutlet fallbackPath="/login" />,
    children: [
      { path: "/", element: <Login /> },
      { path: "diagram/:room", element: <AppGraph2 />, loader:usuarioColaborador, errorElement:<ErrorPage/>},
      { path: "salas", element: <RoomManager /> },
      { path: "/crear-sala", element: <CrearSalaModal /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <NuevoUsuario /> },
  { path: "*", element: <NotFound /> },
]);

function Main() {
  return <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />;
}


export default Main;