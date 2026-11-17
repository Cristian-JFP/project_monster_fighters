import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>MONSTER FIGHTERS</h2>
          <p>
            Descubre criaturas extraordinarias, forma tu equipo y
            prepárate para combatir.
          </p>
        </div>

        <div>
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/monstruos">Monstruos</Link>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/registro">Registrarse</Link>
        </div>

        <div>
          <h3>Proyecto</h3>
          <p>Desarrollo Basado en Plataformas</p>
          <p>Proyecto académico</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Monster Fighters. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
