import React from 'react';
import './body.css';
import HorizontalCard from '../CardShadow/HorizontalCard';
import Carousel from '../Carousel/carousel'; // Asegúrate de importar el Carousel correctamente
import Cards from '../CardsSer/cards'; // Importa el componente Cards

const images = [
    'https://cdn-cemnc.nitrocdn.com/VpRCNzZxvcuRoMlvVcXWGPvNRVQJdDtQ/assets/images/optimized/rev-1959f9d/www.networkcablingservices.com/wp-content/uploads/2021/08/Next-Generation-Data-Centers-Everything-You-Need-to-Know.jpeg',
    'https://engineering.fb.com/wp-content/uploads/2018/05/data-center-shot.jpg',
    'https://img.jakpost.net/c/2022/04/01/2022_04_01_124204_1648793484._large.jpg'
];

const Body = () => {
  return (
    <div className="bodyPrincipal">
      <div className="carouselContainer">
        <Carousel images={images} /> {/* Integra el Carousel aquí */}
        <div className="carouselTextFondo">
          <div className="carouselText">
            <h1 className="primerTitulo">¿Nececitas una red de datos y ciberseguridad?</h1>
            <p className='textoSecundario'>Manténgase actualizado con las últimas tendencias y novedades en redes de voz y datos a través de nuestro blog.</p>
            <button className="botonServicios">Nuestros Servicios</button>
          </div>
        </div>
      </div>
      <HorizontalCard
          imageSrc="https://fundacioncarlosslim.org/wp-content/uploads/2016/11/redes-de-datos.jpg"
          title="Soluciones de redes de voz y datos de vanguardia para su empresa"
          description="En Grupo Alternativas, ofrecemos soluciones de redes de voz y datos a medida, diseñadas para optimizar la comunicación y la productividad de su negocio. Nuestros expertos implementan las tecnologías más avanzadas, asegurando una conectividad confiable y segura"
      />
      <Cards />
    </div>
  );
};

export default Body;
