import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  logo,
  perfil,
  iconPerfil,
  iconConfiguracao,
  iconSair,
  notificacao,
  Notificacao
} from '../../imports/imports';
import './hearderSite.css'; 

function HeaderSite() {
    const [menuOpen, setIsDropdownOpen] = useState(false);
    const [notificacaoOpen, setNotificacaoOpen] = useState(false);
    const [menuLateralOpen, setMenuLateralOpen] = useState(false); // Estado para o menu lateral
    const [showNotificationModal, setShowNotificationModal] = useState(false); // Estado para controlar o modal

    // Função para alternar o dropdown do perfil
    const toggleDropdown = () => {
      setIsDropdownOpen(!menuOpen);
    };

    // Função para alternar o dropdown de notificações
    const toggleNotificacao = () => {
      setNotificacaoOpen(!notificacaoOpen);
    };

    // Função para abrir o modal de notificações
    const openNotificationModal = () => {
      setShowNotificationModal(true); // Define o modal como aberto
    };

    // Função para fechar o modal de notificações
    const closeNotificationModal = () => {
      setShowNotificationModal(false); // Define o modal como fechado
    };

    // Função para alternar o menu lateral
    const toggleMenuLateral = () => {
      setMenuLateralOpen(!menuLateralOpen); // Alterna visibilidade do menu lateral
    };

    return (
      <>
        <header className='headerSiteMenu'>
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <div className='perfil' >
              <img src={perfil} className="perfil-icon" alt="perfil-icon" />
              
              <div className='infor-perfil' onClick={toggleDropdown}>
                <div className='nome-usuario'>
                  <span id='nomeUser'>Nome Temporario</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <span id='nivelAcesso'>Nivel de acesso</span>
              </div>

              {menuOpen && (
                <>
                  <div className="overlay" onClick={toggleDropdown}></div>

                  <div className='JanelaPerfil'>
                    <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 50 Q 50 0, 100 50" fill="white" />
                    </svg>

                    <ul>
                      <div className='icons-janela'>
                        <img src={iconPerfil} alt='icon-perfil' />
                        <li>Acessar conta</li>
                      </div>

                      <div className='icons-janela'>
                        <img src={iconConfiguracao} alt='icon-configuração' />
                        <li>Configuração</li>
                      </div>

                      <div className='icons-janela'>
                        <img src={iconSair} alt='icon-Sair' />
                        <li>Sair da conta</li>
                      </div>
                    </ul>
                  </div>
                </>
              )}

              <section className='notificacao-icon' onClick={toggleNotificacao}>
                <img src={notificacao} alt='icon-notificao' />
              </section>

              {notificacaoOpen && (
                <section className="notificacao-dropdown">
                  <h1 className="notificacao-header">Notificação</h1>
                  
                  <section className="notificacao-content">
                    <small id='Legenda-Notificacao'>Legenda</small>

                    <div className='legenda-Notificacao'>
                      <div className='notificacao-Cor-Import'> </div>
                      <small>Importante</small>

                      <div className='notificacao-Cor-NaoImport'> </div>
                      <small>Não tão importante</small>

                      <div className='adicionar-Notificacao'>
                        <button onClick={openNotificationModal}>+</button>
                      </div>
                    </div>
                    <hr />
                  </section>
                </section>
              )}

              {/* Modal para criar notificação */}
              {showNotificationModal && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <h1>Criar Notificação</h1>
                    <form action='' method='post'>
                      <label>Nome do Evento:</label>
                      <input type="text" placeholder="Nome do evento" />

                      <label>Descrição:</label>
                      <input type="text" placeholder="Descrição do evento" />

                      <label>Importância:</label>
                      <select>
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                      </select>

                      <div className="modal-buttons">
                        <button type="submit">Criar</button>
                        <button type="button" onClick={closeNotificationModal}>Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <div className="menu-toggle" onClick={toggleMenuLateral}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </nav>
        </header>

        <div className={`menu-lateral ${menuLateralOpen ? 'open' : ''}`}>
          <ul>
            <li>Semestre</li>
            <a href='#a'><li>Boletim</li></a>
            <a href='#a'><li>Calendário</li ></a>
            <a href='#a'><li>Frequência</li></a>
            <a href='#a'><li>Conceitos</li></a>
            <a href='#a'><li>Horários</li></a>
            <a href='#a'><li>Configuração</li></a>
            <a href='#a'><li>Perfil</li></a>
            <a href='#a'><li>Sair</li></a>
          </ul>
        </div>
      </>
    );
}

export default HeaderSite;
