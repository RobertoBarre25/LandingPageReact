import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSection = () => {
  const [title, setTitle] = useState('');
  const [imageSectionData, setImageSectionData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener el texto principal
    axios.get('http://localhost:5000/api/ImageSection')
      .then(response => {
        setTitle(response.data.title);
      })
      .catch(error => {
        console.error('Error al obtener datos de ImageSection:', error);
        setError('Ocurrió un error al obtener los datos de ImageSection');
      });

    // Obtener los datos de ImageSectionCards para una sección específica
    axios.get('http://localhost:5000/api/ImageSectionCards', { params: { section: '3' } })
      .then(response => {
        setImageSectionData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de ImageSectionCards:', error);
        setError('Ocurrió un error al obtener los datos de ImageSectionCards');
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!imageSectionData.length) return <p>Loading...</p>;

  return (
    <div className="px-4 md:px-8 lg:px-12 w-full py-12 bg-beige">
      <div className="text-center mb-12">
        <h3 className="text-7xl font-semibold mb-4 text-blue-500">{title}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {imageSectionData.map((item) => (
          <div key={item._id} className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 flex flex-col justify-between mx-6">
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <img src={item.img} alt={item.section} className="w-full h-48 object-cover mb-6 mt-2" />
                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">{item.description}</p>
                <div className="text-center mt-4">
                  <button className="btn btn-primary">{item.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
