import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img
            src="/img/logo.jpeg"
            alt="Logo de Monster Fighters"
            className="logo-principal"
          />

          <h1>
            MONSTER <span>FIGHTERS</span>
          </h1>

          <p>
            Descubre un mundo lleno de criaturas extraordinarias. Conoce sus
            habilidades, forma tu equipo y prepárate para demostrar quién es
            el mejor entrenador.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Iniciar sesión</Link>
            <Link to="/registro" className="btn-outline">Registrarse</Link>
          </div>
        </div>
      </section>

      <section className="contenedor">
        <h2 className="titulo-seccion">Bienvenido a Monster Fighters</h2>
        <p className="descripcion-seccion">
          Explora las diferentes secciones de nuestro universo.
        </p>

        <div className="tarjetas">
          <article className="tarjeta">
            <h3>Monstruos</h3>
            <p>Descubre las criaturas disponibles y conoce sus características.</p>
            <Link to="/monstruos" className="btn-primary">Explorar monstruos</Link>
          </article>

          <article className="tarjeta">
            <h3>Bolsa</h3>
            <p>Consulta los objetos que podrás utilizar durante tu aventura.</p>
            <Link to="/bolsa" className="btn-outline">Mi bolsa</Link>
          </article>

          <article className="tarjeta">
            <h3>Equipo</h3>
            <p>Organiza tus criaturas y prepara tu equipo de combate.</p>
            <Link to="/equipo" className="btn-outline">Mi equipo</Link>
          </article>

          <article className="tarjeta">
            <h3>Jugar</h3>
            <p>Prepárate para enfrentarte a otros entrenadores.</p>
            <Link to="/jugar" className="btn-outline">Ir a jugar</Link>
          </article>
        </div>
      </section>

      <section className="contenedor">
        <h2 className="titulo-seccion">Créditos</h2>
        <p className="descripcion-seccion">
          Monster Fighters es un proyecto académico desarrollado para la
          materia Desarrollo Basado en Plataformas.
        </p>
      </section>
    </>
  );
}
