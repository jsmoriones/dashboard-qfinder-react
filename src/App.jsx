import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu";
import PerfilPaciente from "./pages/PerfilPaciente/PerfilPaciente";
import TurnosAuxiliar from "./pages/TurnosAuxiliar/TurnosAuxiliar";
import FormularioAuxiliar from "./pages/FormularioAuxiliar/FormularioAuxiliar";
import Notas from "./pages/Notas/Notas";
import Login from "./pages/Auth/Login";
import Configuracion from "./pages/Configuraciones/Configuracion";
import RegistroNotas from "./pages/Notas/RegistroNotas";
import RegistrarPaciente from "./pages/PerfilPaciente/RegistrarPaciente";
import PerfilAcudiente from "./pages/PerfilAcudiente/PerfilAcudiente";
import PerfilAuxiliar from "./pages/PerfilAuxiliar/PerfilAuxiliar";
import Paciente from "./pages/PerfilPaciente/Paciente";
import ListadoNotas from './pages/Notas/ListadoNotas';

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-azulTenueFuerte via-azulMasClaro to-azulMasClaro bg-no-repeat flex h-full min-h-screen">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil-paciente" element={<PerfilPaciente />} />
          <Route path="/formulario-auxiliar" element={<FormularioAuxiliar />} />
          <Route path="/turnos-auxiliar" element={<TurnosAuxiliar />} />
          <Route path="/notas/:id" element={<Notas />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/registro-nota" element={<RegistroNotas />} />
          <Route path="/listado-notas" element={<ListadoNotas />} />
          <Route path="/registro-paciente" element={<RegistrarPaciente />} />{/* Hanz A medias */}
          <Route path="/perfil-acudiente" element={<PerfilAcudiente />} />
          <Route path="/perfil-auxiliar" element={<PerfilAuxiliar />} />
          <Route path="/pacientes" element={<Paciente />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
