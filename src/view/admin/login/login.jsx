import React from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useFormik } from "formik";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const Login = () => {
  const signIn = useSignIn();
  
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "/auth/login",
        values
      );
      console.log(response);
      const datos = response.data;
      
      if(datos.success === false){
        Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
        return;
      }

      // Autenticación con react-auth-kit
      signIn({
        auth: {
          token: datos.token,
          type: 'Bearer',
        },
        userState: {
          ci: datos.data.ci,
          nombre: datos.data.nombre,
          telefono: datos.data.telefono,
          id_rol: datos.data.id_rol,
          cargo: datos.data.cargo,
        }
      });

      // Esperar al SweetAlert antes de redireccionar
      await Swal.fire('Bienvenido', 'Inicio de sesión exitoso', 'success', { timer: 2000 });

      window.location.href = "/salas";
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ocurrió un error inesperado', 'error');
    }
  };

  const formik = useFormik({
    initialValues: {
      correo: "",
      contrasena: "",
    },
    onSubmit,
  });

  return (
    <div className="flex h-screen">
      {/* Left Pane - Illustration (hidden on mobile) */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-black text-black">
       
        <img src="assets/loginBg.png" alt="Universe" className='w-[100%]'/>

      </div>
 
      {/* Right Pane - Login Form */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="text-center mb-6">
            <img className="h-12 mx-auto mb-2" src="assets/logo.png" alt="Logo" />
            <h1 className="text-3xl font-semibold text-black">Iniciar Sesión</h1>
            <p className="text-sm text-gray-500 mt-2">Accede a tu cuenta para continuar</p>
          </div>

          <div className="mt-8">
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500"> correo electrónico</span>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  id="correo" 
                  type="email" 
                  placeholder="ejemplo@correo.com" 
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  {...formik.getFieldProps('correo')}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
                </div>
                <input 
                  id="contrasena" 
                  type="password" 
                  placeholder="Ingresa tu contraseña" 
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  {...formik.getFieldProps('contrasena')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">Recordarme</label>
                </div>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta? <Link to="/registro" className="text-blue-600 hover:underline">Regístrate</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;