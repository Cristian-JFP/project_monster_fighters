export default function EnDesarrollo({ titulo, texto }) {
  return (
    <section className="contenedor desarrollo">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <h2>SECCIÓN EN DESARROLLO</h2>
      <p>Esta funcionalidad estará disponible en una próxima actualización de Monster Fighters.</p>
    </section>
  );
}
