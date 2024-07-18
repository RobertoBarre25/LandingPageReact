import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const scrollToMiddle = () => {
    const targetPosition = window.innerHeight * 1.8;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

function Services() {
    return (

        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <header className="fixed top-0 left-0 w-full z-5 transition-all duration-800 ease-in-out h-16 bg-transparent">
                {/* Contenido del header */}
            </header>
            <div className="relative flex items-center justify-center h-full z-3">
                <div className="text-center text-white">
                    <h1 className="text-7xl md:text-9xl font-bold">Grupo Alternativas Soluciones</h1>
                    <button className="mt-16 px-10 py-6 md:py-8 border border-white text-white text-2xl md:text-3xl">Conoce Nuestros Servicios</button>
                    <div className="mt-4 flex items-center justify-center">
                        <div className="text-white text-4xl">
                            <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-4xl animate-bounce mr-2 mt-20" />                       
        <div className="flex flex-col min-h-screen">
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <header className="fixed top-0 left-0 w-full z-5 transition-all duration-800 ease-in-out h-16 bg-transparent">
                    {/* Contenido del header */}
                </header>
                <div className="relative flex items-center justify-center h-full z-3">
                    <div className="text-center text-white">
                        <h1 className="text-7xl md:text-9xl font-bold">Grupo Alternativas Solucione</h1>
                        <button className="mt-16 px-10 py-6 md:py-8 border border-white text-white text-2xl md:text-3xl" onClick={scrollToMiddle}>Conoce Nuestros Servicios</button>
                        <div className="mt-4 flex items-center justify-center">
                            <div className="text-white text-4xl">
                                <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-4xl animate-bounce mr-2 mt-20" />
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="relative z-5 p-8 flex-grow">
                <h2 className="text-7xl font-bold text-center text-gray-700 mb-16 mr-4 mt-8 ml-5">Servicios</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[{ place: 'Cámaras de videovigilancia', discount: '-15%', rating: 5, reviews: 10, img: 'https://i.pinimg.com/564x/96/fb/ce/96fbce687cd179fe05c90731e658c7c2.jpg', link: '/camaras' },
                    { place: 'Routers', discount: '-15%', rating: 4, reviews: 8, img: 'https://i.pinimg.com/564x/e3/da/05/e3da05fff94eea57cf8b7395cc6f9979.jpg', link: '/routers' },
                    { place: 'Instalación de fibra', discount: '-15%', rating: 3, reviews: 12, img: 'https://i.pinimg.com/564x/b1/e0/15/b1e0155a8cc3db972b7cb9cb6ffc79f4.jpg', link: '/fibra' },
                    { place: 'Mantenimiento de equipos', discount: '-15%', rating: 4, reviews: 5, img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/mantenimiento' },
                    { place: 'Protección antivirus', discount: '-15%', rating: 5, reviews: 10, img: 'https://i.pinimg.com/564x/a1/4c/38/a14c383ac13d55e1ff84fb4b64c9c8ff.jpg', link: '/antivirus' },
                    { place: 'Maldives', discount: '-20%', rating: 5, reviews: 10, img: 'https://i.pinimg.com/564x/96/fb/ce/96fbce687cd179fe05c90731e658c7c2.jpg', link: '/maldives' },
                    { place: 'PhongNha, Vietnam',  discount: '-15%', rating: 4, reviews: 7, img: 'https://i.pinimg.com/564x/e3/da/05/e3da05fff94eea57cf8b7395cc6f9979.jpg', link: '/phongnha' },
                    { place: 'Namdu Islands',  discount: '-10%', rating: 4, reviews: 9, img: 'https://i.pinimg.com/564x/b1/e0/15/b1e0155a8cc3db972b7cb9cb6ffc79f4.jpg', link: '/namdu' },
                    { place: 'Santorini, Greece', discount: '-15%', rating: 5, reviews: 11, img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/santorini' },
                    { place: 'Santorini, Greece', discount: '-15%', rating: 5, reviews: 11, img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/santorini' },
                    { place: 'Santorini, Greece', discount: '-15%', rating: 5, reviews: 11, img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/santorini' },
                    { place: 'Santorini, Greece', discount: '-15%', rating: 5, reviews: 11, img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg', link: '/santorini' },
                    ].map((deal, index) => (
                        <div key={index} className="relative border-none group m-4">
                            <div className="relative overflow-hidden h-80 w-full border-none">
                                <div className="absolute inset-0 bg-black opacity-25"></div>
                                <img src={deal.img} alt={deal.place} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <h3 className="text-white text-2xl">{deal.place}</h3>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-center items-end">
                                    <div className="text-center mb-8">
                                        <a href={deal.link} className="text-white underline hover:no-underline">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
