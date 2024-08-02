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
    const [selectedSection, setSelectedSection] = useState(null);
    const [mainTag, setMainTag] = useState(''); // Nuevo estado para el tag principal

    useEffect(() => {
        axios.get('http://localhost:5000/api/m1')
            .then(response => {
                setCarouselData(response.data);
                if (response.data.tag) {
                    setMainTag(response.data.tag); // Establecer el tag principal
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
        }, 10000); // Cambia a 10 segundos para que se ajuste a tu configuración
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
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedSection(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedSection(prevSection => ({
            ...prevSection,
            [name]: value
        }));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (!selectedSection || !selectedSection.sectionTag || !mainTag) {
            console.error('Faltan datos para actualizar');
            alert('Faltan datos para actualizar');
            return;
        }

        try {
            await axios.put('http://localhost:5000/api/m1/update-by-tag', {
                ...selectedSection,
                tag: mainTag // Asegúrate de enviar el tag principal
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Datos actualizados correctamente');
            handleModalClose();
            const response = await axios.get('http://localhost:5000/api/m1');
            setCarouselData(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Datos del error:', error.response.data);
                console.error('Código del estado:', error.response.status);
                console.error('Encabezados:', error.response.headers);
            } else if (error.request) {
                console.error('Error en la solicitud:', error.request);
            } else {
                console.error('Error', error.message);
            }
            alert('Error al actualizar los datos');
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Modal para editar sección */}
            {isModalOpen && selectedSection && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Editar Sección</h2>
                        <form onSubmit={handleUpdate}>
                            <input type="hidden" name="tag" value={mainTag} /> {/* Campo oculto para el tag principal */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectionTag">
                                    Tag de la Sección
                                </label>
                                <input
                                    type="text"
                                    name="sectionTag"
                                    value={selectedSection.sectionTag || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Título
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={selectedSection.title || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
                                    Subtítulo
                                </label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={selectedSection.subtitle || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Descripción
                                </label>
                                <textarea
                                    name="description"
                                    value={selectedSection.description || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carouselImageUrl">
                                    URL de la Imagen del Carrusel
                                </label>
                                <input
                                    type="text"
                                    name="carouselImageUrl"
                                    value={selectedSection.carouselImageUrl || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buttonText1">
                                    Texto del Botón 1
                                </label>
                                <input
                                    type="text"
                                    name="buttonText1"
                                    value={selectedSection.buttonText1 || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buttonAction1">
                                    Acción del Botón 1
                                </label>
                                <input
                                    type="text"
                                    name="buttonAction1"
                                    value={selectedSection.buttonAction1 || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buttonText2">
                                    Texto del Botón 2
                                </label>
                                <input
                                    type="text"
                                    name="buttonText2"
                                    value={selectedSection.buttonText2 || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subSection">
                                    Sub-Sección
                                </label>
                                <input
                                    type="text"
                                    name="subSection"
                                    value={selectedSection.subSection || ''}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded"
                                >
                                    Actualizar
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
