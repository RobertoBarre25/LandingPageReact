import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-400 to-gray-100 mt-20">
      <div className="rounded-lg p-8 max-w-2xl w-full bg-transparent">
        <div className="text-center mb-6">
          <img
            src="https://pbs.twimg.com/profile_images/1246659738600783872/MsVt4gB0_400x400.jpg"
            className="w-32 mx-auto"
            alt="logo"
          />
          <h2 className="text-2xl font-bold">
            Solicitar Información del Servicio
          </h2>
        </div>
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none black-placeholder"
              placeholder="Nombre(s)"
            />
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Apellido(s)"
            />
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="País"
            />
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Código Postal"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="number"
              className="w-28 px-4 py-2 text-sm border border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none rounded-r-md"
              placeholder="+ Lada"
            />
            <div className="relative flex items-center">
              <input
                type="number"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <input
                type="email"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
                placeholder="Correo Electrónico"
              />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Nombre de la Ubicación o Vendedor Autorizado"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <input
                type="date"
                className="block w-full px-4 py-2 text-sm border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="relative">
              <input
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
                <input
                  type="radio"
                  name="additionalInfo"
                  className="mr-2"
                />
                Sí
              </label>
              <label>
                <input type="radio" name="additionalInfo" className="mr-2" />
                No
              </label>
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-700">
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
