
import api from '../api/axiosConfig';

// GET /api/tipos
export const getTipos = async () => {
const res = await api.get('/tipos');
return res.data;
};
