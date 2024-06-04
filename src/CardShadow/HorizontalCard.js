import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCard = ({ imageSrc, title, description }) => (
  <div className="container">
    <div className="row justify-content-center">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center p-0">
              <img src={imageSrc} alt={title} className="card-img img-fluid" style={{ maxHeight: '150px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-8 p-0">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
);

export default HorizontalCard;
