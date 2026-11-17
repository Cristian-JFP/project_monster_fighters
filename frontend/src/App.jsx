import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Monstruos from './pages/Monstruos';
import EnDesarrollo from './pages/EnDesarrollo';
import Footer from './components/Footer';
import Reproductor from './components/Reproductor';   // ← línea nueva

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/monstruos" element={<Monstruos />} />

          {/* Rutas protegidas: solo con sesión iniciada */}
          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<Perfil />} />
            <Route
              path="/bolsa"
              element={
                <EnDesarrollo
                  titulo="Mi bolsa"
                  texto="Aquí podrás consultar y administrar los objetos de tu aventura."
                />
              }
            />
            <Route
              path="/equipo"
              element={
                <EnDesarrollo
                  titulo="Mi equipo"
                  texto="Aquí podrás organizar tus criaturas y preparar tu equipo de combate."
                />
              }
            />
            <Route
              path="/jugar"
              element={
                <EnDesarrollo
                  titulo="Jugar"
                  texto="Aquí podrás enfrentarte a otros entrenadores."
                />
              }
            />
          </Route>

          <Route path="*" element={<p className="contenedor">Página no encontrada</p>} />
        </Routes>
      </main>

      <Footer />
      <Reproductor />   {/* ← línea nueva */}
    </>
  );
}
