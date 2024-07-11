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

  return (
    <div className="container-fluid p-0 position-relative">
      <Carousel
        controls={false}
        indicators={false}
        interval={null}
        touch={true}
        className="w-100 px-12"
        ref={carouselRef}
      >
        {/* Primera sección del Carousel */}
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            {/* Primera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/20/b5/b5/20b5b5b4163c62258cef3bf7e96f151f.jpg" alt="Batería" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Batería</h3>
                <p className="text-white text-center">Larga vida a la batería.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Innovación" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Innovación</h3>
                <p className="text-white text-center">Diseñado para durar. Y enamorar.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/8d/71/5f/8d715f8a777a0547f56e494468b54daf.jpg" alt="Personalización" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Personaliza tu iPhone</h3>
                <p className="text-white text-center">Ponle tu estilo. En cada detalle.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        {/* Segunda sección del Carousel */}
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            {/* Primera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Seguridad" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Seguridad</h3>
                <p className="text-white text-center">Protege tus datos con la mejor tecnología.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Velocidad" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Velocidad</h3>
                <p className="text-white text-center">Rendimiento superior en cada tarea.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Cámara" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Calidad de Cámara</h3>
                <p className="text-white text-center">Fotos y videos de alta calidad.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        {/* Tercera sección del Carousel */}
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            {/* Primera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Durabilidad" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Durabilidad</h3>
                <p className="text-white text-center">Construcción resistente y duradera.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Segunda tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Interfaz" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Interfaz</h3>
                <p className="text-white text-center">Interfaz amigable y fácil de usar.</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
            {/* Tercera tarjeta */}
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 text-white rounded position-relative" style={{ height: '90vh' }}>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Compatibilidad" className="w-100 h-100 rounded" />
              <div className="text-overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <h3 className="text-white text-center">Compatibilidad</h3>
                <p className="text-white text-center">Compatibilidad con múltiples dispositivos.</p>
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
