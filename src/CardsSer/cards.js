import React from 'react';
import './cards.css';

const cardsData = [
    {
        imgSrc: 'https://i.pinimg.com/564x/52/01/a3/5201a341a82883d4880ceab7723516d1.jpg',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/736x/e5/02/c7/e502c75e893f17a8f02c955ad236da44.jpg',
        title: 'Gestion de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/18/92/77/189277a82bbaae87d3c69182dc905248.jpg',
        title: ' Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    }
    ,
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://i.pinimg.com/564x/b6/33/c7/b633c7676750cd6bdb233be0e942e22b.jpg',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    }

];

const Cards = () => {
    return (
        <div className="cardsSer-container">
            {cardsData.map((card, index) => (
                <div className="cardsSer-card" key={index}>
                    <img src={card.imgSrc} alt={card.title} className="cardsSer-card-img" />
                    <div className="cardsSer-card-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <button>{card.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
