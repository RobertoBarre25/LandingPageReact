import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const scrollToMiddle = () => {
  const targetPosition = window.innerHeight * 0.95;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

const Services = () => {
  const [imgText, setImgText] = useState("");
  const [buttonServText, setButtonServText] = useState("");
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [editForm, setEditForm] = useState({ tag: "", text: "", imageUrl: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const processResponse = (response, index) => {
    const principalText = response.data.principalText[0] || {};
    if (index === 0) {
      setImgText(principalText.imgText || "");
      setButtonServText(principalText.buttonServText || "");
    }

    const services = response.data.services || [];
    return services.map((service, i) => ({
      id: `cardM${index * services.length + i + 1}`,
      tag: service.tag,
      text: service[`cardM${i + 1}Text`],
      imageUrl: service[`imgCardM${i + 1}`],
      link: `/M${index + 1}`,
    }));
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const responses = await Promise.all([
          axios.get("http://localhost:5000/api/cardM1"),
          axios.get("http://localhost:5000/api/cardM2"),
          axios.get("http://localhost:5000/api/cardM3"),
          axios.get("http://localhost:5000/api/cardM4"),
          axios.get("http://localhost:5000/api/cardM5"),
          axios.get("http://localhost:5000/api/cardM6"),
          axios.get("http://localhost:5000/api/cardM7"),
          axios.get("http://localhost:5000/api/cardM8"),
          axios.get("http://localhost:5000/api/cardM9"),
          axios.get("http://localhost:5000/api/cardM10"),
          axios.get("http://localhost:5000/api/cardM11"),
          axios.get("http://localhost:5000/api/cardM12"),
        ]);

        const allCards = responses.flatMap((response, index) =>
          processResponse(response, index)
        );

        setCards(allCards);
      } catch (error) {
        console.error("Error al obtener los datos de servicios:", error);
        setError("Ocurrió un error al obtener los datos de servicios");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleEditClick = (card) => {
    setEditingCard(card);
    setEditForm({
      tag: card.tag,
      text: card.text,
      imageUrl: card.imageUrl,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleModalClose = () => {
    setEditingCard(null);
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
        axios.put("http://localhost:5000/api/cardM1/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM2/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM3/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM4/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM5/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM6/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM7/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM8/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM9/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM10/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM11/update-card", { tag, text, imageUrl }),
        axios.put("http://localhost:5000/api/cardM12/update-card", { tag, text, imageUrl }),
      ];

      await Promise.all(updates);

      Swal.fire("Éxito", "Datos de la tarjeta actualizados correctamente", "success");
      handleModalClose();

      const responses = await Promise.all([
        axios.get("http://localhost:5000/api/cardM1"),
        axios.get("http://localhost:5000/api/cardM2"),
        axios.get("http://localhost:5000/api/cardM3"),
        axios.get("http://localhost:5000/api/cardM4"),
        axios.get("http://localhost:5000/api/cardM5"),
        axios.get("http://localhost:5000/api/cardM6"),
        axios.get("http://localhost:5000/api/cardM7"),
        axios.get("http://localhost:5000/api/cardM8"),
        axios.get("http://localhost:5000/api/cardM9"),
        axios.get("http://localhost:5000/api/cardM10"),
        axios.get("http://localhost:5000/api/cardM11"),
        axios.get("http://localhost:5000/api/cardM12"),
      ]);

      const allCards = responses.flatMap((response, index) =>
        processResponse(response, index)
      );

      setCards(allCards);
    } catch (error) {
      console.error("Error al actualizar los datos de la tarjeta:", error);
      Swal.fire("Error", "Error al actualizar los datos de la tarjeta", "error");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://www.udima.es/sites/udima.es/files/GettyImages-1407650545.jpg')" }}
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
          {cards.map((card) => (
            <div key={card.id} className="relative border-none group m-4">
                            <div className="relative overflow-hidden h-80 w-full border-none">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <img src={card.imageUrl} alt={card.text} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <h3 className="text-white text-xl md:text-2xl">{card.text}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-5 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-center items-end">
                  <div className="text-center mb-8">
                    <a href={card.link} className="text-white underline hover:no-underline">
                      detalles
                    </a>
                  </div>
                </div>
                <button
                  className="absolute top-0 right-0 p-2 bg-blue-500 text-white"
                  onClick={() => handleEditClick(card)}
                >
                  Editar
                </button>
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
                <label htmlFor="tag" className="block text-gray-700">Tag</label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  value={editForm.tag}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
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
    </div>
  );
};

export default Services;

