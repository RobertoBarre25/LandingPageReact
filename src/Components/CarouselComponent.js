import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    transition: 'all 0.3s ease-in-out',
    padding: 0
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out'
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    transition: 'background-color 0.3s ease-in-out'
  };

  const containerStyle = {
  
  };

  return (
    <div className="container-fluid p-5 position-relative" style={containerStyle}>
      <Carousel
        controls={false}
        indicators={false}
        interval={null}
        touch={true}
        className="w-100 px-12"
        ref={carouselRef}
      >
        {/* Primer conjunto de cards */}
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
            <div className="d-flex flex-column align-items-center m-5 justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/20/b5/b5/20b5b5b4163c62258cef3bf7e96f151f.jpg"
                alt="Batería"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Batería</h3>
                <p className="text-center">Larga vida a la batería.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center m-5 justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Innovación"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Innovación</h3>
                <p className="text-center">Diseñado para durar. Y enamorar.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center  m-5 justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/8d/71/5f/8d715f8a777a0547f56e494468b54daf.jpg"
                alt="Personalización"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Personaliza tu iPhone</h3>
                <p className="text-center">Ponle tu estilo. En cada detalle.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Segundo conjunto de cards */}
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
            <div className="d-flex flex-column align-items-center  m-5 justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Seguridad"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Seguridad</h3>
                <p className="text-center">Protege tus datos con la mejor tecnología.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center m-5  justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Velocidad"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Velocidad</h3>
                <p className="text-center">Rendimiento superior en cada tarea.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center m-5  justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Cámara"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Calidad de Cámara</h3>
                <p className="text-center">Fotos y videos de alta calidad.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Tercer conjunto de cards */}
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
            <div className="d-flex flex-column align-items-center m-5  justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Durabilidad"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Durabilidad</h3>
                <p className="text-center">Construcción resistente y duradera.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center  m-5 justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Interfaz"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Interfaz</h3>
                <p className="text-center">Interfaz amigable y fácil de usar.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center m-5  justify-content-center p-0" style={cardStyle}>
              <img
                src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg"
                alt="Compatibilidad"
                style={imgStyle}
              />
              <div style={textOverlayStyle}>
                <h3 className="text-center">Compatibilidad</h3>
                <p className="text-center">Compatibilidad con múltiples dispositivos.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Botones de navegación */}
      <div className="position-absolute top-50 start-0 translate-middle-y" style={{ marginLeft: '20px' }}>
        <div onClick={handlePrevClick} style={{ cursor: 'pointer' }}>
          <BsChevronLeft size={62} style={{ color: 'blue' }} />
        </div>
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y" style={{ marginRight: '20px' }}>
        <div onClick={handleNextClick} style={{ cursor: 'pointer' }}>
          <BsChevronRight size={62} style={{ color: 'blue' }} />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
