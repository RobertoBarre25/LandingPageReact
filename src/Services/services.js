import React from 'react';

function Services() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <header className="fixed top-0 left-0 w-full z-50 transition-all duration-800 ease-in-out h-16 bg-transparent">
                {/* Contenido del header */}
            </header>
            <div className="relative flex items-center justify-center h-full z-30">
                <div className="text-center text-white">
                    <h1 className="text-7xl md:text-9xl font-bold">Grupo Alternativas Soluciones</h1>
                    <button className="mt-16 px-10 py-6 md:py-8 border border-white text-white text-2xl md:text-3xl">Conócenos</button>
                </div>
            </div>
            <div className="relative z-10 p-8">
                <h2 className="text-4xl font-bold text-center text-black mb-8">Servicios</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {[{ place: 'Cámaras de videovigilancia', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://i.pinimg.com/564x/96/fb/ce/96fbce687cd179fe05c90731e658c7c2.jpg' },
                    { place: 'Routers', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://i.pinimg.com/564x/e3/da/05/e3da05fff94eea57cf8b7395cc6f9979.jpg' },
                    { place: 'Instalación de fibra', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://i.pinimg.com/564x/b1/e0/15/b1e0155a8cc3db972b7cb9cb6ffc79f4.jpg' },
                    { place: 'Mantenimiento de equipos', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://i.pinimg.com/564x/cb/df/89/cbdf8978a85635559958afcd832918cf.jpg' },
                    { place: 'Protección antivirus', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://i.pinimg.com/564x/a1/4c/38/a14c383ac13d55e1ff84fb4b64c9c8ff.jpg' },

                    { place: 'Maldives', priceOld: '$1500', priceNew: '$1870', days: '4 días', discount: '-20%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
                    { place: 'PhongNha, Vietnam', priceOld: '$1500', priceNew: '$1300', days: '5 días', discount: '-15%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
                    { place: 'Namdu Islands', priceOld: '$1500', priceNew: '$1459', days: '7 días', discount: '-10%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
                    { place: 'Santorini, Greece', priceOld: '$1800', priceNew: '$1550', days: '6 días', discount: '-15%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
                    ].map((deal, index) => (
                        <div key={index} className="relative w-80 h-80 bg-cover bg-center overflow-hidden shadow-lg">
                            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 z-40">{deal.discount}</div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2/3 bg-white p-1 shadow-lg z-30 text-xs md:text-sm">
                                <h3 className="text-lg font-semibold">{deal.place}</h3>
                                <p className="text-gray-700">{deal.days}</p>
                                <p className="text-red-500 line-through">{deal.priceOld}</p>
                                <p className="text-green-500">{deal.priceNew}</p>
                            </div>
                            <img src={deal.img} alt={deal.place} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
