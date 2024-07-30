import Carousel from '../Carousel/carousel';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const scrollToMiddle = () => {
    const targetPosition = window.innerHeight * 1.8;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

const M11 = () => {
    const navigate = useNavigate();
    const [carouselData, setCarouselData] = useState({ sections: [], cards: [], TitlePlantilla: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/m11')
            .then(response => {
                console.log(response.data); // Verifica la respuesta
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
        }, 10000); // Cambia a 10 segundos para que se ajuste a tu configuración
        return () => clearInterval(interval);
    }, [carouselData.sections]);

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    // Mapea los datos del carrusel a la estructura requerida
    const images = carouselData.sections ? carouselData.sections.map((item, index) => ({
        src: item.carouselImageUrl, // Cambia a imageUrl para el src de las imágenes
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
        </div>
    );
};

export default M11;
