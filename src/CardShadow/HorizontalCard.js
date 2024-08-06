import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const HorizontalCard = ({ videoSrc, title, description }) => {
  const [inView, setInView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [buttonText, setButtonText] = useState('Contacta ya!');

  const cardRef = useRef();
  const videoRef = useRef();

  const navigate = useNavigate();

  const handleClick = (service) => {
    navigate('/contact', { state: { service } });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleSave = () => {
    // Aquí puedes añadir la lógica para guardar los cambios si es necesario
    setShowModal(false);
  };

  return (
    <div
      ref={cardRef}
      className={`horizontal-card-container ${inView ? 'in-view' : ''} w-full h-screen flex items-center justify-center overflow-hidden`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="PublicitiImg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(60%)' }}
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h2 className="text-5xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">{editedTitle}</h2>
        <button
          className="mt-4 px-6 py-3 border border-white"
          onClick={() => handleClick('service')}
        >
          {buttonText}
        </button>
        <Button variant="light" className="mt-4" onClick={() => setShowModal(true)}>
          Editar
        </Button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-2xl sm:text-3xl md:text-4xl animate-bounce" />
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formButtonText">
              <Form.Label>Texto del Botón</Form.Label>
              <Form.Control
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HorizontalCard;
