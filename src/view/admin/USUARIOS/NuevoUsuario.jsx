import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ApiRequests } from '../../../api/ApiRequests';

const NuevoUsuario = () => {
  const [notification, setNotification] = useState({ show: false, message: '', isSuccess: false });
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await ApiRequests.postCommon('/usuario', values);
      showNotification('Usuario registrado con éxito', true);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      showNotification('Ha ocurrido un error al registrar el usuario', false);
    }
  };

  const showNotification = (message, isSuccess) => {
    setNotification({ show: true, message, isSuccess });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      ci: "",
      nombre: "",
      apellidos: "",
      correo: "",
      sexo: "Masculino",
      contrasena: "",
      telefono: "",
      idRol: "e7a20c78-4d40-472b-903c-072df77f18ad",
    },
    validationSchema: Yup.object({
      ci: Yup.string().required('El CI es obligatorio').matches(/^\d+$/, 'Debe ser un número válido'),
      nombre: Yup.string().required('El nombre es obligatorio'),
      apellidos: Yup.string().required('Los apellidos son obligatorios'),
      correo: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
      sexo: Yup.string().required('El sexo es obligatorio'),
      contrasena: Yup.string().required('La contraseña es obligatoria'),
      telefono: Yup.string().matches(/^\d+$/, 'Debe ser un número válido').required('El teléfono es obligatorio'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Registro de Usuario
          </h2>
        </div>

        {notification.show && (
          <div className={`p-4 rounded-md mb-4 ${
            notification.isSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {notification.message}
          </div>
        )}

        <form className="mt-6 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* CI Input */}
            <div className="mb-4">
              <label htmlFor="ci" className="block text-sm font-medium text-gray-700 mb-1">
                Carnet (CI)
              </label>
              <input
                id="ci"
                name="ci"
                type="text"
                placeholder="Ingrese su CI"
                {...formik.getFieldProps('ci')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.ci && formik.errors.ci && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.ci}</p>
              )}
            </div>

            {/* Nombre Input */}
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                {...formik.getFieldProps('nombre')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.nombre && formik.errors.nombre && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.nombre}</p>
              )}
            </div>

            {/* Apellidos Input */}
            <div className="mb-4">
              <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                Apellidos
              </label>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                placeholder="Ingrese sus apellidos"
                {...formik.getFieldProps('apellidos')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.apellidos && formik.errors.apellidos && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.apellidos}</p>
              )}
            </div>

            {/* Correo Input */}
            <div className="mb-4">
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="ejemplo@correo.com"
                {...formik.getFieldProps('correo')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.correo && formik.errors.correo && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.correo}</p>
              )}
            </div>

            {/* Sexo Select */}
            <div className="mb-4">
              <label htmlFor="sexo" className="block text-sm font-medium text-gray-700 mb-1">
                Sexo
              </label>
              <select
                id="sexo"
                name="sexo"
                {...formik.getFieldProps('sexo')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
              {formik.touched.sexo && formik.errors.sexo && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.sexo}</p>
              )}
            </div>

            {/* Teléfono Input */}
            <div className="mb-4">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="text"
                placeholder="Ingrese su teléfono"
                {...formik.getFieldProps('telefono')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.telefono && formik.errors.telefono && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.telefono}</p>
              )}
            </div>

            {/* Contraseña Input - full width using col-span-2 */}
            <div className="mb-4 sm:col-span-2">
              <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                id="contrasena"
                name="contrasena"
                type="password"
                placeholder="Ingrese su contraseña"
                {...formik.getFieldProps('contrasena')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.contrasena && formik.errors.contrasena && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.contrasena}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoUsuario;