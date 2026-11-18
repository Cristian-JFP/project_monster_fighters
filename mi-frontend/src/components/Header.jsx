import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const salir = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/img/icono.ico" alt="Monster Fighters" />
        <span><strong> MONSTER FIGHTERS</strong></span>
      </Link>

      <nav className="navbar">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/monstruos">Monstruos</NavLink>
        <NavLink to="/bolsa">Objetos</NavLink>
        <NavLink to="/equipo">Mi equipo</NavLink>
        <NavLink to="/jugar">Batallas</NavLink>
        {user && <NavLink to="/perfil">Mi perfil</NavLink>}
      </nav>

      <div className="header-actions">
        {user ? (
          <>
            <span className="usuario-header">{user.nombre_usuario}</span>
            <button className="btn-outline" onClick={salir}>Cerrar sesión</button>
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
