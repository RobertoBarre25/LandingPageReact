import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../Carousel/carousel';
import { useNavigate } from 'react-router-dom';

const M1 = () => {
    const navigate = useNavigate();
    const [carouselData, setCarouselData] = useState({ sections: [], cards: [], TitlePlantilla: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(''); // 'carousel' or 'card'
    const [formData, setFormData] = useState({
        tag: '',
        title: '',
        subtitle: '',
        description: '',
        carouselImageUrl: '',
        buttonText1: '',
        buttonAction1: '',
        buttonText2: '',
        buttonAction2: '',
        cardImageUrl: '',
        cardText: '',
        cardButtonText: '',
        simpleTitle: '',
        simpleSubtitle: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/m1')
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (carouselData.sections ? carouselData.sections.length : 1));
        }, 10000);
        return () => clearInterval(interval);
    }, [carouselData.sections]);

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    const scrollToMiddle = () => {
        const targetPosition = window.innerHeight * 1.8;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    const handleModalOpen = (item, type) => {
        if (type === 'carousel') {
            setFormData({
                tag: item.tag,
                title: item.title,
                subtitle: item.subtitle,
                description: item.description,
                carouselImageUrl: item.carouselImageUrl,
                buttonText1: item.buttonText1,
                buttonAction1: item.buttonAction1,
                buttonText2: item.buttonText2,
                buttonAction2: item.buttonAction2,
                cardImageUrl: '',
                cardText: '',
                cardButtonText: '',
                simpleTitle: '',
                simpleSubtitle: ''
            });
        } else if (type === 'card') {
            setFormData({
                tag: item.tag,
                title: '',
                subtitle: '',
                description: '',
                carouselImageUrl: '',
                buttonText1: '',
                buttonAction1: '',
                buttonText2: '',
                buttonAction2: '',
                cardImageUrl: item.imageUrl,
                cardText: item.text,
                cardButtonText: item.buttonText,
                simpleTitle: item.simpleTitle || '',
                simpleSubtitle: item.simpleSubtitle || ''
            });
        }
        setModalType(type);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/m1/update-by-tag'; // URL para actualizar los datos del carrusel
        axios.put(url, formData)
            .then(response => {
                alert('Información del carrusel actualizada con éxito');
                setModalOpen(false);
                // Actualiza los datos del carrusel en el estado después de la actualización
                setCarouselData(prevData => ({
                    ...prevData,
                    sections: prevData.sections.map(item =>
                        item.tag === formData.tag ? response.data : item
                    )
                }));
            })
            .catch(error => {
                console.error('Error al actualizar la información del carrusel:', error);
                alert('Ocurrió un error al actualizar la información del carrusel');
            });
    };
    
    const images = carouselData.sections ? carouselData.sections.map((item, index) => ({
        src: item.carouselImageUrl,
        text: (
            <div className="carouselText p-4 bg-opacity-75 text-white" key={index}>
                <h1 className="firstText text-3xl font-bold mb-4">
                    {item.title.split(' ').map((word, i) => (
                        <span className={`cloudText${i === 0 ? '' : 'Two'}`} key={i}>
                            {word}
                        </span>
                    ))}
                </h1>
                <h2 className="secondText text-xl mb-4">
                    {item.subtitle.split(' ').map((word, i) => (
                        <span className={`cloudText${i === 0 ? '' : 'Two'}`} key={i}>
                            {word}
                        </span>
                    ))}
                </h2>
                <h3 className="thirdText text-lg">
                    {item.description}
                </h3>
                <div className="flex mt-4">
                    <button 
                        className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                        onClick={() => handleClick(item.buttonAction1)}
                    >
                        {item.buttonText1}
                    </button>
                    <button 
                        className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10"
                        onClick={scrollToMiddle}
                    >
                        {item.buttonText2}
                    </button>
                    <button 
                        className="bg-green-500 text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-green-600"
                        onClick={() => handleModalOpen(item, 'carousel')}
                    >
                        Editar Carrusel
                    </button>
                </div>
            </div>
        )
    })) : [];

    return (
        <div className="flex flex-col items-center">
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <div className="relative w-full">
                        <Carousel images={images} currentIndex={currentIndex} />
                    </div>
                    <div className="text-center mt-8">
                        <button 
                            className="bg-blue-500 text-white py-2 px-4 rounded" 
                            onClick={() => handleModalOpen({}, 'card')}
                        >
                            Editar Tarjetas
                        </button>
                    </div>
                </>
            )}
            {/* Modal para editar el carrusel */}
            {modalOpen && modalType === 'carousel' && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded shadow-lg w-11/12 max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Editar Información del Carrusel</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="title">Título</label>
                                    <input 
                                        type="text" 
                                        id="title" 
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="subtitle">Subtítulo</label>
                                    <input 
                                        type="text" 
                                        id="subtitle" 
                                        name="subtitle"
                                        value={formData.subtitle}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="description">Descripción</label>
                                    <textarea 
                                        id="description" 
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="carouselImageUrl">URL de la Imagen del Carrusel</label>
                                    <input 
                                        type="text" 
                                        id="carouselImageUrl" 
                                        name="carouselImageUrl"
                                        value={formData.carouselImageUrl}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="buttonText1">Texto del Botón 1</label>
                                    <input 
                                        type="text" 
                                        id="buttonText1" 
                                        name="buttonText1"
                                        value={formData.buttonText1}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="buttonAction1">Acción del Botón 1</label>
                                    <input 
                                        type="text" 
                                        id="buttonAction1" 
                                        name="buttonAction1"
                                        value={formData.buttonAction1}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="buttonText2">Texto del Botón 2</label>
                                    <input 
                                        type="text" 
                                        id="buttonText2" 
                                        name="buttonText2"
                                        value={formData.buttonText2}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="buttonAction2">Acción del Botón 2</label>
                                    <input 
                                        type="text" 
                                        id="buttonAction2" 
                                        name="buttonAction2"
                                        value={formData.buttonAction2}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                >
                                    Guardar
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleModalClose}
                                    className="bg-gray-500 text-white py-2 px-4 rounded"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para editar la tarjeta */}
            {modalOpen && modalType === 'card' && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded shadow-lg w-11/12 max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Editar Tarjeta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="cardImageUrl">URL de la Imagen de la Tarjeta</label>
                                    <input 
                                        type="text" 
                                        id="cardImageUrl" 
                                        name="cardImageUrl"
                                        value={formData.cardImageUrl}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="cardText">Texto de la Tarjeta</label>
                                    <textarea 
                                        id="cardText" 
                                        name="cardText"
                                        value={formData.cardText}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="cardButtonText">Texto del Botón de la Tarjeta</label>
                                    <input 
                                        type="text" 
                                        id="cardButtonText" 
                                        name="cardButtonText"
                                        value={formData.cardButtonText}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                >
                                    Guardar
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleModalClose}
                                    className="bg-gray-500 text-white py-2 px-4 rounded"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default M1;
