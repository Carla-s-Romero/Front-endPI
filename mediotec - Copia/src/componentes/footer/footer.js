import { 
  telefone, 
  parceria, 
  Topo, 
  RedesLink, 
  RedesYout, 
  RedesInsta, 
  RedesFace 
} from '../../imports/imports';
import React, { useEffect, useState } from 'react';
import './footer.css';

export default function Footer() {
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

return (
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
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+558134136666">(81) 3413.6666 (CAS)</a>
              </div>
            </div>

            <div className="contatoInfo">
              <h4>Paulista</h4>
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+558133728250">(81) 3372-8250</a>
              </div>
            </div>

            <div className="contatoInfo">
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+558133728250">(81) 99848-0015</a>
              </div>
            </div>

            <div className="contatoInfo">
              <h4>Caruaru</h4>
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+558137278259">(81) 3727-8259</a>
              </div>
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+5581999141270">(81) 99914-1270</a>
              </div>
            </div>

            <div className="contatoInfo">
              <h4>Petrolina</h4>
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="tel:+558739837602">(87) 3983-7602</a>
              </div>
              <div className="telefone">
                <img src={telefone} alt="Ícone de telefone" className="phone-icon" />
                <a href="https://api.whatsapp.com/send/?phone=5587988748456&text&type=phone_number&app_absent=0">(87) 98874-8456</a>
              </div>
            </div>
          </div>

 
          {showButton && (
            <section className="subirPag">
              <img src={parceria} alt="Parceria" />
              <div className="textTopo">
                <hr id="topolinha" />
                <p>Topo</p>
              </div>
              <a href="#top" id="botãoSubir">
                <img src={Topo} alt="Subir ao topo" />
              </a>
            </section>
          )}
        </div>
      </section>

      <hr id="linhainferior" />

      <div className="redes">
        <div className="redesSociais">
          <a href="https://www.linkedin.com/company/senacpe/"><img src={RedesLink} alt="LinkedIn" /></a>
          <a href="https://www.youtube.com/user/SenacPernambuco"><img src={RedesYout} alt="YouTube" /></a>
          <a href="https://www.instagram.com/senacpe"><img src={RedesInsta} alt="Instagram" /></a>
          <a href="https://www.facebook.com/senacpe"><img src={RedesFace} alt="Facebook" /></a>
        </div>
      </div>
    </div>
  </footer>
);
}
