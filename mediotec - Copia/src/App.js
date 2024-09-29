//importanto imagens
import logo from '../src/img/logoSenac.png';
import mediotec from '../src/img/MediotecImg.png';
import perfil from '../src/img/perfilIcon.png';
import Aluno from '../src/img/ImgAdAluno.png';
import cursoDev from '../src/img/dev.png';
import cursoLog from '../src/img/Logis.png';
import linha from '../src/img/Linha1.png';
import iconLaranja from '../src/img/IconLocalLaranja.png'
import iconVermelho from '../src/img/Sede.png'
import decoSuper from '../src/img/Group 42 (1).png'
import telefone from '../src/img/telefone.png';
import parceria from '../src/img/Parceria.png';
import Topo from '../src/img/Botão de Subir.png';

import CourseCard from '../src/componentes/cursos' //Chamando o componente
import Mapa from '../src/componentes/mapa/mapa'; 
import RedesLink from '../src/img/RedesSociais/linkedin.png';
import RedesYout from '../src/img/RedesSociais/youtube.png';
import RedesInsta from '../src/img/RedesSociais/instagram.png';
import RedesFace from '../src/img/RedesSociais/🦆Facebook.png';

import '../src/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
            <nav className='nav-home'>
            <img src={perfil} className="perfil-icon" alt="perfil-icon"/> 

            <div className="opcao-login">
              <a href="#a" id="portalLogin">Portal do aluno</a>
              <a href="#a" id="acessar">Acesse sua conta</a>
            </div>

            </nav>
      </header>

      <section>
        <img src={mediotec} className="imgMediotec" alt="logo" /> 

        <section className="adMediotec">
            <div className="decoracaoAd"></div>
            <div className="decoracaoAd" ></div>
            <div className="decoracaoAd"></div>
            <div className="decoracaoAd"></div>
            <div className="decoracaoAd" ></div>
            <div className="decoracaoAd"></div>
            <div className="decoracaoAd"></div>
            <div className="decoracaoAd"></div>
            </section>

     <section className="container">
              <div className="content">
              <h1>Já imaginou fazer o Ensino Médio junto com um curso técnico, sair preparado para o Enem e 
                  ter certificações para começar logo uma carreira profissional?</h1>
                  </div>
                  <img src={Aluno} id="imgAluno" alt=""/>        
              </section>
        </section>
       
    {/* caracteristicas dos cursos disponiveis */}

    <section className="cursos">
        <h2 >Cursos Disponiveis do Mediotec</h2>
        <p>Com o Mediotec, você conquista o futuro com uma formação de excelência: Ensino Médio integrado à qualificação técnica, preparando você com as habilidades que o mercado exige e o reconhecimento da marca Senac no seu currículo!</p>


  <section className="cardCursos Dev">
    <div className="cardDev">
    <CourseCard 
    image={cursoDev}
    image2={linha}
    title="Técnico em Desenvolvimento de Sistemas" 
    paragrafo="Conhecimentos em:"
    topics={[
      "Lógica de Programação", 
      "Algoritmos", 
      "Estruturas de Dados", 
      "Banco de Dados", 
      "Desenvolvimento Web", 
      "Programação Orientada a Objetos", 
      "Redes de Computadores", 
      "Sistemas Operacionais", 
      "Manutenção de Computadores", 
      "Segurança da Informação", 
      "Desenvolvimento de Aplicações", 
      "Design de Interfaces"
    ]}
  />

    </div>
    <div className="cardDev">
    <CourseCard 
    image={cursoLog} 
    image2={linha}
    title="Técnico em Logística" 
    paragrafo="Conhecimentos em:"
    topics={[
      "Gestão de Logística ", 
      "Gestão de Estoques", 
      "Logística de Transporte ", 
      "Armazenagem", 
      "Gestão da Cadeia de Suprimentos", 
      "Planejamento Logístico", 
      "Gestão de Recursos", 
      "Legislação e Normas", 
      "Tecnologia da Informação na Logística", 
      "Gestão de Qualidade", 
      "Processos Logísticos", 
      "Sustentabilidade e Logística Verde "
    ]}
  />
  </div>
  </section>
  </section>

    {/* Talvez mudar e realmente fazer em codigo */}
    <section className="beneficiosCurso">
    <img src={decoSuper} id="imgAluno" alt=""/>
    </section>

    {/* Localização */}

 
   <section className="ContainerLocalizacao" >
   <h4>Descubra a Localização do Senac Mediotec</h4>
      <div className="Localizacao">
        <div className="LocalizacaoInfor">
           
            
                 <h6>Recife - PE</h6>
      
                    <div className="localEspecifico">
                       <img src={iconLaranja} alt=""/>
                          <p>Av. João de Barros, 523 
                            <br></br>
                              Soledade - Mediotec</p>
                                </div>

                    <div className="localEspecifico">
                        <img src={iconVermelho} alt=""/>
                          <p>Av. Visc. de Suassuna, 500 
                            <br></br>
                             Santo Amaro - Faculdade</p>
                              </div>

                <h6>Paulista - PE</h6>

                    <div className="localEspecifico">
                        <img src={iconLaranja} alt=""/>
                         <p>R. Oitenta e Dois, 30 
                          <br></br>
                          Jardim Paulista - Mediotec</p>
                            </div>

                <h6>Caruaru - PE</h6>

                     <div className="localEspecifico">
                        <img src={iconLaranja} alt=""/>
                          <p>Av. Maria José Lyra, 140 
                           <br></br>
                            Indianópolis - Mediotec</p>
                              </div>

                 <h6>Petrolina - PE</h6>

                      <div className="localEspecifico">
                        <img src={iconLaranja} alt=""/>
                          <p>R. Dona Justina Freire de 
                          <br></br>
                          Souza, 650 - Mediotec</p>
                          </div>

                <a href="">Ver mais</a>
        </div>

        <div className="mapa">
          <Mapa/>
            </div>
     </div>
   </section>

