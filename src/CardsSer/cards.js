import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    {
        imgSrc: 'https://img.freepik.com/premium-photo/sticky-note-crumpled-paper-with-laptop-computer-cloud-network-sign-as-concept_103164-652.jpg?w=900',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Información'
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
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: 'https://img.freepik.com/free-photo/device-protected-by-cyber-security_23-2149270833.jpg?t=st=1718130908~exp=1718134508~hmac=2581cff38c13dff19def5b38d70470c2736ec71c0438f36bc02eacb1d6332f6d&w=1380',
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
                                    <button className="bg-blue-500 text-white py-2.5 px-5 border-none cursor-pointer transition-colors duration-300 ease-in-out uppercase rounded-md hover:bg-blue-700" onClick={() => navigate('/info')}>{card.buttonText}</button>
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
