import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    const cardsData = [
        {
            imgSrc: 'ANTIVIRUS.png',
            title: 'Antivirus en la nube',
            description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
            buttonText: 'Descubrir',
            service: 'Antivirus en la nube'
        },
        {
            imgSrc: 'GESTION.png',
            title: 'Gestión de vulnerabilidades',
            description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
            buttonText: 'Obtener Información',
            service: 'Gestión de vulnerabilidades'
        },
        {
            imgSrc: 'SAND.png',
            title: 'Sandboxing en la nube',
            description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
            buttonText: 'Descubrir',
            service: 'Sandboxing en la nube'
        },
        {
            imgSrc: 'PROTEC.png',
            title: 'Protección de correo electrónico',
            description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
            buttonText: 'Obtener Información',
            service: 'Protección de correo electrónico'
        },
    ];

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {cardsData.map((card, index) => (
                    <div key={index} className="relative h-[800px] border-none group">
                        <div className="relative overflow-hidden h-full border-none">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-all duration-700 ease-in-out flex flex-col justify-center items-center group-hover:bottom-0">
                                <div className="text-center">
                                    <h3 className="text-xl mb-2.5">{card.title}</h3>
                                    <p className="text-base mb-3.75">{card.description}</p>
                                    <button onClick={() => handleClick(card.service)} className="bg-blue-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-700 ease-in-out uppercase rounded-md hover:bg-blue-700">{card.buttonText}</button>
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
