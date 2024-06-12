import React from 'react';
import './ImgSection.css';

const ImageSection = () => {
  return (
    <div className="image-container">
      <div className="image-section">
        <div className="image-item">
          <img src="https://i.pinimg.com/564x/c7/57/7c/c7577cb0fbd63a7ef1630a54829fae2c.jpg" alt="Configurador Ducati" />
          <div className="overlay">
            <div className="text">Configurador Ducati</div>
          </div>
        </div>
        <div className="image-item">
          <img src="https://i.pinimg.com/564x/44/45/07/444507d60bd86c271a0994cfb78571bb.jpg" alt="Mantenimiento transparente" />
          <div className="overlay">
            <div className="text">Mantenimiento transparente</div>
          </div>
        </div>
        <div className="image-item">
          <img src="https://i.pinimg.com/564x/41/55/cc/4155cce579c9ae3a9399c146251081e2.jpg" alt="Localizador de concesionarios" />
          <div className="overlay">
            <div className="text">Localizador de concesionarios</div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
