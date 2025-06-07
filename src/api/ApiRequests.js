import axios from "axios";

async function getByIdCommon(endpoint) {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const url = baseUrl + endpoint;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getCommon(endpoint){
  
  try { 
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
    const baseUrl=process.env.REACT_APP_BASE_URL;
    const url = baseUrl + endpoint;
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    return error
  }
 
}

async function postCommon(endpoint,values){

  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
    const value =await axios.post(
      
      process.env.REACT_APP_BASE_URL+endpoint,
      values
    );
    return value
  } catch (error) {
    return error ;
  }
}
export async function postGeminiImage(apiKey, formData, signal) {
  // Si quieres autenticar con token, puedes mantener la cabecera aquí:
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;

  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/ai-gemini/image-to-html/${apiKey}`,
    formData,
    {
      signal,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  }
async function postCommonHC(endpoint,values){

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
  try {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL+endpoint,
      values
    );
    return response.data;
  } catch (error) {
    return error ;
  }
}

async function putCommon(endpoint,values){
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
  try {console.log(process.env.REACT_APP_BASE_URL+endpoint)
   const response= await axios.put(
      process.env.REACT_APP_BASE_URL+endpoint, 
      values
    );
    return response
  } catch (error) {
    alert(error)
  }
}

async function deleteCommon(endpoint){
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
  try {
    await axios.delete(
      process.env.REACT_APP_BASE_URL+endpoint
    );
  } catch (error) {
    alert(error)
  }
}


 async function postZipDownload(endpoint, payload, filename = 'flutter_project.zip') {
  try {
    const response = await axios.post(process.env.REACT_APP_BASE_URL+endpoint, payload, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const blob = new Blob([response.data], { type: 'application/zip' });
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error al descargar el ZIP:', error);
    throw error;
  }
}


export const ApiRequests={
  getByIdCommon, 
  getCommon, 
  postCommon,
  putCommon,
  deleteCommon,
  postCommonHC,
  postGeminiImage,
  postZipDownload
}