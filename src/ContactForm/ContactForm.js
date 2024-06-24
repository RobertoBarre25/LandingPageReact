import React from "react";
import Header from "../NavBar/Header";

const ContactForm = () => {
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
          <h2 className="text-2xl font-bold">
            Solicitar Información del Servicio
          </h2>
        </div>
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none black-placeholder"
              placeholder="Nombre(s)"
            />
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Apellido(s)"
            />
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="País"
            />
            <input
              required
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Código Postal"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              required
              type="number"
              className="w-full px-4 py-2 text-sm border border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none rounded-md sm:w-28"
              placeholder="+ Lada"
            />
            <div className="relative flex items-center">
              <input
                required
                type="number"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                required
                type="email"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Correo Electrónico"
              />
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                required
                type="date"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="relative">
              <input
                required
                type="time"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-700">
              ¿Deseas ofrecernos información adicional para ayudarnos a
              conocerte mejor?
            </label>
            <div className="flex items-center justify-center mt-2">
              <label className="mr-4">
                <input required
                  type="radio"
                  name="additionalInfo"
                  className="mr-2"
                />
                Sí
              </label>
              <label>
                <input required type="radio" name="additionalInfo" className="mr-2" />
                No
              </label>
            </div>
          </div>
          <div className="relative">
            <label required className="block text-sm text-gray-700">
              <strong>Aceptar los términos y condiciones</strong>
            </label>
            <p className="text-sm text-gray-600 mb-2">
              Antes de continuar, le rogamos leer nuestra nota informativa sobre
              la privacidad. Después de haber leído y entendido la nota
              informativa sobre la privacidad, autorizo el tratamiento de mis
              datos personales por parte de Grupo Alternativas y Solucione:
            </p>
            <div className="flex items-start mb-2">
              <input
                required
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Para actividades de marketing mediante correo electrónico
                (boletín informativo), teléfono, SMS, MMS, chat, banner en
                nuestros sitios y aplicaciones, mensajería instantánea, redes
                sociales y correo tradicional
              </span>
            </div>
            <div className="flex items-start mb-2">
              <input
                required
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Para la creación de perfiles, destinados a la personalización de
                ofertas e iniciativas de acuerdo con mis intereses y
                preferencias
              </span>
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