<footer>

  <hr id="linhaDecima"></hr>
      <div class="background">

                 
        <section className="containerContato">
        
          <div className="Contato">

          <div className="TESTE"> 
              <h2>Contato</h2>
             
            <div className="contatoInfo">             
               <h4>Recife</h4>
                <div class="telefone">
                   <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                      <a href="tel:+558134136666">(81) 3413.6666 (CAS)</a>
                        </div>
                        </div>
            
            <div className="contatoInfo"> 
              <h4>Paulista</h4>
                <div class="telefone">
                   <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                      <a href="tel:+558133728250">(81) 3372-8250</a>
                        </div>
                        </div>

                        <div className="contatoInfo"> 
                        <div class="telefone">
                          <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                            <a href="tel:+558133728250">(81) 99848-0015</a>
                               </div>
                               </div>

             <div className="contatoInfo"> 
              <h4>Caruaru</h4>
                <div class="telefone">
                   <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                      <a href="tel:+558137278259">(81) 3727-8259</a>
                        </div>

                        <div class="telefone">
                          <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                            <a href="tel:+5581999141270">(81) 99914-1270</a>
                               </div>
                               </div>

          <div className="contatoInfo"> 
             <h4>Petrolina</h4>
                <div class="telefone">
                   <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                      <a href="tel:+558739837602">(87) 3983-7602</a>
                        </div>

                        <div class="telefone">
                          <img src={telefone} alt="Ícone de telefone" class="phone-icon"/>
                            <a href="https://api.whatsapp.com/send/?phone=5587988748456&text&type=phone_number&app_absent=0"> (87) 98874-8456</a>
                               </div>
                               </div>
                               </div>


          <section className="subirPag">
             <img src={parceria} alt=""/>
             
                <div className="textTopo">
                  <hr id="topolinha"></hr>
                    <p>Topo</p>
                        </div>

                        <a href="#a" id="botãoSubir"><img src={Topo} alt="" /></a>
                            </section>
                
                  </div>
                  
            </section>
            <hr id="linhainferior"></hr>
      
      <div className="redes">
          <div className="redesSociais">
            <a href="#a"><img src={RedesLink} alt="" /></a>
            <a href="#a"><img src={RedesYout} alt="" /></a>
            <a href="#a"><img src={RedesInsta}alt="" /></a>
            <a href="#a"><img src={RedesFace} alt="" /></a>
            </div>
          </div>
  </div>
</footer>

    </div>
  );
}

export default App;
