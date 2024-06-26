import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    {
        imgSrc: '1.png',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Descubrir'
    },
    {
        imgSrc: '2.png',
        title: 'Gestión de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: '4.png',
        title: 'Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Descubrir'
    },  
    {
        imgSrc: '3.png',
        title: 'Protección de correo electrónico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Información'
    },
];

const Cards = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact', { replace: true });
        setTimeout(() => {
            const formElement = document.getElementById('contact-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Espera un breve momento para asegurar que la navegación se complete
    };

    return (
        <div className="mx-4 md:mx-12 lg:mx-20">
            <div className="grid grid-cols-2 gap-0">
                {cardsData.map((card, index) => (
                    <div key={index} className="relative h-[800px] border-none group">
                        <div className="relative overflow-hidden h-full border-none">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            <div className="absolute bottom-2.5 w-full text-center text-white p-2.5 z-10 transition-all duration-300 ease-in-out group-hover:bottom-full">
                                {card.title}
                            </div>
                            <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-all duration-300 ease-in-out flex flex-col justify-center items-center group-hover:bottom-0">
                                <div className="text-center">
                                    <h3 className="text-xl mb-2.5">{card.title}</h3>
                                    <p className="text-base mb-3.75">{card.description}</p>
                                    <button className="bg-blue-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-300 ease-in-out uppercase rounded-md hover:bg-blue-700" onClick={handleButtonClick}>{card.buttonText}</button>
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
