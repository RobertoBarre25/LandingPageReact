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
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Batería</h3>
              <p>Larga vida a la batería.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Innovación</h3>
              <p>Diseñado para durar. Y enamorar.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Personaliza tu iPhone</h3>
              <p>Ponle tu estilo. En cada detalle.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Seguridad</h3>
              <p>Protege tus datos con la mejor tecnología.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Velocidad</h3>
              <p>Rendimiento superior en cada tarea.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Calidad de Cámara</h3>
              <p>Fotos y videos de alta calidad.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center align-items-center">
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Durabilidad</h3>
              <p>Construcción resistente y duradera.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Interfaz</h3>
              <p>Interfaz amigable y fácil de usar.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center m-5 bg-black text-white rounded" style={{ height: '90vh', marginLeft: '30px', marginRight: '30px' }}>
              <h3>Compatibilidad</h3>
              <p>Compatibilidad con múltiples dispositivos.</p>
              <img src="https://i.pinimg.com/564x/87/77/f3/8777f3a36f7a8349c2b6882691df7471.jpg" alt="Descripción" className="w-100 img-fluid rounded" />

            </div>
          </div>
        </Carousel.Item>
      </Carousel>
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
