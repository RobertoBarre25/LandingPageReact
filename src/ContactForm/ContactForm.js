import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../NavBar/Header'; // Importa el componente Header

const ContactForm = ({ setView }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header setView={setView} />
      <form className="contact-form bg-white bg-opacity-75 p-8 rounded-lg shadow-md max-w-md z-10 relative">
        <h2 className="text-center text-2xl font-bold mb-6">Solicitar Informacion del servicio</h2>
        <div className="form-group mb-6">
          <label htmlFor="name" className="block text-gray-700">Nombre</label>
          <input type="text" id="name" name="name" required className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="message" className="block text-gray-700">Servicio Interesado</label>
          <textarea id="message" name="message" rows="5" required className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Send</button>
        <Link to="/" className="block w-full mt-4 text-center text-gray-700 font-bold py-2 px-4 rounded border border-gray-300 hover:bg-gray-300 transition duration-300 focus:outline-none focus:border-blue-500">
          Back to Home
        </Link>
      </form>
      <img
        className="background-image absolute inset-0 object-cover blur-sm opacity-75 z-0"
        src="https://hinforcom.com/wp-content/uploads/2023/07/Guia-sobre-antenas-de-cobertura-movil-scaled.jpg"
        alt="Antenas de cobertura móvil"
      />
    </div>
  );
};

export default ContactForm;
