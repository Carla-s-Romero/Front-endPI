import { 
    telefone, 
    parceria, 
    Topo, 
    RedesLink, 
    RedesYout, 
    RedesInsta, 
    RedesFace 
  } from '../../imports/imports';

import './footer.css'

export default function footer(){
    return(
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

    );
}