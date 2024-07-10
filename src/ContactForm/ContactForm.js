import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/Header";
import './ContactForm.css';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const isValidInput = (value) => {
  return /^[a-zA-Z0-9\s]+$/.test(value);
};

const ContactForm = () => {
  const location = useLocation();
  const { service, services = [] } = location.state || {};
  console.log("Services passed:", services); // Agrega este console.log para verificar los servicios


  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    address: "",
    email: "",
    country: "",
    phone: "",
    fecha: "",
    hora: "",
    additionalInfo: "",
    additionalText: "",
    selectedService: ""
  });

  const [errors, setErrors] = useState({
    name: null,
    apellido: null,
    address: null,
    country: null,
    phone: null,
  });

  useEffect(() => {
    const currentDateObj = new Date();
    const formattedDate = currentDateObj.toISOString().substr(0, 10);
    const formattedTime = currentDateObj.toTimeString().substr(0, 5);

    setFormData((prevFormData) => ({
      ...prevFormData,
      fecha: formattedDate,
      hora: formattedTime,
    }));
  }, []);

  const handlePhoneChange = (value, country) => {
    setFormData({ ...formData, phone: value, country: country.name });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = null;
    if (name !== "address" && !isValidInput(value)) {
      error = "No debe contener caracteres especiales ni espacios en blanco.";
    } else if (name === "address" && !/^[a-zA-Z0-9\s]+$/.test(value)) {
      error = "No debe contener caracteres especiales.";
    }
    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      service: formData.selectedService // Agrega este campo al objeto que se envía
    };
    try {
      await axios.post("http://localhost:5000/send-email", dataToSend);
      Swal.fire({
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white; padding: 20px; border-radius: 10px; position: relative;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 8px; background-color: #ccc;">
              <div style="width: 0; height: 100%; background-color: #007bff; animation: load 2.5s linear forwards;"></div>
            </div>
            <img src="animation-email.gif" alt="Enviando correo" style="width: 200px; height: 150px; margin-top: 10px;">
            <h2 style="color: black; margin-top: 20px;">Correo enviado exitosamente</h2>
          </div>`,
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          popup: 'styled-popup',
          title: 'styled-title',
          content: 'styled-content',
          confirmButton: 'styled-confirm-button'
        }
      });
      
      // Agrega esta parte de CSS en tu archivo CSS
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes load {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `;
      setFormData({
        name: "",
        address: "",
        email: "",
        country: "",
        phone: "",
        fecha: "",
        hora: "",
        additionalInfo: "",
        additionalText: "",
        selectedService: ""
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      Swal.fire({
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color:  #f7fafc; padding: 20px; border-radius: 10px; position: relative;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 8px; background-color: #ccc;">
              <div style="width: 0; height: 100%; background-color: red; animation: load 2.5s linear forwards;"></div>
            </div>
            <img src="email-error.gif" alt="Enviando correo" style="width: 200px; height: 140px; margin-top: 10px;">
            <h2 style="color: black; margin-top: 20px;">Error al enviar el correo</h2>
          </div>`,
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'styled-popup',
          title: 'styled-title',
          content: 'styled-content',
          confirmButton: 'styled-confirm-button'
        }
      });
    }
  };

  return (
    <div id="contact-form" className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-white-100 to-gray-500 py-10 px-4 sm:px-6 lg:px-8">
      <Header isBlue={true} />
      <div className="rounded-lg p-8 max-w-2xl w-full bg-transparent">
        <div className="text-center mb-6">
          <img
            src="https://solucione.com.mx/corporativo/wp-content/uploads/2020/04/cropped-solucione-logo-color-512x512-1.png"
            className="w-32 mx-auto"
            alt="logo"
          />
          <h2 className="text-2xl font-bold">Solicitar Información del Servicio</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            {service ? (
              <input name="service" type="hidden" value={service} />
            ) : (
              <select
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none black-placeholder placeholder-center hover:shadow-xl input-hover-effect transition duration-300"
              >
                <option value="" disabled>Seleccione un servicio</option>
                {services.map((serviceOption, index) => (
                  <option key={index} value={serviceOption}>{serviceOption}</option>
                ))}
              </select>
            )}
          </div>
          <div className="relative">
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none black-placeholder placeholder-center hover:shadow-xl input-hover-effect transition duration-300"
              placeholder="Nombre Completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
            <div className="relative">
              <input
                required
                type="text"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none hover:shadow-xl input-hover-effect transition duration-300"
                placeholder="Dirección"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <PhoneInput
                name="phone"
                country={'mx'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: '100%',
                  padding: '8px 16px 8px 48px', // Ajusta el padding izquierdo
                  borderBottom: '1px solid gray',
                  background: 'transparent',
                  fontSize: '14px',
                  color: 'black',
                  transition: 'all 0.3s', // Agrega la transición
                  boxShadow: 'none', // Inicializa sin sombra
                }}
                containerStyle={{ width: '100%' }}
                buttonStyle={{ 
                  background: 'transparent', 
                  border: 'none',
                  position: 'absolute', // Asegura que la bandera no se mueva
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  padding: '0 8px', // Ajusta el padding
                  boxShadow: 'none',
                }}
                dropdownStyle={{ color: 'black' }}
                className="hover:shadow-xl input-hover-effect transition duration-300"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="relative">
              <input
                required
                type="email"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none hover:shadow-xl input-hover-effect transition duration-300"
                placeholder="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                required
                type="date"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none hover:shadow-xl input-hover-effect transition duration-300"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                required
                type="time"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none hover:shadow-xl input-hover-effect transition duration-300"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none placeholder-center hover:shadow-xl input-hover-effect transition duration-300"
              placeholder="Información Adicional"
              name="additionalText"
              value={formData.additionalText}
              onChange={handleChange}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-700">
              ¿Deseas ofrecernos información adicional para ayudarnos a conocerte mejor?
            </label>
            <div className="flex items-center justify-center mt-2">
              <label className="mr-4">
                <input
                  required
                  type="radio"
                  name="additionalInfo"
                  className="mr-2"
                  value="Sí"
                  onChange={handleChange}
                />
                Sí
              </label>
              <label>
                <input
                  required
                  type="radio"
                  name="additionalInfo"
                  className="mr-2"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
          <div className="flex items-center justify-center mt-12">
            <input
              required
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
            />
            <label className="block text-sm text-gray-600">
              <strong>Aceptar los términos y condiciones</strong>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
