import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ setView }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollPosition > 20 ? 'header-scroll' : ''}`}>
      <nav className="navbar">
        <div className="logo">Grupo Alternativas y Soluciones</div>
        <ul>
          <li><a href="#" onClick={() => setView('home')}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#" onClick={() => setView('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
