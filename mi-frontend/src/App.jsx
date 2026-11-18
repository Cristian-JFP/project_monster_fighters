import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Reproductor from './components/Reproductor';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Monstruos from './pages/Monstruos';
import EnDesarrollo from './pages/EnDesarrollo';

function AppContent() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/monstruos" element={<Monstruos />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/bolsa" element={<EnDesarrollo titulo="Objetos y equipamientos" texto="Aquí podrás consultar los objetos y equipamientos disponibles." />} />
            <Route path="/equipo" element={<EnDesarrollo titulo="Mi equipo" texto="Aquí podrás consultar y organizar tus criaturas. Esta sección está pendiente de conectar con tu cuenta." />} />
          </Route>

          <Route path="/jugar" element={<EnDesarrollo titulo="Batallas" texto="El sistema de batallas todavía no está disponible. Estamos trabajando para incorporarlo próximamente." />} />
          <Route path="*" element={<p className="contenedor">Página no encontrada.</p>} />
        </Routes>
      </main>
      <Footer />
      <Reproductor />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
