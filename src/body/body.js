import './body.css';
import HorizontalCard from '../CardShadow/HorizontalCard';
import Carousel from '../Carousel/carousel';
import Cards from '../CardsSer/cards';
import ImageSection from '../ImageSection/ImgSection';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import AuthContext from '../AuthContext';

const scrollToMiddle = () => {
    const targetPosition = window.innerHeight * 1.8;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

const Body = () => {
    const navigate = useNavigate();
    const [principalText, setPrincipalText] = useState('');
    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAuthenticated } = useContext(AuthContext); // Get the isAuthenticated status from AuthContext

    const [showEditModal, setShowEditModal] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(null);
    const [editText, setEditText] = useState({
        title: '',
        subtitle: '',
        description: '',
        buttonText1: '',
        buttonText2: '',
        imageUrl: '' 
    });

    useEffect(() => {
        // Obtener el texto principal
        axios.get('http://localhost:5000/api/body')
            .then(response => {
                setPrincipalText(response.data.principalText);
            })
            .catch(error => {
                console.error('Error al obtener el texto principal:', error);
                setError('Ocurrió un error al obtener el texto principal');
            });

        // Obtener los datos del carrusel
        axios.get('http://localhost:5000/api/carousel')
            .then(response => {
                setCarouselData(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos del carrusel:', error);
                setError('Ocurrió un error al obtener los datos del carrusel');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    const handleEditClick = (item) => {
        setCurrentEdit(item);
        setEditText({
            title: item.title,
            subtitle: item.subtitle,
            description: item.description,
            buttonText1: item.buttonText1,
            buttonText2: item.buttonText2,
            imageUrl: item.imageUrl,
        });
        setShowEditModal(true);
    };

    const handleSaveEdit = async () => {
        try {
            // Crear el objeto de actualización con sectionTag
            const updatedItem = {
                ...editText,
                sectionTag: currentEdit.sectionTag
            };
    
            // Enviar la solicitud al backend
            await axios.put('http://localhost:5000/api/carousel/update-by-section-tag', updatedItem);
    
            // Actualizar el estado local
            const updatedData = carouselData.map(item =>
                item.sectionTag === currentEdit.sectionTag ? { ...item, ...editText } : item
            );
            setCarouselData(updatedData);
    
            // Cerrar el modal
            setShowEditModal(false);
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            setError('Ocurrió un error al guardar los cambios');
        }
    };
    

    const images = carouselData.map(item => ({
        src: item.imageUrl,
        text: (
            <div className="carouselText" key={item._id}>
                <h1 className="firstText">
                    {item.title.split(' ')[0]}<span className="cloudText">{item.title.split(' ')[1]}</span>
                </h1>
                <h2 className="secondText">
                    ¡<span className="cloudTextTwo">{item.subtitle.split(' ')[0]}</span> {item.subtitle.split(' ').slice(1).join(' ')}!
                </h2>
                <h3 className="thirdText">
                    {item.description}
                </h3>
                <button 
                    className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                    onClick={() => handleClick(item.buttonAction1)}
                >
                    {item.buttonText1}
                </button>
                {item.buttonText2 && (
                    <button 
                        className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10"
                        onClick={scrollToMiddle}
                    >
                        {item.buttonText2}
                    </button>
                )}
                      {isAuthenticated && (

                <button
                    className="bg-green-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-green-600"
                    onClick={() => handleEditClick(item)}
                >
                    Editar
                </button>
                 )}
            </div>
        )
    }));
    

    return (
        <div className="flex flex-col items-center">
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <HorizontalCard
                        title={principalText}
                        videoSrc='videoTel.mp4'
                    />
                    <div className="relative w-full">
                        <Carousel images={images} />
                    </div>
                </>
            )}
            <ImageSection />
            <Cards />

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Editar Elemento</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            {/* Campo oculto para sectionTag */}
            <Form.Group controlId="formSectionTag">
                <Form.Control
                    type="hidden"
                    value={currentEdit?.sectionTag || ''}
                />
            </Form.Group>

            <Form.Group controlId="formTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    type="text"
                    value={editText.title}
                    onChange={(e) => setEditText({ ...editText, title: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formSubtitle">
                <Form.Label>Subtítulo</Form.Label>
                <Form.Control
                    type="text"
                    value={editText.subtitle}
                    onChange={(e) => setEditText({ ...editText, subtitle: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    type="text"
                    value={editText.description}
                    onChange={(e) => setEditText({ ...editText, description: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formButtonText1">
                <Form.Label>Texto del Botón 1</Form.Label>
                <Form.Control
                    type="text"
                    value={editText.buttonText1}
                    onChange={(e) => setEditText({ ...editText, buttonText1: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formButtonText2">
                <Form.Label>Texto del Botón 2</Form.Label>
                <Form.Control
                    type="text"
                    value={editText.buttonText2}
                    onChange={(e) => setEditText({ ...editText, buttonText2: e.target.value })}
                />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cerrar
        </Button>
        <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
        </Button>
    </Modal.Footer>
</Modal>

        </div>
    );
};

export default Body;
