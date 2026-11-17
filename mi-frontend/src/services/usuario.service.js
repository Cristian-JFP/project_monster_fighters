
import api from '../api/axiosConfig';

// Consultar todos los usuarios
export const obtenerUsuarios = async () => {
  const respuesta = await api.get('/usuario');
  return respuesta.data;
};

// Consultar un usuario por su ID
export const obtenerUsuario = async (id) => {
  const respuesta = await api.get(`/usuario/${id}`);
  return respuesta.data;
};

// Crear un usuario
export const crearUsuario = async (datos) => {
  const respuesta = await api.post('/usuario', datos);
  return respuesta.data;
};

// Actualizar un usuario
export const actualizarUsuario = async (id, datos) => {
  const respuesta = await api.put(`/usuario/${id}`, datos);
  return respuesta.data;
};

// Eliminar un usuario
export const eliminarUsuario = async (id) => {
  const respuesta = await api.delete(`/usuario/${id}`);
  return respuesta.data;
};
