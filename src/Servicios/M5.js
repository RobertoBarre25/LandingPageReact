import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../Carousel/carousel';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const M5 = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [carouselData, setCarouselData] = useState({ sections: [], cards: [], TitlePlantilla: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [mainTag, setMainTag] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/m5')
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

    const handleCardModalOpen = (card, index) => {
        setSelectedCard(card);
        setSelectedCardIndex(index);
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
            MySwal.fire('Error', 'Faltan datos para actualizar', 'error');
            return;
        }

        try {
            await axios.put('http://localhost:5000/api/m5/update-by-tag', {
                ...selectedSection,
                tag: mainTag
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            MySwal.fire('Éxito', 'Datos del carousel actualizados correctamente', 'success');
            handleModalClose();
            const response = await axios.get('http://localhost:5000/api/m5');
            setCarouselData(response.data);
        } catch (error) {
            console.error('Error al actualizar los datos de la sección:', error);
            MySwal.fire('Error', 'Error al actualizar los datos de la sección', 'error');
        }
    };

    const handleUpdateCard = async (event) => {
        event.preventDefault();
        if (!selectedCard || selectedCardIndex === null || !mainTag) {
            console.error('Faltan datos para actualizar la tarjeta');
            MySwal.fire('Error', 'Faltan datos para actualizar la tarjeta', 'error');
            return;
        }

        try {
            await axios.put('http://localhost:5000/api/m5/update-by-tag-cards', {
                tag: mainTag,
                cardIndex: selectedCardIndex,
                ...selectedCard
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            MySwal.fire('Éxito', 'Datos de la tarjeta actualizados correctamente', 'success');
            handleModalClose();
            const response = await axios.get('http://localhost:5000/api/m5');
            setCarouselData(response.data);
        } catch (error) {
            console.error('Error al actualizar los datos de la tarjeta:', error);
            MySwal.fire('Error', 'Error al actualizar los datos de la tarjeta', 'error');
        }
    };

    const images = carouselData.sections ? carouselData.sections.map((item, index) => ({
        src: item.carouselImageUrl,
        text: (
            <div className="carouselText p-4 bg-opacity-75 text-white" key={index}>
            <h1 className="firstText text-3xl font-bold mb-4">
                {item.title.split(' ').map((word, i) => (
                    <span
                        className={`cloudText${i === 0 ? '' : 'Two'}`}
                        key={i}
                        style={{ marginRight: '0.5rem' }} // Ajusta el margen según sea necesario
                    >
                        {word}
                    </span>
                ))}
            </h1>

            <h2 className="secondText text-xl mb-4">
                {item.subtitle.split(' ').map((word, i) => (
                    <span
                        className={`cloudText${i === 0 ? '' : 'Two'}`}
                        key={i}
                        style={{ marginRight: '0.5rem' }} // Ajusta el valor del margen según sea necesario
                    >
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
                    <div className="relative w-full ">
                        <Carousel images={images} currentIndex={currentIndex} />
                    </div>
                    <div className="w-full mt-8 flex overflow-x-auto  space-x-4 justify-center">

                        {carouselData.cards && carouselData.cards.map((card, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 mb-8">

                                <div className="p-6 flex-1 flex flex-col justify-between bg-white">


                                    <div className="relative pb-48">
                                        <img className="absolute inset-0 h-full w-full object-cover" src={card.imageUrl} alt={`Card ${index + 1}`} />
                                    </div>
                                    <div className="pt-4">
                                        <h2 className="font-bold text-xl mb-2">{card.text}</h2>
                                        <div className="flex justify-between items-center">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                                onClick={() => handleClick(card.buttonText)}
                                            >
                                                {card.buttonText}
                                            </button>
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600"
                                                onClick={() => handleCardModalOpen(card, index)}
                                            >
                                                Editar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 w-11/12 md:w-1/2 lg:w-1/3 max-h-full overflow-auto rounded shadow-lg relative">
                                <h2 className="text-2xl font-bold mb-4">Editar Sección</h2>
                                <form onSubmit={handleUpdateSection} className="space-y-4">
                                    <div>
                                        <label htmlFor="title" className="block font-medium">Título:</label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={selectedSection?.title || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subtitle" className="block font-medium">Subtítulo:</label>
                                        <input
                                            type="text"
                                            id="subtitle"
                                            name="subtitle"
                                            value={selectedSection?.subtitle || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block font-medium">Descripción:</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={selectedSection?.description || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="carouselImageUrl" className="block font-medium">URL de la Imagen del Carrusel:</label>
                                        <input
                                            type="text"
                                            id="carouselImageUrl"
                                            name="carouselImageUrl"
                                            value={selectedSection?.carouselImageUrl || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buttonText1" className="block font-medium">Texto del Botón 1:</label>
                                        <input
                                            type="text"
                                            id="buttonText1"
                                            name="buttonText1"
                                            value={selectedSection?.buttonText1 || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buttonAction1" className="block font-medium">Acción del Botón 1:</label>
                                        <input
                                            type="text"
                                            id="buttonAction1"
                                            name="buttonAction1"
                                            value={selectedSection?.buttonAction1 || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buttonText2" className="block font-medium">Texto del Botón 2:</label>
                                        <input
                                            type="text"
                                            id="buttonText2"
                                            name="buttonText2"
                                            value={selectedSection?.buttonText2 || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button
                                            type="button"
                                            onClick={handleModalClose}
                                            className="mr-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {isCardModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 w-11/12 md:w-1/2 lg:w-1/3 max-h-full overflow-auto rounded shadow-lg relative">
                                <h2 className="text-2xl font-bold mb-4">Editar Tarjeta</h2>
                                <form onSubmit={handleUpdateCard} className="space-y-4">
                                    <div>
                                        <label htmlFor="imageUrl" className="block font-medium">URL de la Imagen:</label>
                                        <input
                                            type="text"
                                            id="imageUrl"
                                            name="imageUrl"
                                            value={selectedCard?.imageUrl || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block font-medium">Texto:</label>
                                        <input
                                            type="text"
                                            id="text"
                                            name="text"
                                            value={selectedCard?.text || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buttonText" className="block font-medium">Texto del Botón:</label>
                                        <input
                                            type="text"
                                            id="buttonText"
                                            name="buttonText"
                                            value={selectedCard?.buttonText || ''}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button
                                            type="button"
                                            onClick={handleModalClose}
                                            className="mr-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default M5;
