// body.js
import React from 'react';
import './body.css';
import HorizontalCard from '../CardShadow/HorizontalCard';


const Body = () => {
  return (
    <div className="bodyPrincipal">
      <img
        className="imagenPrincipal"
        src="https://hinforcom.com/wp-content/uploads/2023/07/Guia-sobre-antenas-de-cobertura-movil-scaled.jpg"
        alt="Antenas de cobertura móvil"
      />
      <div className="primerTexto">
        <h1 className="primerTitulo">¿Necesitas una Red de Datos?</h1>
        <p className='textoSecundario'>En Grupo Alternativas y Soluciones te ofrecemos un servicio profesional</p>
      </div>
      <HorizontalCard
          imageSrc="https://fundacioncarlosslim.org/wp-content/uploads/2016/11/redes-de-datos.jpg"
          title="Redes de Datos"
          description="¿Quieres saber sobre los servicios de Redes de Datos?
            En Grupo Alternativas y Soluciones te ofrecemos un servicio profesional."
        />
    </div>
  );
};

export default Body;
