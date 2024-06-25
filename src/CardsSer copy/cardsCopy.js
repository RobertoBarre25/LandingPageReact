import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const cardsData = [
    {
        imgSrc: '',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: '',
        title: 'Gestion de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: '',
        title: ' Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: '',
        title: 'Proteccion de correo electronico',
        description: 'Defiende tu bandeja de entrada contra amenazas y fraudes con seguridad avanzada',
        buttonText: 'Obtener Informacion'
    },
    
  

];
const Cards = () => {
    const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  
    return (
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imgSrc} alt={card.title} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
              <button className="btn btn-primary" onClick={() => navigate('/info')}>{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Cards;