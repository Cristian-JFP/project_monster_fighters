import api from '../api/axiosConfig';

// Consultar perfil
export const obtenerPerfil = async () => {
    const respuesta = await api.get('/auth/profile');
    return respuesta.data;
};

// Actualizar perfil
export const actualizarPerfil = async (datos) => {
    const respuesta = await api.put('/auth/profile', datos);
    return respuesta.data;
};