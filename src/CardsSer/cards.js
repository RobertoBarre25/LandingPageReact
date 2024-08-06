import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        navigate('/contact', { state: { service } });
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
