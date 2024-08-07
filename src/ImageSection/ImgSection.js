import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import AuthContext from '../AuthContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const ImageSection = () => {
  const { isAuthenticated } = useContext(AuthContext); // Obtén el estado de autenticación
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [imageSectionData, setImageSectionData] = useState([]);
  const [error, setError] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [editItem, setEditItem] = useState({
    img: '',
    description: '',
    buttonText: '',
    buttonValue: ''
  });

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

    // Obtener los datos de ImageSectionCards
    axios.get('http://localhost:5000/api/ImageSectionCards')
      .then(response => {
        setImageSectionData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de ImageSectionCards:', error);
        setError('Ocurrió un error al obtener los datos de ImageSectionCards');
      });
  }, []);

  const handleEditClick = (item) => {
    setCurrentEdit(item);
    setEditItem(item);
    setShowEditModal(true);
  };

  const handleClick = (service) => {
    navigate('/contact', { state: { service } });
  };

  const handleSaveEdit = () => {
    // Enviar los datos a la API para actualizar la tarjeta
    axios.put('http://localhost:5000/api/update-card', {
      section: currentEdit.section,
      updateFields: editItem
    })
    .then(response => {
      // Actualizar los datos locales
      const updatedData = imageSectionData.map(data => 
        data._id === currentEdit._id ? { ...data, ...editItem } : data
      );
      setImageSectionData(updatedData);
      setShowEditModal(false);
    })
    .catch(error => {
      console.error('Error al guardar los cambios:', error);
      setError('Ocurrió un error al guardar los cambios.');
    });
  };

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
                <img src={item.img} alt={item.description} className="w-full h-48 object-cover mb-6 mt-2" />
                <p className="text-gray-700 text-left text-base mt-4 mx-6 flex-grow">{item.description}</p>
                <div className="text-center mt-4 flex justify-center gap-2">
                  <button 
                    className="bg-blue-500 border-2 border-white text-white text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                    onClick={() => handleClick(item.buttonValue)}
                  >
                    {item.buttonText}
                  </button>
                  {isAuthenticated && (
                    <button
                      onClick={() => handleEditClick(item)}
                      className="btn btn-success mb-2 ml-2"
                    >
                      Editar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formImgSrc">
              <Form.Label>Imagen URL</Form.Label>
              <Form.Control
                type="text"
                value={editItem.img}
                onChange={(e) => setEditItem({ ...editItem, img: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={editItem.description}
                onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formButtonText">
              <Form.Label>Texto del Botón</Form.Label>
              <Form.Control
                type="text"
                value={editItem.buttonText}
                onChange={(e) => setEditItem({ ...editItem, buttonText: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formButtonValue">
              <Form.Label>Valor del Botón</Form.Label>
              <Form.Control
                type="text"
                value={editItem.buttonValue}
                onChange={(e) => setEditItem({ ...editItem, buttonValue: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageSection;
