import Login from './components/login'
import Administrador from './components/administrador'
import Oper from './components/operario'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Administrador />} />
        <Route path="/oper" element={<Oper />} />
      </Routes>
  );
}

export default App;
