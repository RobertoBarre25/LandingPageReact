import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

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
        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out 
                        ${index === currentIndex ? 'translate-x-0' : index === prevIndex ? '-translate-x-full' : 'translate-x-full'}
                    `}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="overlay absolute inset-0 bg-black opacity-50"></div>
                    <div className="carousel-text absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        {image.text}
                    </div>
                </div>
            ))}
            <div className="carousel-indicators absolute flex justify-end space-x-2 bottom-4 right-4">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator inline-block w-3 h-3 bg-white rounded-full mx-1 cursor-pointer 
                            ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}
                        `}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
