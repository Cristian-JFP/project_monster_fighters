
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// INTERCEPTOR DE PETICIÓN
// Agrega automáticamente el token JWT.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// INTERCEPTOR DE RESPUESTA
// Si el servidor responde 401, cierra la sesión.
api.interceptors.response.use(
  (respuesta) => respuesta,
  (error) => {
    const esAutenticacion = error.config?.url?.includes('/auth/');

    if (error.response?.status === 401 && !esAutenticacion) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default api;
