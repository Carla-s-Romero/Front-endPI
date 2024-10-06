import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Rodape from "./components/rodape/rodape";
import "./index.css";
import "./responsive.css";
import trianguloDec from "./images/decoracaoTrianguloLogin.png";
import vetores from "./images/vetores.png";

function App() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [nivelAcesso, setNivelAcesso] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNivelAcessoChange = (event) => {
    setNivelAcesso(event.target.value);
  };

  const handleFinalizar = () => {
    if (!email || !nome || !nivelAcesso || (nivelAcesso === "Aluno" && !curso) || (nivelAcesso === "Professor" && !disciplina)) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios antes de avançar.");
      return;
    }

    setErrorMessage("");

    alert("Todos os campos preenchidos! Você pode avançar.");
  };

  return (
    <div className="App">
      <Navbar />
      <img src={trianguloDec} alt="decoração" id="decTriangulo" />

      <section className="title">
        <h1>Olá, Seja bem-vindo coordenador!</h1>
        <p className="subtitle">
          Preencha os dados abaixo para realizar o cadastro dos alunos,
          professores ou coordenadores
        </p>
      </section>

      <p className="info-acesso">Informações de acesso</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>} {}

      <div className="email-formulario">
        <label className="label-email">E-mail: <span className="required">*</span></label>
        <input
          type="email"
          className="input-email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="nome-senha-formulario">
        <div className="nome-formulario">
          <label className="label-nome">Nome: <span className="required">*</span></label>
          <input
            type="text"
            className="input-nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="senha-formulario">
          <label className="label-senha">Senha: <span className="required">*</span></label>
          <input
            type="password"
            className="input-senha"
            placeholder="Digite sua senha"
          />
        </div>
      </div>

      <div className="nivel-acesso-formulario">
        <p className="label-nivel-acesso">Nível de Acesso: <span className="required">*</span></p>
        <div className="checkbox-container">
          <label>
            <input
              type="radio"
              value="Aluno"
              checked={nivelAcesso === "Aluno"}
              onChange={handleNivelAcessoChange}
            />
            Aluno
          </label>
          <label>
            <input
              type="radio"
              value="Professor"
              checked={nivelAcesso === "Professor"}
              onChange={handleNivelAcessoChange}
            />
            Professor
          </label>
          <label>
            <input
              type="radio"
              value="Coordenador"
              checked={nivelAcesso === "Coordenador"}
              onChange={handleNivelAcessoChange}
            />
            Coordenador
          </label>
        </div>
      </div>

      {nivelAcesso === "Aluno" && (
        <div className="curso-formulario">
          <label className="label-curso">Curso: <span className="required">*</span></label>
          <select className="input-curso" value={curso} onChange={(e) => setCurso(e.target.value)}>
            <option value="">Selecione o curso</option>
            <option value="TI">TI</option>
            <option value="Logistica">Logística</option>
          </select>
        </div>
      )}

      {nivelAcesso === "Professor" && (
        <div className="disciplina-formulario">
          <label className="label-disciplina">Disciplina: <span className="required">*</span></label>
          <select className="input-disciplina" value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
            <option value="">Selecione a disciplina</option>
            <option value="Biologia">Biologia</option>
            <option value="Educação Física">Educação Física</option>
            <option value="Física">Física</option>
            <option value="Formação Profissional">Formação Profissional</option>
            <option value="Geografia">Geografia</option>
            <option value="História">História</option>
            <option value="Língua Inglesa">Língua Inglesa</option>
            <option value="Língua Portuguesa">Língua Portuguesa</option>
            <option value="Matemática">Matemática</option>
            <option value="Programa de Vida">Programa de Vida</option>
            <option value="Química">Química</option>
            <option value="Filosofia">Filosofia</option>
          </select>
        </div>
      )}

      <div className="botao-finalizar-container">
        <button className="botao-finalizar" onClick={handleFinalizar}>Finalizar</button>
      </div>

      <img src={vetores} alt="vetores" className="vetores-img" />
      <div className="footer">
        <Rodape />
      </div>
    </div>
  );
}

export default App;
