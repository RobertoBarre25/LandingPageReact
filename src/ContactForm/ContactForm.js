import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/Header";
import './ContactForm.css'; // Importa tu archivo CSS aquí
import { useLocation } from 'react-router-dom';


const isValidInput = (value) => {
  return /^[a-zA-Z0-9\s]+$/.test(value); // Allow spaces as well
};

const ContactForm = () => {

  const location = useLocation();
  const { service } = location.state || {};


  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    address: "",
    email: "",
    country: "",
    Phonenumber: "",
    fecha: "",
    hora: "",
    additionalInfo: "",
    additionalText: "", // Añadimos el nuevo campo aquí
  });

  const [errors, setErrors] = useState({
    name: null,
    apellido: null,
    address: null,
    country: null,
    Phonenumber: null,
  });

  useEffect(() => {
    const currentDateObj = new Date();
    const formattedDate = currentDateObj.toISOString().substr(0, 10); // YYYY-MM-DD
    const formattedTime = currentDateObj.toTimeString().substr(0, 5); // HH:MM (24-hour format)

    setFormData((prevFormData) => ({
      ...prevFormData,
      fecha: formattedDate,
      hora: formattedTime,
    }));
  }, []);

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
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Correo enviado exitosamente");
      setFormData({
        name: "",
        address: "",
        email: "",
        country: "",
        Phonenumber: "",
        fecha: "",
        hora: "",
        additionalInfo: "",
        additionalText: "", // Resetear el campo adicional aquí también
        service:""
      });
      window.location.reload(); // Refrescar la página
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo");
    }
  };

  return (
    <div
      id="contact-form"
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-white-100 to-gray-500 py-10 px-4 sm:px-6 lg:px-8"
    >
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
            <input name="service" type="hidden" value={service}/>
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none black-placeholder placeholder-center"
              placeholder="Nombre Completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                required
                type="text"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Dirección"
                name="address"  
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div className="relative">
              <input
                required
                type="email"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
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
                type="number"
                className="w-full px-4 py-2 text-sm text-black border border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none rounded-md sm:w-28"
                placeholder="+Lada"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
            <div className="relative flex items-center">
              <input
                required
                type="number"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Teléfono"
                name="Phonenumber"
                value={formData.Phonenumber}
                onChange={handleChange}
              />
              {errors.Phonenumber && (
                <p className="text-red-500 text-sm mt-1">{errors.Phonenumber}</p>
              )}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                required
                type="date"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                required
                type="time"
                className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              className="block w-full px-4 py-2 text-sm text-black border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none placeholder-center"
              placeholder="Información Adicional"
              name="additionalText"
              value={formData.additionalText}
              onChange={handleChange}
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
