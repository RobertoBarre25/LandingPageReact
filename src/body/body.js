import React from 'react';
import './body.css';
import HorizontalCard from '../CardShadow/HorizontalCard';
import Carousel from '../Carousel/carousel';
import Cards from '../CardsSer/cards';
import { animateScroll as scroll } from 'react-scroll'; // Importa la función de scroll suave
import ImageSection from '../ImageSection/ImgSection'; // Importa el nuevo componente
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

const images = [
    'https://cdn-cemnc.nitrocdn.com/VpRCNzZxvcuRoMlvVcXWGPvNRVQJdDtQ/assets/images/optimized/rev-1959f9d/www.networkcablingservices.com/wp-content/uploads/2021/08/Next-Generation-Data-Centers-Everything-You-Need-to-Know.jpeg',
    'https://engineering.fb.com/wp-content/uploads/2018/05/data-center-shot.jpg',
    'https://img.jakpost.net/c/2022/04/01/2022_04_01_124204_1648793484._large.jpg'
];

const Body = () => {
    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    return (
        <div className="bodyPrincipal">
            <div className="carouselContainer">
                <Carousel images={images} />

                <div className="carouselTextFondo">
                    
                    <div className="carouselText">
                        <h1 className="primerTitulo">
                            Antivirus<span className="cloudText">Cloud</span>
                        </h1>
                        <p className='textoSecundario'>Antivirus y antimalware empresarial</p>
                        <p className='textoSecundario'>
                            Protección en tiempo real contra malware basada en la nube.</p>
                        <Link to="/contact"

                        >
                            <button className="botonServiciosAzul">
                                Contrata ya
                            </button>
                        </Link>
                        <button className="botonServiciosTransparente" onClick={scrollToBottom}>
                            Conoce más
                        </button>
                    </div>
                </div>
            </div>
            <HorizontalCard
                imageSrc="https://fundacioncarlosslim.org/wp-content/uploads/2016/11/redes-de-datos.jpg"
                title="Soluciones de redes de voz y datos de vanguardia para su empresa"
                description="En Grupo Alternativas, ofrecemos soluciones de redes de voz y datos a medida, diseñadas para optimizar la comunicación y la productividad de su negocio. Nuestros expertos implementan las tecnologías más avanzadas, asegurando una conectividad confiable y segura"
            />

            <Cards />
            <ImageSection />
        </div>
    );
};

export default Body;
