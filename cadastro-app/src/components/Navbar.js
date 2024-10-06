import React from 'react';
import './Navbar.css';
import logo from '../images/logoSenac.png';
import userIcon from '../images/user.png';

const Navbar = () => {
  return (
    <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
          
                <nav className='nav-home'>
                    <img src={userIcon} className="perfil-icon" alt="perfil-icon"/> 

                    <div className="opcao-login">
                     <a href="#a" id="portalLogin">Portal do aluno</a>
                        <a href="#a" id="acessar">Acesse sua conta</a>
                        </div>

                        </nav>
            </header>
  );
}

export default Navbar;
