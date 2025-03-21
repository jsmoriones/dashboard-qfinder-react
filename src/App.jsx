import { Routes, Route, Outlet } from "react-router-dom";
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

function Layout(){
  return (
    <>
      <div className="bg-gradient-to-br from-azulTenueFuerte via-azulMasClaro to-azulMasClaro bg-no-repeat flex h-full min-h-screen">
        <Menu />
        <Outlet />
      </div>
    </>
  )
}

function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/perfil-paciente" element={<PerfilPaciente />} />
            <Route path="/formulario-auxiliar" element={<FormularioAuxiliar />} />
            <Route path="/turnos-auxiliar" element={<TurnosAuxiliar />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/registro-notas" element={<RegistroNotas />} />
            <Route path="/registro-paciente" element={<RegistrarPaciente />} />
            <Route path="/perfil-acudiente" element={<PerfilAcudiente />} />
            <Route path="/perfil-auxiliar" element={<PerfilAuxiliar />} />
            <Route path="/pacientes" element={<Paciente />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App
