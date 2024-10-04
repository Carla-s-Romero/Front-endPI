import React, { useState } from 'react';

function Login2({ role }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação ou qualquer outra lógica necessária
    console.log(`Role: ${role}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Preencha os dados para {role}</h2>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <label>
        Senha:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login2;
