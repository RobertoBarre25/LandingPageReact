import React from 'react';

function Services() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <header className="fixed top-0 left-0 w-full z-20 transition-all duration-800 ease-in-out h-16 bg-transparent">
        {/* Puedes agregar el contenido del header aquí si es necesario */}
      </header>
      <div className="relative flex items-center justify-center h-full z-30">
        <div className="text-center text-white">
          <h1 className="text-7xl md:text-9xl font-bold">LIVE & TRAVEL</h1>
          <button className="mt-16 px-10 py-6 md:py-8 border border-white text-white text-2xl md:text-3xl">BOOK A TOUR NOW</button>
        </div>
      </div>
      <div className="relative z-30 p-8">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Hot Deals</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { place: 'Maldives', priceOld: '$1500', priceNew: '$1870', days: '4 days', discount: '-20%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
            { place: 'PhongNha, Vietnam', priceOld: '$1500', priceNew: '$1300', days: '5 days', discount: '-15%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
            { place: 'Namdu Islands', priceOld: '$1500', priceNew: '$1459', days: '7 days', discount: '-10%', img: 'https://mytravel.onlywebcoding.com.ua/images/tour-1.png' },
          ].map((deal, index) => (
            <div key={index} className="relative w-80 h-80 bg-cover bg-center overflow-hidden shadow-lg" style={{ backgroundImage: `url(${deal.img})` }}>
              <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 m-2">{deal.discount}</div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 bg-white p-2 shadow-lg">
                <h3 className="text-lg font-semibold">{deal.place}</h3>
                <p className="text-gray-700">{deal.days}</p>
                <p className="text-red-500 line-through">{deal.priceOld}</p>
                <p className="text-green-500">{deal.priceNew}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
