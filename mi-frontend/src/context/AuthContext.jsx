import { createContext, useContext, useEffect, useState } from 'react';
import {
  iniciarSesion,
  obtenerPerfil,
  registrarUsuario,
  cerrarSesion as borrarSesion
} from '../services/auth.service';

const AuthContext = createContext(null);

function extraerUsuario(respuesta) {
  // El backend devuelve { ok: true, data: { ...usuario } }.
  return respuesta?.data ?? respuesta;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    borrarSesion();
    setUser(null);
  };

  const refrescarPerfil = async () => {
    const respuesta = await obtenerPerfil();
    const usuario = extraerUsuario(respuesta);
    setUser(usuario);
    return usuario;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    obtenerPerfil()
      .then((respuesta) => setUser(extraerUsuario(respuesta)))
      .catch(() => {
        borrarSesion();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (correo, contraseña) => {
    const respuesta = await iniciarSesion({ correo, contraseña });
    if (!respuesta.token) throw new Error('El servidor no devolvió un token');
    localStorage.setItem('token', respuesta.token);
    await refrescarPerfil();
  };

  const register = async (datos) => registrarUsuario(datos);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refrescarPerfil, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
