// src/ContactForm/ContactForm.js
import React from 'react';
import Header from '../NavBar/Header'; // Ajusta la ruta de importación del componente Header
import './ContactForm.css';

const ContactForm = ({ setView }) => {
  return (
    <div className="contact-form-container">
      <Header /> {/* Incluye el componente Header dentro del formulario */}
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
        <button type="button" onClick={() => setView('home')} className="back-button">
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
