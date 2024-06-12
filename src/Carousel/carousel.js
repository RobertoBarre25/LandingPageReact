import React, { useState, useEffect } from 'react';

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
        <div className="relative max-w-full h-[990px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide absolute w-full h-full transition-transform duration-700 ease-in-out ${index === currentIndex ? 'translate-x-0' : index === prevIndex ? '-translate-x-full' : 'translate-x-full'}`}
                >
                    <img
                        src={image.src}
                        alt="carousel"
                        className="w-full h-full object-cover"
                    />
                    <div className="overlay absolute inset-0 bg-black opacity-50"></div> {/* Superposición oscura */}
                    <div className="carousel-text absolute inset-0 flex items-center justify-center text-center text-white">
                        {image.text}
                    </div>
                </div>
            ))}
            <div className="carousel-indicators absolute flex justify-end space-x-2 bottom-4 right-4">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator inline-block w-3 h-3 bg-white rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
