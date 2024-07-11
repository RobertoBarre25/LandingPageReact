import React from 'react';

const ImageSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 w-full py-12 bg-beige">
      <div className="text-center mb-12">
        <h3 className="text-7xl font-semibold mb-4 text-blue-500">GPON</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 flex flex-col justify-between mx-6"> 
            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
              <img src="https://i.pinimg.com/564x/c7/57/7c/c7577cb0fbd63a7ef1630a54829fae2c.jpg" alt="Bean Scene" className="w-full h-48 object-cover mb-6 mt-2" />
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
              <img src="https://i.pinimg.com/564x/44/45/07/444507d60bd86c271a0994cfb78571bb.jpg" alt="Trails Head" className="w-full h-48 object-cover mb-6 mt-2" />
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
              <img src="https://i.pinimg.com/564x/41/55/cc/4155cce579c9ae3a9399c146251081e2.jpg" alt="The Alcove" className="w-full h-48 object-cover mb-6 mt-2" />
              <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">Soothe your soul with a forested boardwalk stroll at The Alcove and enjoy a variety of peaceful trails.</p>
              <div className="text-center mt-4">
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
