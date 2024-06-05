import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCard = ({ imageSrc, title, description }) => (
  <div className="container mt-4">
    <div className="flex justify-center">
      <div className="w-full md:w-5/12 lg:w-2/12 xl:w-6/12"> {/* Ajuste de las clases de ancho */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-xl transition duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4">
                <img src={imageSrc} alt={title} className="h-auto w-full" />
              </div>
              <div className="p-4">
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            </div>
            <div className="md:hidden bg-white"></div> {/* Espacio adicional en dispositivos móviles */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HorizontalCard;
