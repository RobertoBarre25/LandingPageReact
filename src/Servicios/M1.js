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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [mainTag, setMainTag] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/m1')
            .then(response => {
                setCarouselData(response.data);
                if (response.data.tag) {
                    setMainTag(response.data.tag);
                }
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
            setCurrentIndex(prevIndex => (prevIndex + 1) % (carouselData.sections ? carouselData.sections.length : 1));
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

    const handleModalOpen = (section) => {
        setSelectedSection(section);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Deshabilitar el scroll en el cuerpo
    };

    const handleCardModalOpen = (card) => {
        setSelectedCard(card);
        setIsCardModalOpen(true);
        document.body.style.overflow = 'hidden'; // Deshabilitar el scroll en el cuerpo
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsCardModalOpen(false);
        setSelectedSection(null);
        setSelectedCard(null);
        document.body.style.overflow = 'auto'; // Habilitar el scroll en el cuerpo
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (selectedSection) {
            setSelectedSection(prevSection => ({
                ...prevSection,
                [name]: value
            }));
        }
        if (selectedCard) {
            setSelectedCard(prevCard => ({
                ...prevCard,
                [name]: value
            }));
        }
    };

    const handleUpdateSection = async (event) => {
        event.preventDefault();
        if (!selectedSection || !selectedSection.sectionTag || !mainTag) {
            console.error('Faltan datos para actualizar');
            alert('Faltan datos para actualizar');
            return;
        }

        try {
            await axios.put('http://localhost:5000/api/m1/update-by-tag', {
                ...selectedSection,
                tag: mainTag
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            alert('Datos de la sección actualizados correctamente');
            handleModalClose();
            const response = await axios.get('http://localhost:5000/api/m1');
            setCarouselData(response.data);
        } catch (error) {
            console.error('Error al actualizar los datos de la sección:', error);
            alert('Error al actualizar los datos de la sección');
        }
    };

    const handleUpdateCard = async (event) => {
        event.preventDefault();
        if (!selectedCard) {
            console.error('Faltan datos para actualizar la tarjeta');
            alert('Faltan datos para actualizar la tarjeta');
            return;
        }

        try {
            await axios.put('http://localhost:5000/api/m1', {
                ...selectedCard
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            alert('Datos de la tarjeta actualizados correctamente');
            handleModalClose();
            const response = await axios.get('http://localhost:5000/api/m1');
            setCarouselData(response.data);
        } catch (error) {
            console.error('Error al actualizar los datos de la tarjeta:', error);
            alert('Error al actualizar los datos de la tarjeta');
        }
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
                        className="bg-green-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-green-600"
                        onClick={() => handleModalOpen(item)}
                    >
                        Editar
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
                        {carouselData.TitlePlantilla.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-bold mb-4">{carouselData.TitlePlantilla[0].title}</h2>
                                <p className="text-lg">{carouselData.TitlePlantilla[0].subtitle}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {carouselData.cards && carouselData.cards.map((card, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                                <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between mx-6">
                                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                        <img src={card.imageUrl} alt={`Card ${index}`} className="w-full h-48 object-cover mb-6 mt-2" />
                                        <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">{card.text}</p>
                                        <div className="text-center mt-4">
                                            <button className="bg-blue-500 text-white py-2 px-4 rounded">{card.buttonText}</button>
                                            <button 
                                                className="bg-green-500 text-white py-2 px-4 rounded ml-4"
                                                onClick={() => handleCardModalOpen(card)}
                                            >
                                                Editar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {isModalOpen && selectedSection && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-full overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Editar Sección del Carousel </h2>
                        <form onSubmit={handleUpdateSection}>
                            
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Título:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={selectedSection.title}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Subtítulo:</label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={selectedSection.subtitle}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Descripción:</label>
                                <textarea
                                    name="description"
                                    value={selectedSection.description}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 h-24"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">URL de la Imagen del Carrusel:</label>
                                <input
                                    type="text"
                                    name="carouselImageUrl"
                                    value={selectedSection.carouselImageUrl}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Texto del Botón 1:</label>
                                <input
                                    type="text"
                                    name="buttonText1"
                                    value={selectedSection.buttonText1}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Acción del Botón 1:</label>
                                <input
                                    type="text"
                                    name="buttonAction1"
                                    value={selectedSection.buttonAction1}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Texto del Botón 2:</label>
                                <input
                                    type="text"
                                    name="buttonText2"
                                    value={selectedSection.buttonText2}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                                    onClick={handleModalClose}
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isCardModalOpen && selectedCard && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-full overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Editar Tarjeta</h2>
                        <form onSubmit={handleUpdateCard}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">URL de la Imagen:</label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    value={selectedCard.imageUrl}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Texto:</label>
                                <textarea
                                    name="text"
                                    value={selectedCard.text}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 h-24"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Texto del Botón:</label>
                                <input
                                    type="text"
                                    name="buttonText"
                                    value={selectedCard.buttonText}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                                    onClick={handleModalClose}
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Guardar Cambios
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
