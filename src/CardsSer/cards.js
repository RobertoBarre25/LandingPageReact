import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import AuthContext from '../AuthContext'; // Asegúrate de que la ruta sea correcta

const Cards = () => {
    const navigate = useNavigate();
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(null);
    const [editCard, setEditCard] = useState({
        sectionTagC: '', // Asegúrate de incluir el campo sectionTagC
        imgSrc: '',
        title: '',
        description: '',
        buttonText: '',
        service: ''
    });

    const { isAuthenticated } = useContext(AuthContext); // Obtener el estado de autenticación

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards-end');
                const allCards = response.data.flatMap(item => item.sectionCardsEnd);
                setCardsData(allCards);
            } catch (err) {
                console.error('Error al obtener los datos de los cards:', err);
                setError('Ocurrió un error al obtener los datos de los cards');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClick = (service) => {
        console.log('Button clicked, service:', service); // Debugging
        navigate('/contact', { state: { service } });
    };

    const handleEditClick = (card) => {
        setCurrentEdit(card);
        setEditCard({
            sectionTagC: card.sectionTagC, // Asegúrate de incluir el campo sectionTagC
            imgSrc: card.imgSrc,
            title: card.title,
            description: card.description,
            buttonText: card.buttonText,
            service: card.service
        });
        setShowEditModal(true);
    };

    const handleSaveEdit = async () => {
        try {
            const response = await axios.put('http://localhost:5000/api/update-cards-end', editCard);
            console.log('Actualización exitosa:', response.data);

            // Actualiza el estado local con los datos actualizados
            const updatedData = cardsData.map(card => 
                card.sectionTagC === editCard.sectionTagC ? { ...card, ...editCard } : card
            );
            setCardsData(updatedData);
            setShowEditModal(false);
        } catch (error) {
            console.error('Error al actualizar:', error);
            setError('Ocurrió un error al actualizar el card');
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {cardsData.map((card, index) => (
                    <div key={index} className="relative border-none group">
                        <div className="relative overflow-hidden h-96 md:h-auto border-none">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-all duration-700 ease-in-out flex flex-col justify-center items-center group-hover:bottom-0">
                                <div className="text-center">
                                    <h3 className="text-xl mb-2.5">{card.title}</h3>
                                    <p className="text-base mb-3.75">{card.description}</p>
                                    <button
                                        onClick={() => handleClick(card.service)}
                                        className="bg-blue-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-700 ease-in-out uppercase rounded-md hover:bg-blue-700"
                                    >
                                        {card.buttonText}
                                    </button>
                                    {isAuthenticated && ( // Mostrar solo si está autenticado
                                        <button
                                            onClick={() => handleEditClick(card)}
                                            className="bg-green-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-700 ease-in-out uppercase rounded-md hover:bg-green-600 mt-2"
                                        >
                                            Editar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formSectionTagC">
                            <Form.Label>Tag de la Sección</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.sectionTagC}
                                onChange={(e) => setEditCard({ ...editCard, sectionTagC: e.target.value })}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group controlId="formImgSrc">
                            <Form.Label>Imagen URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.imgSrc}
                                onChange={(e) => setEditCard({ ...editCard, imgSrc: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.title}
                                onChange={(e) => setEditCard({ ...editCard, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.description}
                                onChange={(e) => setEditCard({ ...editCard, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formButtonText">
                            <Form.Label>Texto del Botón</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.buttonText}
                                onChange={(e) => setEditCard({ ...editCard, buttonText: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formService">
                            <Form.Label>Servicio</Form.Label>
                            <Form.Control
                                type="text"
                                value={editCard.service}
                                onChange={(e) => setEditCard({ ...editCard, service: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Cards;
