import React from 'react'
import { useNavigate } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import Dropdown from '../Dropdown/Dropdown.jsx'


import { actividades, calendario, comunicados, estudiante, padres, profesores } from './links.js';
/*ICONOS*/
const Sidebar = () => {
  const role = sessionStorage.getItem('cargo');/*----*/
  const signOut = useSignOut();
  const navigate = useNavigate();
  
  const logout = () => {
    signOut();
    navigate("/login")

  }
  return (
    <aside className='Sidebar'>
      <div className="container__sidebar">
        <div className='datos__user'>
          <img src="https://i0.wp.com/www.freepnglogos.com/uploads/genshin-impact-logo-png/genshin-impact-white-hd-logo-transparent-images-7.png?ssl=1" alt="logo_clinica" />
        </div>
        <nav >
          <ul className='barra__navegacion'>
            <h5>MENU</h5>

            {role == 'administrador' && (
              <li>
                <Dropdown title="Estudiantes" links={estudiante} icon='' />
              </li>
            )}
            {role == 'administrador' && (

              <li>
                <Dropdown title="Tutores" links={padres} icon='' />
              </li>
            )}
            {role == 'administrador' && (
              <li>
                <Dropdown title="Profesores" links={profesores} icon='' />
              </li>
            )}
            {role == 'administrador' && (
              <li>
                <Dropdown title="Comunicado" links={comunicados} icon='' />
              </li>
            )}

            {role == 'profesor' && (
              <li>
                <Dropdown title="Actividades" links={actividades} icon='' />
              </li>
            )}
            {(role == 'profesor' || role == 'administrador') && (
              <li>
                <Dropdown title="Calendario" links={calendario} icon='' />
              </li>
            )}

          </ul>
        </nav>
        <div className='usuarioNombre'>
          <div className='usuarioNombre__botton'>
            <img src='' />
            <a className='barra__navegacionRutasAb' onClick={logout}>Cerrar Sesion</a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
