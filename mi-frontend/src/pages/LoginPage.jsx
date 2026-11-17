
import { useState } from 'react';
import { iniciarSesion } from '../services/auth.service';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
const [loading, setLoading] = useState(false);
const [mensaje, setMensaje] = useState('');
const [error, setError] = useState('');

const handleLogin = async (data) => {
    try {
    setLoading(true);
    setMensaje('');
    setError('');

    const respuesta = await iniciarSesion(data);

      // Guardar el token para futuras peticiones protegidas
    localStorage.setItem('token', respuesta.token);

    setMensaje(respuesta.mensaje);
    } catch (err) {
    setError(
        err.response?.data?.error || 'Error al iniciar sesión'
    );
    } finally {
    setLoading(false);
    }
};

return (
    <div className="formulario-contenedor">
    <LoginForm onSubmit={handleLogin} loading={loading} />
    {mensaje && <p className="mensaje">{mensaje}</p>}
    {error && <p className="error">{error}</p>}
    </div>
);
}
