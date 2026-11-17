
import { useEffect, useState } from 'react';
import {
    obtenerPerfil,
    actualizarPerfil
} from '../services/perfil.service';

function PerfilPage() {

    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [editando, setEditando] = useState(false);
    const [guardando, setGuardando] = useState(false);

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    // Consultar perfil
    const cargarPerfil = async () => {
        try {
            const respuesta = await obtenerPerfil();

            if (respuesta.ok) {
                setUsuario(respuesta.data);
                setNombre(respuesta.data.nombre_usuario);
                setCorreo(respuesta.data.correo);
            }

        } catch (error) {
            console.error(error);
            setError('No se pudo cargar el perfil');
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarPerfil();
    }, []);

    // Activar edición
    const iniciarEdicion = () => {
        setNombre(usuario.nombre_usuario);
        setCorreo(usuario.correo);
        setContraseña('');
        setMensaje('');
        setError('');
        setEditando(true);
    };

    // Cancelar edición
    const cancelarEdicion = () => {
        setNombre(usuario.nombre_usuario);
        setCorreo(usuario.correo);
        setContraseña('');
        setMensaje('');
        setError('');
        setEditando(false);
    };

    // Guardar cambios
    const guardarCambios = async (e) => {
        e.preventDefault();

        setGuardando(true);
        setMensaje('');
        setError('');

        try {
            const respuesta = await actualizarPerfil({
                nombre_usuario: nombre,
                correo: correo,
                contraseña: contraseña
            });

            if (respuesta.ok) {
                setUsuario(respuesta.data);
                setContraseña('');
                setEditando(false);
                setMensaje('Perfil actualizado correctamente');
            }

        } catch (error) {
            console.error(error);

            setError(
                error.response?.data?.error ||
                'No se pudo actualizar el perfil'
            );

        } finally {
            setGuardando(false);
        }
    };

    if (cargando) {
        return <p>Cargando perfil...</p>;
    }

    if (!usuario) {
        return <p>{error || 'No se encontró el usuario'}</p>;
    }

    return (
        <div>
            <h1>Mi perfil</h1>

            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!editando ? (

                <div>
                    <h2>{usuario.nombre_usuario}</h2>

                    <p>
                        <strong>ID:</strong> {usuario.id_usuario}
                    </p>

                    <p>
                        <strong>Correo:</strong> {usuario.correo}
                    </p>

                    <p>
                        <strong>Fecha de registro:</strong>{' '}
                        {new Date(usuario.fecha_registrado)
                            .toLocaleDateString()}
                    </p>

                    <p>
                        <strong>Rango:</strong> {usuario.id_rango}
                    </p>

                    <p>
                        <strong>Rating:</strong> {usuario.rating}
                    </p>

                    <button onClick={iniciarEdicion}>
                        Editar perfil
                    </button>
                </div>

            ) : (

                <form onSubmit={guardarCambios}>

                    <h2>Editar mis datos</h2>

                    <div>
                        <label>Nombre de usuario:</label>
                        <br />
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label>Correo electrónico:</label>
                        <br />
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label>Nueva contraseña:</label>
                        <br />
                        <input
                            type="password"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            placeholder="Dejar vacío para no cambiarla"
                        />
                    </div>

                    <br />

                    <button type="submit" disabled={guardando}>
                        {guardando ? 'Guardando...' : 'Guardar cambios'}
                    </button>

                    {' '}

                    <button
                        type="button"
                        onClick={cancelarEdicion}
                        disabled={guardando}
                    >
                        Cancelar
                    </button>

                </form>

            )}

        </div>
    );
}

export default PerfilPage;
