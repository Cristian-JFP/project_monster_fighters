import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

export default function Monstruos() {
  const [monstruos, setMonstruos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let activo = true;
    api.get('/criatura')
      .then((respuesta) => {
        const datos = respuesta.data;
        const lista = Array.isArray(datos)
          ? datos
          : datos?.data || datos?.criaturas || datos?.criatura || [];
        if (activo) setMonstruos(Array.isArray(lista) ? lista : []);
      })
      .catch((err) => {
        console.error('Error consultando criaturas:', err);
        if (activo) setError('No fue posible cargar los monstruos. Comprueba que el backend tenga disponible GET /api/criatura.');
      })
      .finally(() => { if (activo) setCargando(false); });
    return () => { activo = false; };
  }, []);

  return (
    <div className="contenedor">
      <h1 className="titulo-seccion">Catálogo de monstruos</h1>
      <p className="descripcion-seccion">Descubre las criaturas que habitan el universo de Monster Fighters.</p>

      {cargando && <p>Cargando monstruos...</p>}
      {error && <p className="mensaje-error">{error}</p>}
      {!cargando && !error && monstruos.length === 0 && <p>No hay monstruos registrados.</p>}

      <div className="monstruos-grid">
        {monstruos.map((m, indice) => {
          const id = m.id_criatura ?? m.id;
          const nombre = m.nombre_criatura || m.nombre || `Monstruo ${id ?? indice + 1}`;
          const tipo = m.nombre_tipo || m.tipo || m.tipo_nombre || (m.id_tipo ? `Tipo ${m.id_tipo}` : 'Tipo no indicado');
          return (
            <article className="monstruo-card" key={id ?? indice}>
              <img
                src={id ? `/img/criaturas/${id}.png` : '/img/icono.ico'}
                alt={nombre}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/img/icono.ico'; }}
              />
              <div className="monstruo-info">
                {id && <span className="etiqueta">#{id}</span>}
                <h3>{nombre}</h3>
                <p>{m.descripcion || m.descripcion_criatura || 'Sin descripción disponible.'}</p>
                <span className="etiqueta">{tipo}</span>
                {m.rareza && <span className="etiqueta">{m.rareza}</span>}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
