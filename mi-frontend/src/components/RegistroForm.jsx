
import { useState } from 'react';

export default function RegistroForm({ onSubmit, loading }) {
const [form, setForm] = useState({
    nombre_usuario: '',
    correo: '',
    contraseña: ''
});

const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
};

return (
    <form onSubmit={handleSubmit}>
    <h2>Crear cuenta</h2>

    <input
        type="text"
        name="nombre_usuario"
        placeholder="Nombre de usuario"
        value={form.nombre_usuario}
        onChange={handleChange}
        required
    />

    <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={form.correo}
        onChange={handleChange}
        required
    />

    <input
        type="password"
        name="contraseña"
        placeholder="Contraseña"
        value={form.contraseña}
        onChange={handleChange}
        required
    />

    <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarse'}
    </button>
    </form>
);
}
