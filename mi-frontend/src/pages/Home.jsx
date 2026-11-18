import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="/img/logo.jpeg" alt="Logo de Monster Fighters" className="logo-principal" />
          <h1>MONSTER <span>FIGHTERS</span></h1>
          <p>
            Descubre un mundo lleno de criaturas extraordinarias. Conoce sus
            habilidades, explora sus tipos y prepara tu propio equipo.
          </p>
          <div className="hero-buttons">
            <Link to="/monstruos" className="btn-primary">Explorar monstruos</Link>
            <Link to="/registro" className="btn-outline">Crear cuenta</Link>
          </div>
        </div>
      </section>

      <section className="contenedor">
        <h2 className="titulo-seccion">Explora Monster Fighters</h2>
        <p className="descripcion-seccion">Conoce las secciones disponibles del proyecto.</p>
        <div className="tarjetas">
          <article className="tarjeta">
            <h3>Monstruos</h3>
            <p>Consulta las criaturas, sus descripciones y los tipos a los que pertenecen.</p>
            <Link to="/monstruos" className="btn-primary">Ver monstruos</Link>
          </article>
          <article className="tarjeta">
            <h3>Objetos y equipamientos</h3>
            <p>Explora los objetos que formarán parte de la aventura.</p>
            <Link to="/bolsa" className="btn-outline">Ver sección</Link>
          </article>
          <article className="tarjeta">
            <h3>Mi equipo</h3>
            <p>Prepara y administra tus criaturas cuando esta funcionalidad esté conectada.</p>
            <Link to="/equipo" className="btn-outline">Mi equipo</Link>
          </article>
          <article className="tarjeta">
            <h3>Batallas</h3>
            <p>El sistema de combate todavía está en desarrollo.</p>
            <Link to="/jugar" className="btn-outline">Consultar estado</Link>
          </article>
        </div>
      </section>

      <section className="contenedor">
        <h2 className="titulo-seccion">Acerca del proyecto</h2>
        <p className="descripcion-seccion">
          Monster Fighters es un proyecto académico desarrollado para la
          materia Desarrollo Basado en Plataformas.
        </p>
      </section>
    </>
  );
}
