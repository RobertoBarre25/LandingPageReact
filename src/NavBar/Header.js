import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Función para actualizar la posición de desplazamiento
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Escuchar el evento de desplazamiento
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollPosition > 20 ? 'header-scroll' : ''}`}>
      <nav className="navbar">
        <div className="logo">Grupo Alternativas y Soluciones</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
