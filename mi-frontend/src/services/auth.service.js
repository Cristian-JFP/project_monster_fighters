import api from '../api/axiosConfig';

export const registrarUsuario = async (datos) => {
  const respuesta = await api.post('/auth/register', datos);
  return respuesta.data;
};

export const iniciarSesion = async (datos) => {
  const respuesta = await api.post('/auth/login', datos);
  return respuesta.data;
};

export const obtenerPerfil = async () => {
  const respuesta = await api.get('/auth/profile');
  return respuesta.data;
};

export const actualizarPerfil = async (datos) => {
  const respuesta = await api.put('/auth/profile', datos);
  return respuesta.data;
};

export const cerrarSesion = () => {
  localStorage.removeItem('token');
};
