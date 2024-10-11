// src/components/Notificacao.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './notificacao.css';

function Notificacao() {
    const [notifications, setNotifications] = useState([]); // Estado para armazenar notificações
    const [newNotification, setNewNotification] = useState({ title: '', description: '', importance: 'alta' });
    const [editMode, setEditMode] = useState(null); // Estado para identificar edição
    const [showNotificationModal, setShowNotificationModal] = useState(false);

    const openNotificationModal = () => {
        setShowNotificationModal(true);
    };

    const closeNotificationModal = () => {
        setShowNotificationModal(false);
        setNewNotification({ title: '', description: '', importance: 'alta' });
        setEditMode(null);
    };

    const handleInputChange = (e) => {
        setNewNotification({ ...newNotification, [e.target.name]: e.target.value });
    };

    const handleSaveNotification = (e) => {
        e.preventDefault();
        if (editMode !== null) {
            // Edição de notificação existente
            const updatedNotifications = notifications.map((notif, index) =>
                index === editMode ? newNotification : notif
            );
            setNotifications(updatedNotifications);
        } else {
            // Criação de nova notificação
            setNotifications([...notifications, newNotification]);
        }
        closeNotificationModal();
    };

    const handleEditNotification = (index) => {
        setEditMode(index);
        setNewNotification(notifications[index]);
        openNotificationModal();
    };

    const handleDeleteNotification = (index) => {
        const updatedNotifications = notifications.filter((_, i) => i !== index);
        setNotifications(updatedNotifications);
    };

    return (
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


                <div className='notificacoes'>
                    {notifications.map((notification, index) => (
                        <div key={index} className={`notificacao ${notification.importance}`}>
                            <h4>{notification.title}</h4>
                            <p>{notification.description}</p>
                            <div className="notification-actions">
                                <button onClick={() => handleEditNotification(index)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => handleDeleteNotification(index)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                
            </section>

            {/* Modal para criar/editar notificação */}
            {showNotificationModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <form onSubmit={handleSaveNotification}>
                            <label>
                                Título:
                                <input
                                    type="text"
                                    name="title"
                                    value={newNotification.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Descrição:
                                <textarea
                                    name="description"
                                    value={newNotification.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Importância:
                                <select
                                    name="importance"
                                    value={newNotification.importance}
                                    onChange={handleInputChange}
                                >
                                    <option value="alta">Importante</option>
                                    <option value="baixa">Não tão importante</option>
                                </select>
                            </label>
                            <button type="submit">Salvar</button>
                        </form>
                        <button onClick={closeNotificationModal}>Cancelar</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Notificacao;
