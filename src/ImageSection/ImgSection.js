import React from 'react';

const ImageSection = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-20"> 
      <div className="mt-20"> 
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <div className="relative w-full h-64"> 
              <img src="https://i.pinimg.com/564x/c7/57/7c/c7577cb0fbd63a7ef1630a54829fae2c.jpg" alt="Configurador Ducati" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-75 transition-opacity duration-500 flex items-center justify-center opacity-0 hover:opacity-90">
                <div className="text-white text-center text-xl">Configurador Ducati</div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <div className="relative w-full h-64"> 
              <img src="https://i.pinimg.com/564x/44/45/07/444507d60bd86c271a0994cfb78571bb.jpg" alt="Mantenimiento transparente" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-75 transition-opacity duration-500 flex items-center justify-center opacity-0 hover:opacity-90">
                <div className="text-white text-center text-xl">Mantenimiento transparente</div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <div className="relative w-full h-64"> 
              <img src="https://i.pinimg.com/564x/41/55/cc/4155cce579c9ae3a9399c146251081e2.jpg" alt="Localizador de concesionarios" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-75 transition-opacity duration-500 flex items-center justify-center opacity-0 hover:opacity-90">
                <div className="text-white text-center text-xl">Localizador de concesionarios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
