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

const M1 = () => {
    const navigate = useNavigate();
    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtener los datos del carrusel
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

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    // Mapea los datos del carrusel a la estructura requerida
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
            </div>
        )
    }));

    return (
        <div className="flex flex-col items-center">
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <div className="relative w-full">
                        <Carousel images={images} />
                    </div>
                    <div className="text-center mt-8">
                        <h2 className="text-3xl font-bold mb-4">Tu Título Aquí</h2>
                        <p className="text-lg">Aquí va el texto que deseas mostrar después del carrusel. Puedes añadir información adicional, descripciones, o cualquier otro contenido que desees presentar.</p>
                    </div>
                </>
            )}
           
        </div>
    );
};

export default M1;
