import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    {
        imgSrc: 'https://i.pinimg.com/564x/fd/a2/65/fda265907b5aa6bb2d4a7b3a990137d8.jpg',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?t=st=1717604425~exp=1717608025~hmac=0534d75d4466a9d2f3e3f10fba426ef75655dee3177556650b9c623a61cd8259&w=1060',
        title: 'Gestión de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/data-management-collective-database-tower-people-share-commonplace-centralized-mainframe-widespread-info-stored-files-custom-regulation-isolated-concept-metaphor-illustration_335657-1194.jpg?t=st=1717604621~exp=1717608221~hmac=5d0085d2c15588bfb205ede65c7e40217a613aecf4e9cfe58392133f00ef3e81&w=740',
        title: 'Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Información'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/phishing-account-concept_23-2148534567.jpg?t=st=1717604789~exp=1717608389~hmac=ddaa03ce140255316e113442a096ceac800b63741c8782dc552f28353e89940a&w=740',
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
