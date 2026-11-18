import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { actualizarPerfil } from '../services/auth.service';

export default function Perfil() {
  const { user, refrescarPerfil } = useAuth();
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(user?.nombre_usuario || '');
  const [correo, setCorreo] = useState(user?.correo || '');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    setNombre(user?.nombre_usuario || '');
    setCorreo(user?.correo || '');
  }, [user]);

  const cancelar = () => {
    setNombre(user.nombre_usuario || '');
    setCorreo(user.correo || '');
    setContraseña('');
    setError('');
    setMensaje('');
    setEditando(false);
  };

  const guardar = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');
    setGuardando(true);
    try {
      await actualizarPerfil({ nombre_usuario: nombre, correo, contraseña });
      await refrescarPerfil();
      setContraseña('');
      setEditando(false);
      setMensaje('Perfil actualizado correctamente.');
    } catch (err) {
      setError(err.response?.data?.error || 'No se pudo actualizar el perfil.');
    } finally {
      setGuardando(false);
    }
  };

  const fecha = user?.fecha_registrado
    ? new Date(user.fecha_registrado).toLocaleDateString('es-CO')
    : '-';

  return (
    <div className="contenedor">
      <h1 className="titulo-seccion" style={{ textAlign: 'center' }}>Perfil del jugador</h1>
      <p className="descripcion-seccion" style={{ textAlign: 'center' }}>Información de tu cuenta en Monster Fighters.</p>

      <section className="perfil-card">
        {!editando ? (
          <>
            <h2>{user?.nombre_usuario}</h2>
            <div className="perfil-dato"><span>ID de usuario</span><strong>{user?.id_usuario ?? '-'}</strong></div>
            <div className="perfil-dato"><span>Nombre de usuario</span><strong>{user?.nombre_usuario}</strong></div>
            <div className="perfil-dato"><span>Correo</span><strong>{user?.correo}</strong></div>
            <div className="perfil-dato"><span>Fecha de registro</span><strong>{fecha}</strong></div>
            <div className="perfil-dato"><span>Rating</span><strong>{user?.rating ?? 0}</strong></div>
            <div className="perfil-dato"><span>Rango</span><strong>{user?.id_rango ?? 'Sin rango'}</strong></div>
            <button className="btn-primary" style={{ marginTop: 22 }} onClick={() => { setMensaje(''); setError(''); setEditando(true); }}>Editar perfil</button>
          </>
        ) : (
          <form onSubmit={guardar}>
            <h2>Editar mis datos</h2>
            <label htmlFor="nombre_usuario">Nombre de usuario</label>
            <input id="nombre_usuario" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <label htmlFor="correo">Correo electrónico</label>
            <input id="correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <label htmlFor="nueva_contrasena">Nueva contraseña</label>
            <input id="nueva_contrasena" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Déjala vacía si no deseas cambiarla" />
            <button className="btn-primary" type="submit" disabled={guardando}>{guardando ? 'Guardando...' : 'Guardar cambios'}</button>
            <button className="btn-outline" type="button" style={{ marginTop: 12, width: '100%' }} onClick={cancelar} disabled={guardando}>Cancelar</button>
          </form>
        )}
        {mensaje && <p className="mensaje-exito">{mensaje}</p>}
        {error && <p className="mensaje-error">{error}</p>}
      </section>
    </div>
  );
}
