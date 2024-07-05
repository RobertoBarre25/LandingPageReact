import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel controls={false} indicators={false} interval={3000} touch={true} className="w-100">
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Batería</h3>
              <p>Larga vida a la batería.</p>
              <img src="ruta-a-la-imagen-de-bateria.png" alt="Batería" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Innovación</h3>
              <p>Diseñado para durar. Y enamorar.</p>
              <img src="ruta-a-la-imagen-del-dispositivo.png" alt="Innovación" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Personaliza tu iPhone</h3>
              <p>Ponle tu estilo. En cada detalle.</p>
              <img src="ruta-a-la-imagen-de-personalizacion.png" alt="Personalización" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Seguridad</h3>
              <p>Protege tus datos con la mejor tecnología.</p>
              <img src="ruta-a-la-imagen-de-seguridad.png" alt="Seguridad" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Velocidad</h3>
              <p>Rendimiento superior en cada tarea.</p>
              <img src="ruta-a-la-imagen-de-velocidad.png" alt="Velocidad" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Calidad de Cámara</h3>
              <p>Fotos y videos de alta calidad.</p>
              <img src="ruta-a-la-imagen-de-camara.png" alt="Cámara" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Durabilidad</h3>
              <p>Construcción resistente y duradera.</p>
              <img src="ruta-a-la-imagen-de-durabilidad.png" alt="Durabilidad" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Interfaz</h3>
              <p>Interfaz amigable y fácil de usar.</p>
              <img src="ruta-a-la-imagen-de-interfaz.png" alt="Interfaz" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: 'black', color: 'white', height: '90vh', borderRadius: '20px' }}>
              <h3>Compatibilidad</h3>
              <p>Compatibilidad con múltiples dispositivos.</p>
              <img src="ruta-a-la-imagen-de-compatibilidad.png" alt="Compatibilidad" style={{ width: '70%', borderRadius: '20px' }} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
