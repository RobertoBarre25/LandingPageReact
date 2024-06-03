// src/carousel.js
import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
