import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MENU = '/audio/menu.mp3';
const CHILL = '/audio/chill.mp3';
const ESPERA = '/audio/espera.mp3';
const BATALLA = '/audio/batalla.mp3';

// Qué canción suena en cada página
const musicaPorRuta = {
  '/': MENU,
  '/login': MENU,
  '/registro': MENU,
  '/monstruos': CHILL,
  '/bolsa': CHILL,
  '/equipo': CHILL,
  '/perfil': CHILL,
  '/jugar': ESPERA,
  '/batalla': BATALLA,   // para cuando exista la pantalla de combate
};

export default function Reproductor() {
  const { pathname } = useLocation();
  const audioRef = useRef(null);
  const [activa, setActiva] = useState(
    () => localStorage.getItem('musicaActiva') !== 'false'
  );

  const archivo = musicaPorRuta[pathname] || MENU;

  // Cuando cambia la canción o se enciende/apaga
  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.25;
    if (activa) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [archivo, activa]);

  // Los navegadores bloquean el sonido hasta que haces un primer clic
  useEffect(() => {
    const iniciar = () => {
      if (activa) audioRef.current?.play().catch(() => {});
    };
    document.addEventListener('click', iniciar, { once: true });
    return () => document.removeEventListener('click', iniciar);
  }, [activa]);

  const alternar = () => {
    const nueva = !activa;
    setActiva(nueva);
    localStorage.setItem('musicaActiva', String(nueva));
  };

  return (
    <>
      <audio ref={audioRef} src={archivo} loop />
      <div className="reproductor">
        <button onClick={alternar}>
          {activa ? 'Apagar música' : 'Activar música'}
        </button>
      </div>
    </>
  );
}