// body.js
import React from 'react';
import './body.css';

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
    </div>
  );
};

export default Body;
