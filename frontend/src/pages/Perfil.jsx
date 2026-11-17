import { useAuth } from '../context/AuthContext';

export default function Perfil() {
  const { user } = useAuth();

  const fecha = user.fecha_registrado
    ? new Date(user.fecha_registrado).toLocaleDateString('es-CO')
    : '-';

  return (
    <div className="contenedor">
      <h1 className="titulo-seccion" style={{ textAlign: 'center' }}>
        Perfil del jugador
      </h1>
      <p className="descripcion-seccion" style={{ textAlign: 'center' }}>
        Información de tu cuenta en Monster Fighters.
      </p>

      <section className="perfil-card">
        <h2>{user.nombre_usuario}</h2>

        <div className="perfil-dato">
          <span>ID de usuario</span>
          <strong>{user.id_usuario ?? '-'}</strong>
        </div>

        <div className="perfil-dato">
          <span>Nombre de usuario</span>
          <strong>{user.nombre_usuario}</strong>
        </div>

        <div className="perfil-dato">
          <span>Correo</span>
          <strong>{user.correo}</strong>
        </div>

        <div className="perfil-dato">
          <span>Fecha de registro</span>
          <strong>{fecha}</strong>
        </div>

        <div className="perfil-dato">
          <span>Rating</span>
          <strong>{user.rating ?? 0}</strong>
        </div>

        <div className="perfil-dato">
          <span>Rango</span>
          <strong>{user.id_rango ?? 'Sin rango'}</strong>
        </div>
      </section>
    </div>
  );
}
