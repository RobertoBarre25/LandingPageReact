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
  );
};

export default HorizontalCard;
