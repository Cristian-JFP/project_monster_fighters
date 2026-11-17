import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Antes de cada petición: pega el token guardado
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Si el servidor dice que el token no sirve, cierra la sesión
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const esAuth = err.config?.url?.includes('/auth/');
    if (err.response?.status === 401 && !esAuth) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;