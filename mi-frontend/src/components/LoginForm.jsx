
import { useState } from 'react';

export default function LoginForm({ onSubmit, loading }) {
const [form, setForm] = useState({
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
    <h2>Iniciar sesión</h2>

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
        {loading ? 'Ingresando...' : 'Ingresar'}
    </button>
    </form>
);
}
