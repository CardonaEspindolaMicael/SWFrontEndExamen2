import { useState, useRef } from 'react';
import { postGeminiImage } from '../../../api/ApiRequests';

export function GeminiImageModal({ editor, isOpen, onClose }) {
  const [apiKey, setApiKey] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!apiKey.trim()) {
      setError('Por favor ingresa tu API key de Gemini');
      return;
    }

    if (!selectedFile) {
      setError('Por favor agrega una imagen');
      return;
    }

    setLoading(true);
    setError('');
    abortControllerRef.current = new AbortController();

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Aquí llamamos a postGeminiImage directamente
      const { data: htmlCode } = await postGeminiImage(
        apiKey,
        formData,
        abortControllerRef.current.signal
      );

      if (editor) {
        editor.setComponents(htmlCode);
        onClose();
      } else {
        setError('Editor no disponible');
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Petición cancelada');
      } else {
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Generar Diagrama desde imagen</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">API Key de Gemini</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Ingresa tu API key"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Selecciona una imagen (.jpg o .png)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {!selectedFile && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, agrega una imagen
              </p>
            )}
          </div>

          {error && (
            <div className="mb-4 text-red-500">{error}</div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={!selectedFile || loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? 'Generando...' : 'Generar boceto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
