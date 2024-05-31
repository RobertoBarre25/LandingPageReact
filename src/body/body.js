import React from 'react';
import './body.css';

const body = () => {
  return (
    <body className="bodyPrincipal">
        
        <img 
        className="imagenPrincipal" 
        src="https://hinforcom.com/wp-content/uploads/2023/07/Guia-sobre-antenas-de-cobertura-movil-scaled.jpg"
        />

        <div className="primerTexto">
            <h1 className="primerTitulo">¿Nececitas una Red de Datos?</h1>
            <p className='textoSecundario'>En Grupo Alternativas y Solucione te ofrecemos un servicio profesional </p>
        </div>

    </body>
  );
};

export default body