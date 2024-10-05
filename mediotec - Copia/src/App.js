import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Login from './login'; // Certifique-se de que a rota para login está importada
import Boletim from "./boletim";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/boletim" element={<Boletim />} />
      </Routes>
    </Router>
  );
}

export default App;
