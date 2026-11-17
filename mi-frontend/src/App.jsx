
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import PerfilPage from './pages/PerfilPage';

import UsuarioList from './components/UsuarioList';
import ProtectedRoute from './components/ProtectedRoute';

import { cerrarSesion } from './services/auth.service';

function App() {
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        cerrarSesion();
        navigate('/login');
    };

    return (
        <div>
            <nav>
                <Link to="/login">Iniciar sesión</Link>
                {' | '}
                <Link to="/registro">Registrarse</Link>
                {' | '}
                <Link to="/usuarios">Usuarios</Link>
                {' | '}
                <Link to="/perfil">Mi perfil</Link>
                {' | '}

                <button onClick={handleCerrarSesion}>
                    Cerrar sesión
                </button>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/registro"
                    element={<RegistroPage />}
                />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/usuarios"
                        element={<UsuarioList />}
                    />

                    <Route
                        path="/perfil"
                        element={<PerfilPage />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<p>Página no encontrada</p>}
                />
            </Routes>
        </div>
    );
}

export default App;
