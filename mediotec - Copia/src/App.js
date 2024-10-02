import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login'; // Certifique-se de que este componente está criado


// gerenciando rotas 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./login.js" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;