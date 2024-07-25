import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const HorizontalCard = ({ videoSrc, title, description }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef();
  const videoRef = useRef();

  const navigate = useNavigate();

  const handleClick = (service) => {
    navigate('/contact', { state: { service } });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`horizontal-card-container ${inView ? 'in-view' : ''}`}>
      <div className="relative flex justify-center">
        <div className="max-w-8xl mx-auto">
          <div className="bg-transparent overflow-hidden shadow-sm rounded-lg flex items-center justify-center h-full">
            <div className="p-0 text-left">
              <h2 className="titlePubliciti">{title}</h2>
              <p className="text-gray-700 font-sans">{description}</p>
                <div className='buttomPrincipal'>
                  <button  
                  className="bg-blue-500 border-2 border-white text-white border-none text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 cursor-pointer m-3 md:m-5 rounded-[3px] hover:bg-red-500"
                  onClick={() => handleClick("Me interesa el servicio: Cloud Guard")} >
                
                              Contrata ya!

                  </button>
              </div>          
            </div>
          </div>
        </div>
        <video
          ref={videoRef}
          src={videoSrc}
          className="PublicitiImg"
          style={{ filter: 'brightness(60%)', width: '1920px', height: 'auto' }}
          loop
          muted
          playsInline
        />
          <div className="row">
           <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-2xl sm:text-3xl md:text-4xl animate-bounce mt-4 md:mt-20" />
          </div>
      
       </div>
    <div ref={cardRef} className={`horizontal-card-container ${inView ? 'in-view' : ''}`} style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={videoSrc}
        className="PublicitiImg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(60%)' }}
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h2 className="titlePubliciti">{title}</h2>
        <p className="description">{description}</p>
        <button
          className="mt-4 px-6 py-3 border border-white"
         
        >
          Contacta ya!
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="text-white text-2xl sm:text-3xl md:text-4xl animate-bounce" />
      </div>
    </div>
    </div>
  );
};

export default HorizontalCard;
