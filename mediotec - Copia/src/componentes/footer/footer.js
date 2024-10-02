import { 
    telefone, 
    parceria, 
    Topo, 
    RedesLink, 
    RedesYout, 
    RedesInsta, 
    RedesFace 
  } from '../../imports/imports';


export default function footer(){
    return(
        <footer>
        <hr id="linhaDecima" />
        <div className="background">
          <section className="containerContato">
            <div className="Contato">
              <div className="TESTE"> 
                <h2>Contato</h2>
                <div className="contatoInfo">             
                  <h4>Recife</h4>
                  <div className="telefone">
                    <img src={telefone} alt="Ícone de telefone" className="phone-icon"/>
                    <a href="tel:+558134136666">(81) 3413.6666 (CAS)</a>
                  </div>
                </div>
                <div className="contatoInfo"> 
                  <h4>Paulista</h4>
                  <div className="telefone">
                    <img src={telefone} alt="Ícone de telefone" className="phone-icon"/>
                    <a href="tel:+558133728250">(81) 3372-8250</a>
                  </div>
                </div>
                <div className="contatoInfo"> 
                  <h4>Caruaru</h4>
                  <div className="telefone">
                    <img src={telefone} alt="Ícone de telefone" className="phone-icon"/>
                    <a href="tel:+558137278259">(81) 3727-8259</a>
                  </div>
                </div>
                <div className="contatoInfo"> 
                  <h4>Petrolina</h4>
                  <div className="telefone">
                    <img src={telefone} alt="Ícone de telefone" className="phone-icon"/>
                    <a href="tel:+558739837602">(87) 3983-7602</a>
                  </div>
                </div>
              </div>

              <section className="subirPag">
                <img src={parceria} alt=""/>
                <div className="textTopo">
                  <hr id="topolinha" />
                  <p>Topo</p>
                </div>
                <a href="#a" id="botãoSubir"><img src={Topo} alt="" /></a>
              </section>
            </div>
          </section>
          <hr id="linhainferior" />
          <div className="redes">
            <div className="redesSociais">
              <a href="#a"><img src={RedesLink} alt="" /></a>
              <a href="#a"><img src={RedesYout} alt="" /></a>
              <a href="#a"><img src={RedesInsta} alt="" /></a>
              <a href="#a"><img src={RedesFace} alt="" /></a>
            </div>
            {/* <p>Todos os direitos reservados © 2023 | Senac - Serv. Nac. de Aprendizagem Comercial</p> */}
          </div>
        </div>
      </footer>
    );
}