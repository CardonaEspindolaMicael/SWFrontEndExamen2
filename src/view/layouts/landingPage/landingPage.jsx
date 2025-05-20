import React from 'react';
import './landingPage.css';
import { Link, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export const LandingPage = () => {
  const signOut  = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const logout = () => {
    signOut();
    navigate("/login")
  }


  return (
    <div className="landing_container">
      <div className="landing_header">
        <div className="landing_header_logo">
          <img src='https://i0.wp.com/www.freepnglogos.com/uploads/genshin-impact-logo-png/genshin-impact-white-hd-logo-transparent-images-7.png?ssl=1' alt="logo" />
        </div>
        <div className="landing_header_nav">
          <ul>
            {isAuthenticated? <a  onClick={logout}>Cerrar Sesion</a>: 
            <Link to="/login" style={{paddingRight:'20px', textDecoration:'none'}}>Iniciar sesion</Link>
            }
          </ul>
        </div>
      </div>
      <div className="landing_section">
        <h1>Content</h1>
        <Link to="/UmlDiagram">Ir al uml</Link>
      </div>
      <div className="landing_footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};
