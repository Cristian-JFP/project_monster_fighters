
import { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../services/usuario.service';

function UsuarioList() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
    try {
        const respuesta = await obtenerUsuarios();

        if (respuesta.ok) {
        setUsuarios(respuesta.data);
        } else {
        setError('No fue posible consultar los usuarios');
        }
    } catch (error) {
        console.error(error);
        setError('Error al conectar con el servidor');
    } finally {
        setCargando(false);
    }
    };

    if (cargando) {
    return <p>Cargando usuarios...</p>;
    }

    if (error) {
    return <p>{error}</p>;
    }

    return (
    <div>
        <h2>Usuarios registrados</h2>

        {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
        ) : (
        <table border="1" cellPadding="8">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre de usuario</th>
                <th>Correo</th>
                <th>Rating</th>
            </tr>
            </thead>

            <tbody>
            {usuarios.map((usuario) => (
                <tr key={usuario.id_usuario}>
                <td>{usuario.id_usuario}</td>
                <td>{usuario.nombre_usuario}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rating}</td>
                </tr>
            ))}
            </tbody>
        </table>
        )}
    </div>
    );
}

export default UsuarioList;
