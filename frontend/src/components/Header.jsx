import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/img/icono.ico" alt="Monster Fighters" />
        <span>
          MONSTER <strong>FIGHTERS</strong>
        </span>
      </Link>

      <nav className="navbar">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/bolsa">Bolsa</NavLink>
        <NavLink to="/monstruos">Monstruos</NavLink>
        <NavLink to="/equipo">Equipo</NavLink>
        <NavLink to="/jugar">Jugar</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
      </nav>

      <div className="header-actions">
        {user ? (
          <>
            <span className="usuario-header">{user.nombre_usuario}</span>
            <button className="btn-outline" onClick={logout}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-outline">Iniciar sesión</Link>
            <Link to="/registro" className="btn-primary">Registrarse</Link>
          </>
        )}
      </div>
    </header>
  );
}
