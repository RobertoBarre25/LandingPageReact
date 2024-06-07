import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCard = ({ title, description }) => (
  <div className="container mt-4">
    <div className="flex justify-center">
      <div className="w-full md:w-5/12 lg:w-2/12 xl:w-6/12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent overflow-hidden shadow-none rounded-lg flex items-center justify-center h-full">
            <div className="p-4 text-left">
              <h2 className="text-10xl font-serif font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 font-serif">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HorizontalCard;
