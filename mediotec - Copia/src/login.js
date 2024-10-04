import { Link } from "react-router-dom";
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

  import './css/login.css'

function login() {
  return (
    <div className="login">
          <Header />
            <img src={triangulo} alt='decoracao' id='decInferior'/>
         <TitleCadastroLogin 
         title= "Olá, Seja bem-vindo!!"
         paragrafo= "preencha os dados abaixo para realizar seu cadastro"
         />


<form action="" method="post">
            <section className="ContainerSquare">

     <div className='Square'>

        <button className="new-square" id="professor">
          <img src={professor} alt="Professor" />
                <h2>Professor</h2>
                     <p className="description">O professor é o responsável por planejar, ensinar e orientar alunos, 
                         promovendo o aprendizado e o desenvolvimento de habilidades e valores.</p>
        </button>

        <button className="new-square" id="aluno">
            <img src={aluno} alt="Aluno" />
                <h2>Aluno</h2>
                     <p className="description">O aluno é aquele que busca aprendizado, 
                       desenvolvendo habilidades e conhecimentos através do estudo contínuo e da curiosidade.</p>
        </button>

        <button className="new-square" id="coordenador">
          <img src={coordenador} alt="Coordenador" />
               <h2>Coordenador</h2>
                  <p className="description">O coordenador é o responsável por planejar, 
                    organizar e supervisionar atividades e equipes, garantindo o cumprimento 
                    de objetivos e a eficiência dos processos.</p>
        </button>

        </div>
        </section> 

      <div className='button-container'>
      <Button 
            title="Próximo"
        />
      </div>
       
            </form>

        <img src={decoracaoInfer} alt='decoracao' id='decInferior'/>
  <Footer />
    </div>
  );
}

export default login;