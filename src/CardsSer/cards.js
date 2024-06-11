import React from 'react';
import './cards.css';
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
        imgSrc: 'https://img.freepik.com/free-photo/i-see-how-man-had-worried-this-moment-polygraph-examiner-works-office-with-his-lie-detector-s-equipment_146671-17245.jpg?t=st=1718130478~exp=1718134078~hmac=91d8a3b389e247b06d0ec579711e5732a1af65bed8928fd273bdc6b48ed09a4c&w=1380',
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
        <div className="cards-container">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-image-container">
                        <img src={card.imgSrc} alt={card.title} className="card-img" />
                        <div className="card-title-overlay">{card.title}</div>
                        <div className="card-overlay">
                            <div className="card-text">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                                <button className="btn btn-primary" onClick={() => navigate('/info')}>{card.buttonText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
