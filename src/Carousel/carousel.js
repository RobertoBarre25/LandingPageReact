import React, { useState, useEffect } from 'react';
import './carousel.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(images.length - 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    const setSlide = (index) => {
        setPrevIndex(currentIndex);
        setCurrentIndex(index);
    };

    return (
        <div className="carousel relative w-full overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="carousel"
                    className={`carousel-image absolute w-full h-full transition-transform duration-700 ease-in-out ${index === currentIndex ? 'translate-x-0' : index === prevIndex ? '-translate-x-full' : 'translate-x-full'}`}
                />
            ))}
            <div className="carousel-indicators absolute bottom-4 rigth-10 w-full text-center">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator inline-block w-3 h-3 bg-white rounded-full mx-1 cursor-pointer  ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;