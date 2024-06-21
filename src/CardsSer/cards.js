import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    {
        imgSrc: 'https://9nn339.p3cdn2.secureserver.net/wp-content/uploads/2023/03/seguridad-nube.jpg',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Descubrir'
    },
    {
        imgSrc: 'https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Gestión de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Descubrir'
    },
    {
        imgSrc: 'https://lh3.googleusercontent.com/proxy/o7XhzmquUmwze9Qb1LEuHF457_1umUXCGvM_fpvHKqv40YWnrgvdbk1bH8Y0ZSDmS4ryfMwaXECIAYVpWA2MYuZUxMVfdC7qnHnktvCFGX7KfA4m_P9UlGFLE6nsG-ZfXZ6qokdtAPnLHjbUTpa8xrLfdnfTqBS-OVw',
        title: 'Protección de correo electrónico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Información'
    },
];

const Cards = () => {
    const navigate = useNavigate();

    return (
        <div className="mx-4 md:mx-12 lg:mx-20">
            <div className="grid grid-cols-2 gap-0">
                {cardsData.map((card, index) => (
                    <div key={index} className="relative h-[500px] border-none group">
                        <div className="relative overflow-hidden h-full border-none">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            <div className="absolute bottom-2.5 w-full text-center text-white p-2.5 z-10 transition-all duration-300 ease-in-out group-hover:bottom-full">
                                {card.title}
                            </div>
                            <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-all duration-300 ease-in-out flex flex-col justify-center items-center group-hover:bottom-0">
                                <div className="text-center">
                                    <h3 className="text-xl mb-2.5">{card.title}</h3>
                                    <p className="text-base mb-3.75">{card.description}</p>
                                    <button className="bg-blue-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-300 ease-in-out uppercase rounded-md hover:bg-blue-700" onClick={() => navigate('/contact')}>{card.buttonText}</button>
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
