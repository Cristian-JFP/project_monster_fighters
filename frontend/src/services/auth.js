import api from '../api/axios';

export const registrar = (datos) =>
  api.post('/auth/register', datos).then((r) => r.data);

export const iniciarSesion = (correo, contraseña) =>
  api.post('/auth/login', { correo, contraseña }).then((r) => r.data);

export const obtenerPerfil = () =>
  api.get('/auth/profile').then((r) => r.data);