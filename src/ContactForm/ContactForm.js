import React from 'react';
import Header from '../NavBar/Header'; // Importa el componente Header
import './ContactForm.css';

const ContactForm = ({ setView }) => {
  return (
    <div className="contact-form-container">
      <Header />
      <form className="contact-form">
        <h2>Solicitar Informacion del servicio</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Servicio Interesado</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
        <button type="button" onClick={() => setView('home')} className="back-button">
          Back to Home
        </button>
      </form>
      <img
        className="background-image"
        src="https://hinforcom.com/wp-content/uploads/2023/07/Guia-sobre-antenas-de-cobertura-movil-scaled.jpg"
        alt="Antenas de cobertura móvil"
      />
    </div>
  );
};

export default ContactForm;
