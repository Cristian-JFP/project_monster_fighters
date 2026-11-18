import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre_usuario: '', correo: '', contraseña: '', confirmar: '' });
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');
  const [enviando, setEnviando] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setExito('');
    if (form.contraseña !== form.confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setEnviando(true);
    try {
      await register({
        nombre_usuario: form.nombre_usuario,
        correo: form.correo,
        contraseña: form.contraseña
      });
      setExito('Cuenta creada correctamente. Ahora puedes iniciar sesión.');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.mensaje || 'No se pudo registrar');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="formulario" onSubmit={onSubmit}>
      <h1>Crear cuenta</h1>
      <label htmlFor="nombre_usuario">Nombre de usuario</label>
      <input id="nombre_usuario" name="nombre_usuario" type="text" placeholder="Tu nombre de usuario" value={form.nombre_usuario} onChange={onChange} required />
      <label htmlFor="correo">Correo electrónico</label>
      <input id="correo" name="correo" type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={onChange} required />
      <label htmlFor="contraseña">Contraseña</label>
      <input id="contraseña" name="contraseña" type="password" placeholder="Tu contraseña" minLength={8} value={form.contraseña} onChange={onChange} required />
      <label htmlFor="confirmar">Confirmar contraseña</label>
      <input id="confirmar" name="confirmar" type="password" placeholder="Repite tu contraseña" minLength={8} value={form.confirmar} onChange={onChange} required />
      <button type="submit" className="btn-primary" disabled={enviando}>{enviando ? 'Registrando...' : 'Registrarse'}</button>
      {error && <p className="mensaje-error">{error}</p>}
      {exito && <p className="mensaje-exito">{exito}</p>}
      <p>¿Ya tienes una cuenta? <Link to="/login" style={{ color: '#a78bfa' }}>Inicia sesión</Link></p>
    </form>
  );
}
