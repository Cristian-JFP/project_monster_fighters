import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function Monstruos() {
  const [monstruos, setMonstruos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/criatura')
      .then((r) => {
        const datos = r.data;
        setMonstruos(Array.isArray(datos) ? datos : datos.criaturas || datos.data || []);
      })
      .catch(() => setError('No fue posible cargar los monstruos. Verifica la conexión con el servidor.'))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="contenedor">
      <h1 className="titulo-seccion">Catálogo de monstruos</h1>
      <p className="descripcion-seccion">
        Descubre las criaturas que habitan el universo de Monster Fighters.
      </p>

      {cargando && <p>Cargando monstruos...</p>}
      {error && <p className="mensaje-error">{error}</p>}
      {!cargando && !error && monstruos.length === 0 && (
        <p>No hay monstruos registrados.</p>
      )}

      <div className="monstruos-grid">
        {monstruos.map((m) => (
          <article className="monstruo-card" key={m.id_criatura}>
            <img
              src={`/img/criaturas/${m.id_criatura}.png`}
              alt={m.nombre || 'Monstruo'}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/img/icono.ico';
              }}
            />
            <div className="monstruo-info">
              <span className="etiqueta">#{m.id_criatura}</span>
              <h3>{m.nombre || 'Sin nombre'}</h3>
              <p>{m.descripcion || 'Sin descripción.'}</p>
              <span className="etiqueta">
                {m.nombre_tipo || m.tipo || `Tipo ${m.id_tipo}`}
              </span>
              <span className="etiqueta">{m.rareza || 'Sin rareza'}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
