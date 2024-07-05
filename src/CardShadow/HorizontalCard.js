import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css.css';

const HorizontalCard = ({ imgSrc, title, description }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`horizontal-card-container ${inView ? 'in-view' : ''}`}>
      <div className="relative flex justify-center">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
          <div className="max-w-8xl mx-auto">
            <div className="bg-transparent overflow-hidden shadow-none rounded-lg flex items-center justify-center h-full">
              <div className="p-4 text-left">
                <h2 className="text-4xl font-sans font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 font-sans">{description}</p>
                <img src={imgSrc} alt="img" className="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;