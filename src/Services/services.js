import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import AuthContext from '../AuthContext'; // Asegúrate de que la ruta sea correcta
import apiRoutes from '../apiRoutes'; // Ajusta la ruta según tu estructura de carpetas

const scrollToMiddle = () => {
  const targetPosition = window.innerHeight * 0.95;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

const baseURL = process.env.REACT_APP_BASE_URL;

const fetchCards = async () => {
  try {
    const responses = await Promise.all([
      axios.get(`${baseURL}/cardM1`),
      axios.get(`${baseURL}/cardM2`),
      // Continúa para las demás rutas
    ]);

    // Procesa las respuestas aquí

  } catch (error) {
    console.error("Error al obtener los datos de servicios:", error);
  }
};


const Services = () => {
  const { isAuthenticated } = useContext(AuthContext); // Usa el contexto de autenticación

  const [imgText, setImgText] = useState("");
  const [buttonServText, setButtonServText] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [editForm, setEditForm] = useState({ tag: "", text: "", imageUrl: "" });
  const [isEditingPrincipal, setIsEditingPrincipal] = useState(false);
  const [principalData, setPrincipalData] = useState({
    tag: "",
    section: "",
    imgText: "",
    buttonServText: "",
    backgroundImage: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const processPrincipalData = (response, index) => {
    const principal = response.data.principalText[0] || {};
    if (index === 0) {
      setPrincipalData({
        tag: principal.tag || "",
        section: principal.section || "",
        imgText: principal.imgText || "",
        buttonServText: principal.buttonServText || "",
        backgroundImage: principal.backgroundImage || ""
      });
    }

    const services = response.data.services || [];

    return services.map((service, i) => ({
      id: `${service.tag}-${i}`, // Usa una combinación única del tag y el índice para evitar duplicados
      tag: service.tag,
      text: service[`cardM${i + 1}Text`] || '',
      imageUrl: service[`imgCardM${i + 1}`] || '',
      link: `/M${index + 1}`,
    }));
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const responses = await Promise.all([
          axios.get(apiRoutes.cardM1),
          axios.get(apiRoutes.cardM2),
          axios.get(apiRoutes.cardM3),
          axios.get(apiRoutes.cardM4),
          axios.get(apiRoutes.cardM5),
          axios.get(apiRoutes.cardM6),
          axios.get(apiRoutes.cardM7),
          axios.get(apiRoutes.cardM8),
          axios.get(apiRoutes.cardM9),
          axios.get(apiRoutes.cardM10),
          axios.get(apiRoutes.cardM11),
          axios.get(apiRoutes.cardM12),
          axios.get(apiRoutes.principalText),
        ]);

        const allCards = responses.flatMap((response, index) =>
          processPrincipalData(response, index)
        );

        const uniqueCards = allCards.filter((card, index, self) =>
          index === self.findIndex((t) => t.id === card.id)
        );
        setCards(uniqueCards);

        const principal = responses[12].data.principalText[0] || {};
        setPrincipalData({
          tag: principal.tag || "",
          section: principal.section || "",
          imgText: principal.imgText || "",
          buttonServText: principal.buttonServText || "",
          backgroundImage: principal.backgroundImage || ""
        });

        setImgText(principal.imgText);
        setButtonServText(principal.buttonServText);
        setBackgroundImage(principal.backgroundImage);
      } catch (error) {
        console.error("Error al obtener los datos de servicios:", error);
        setError("Ocurrió un error al obtener los datos de servicios");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [isEditingPrincipal]); // Añade `isEditingPrincipal` a las dependencias


  const handleEditClick = (card) => {
    setEditingCard(card);
    setEditForm({
      tag: card.tag,
      text: card.text,
      imageUrl: card.imageUrl,
    });
    document.body.style.overflow = 'hidden'; // Deshabilitar el scroll
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleModalClose = () => {
    setEditingCard(null);
    document.body.style.overflow = 'auto'; // Restaurar el scroll
  };


  const handleUpdateCard = async (event) => {

    event.preventDefault();

    const { tag, text, imageUrl } = editForm;

    if (!tag || !text || !imageUrl) {
      Swal.fire("Error", "Faltan datos para actualizar la tarjeta", "error");
      return;
    }

    try {
      const updates = [
        axios.put(apiRoutes.updateCardM1, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM2, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM3, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM4, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM5, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM6, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM7, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM8, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM9, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM10, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM11, { tag, text, imageUrl }),
        axios.put(apiRoutes.updateCardM12, { tag, text, imageUrl }),
      ];

      await Promise.all(updates);

      Swal.fire("Éxito", "Datos de la tarjeta actualizados correctamente", "success");
      handleModalClose();

      const responses = await Promise.all([
        axios.get(apiRoutes.cardM1),
        axios.get(apiRoutes.cardM2),
        axios.get(apiRoutes.cardM3),
        axios.get(apiRoutes.cardM4),
        axios.get(apiRoutes.cardM5),
        axios.get(apiRoutes.cardM6),
        axios.get(apiRoutes.cardM7),
        axios.get(apiRoutes.cardM8),
        axios.get(apiRoutes.cardM9),
        axios.get(apiRoutes.cardM10),
        axios.get(apiRoutes.cardM11),
        axios.get(apiRoutes.cardM12),
        axios.get(apiRoutes.principalText),
      ]);

      const allCards = responses.flatMap((response, index) =>
        processPrincipalData(response, index)
      );

      const uniqueCards = allCards.filter((card, index, self) =>
        index === self.findIndex((t) => t.id === card.id)
      );
      setCards(uniqueCards);
    } catch (error) {
      console.error("Error al actualizar los datos de la tarjeta:", error);
      Swal.fire("Error", "Error al actualizar los datos de la tarjeta", "error");
    }
  };

  const openPrincipalEditForm = () => {
    setIsEditingPrincipal(true);
    document.body.style.overflow = 'auto'; // Deshabilitar el scroll
  };

  const handlePrincipalDataChange = (e) => {
    const { name, value } = e.target;
    setPrincipalData((prev) => ({ ...prev, [name]: value }));
  };

  const updatePrincipalData = async (event) => {
    event.preventDefault();


    try {
      await axios.put(apiRoutes.principalText + '/update', principalData);
      Swal.fire("Éxito", "Datos actualizados correctamente", "success");
      setIsEditingPrincipal(false);

      // Vuelve a obtener los datos actualizados
      const responses = await Promise.all([
        axios.get(apiRoutes.cardM1),
        axios.get(apiRoutes.cardM2),
        axios.get(apiRoutes.cardM3),
        axios.get(apiRoutes.cardM4),
        axios.get(apiRoutes.cardM5),
        axios.get(apiRoutes.cardM6),
        axios.get(apiRoutes.cardM7),
        axios.get(apiRoutes.cardM8),
        axios.get(apiRoutes.cardM9),
        axios.get(apiRoutes.cardM10),
        axios.get(apiRoutes.cardM11),
        axios.get(apiRoutes.cardM12),
        axios.get(apiRoutes.principalText),
      ]);

      const allCards = responses.flatMap((response, index) =>
        processPrincipalData(response, index)
      );

      const uniqueCards = allCards.filter((card, index, self) =>
        index === self.findIndex((t) => t.id === card.id)
      );
      setCards(uniqueCards);
    } catch (error) {
      console.error("Error al actualizar los datos principales:", error);
      Swal.fire("Error", "Error al actualizar los datos principales", "error");
    }
    document.body.style.overflow = 'auto'; // Restaurar el scroll
  };


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <header className="fixed top-0 left-0 w-full z-5 transition-all duration-800 ease-in-out h-16 bg-transparent">
          {/* Contenido del header */}
        </header>
        <div className="relative flex items-center justify-center h-full z-3">
          <div className="text-center text-white p-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold">{imgText}</h1>
            <button
              className="mt-8 md:mt-16 px-6 py-4 md:px-10 md:py-6 border border-white text-white text-sm sm:text-xl md:text-2xl lg:text-3xl"
              onClick={scrollToMiddle}
            >
              {buttonServText}
            </button>
            <br />
            {isAuthenticated && (
              <button
                className="mt-8 md:mt-16 px-6 py-4 md:px-10 md:py-6 border border-white text-white text-sm sm:text-xl md:text-2xl lg:text-3xl"
                onClick={openPrincipalEditForm}
              >
                Editar
              </button>
            )}
            <div className="mt-4 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className="text-white text-2xl sm:text-3xl md:text-4xl animate-bounce mt-4 md:mt-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-5 p-8 flex-grow">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-gray-700 mb-8 md:mb-16">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={card.id} className="relative border-none group m-4">
              <div className="relative overflow-hidden h-80 w-full border-none">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <img src={card.imageUrl} alt={card.text} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <h3 className="text-white text-xl md:text-2xl">{card.text}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-center items-end">
                  <div className="text-center mb-8">
                    <a href={`/M${index + 1}`} className="text-white underline hover:no-underline">
                      Detalles
                    </a>
                  </div>
                </div>
                {isAuthenticated && (

                  <button
                    className="absolute top-0 right-0 p-2 bg-blue-500 text-white"
                    onClick={() => handleEditClick(card)}
                  >
                    Editar
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
      {editingCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Editar Tarjeta</h3>
            <form onSubmit={handleUpdateCard}>
              <div className="mb-4">
                <label htmlFor="text" className="block text-gray-700">Texto</label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  value={editForm.text}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700">URL de Imagen</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={editForm.imageUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Actualizar
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditingPrincipal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Editar Información Principal</h3>
            <form onSubmit={updatePrincipalData}>
              <div className="mb-4">
                <label htmlFor="imgText" className="block text-gray-700">Texto de Imagen</label>
                <input
                  type="text"
                  id="imgText"
                  name="imgText"
                  value={principalData.imgText}
                  onChange={handlePrincipalDataChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="buttonServText" className="block text-gray-700">Texto del Botón de Servicios</label>
                <input
                  type="text"
                  id="buttonServText"
                  name="buttonServText"
                  value={principalData.buttonServText}
                  onChange={handlePrincipalDataChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="backgroundImage" className="block text-gray-700">URL de Imagen de Fondo</label>
                <input
                  type="text"
                  id="backgroundImage"
                  name="backgroundImage"
                  value={principalData.backgroundImage}
                  onChange={handlePrincipalDataChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Actualizar
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingPrincipal(false)}
                  className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

