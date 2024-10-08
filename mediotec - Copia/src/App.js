import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Login from './login'; // Certifique-se de que a rota para login está importada
import Boletim from "./boletim";
import Turma from './turma'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/boletim" element={<Boletim />} />
        <Route path="/turma" element={<Turma />} />
      </Routes>
    </Router>
  );
}

export default App;
