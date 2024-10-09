import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { HeaderSite, Footer } from '../src/imports/imports';
import '../src/css/turma.css';


function Turma() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    nome: '',
    codigo: '',
    materia: '',
    turno: '',
    sala: '',
    professores: []
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/turmas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDUxYmYyMjI5YjZmYTZkODI2YTAzYSIsImlhdCI6MTcyODM5NTI1MCwiZXhwIjoxNzI4Mzk4ODUwfQ.LrMu6UDj3f3sONDx9CAH4J5fruWrebTrYx7AsNhgza4`,

        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar turma');
      }

      alert('Turma criada com sucesso!');
      setFormData({ nome: '', codigo: '', materia: '', turno: '', sala: '', professores: [], alunos: [] });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="Turma">
      <HeaderSite />

      {/* Espaçamento entre Header e Conteúdo */}
      <section className="turmas-content">
        <div className="turmas-header">
          <h2 className="turmas-title">
            <span className="turmas-icon">▶</span> Turmas
          </h2>
          <button className="add-turma-button" onClick={openModal}>+</button>
        </div>

        {/* Cards das turmas */}
        <div className="turmas-grid">
          {/* Exemplo de card repetido */}
          <div className="turma-card">
            <div className="turma-card-header">
              <img src="path-to-avatar" alt="Avatar" className="turma-avatar" />
              <div>
                <h3>Turma: 1 Ano</h3>
                <p>Turno: Tarde</p>
              </div>
            </div>
            <div className="turma-card-content">
              <h4>Ux Design</h4>
              <p>23/09 - Arquivo em PDF</p>
            </div>
            <div className="turma-card-footer">
              <p>40 pessoas</p>
              <p>Professor: Marcos Silva</p>
            </div>
          </div>

          {/* Outros cards... */}
        </div>
      </section>

      {/* Modal para adicionar turma */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Adicionar Turma</h3>
            <form onSubmit={handleSubmit}>
              <label>Nome da Turma:</label>
              <input type="text" onChange={handleChange} placeholder="Nome da turma" name='nome' />

              <label>Código da Turma:</label>
              <input type="text" onChange={handleChange} placeholder="Código da turma" name='codigo' />

              <label>Matéria:</label>
              <input type="text" onChange={handleChange} placeholder="Matéria" name='materia'/>

              <label>Turno:</label>
              {/* <input  type="text" onChange={handleChange} placeholder="Turno" name='turno' /> */}
              
              <select name='Turno' onChange={handleChange}>
                <option value='Manhã'>Manhã</option>
                <option value='Tarde'>Tarde</option>
              </select>

              <label>Sala:</label>
              <input type="text" onChange={handleChange} placeholder="Sala" name='sala' />

              <label>Professor:</label>
              <input type="text" onChange={handleChange} placeholder="Professor" name='professores' />

              <div className="modal-buttons">
                <button type="submit">Adicionar</button>
                <button type="button" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default Turma;
