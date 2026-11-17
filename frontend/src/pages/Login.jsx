import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ correo: '', contraseña: '' });
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form.correo, form.contraseña);
      navigate('/perfil');
    } catch (err) {
      setError(err.response?.data?.error || 'No se pudo iniciar sesión');
    }
  };

  return (
    <form className="formulario" onSubmit={onSubmit}>
      <h1>Iniciar sesión</h1>

      <label htmlFor="correo">Correo electrónico</label>
      <input
        id="correo"
        name="correo"
        type="email"
        placeholder="correo@ejemplo.com"
        value={form.correo}
        onChange={onChange}
        required
      />

      <label htmlFor="contraseña">Contraseña</label>
      <input
        id="contraseña"
        name="contraseña"
        type="password"
        placeholder="Tu contraseña"
        value={form.contraseña}
        onChange={onChange}
        required
      />

      <button type="submit" className="btn-primary">Ingresar</button>

      {error && <p className="mensaje-error">{error}</p>}

      <p>
        ¿No tienes una cuenta?{' '}
        <Link to="/registro" style={{ color: '#a78bfa' }}>Regístrate</Link>
      </p>
    </form>
  );
}
