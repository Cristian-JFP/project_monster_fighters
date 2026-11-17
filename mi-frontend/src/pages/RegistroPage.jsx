
import { useState } from 'react';
import { registrarUsuario } from '../services/auth.service';
import RegistroForm from '../components/RegistroForm';

export default function RegistroPage() {
const [loading, setLoading] = useState(false);
const [mensaje, setMensaje] = useState('');
const [error, setError] = useState('');

const handleRegistro = async (data) => {
    try {
        setLoading(true);
        setMensaje('');
        setError('');

    const respuesta = await registrarUsuario(data);

    localStorage.setItem('token', respuesta.token);

    setMensaje(respuesta.mensaje);

    } catch (err) {
        console.error('Error completo:', err);
        console.error('Respuesta del servidor:', err.response?.data);

    setError(
        err.response?.data?.error ||
        err.message ||
        'Error al registrar usuario'
    );

    } finally {
    setLoading(false);
    }
};

return (
    <div className="formulario-contenedor">
    <RegistroForm onSubmit={handleRegistro} loading={loading} />
    {mensaje && <p className="mensaje">{mensaje}</p>}
    {error && <p className="error">{error}</p>}
    </div>
);
}
