import React, { useState, useEffect } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out transform 
        ${index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
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
                        className={`carousel-indicator inline-block cursor-pointer rounded-full transition-all duration-300 
                            ${index === currentIndex ? 'w-3 h-3 bg-blue-500' : 'w-2 h-2 bg-white'}
                        `}
                        onClick={() => setSlide(index)}
                        style={{ marginTop: index === currentIndex ? '-1px' : '0' }}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
