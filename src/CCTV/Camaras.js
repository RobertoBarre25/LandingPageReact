import React, { useState, useEffect } from 'react';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: 'https://www.ventasdeseguridad.com/images/stories/VDS/2022/Ciudades_con_ms_cmaras_de_CCTV.jpg',
            alt: 'AntivirusCloud',
            title: 'AntivirusCloud',
            subtitle: 'Protección Empresarial de Ultima Generacion',
            description: '¡Protege tu empresa como nunca antes! Nuestro AntivirusCloud ofrece defensa en tiempo real contra malware, impulsada por la tecnología más avanzada en la nube. No permitas que las amenazas cibernéticas pongan en riesgo tu negocio. ¡Con AntivirusCloud, mantén tus datos seguros y enfócate en lo que mejor sabes hacer!'
        },
        {
            src: 'https://pluginc.mx/wp-content/uploads/2021/09/camaras-fuera-del-negocio-1024x591.jpg',
            alt: 'CyberSecure',
            title: 'CyberSecure',
            subtitle: 'La Mejor Defensa Contra Amenazas Cibernéticas',
            description: '¡Protege tu empresa al máximo! Con CyberSecure, obtén protección integral contra todas las amenazas cibernéticas. Nuestra solución ofrece una defensa proactiva que garantiza la seguridad de tu red empresarial. No dejes que los ciberataques amenacen tu éxito. ¡Confía en CyberSecure y mantén tu negocio a salvo!'
        },
        {
            src: 'https://img.freepik.com/fotos-premium/camara-cctv-ciudad-inteligente-camaras-seguridad-videovigilancia-realistas_458168-4441.jpg',
            alt: 'CloudGuard',
            title: 'CloudGuard',
            subtitle: 'Seguridad y Eficiencia en la Nube',
            description: '¡Protege y optimiza tus datos como nunca antes! Con CloudGuard, disfruta de monitoreo continuo y protección avanzada para todos tus datos en la nube. No dejes que las amenazas cibernéticas te tomen por sorpresa. ¡Confía en CloudGuard y mantén tu información segura y eficiente en todo momento!'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    const scrollToMiddle = () => {
        // Función para hacer scroll o cualquier otra acción al hacer clic en "Conoce más"
    };

    const handleClick = (message) => {
        // Función para manejar el clic en el botón de contratación
        console.log(message); // Aquí puedes hacer algo con el mensaje, como enviarlo a una API, etc.
    };

    return (
        <div>
            <div className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out transform 
                            ${index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                        `}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
                        <div className="carousel-text absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-12 lg:px-16">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">{image.title}</h2>
                            {image.subtitle && <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">{image.subtitle}</h3>}
                            <p className="text-xl md:text-2xl lg:text-3xl mb-8">{image.description}</p>
                            <div>
                                <button 
                                    className="bg-blue-500 border-2 border-white text-white border-none text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                                    onClick={() => handleClick(`Me interesa el servicio: ${image.title}`)}
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
                    </div>
                ))}
                <div className="carousel-indicators absolute flex justify-end space-x-2 bottom-4 right-4">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-indicator inline-block cursor-pointer rounded-full transition-all duration-300 
                                ${index === currentIndex ? 'w-3 h-3 bg-blue-500' : 'w-2 h-2 bg-white'}
                            `}
                            onClick={() => setSlide(index)}
                            style={{ marginTop: index === currentIndex ? '-1px' : '0' }}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="px-4 md:px-8 lg:px-12 w-full py-12 bg-beige">
                <div className="text-center mb-12">
                    <h3 className="text-7xl font-semibold mb-4 text-blue-500">Cámaras de videovigilancia</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Ejemplo de otros componentes o secciones que puedas tener debajo del carousel */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 flex flex-col justify-between mx-6"> 
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/564x/fb/4a/eb/fb4aeba0ab61ab26b7dd99faf8d8b668.jpg" alt="Bean Scene" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Get your caffeine fix at the cozy, local cafe or discover their sweet treat options for non-caffeine lovers at Bean Scene.</p>
                                <div className="text-center mt-4">
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 flex flex-col justify-between mx-6"> 
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/564x/48/63/81/4863814d4f99efd2025d692a52e67dbe.jpg" alt="Trails Head" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Dip your boots in the sand and explore one of the most popular beaches in the area at Trails Head.</p>
                                <div className="text-center mt-4">
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 flex flex-col justify-between mx-6"> 
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <img src="https://i.pinimg.com/564x/6a/76/7e/6a767e4d10a6abeeb5e03bb1981d6853.jpg" alt="The Alcove" className="w-full h-48 object-cover mb-6 mt-2" />
                                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Soothe your soul with a forested boardwalk stroll at The Alcove and enjoy a variety of peaceful trails.</p>
                                <div className="text-center mt-4">
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default App;
