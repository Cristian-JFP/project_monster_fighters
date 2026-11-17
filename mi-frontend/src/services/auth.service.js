
import api from '../api/axiosConfig';

// POST /api/auth/register
export const registrarUsuario = async (data) => {
const res = await api.post('/auth/register', data);
return res.data;
};

// POST /api/auth/login
export const iniciarSesion = async (data) => {
const res = await api.post('/auth/login', data);
return res.data;
};

// Cerrar sesión
export const cerrarSesion = () => {
    localStorage.removeItem('token');
};