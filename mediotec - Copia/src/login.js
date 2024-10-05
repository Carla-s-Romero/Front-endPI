import React, { useState } from 'react';
import { 
  Header,
  Footer,
  TitleCadastroLogin,
  decoracaoInfer,
  triangulo,
  Button,
  professor,
  aluno,
  coordenador
} from './imports/imports'; 

import './css/login.css';
import Login2 from './login2';

function Login() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showLogin2, setShowLogin2] = useState(false); // Novo estado para exibir Login2

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setErrorMessage('');
  };

  const handleNextButtonClick = () => {
    if (!selectedCard) {
      setErrorMessage('Por favor, selecione um perfil para continuar.');
    } else {
      setShowLogin2(true); 
    }
  };

  if (showLogin2) {
    return <Login2 />;
  }

  return (
    <div className="login">
      <Header />
      <img src={triangulo} alt='decoracao' id='decInferior' />
      <TitleCadastroLogin 
        title="Olá, Seja bem-vindo!!"
        paragrafo="Selecione um card para dar continuidade ao seu login"
      />

      <form>
        <section className="ContainerSquare">
          <div className='Square'>
            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Professor' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Professor')}
            >
              <img src={professor} alt="Professor" />
              <h2>Professor</h2>
              <p className="description">O professor é o responsável por planejar, ensinar e orientar alunos, promovendo o aprendizado e o desenvolvimento de habilidades e valores.</p>
            </button>

            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Aluno' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Aluno')}
            >
              <img src={aluno} alt="Aluno" />
              <h2>Aluno</h2>
              <p className="description">O aluno é aquele que busca aprendizado, desenvolvendo habilidades e conhecimentos através do estudo contínuo e da curiosidade.</p>
            </button>

            <button 
              type="button" 
              className={`new-square ${selectedCard === 'Coordenador' ? 'selected' : ''}`}
              onClick={() => handleCardClick('Coordenador')}
            >
              <img src={coordenador} alt="Coordenador" />
              <h2>Coordenador</h2>
              <p className="description">O coordenador é o responsável por planejar, organizar e supervisionar atividades e equipes, garantindo o cumprimento de objetivos e a eficiência dos processos.</p>
            </button>
          </div>
        </section>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className='button-container'>
          <Button 
            title="Próximo"
            onClick={handleNextButtonClick}
            disabled={!selectedCard} 
          />
        </div>
      </form>

      <img src={decoracaoInfer} alt='decoracao' id='decInferior' />
      <Footer />
    </div>
  );
}

export default Login;

