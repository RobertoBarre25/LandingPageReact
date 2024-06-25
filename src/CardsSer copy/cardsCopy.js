import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const cardsData = [
    {
        imgSrc: 'https://img.freepik.com/free-vector/gradient-technology-api-illustration_23-2149358045.jpg?t=st=1717604505~exp=1717608105~hmac=65fbe0080458f595e4c0501843fb905d1479781875ff763d3b6fec22faa88238&w=740',
        title: 'Antivirus en la nube',
        description: '¿Quieres proteger aplicaciones, infraestructura y datos en entornos de nube?',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?t=st=1717604425~exp=1717608025~hmac=0534d75d4466a9d2f3e3f10fba426ef75655dee3177556650b9c623a61cd8259&w=1060',
        title: 'Gestion de vulnerabilidades',
        description: 'Protege tu negocio identificando y mitigando amenazas antes de que se conviertan en problemas',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/data-management-collective-database-tower-people-share-commonplace-centralized-mainframe-widespread-info-stored-files-custom-regulation-isolated-concept-metaphor-illustration_335657-1194.jpg?t=st=1717604621~exp=1717608221~hmac=5d0085d2c15588bfb205ede65c7e40217a613aecf4e9cfe58392133f00ef3e81&w=740',
        title: ' Sandboxing en la nube',
        description: 'Aísla y analiza amenazas de forma segura para mantener tu entorno protegido',
        buttonText: 'Obtener Informacion'
    },
    {
        imgSrc: 'https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?t=st=1717604425~exp=1717608025~hmac=0534d75d4466a9d2f3e3f10fba426ef75655dee3177556650b9c623a61cd8259&w=1060',
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