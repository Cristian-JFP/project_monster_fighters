import { createContext, useContext, useEffect, useState } from 'react';
import { iniciarSesion, obtenerPerfil } from '../services/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Al abrir la página: si hay un token guardado, pide el perfil
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setLoading(false);
      return;
    }
    obtenerPerfil()
      .then(setUser)
      .catch(logout)
      .finally(() => setLoading(false));
  }, []);

  // Login: guarda el token y trae el perfil
  const login = async (correo, contraseña) => {
    const { token } = await iniciarSesion(correo, contraseña);
    localStorage.setItem('token', token);
    setUser(await obtenerPerfil());
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);