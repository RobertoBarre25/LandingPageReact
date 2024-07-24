import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const scrollToMiddle = () => {
    const targetPosition = window.innerHeight * 1.8;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

// Componente del carrusel
const Carousel = ({ images, currentIndex, setSlide }) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
                        ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <img
                        src={image.src}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="carousel-text absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8">
                        {image.text}
                    </div>
                </div>
            ))}
            <div className="absolute flex justify-center w-full bottom-4 space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block cursor-pointer rounded-full transition-all duration-300
                            ${index === currentIndex ? 'w-4 h-4 bg-blue-500' : 'w-3 h-3 bg-white'}
                        `}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

// Componente principal de la aplicación
const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = (service) => {
        navigate('/contact', { state: { service } });
    };

    const images = [
        {
            src: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text: (
                <div className="carouselText">
                    <h1 className="firstText">
                        Antivirus<span className="cloudText">Cloud</span>
                    </h1>
                    <h2 className="secondText">
                        ! <span className="cloudTextTwo">Protección </span> Empresarial de <span className="cloudTextTwo">Última </span> Generación¡
                    </h2>
                    <h3 className="thirdText">
                        ¡Protege tu empresa como nunca antes! Nuestro AntivirusCloud ofrece defensa en tiempo real contra malware, impulsada por la tecnología más avanzada en la nube. No permitas que las amenazas cibernéticas pongan en riesgo tu negocio. ¡Con AntivirusCloud, mantén tus datos seguros y enfócate en lo que mejor sabes hacer!
                    </h3>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                            onClick={() => handleClick("Me interesa el servicio: Antivirus Cloud")}
                        >
                            Contrata ya!
                        </button>
                        <button 
                            className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10"
                            onClick={scrollToMiddle}
                        >
                            Conoce más!
                        </button>
                    </div>
                </div>
            )
        },
        {
            src: 'https://news-assets.onvista.com/9/21/ecc00f57c050caa04fb8e379c175894b2b979748ff531742c1213625c05bc610.jpg',
            text: (
                <div className="carouselText">
                    <h1 className="firstText">
                        Cyber<span className="cloudText">Secure</span>
                    </h1>
                    <h2 className="secondText">¡La <span className="cloudTextTwo">Mejor Defensa </span> Contra Amenazas Cibernéticas!</h2>
                    <h3 className="thirdText">
                        ¡Protege tu empresa al máximo! Con CyberSecure, obtén protección integral contra todas las amenazas cibernéticas. Nuestra solución ofrece una defensa proactiva que garantiza la seguridad de tu red empresarial. No dejes que los ciberataques amenacen tu éxito. ¡Confía en CyberSecure y mantén tu negocio a salvo!
                    </h3>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                            onClick={() => handleClick("Me interesa el servicio: Cyber Secure")}
                        >
                            Contrata ya!
                        </button>
                        <button 
                            className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10"
                            onClick={scrollToMiddle}
                        >
                            Conoce más!
                        </button>
                    </div>
                </div>
            )
        },
        {
            src: 'https://img.jakpost.net/c/2022/04/01/2022_04_01_124204_1648793484._large.jpg',
            text: (
                <div className="carouselText">
                    <h1 className="firstText">
                        Cloud<span className="cloudText">Guard</span>
                    </h1>
                    <h2 className="secondText">¡Seguridad y <span className="cloudTextTwo">Eficiencia </span> en la nube!</h2>
                    <h3 className="thirdText">
                        ¡Protege y optimiza tus datos como nunca antes! Con CloudGuard, disfruta de monitoreo continuo y protección avanzada para todos tus datos en la nube. No dejes que las amenazas cibernéticas te tomen por sorpresa. ¡Confía en CloudGuard y mantén tu información segura y eficiente en todo momento!
                    </h3>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                            onClick={() => handleClick("Me interesa el servicio: Cloud Guard")}
                        >
                            Contrata ya!
                        </button>
                        <button 
                            className="border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-white hover:bg-opacity-10"
                            onClick={scrollToMiddle}
                        >
                            Conoce más!
                        </button>
                    </div>
                </div>
            )
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Cambia a 10 segundos para que se ajuste a tu configuración
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className="w-full h-screen overflow-hidden relative">
                <Carousel images={images} currentIndex={currentIndex} setSlide={setCurrentIndex} />
            </div>
            <div className="px-4 md:px-8 lg:px-12 w-full py-12 bg-beige">
                <div className="text-center mb-12">
                    <h3 className="text-7xl font-semibold mb-4 text-blue-500">Routes</h3>
                </div>
                <Element name="highlight" className="element">
                    <motion.section className="container my-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    >
                    <Row className="align-items-center">
                        <Col md={5}>
                        <h2 className="text-center">¡Transforma tu infraestructura de TI!</h2>
                        <p className="text-center small">
                            ¡Regístrate ahora y descubre ofertas exclusivas en servicios de cableado estructurado! No te pierdas esta oportunidad única para transformar tu empresa. ¡El futuro es tuyo!
                        </p>
                        <div className="text-center">
                            <Button variant="primary" size="lg">¡Compra Ahora!</Button>
                        </div>
                        </Col>
                        <Col md={7} className="text-center">
                        <Spline scene="https://prod.spline.design/fm6r9Ujx42txyLnz/scene.splinecode" />
                        </Col>
                    </Row>
                    </motion.section>
                </Element>
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Ejemplo de otros componentes o secciones debajo del carrusel */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between mx-6">
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/564x/68/11/b2/6811b267d09424da65ae68a6614cf6aa.jpg" alt="Bean Scene" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Get your caffeine fix at the cozy, local cafe or discover their sweet treat options for non-caffeine lovers at Bean Scene.</p>
                                <div className="text-center mt-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between mx-6">
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/736x/cd/de/a6/cddea6f8b02876de566e80f89ab9c5f8.jpg" alt="Trails Head" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Dip your boots in the sand and explore one of the most popular beaches in the area at Trails Head.</p>
                                <div className="text-center mt-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between mx-6">
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/564x/67/1c/24/671c24d758623ad3a2d97244a7b4beb1.jpg" alt="The Alcove" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Soothe your soul with a forested boardwalk stroll at The Alcove and enjoy a variety of peaceful trails.</p>
                                <div className="text-center mt-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
