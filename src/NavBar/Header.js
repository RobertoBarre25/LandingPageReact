import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-800 ease-in-out ${scrollPosition > 20 ? 'bg-blue-800 h-20' : 'bg-transparent h-20'}`}>
      <nav className="flex justify-between items-center px-5 h-full">
        <div className="text-white text-xl md:text-2xl">Grupo Alternativas y Soluciones</div>
        <ul className="flex space-x-5 list-none">
        <li>
            <div style={{ marginTop: '1.3rem' }}> {/* Contenedor con margen superior */}
              <Link to="/"
                className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
                style={{ textDecoration: 'none', fontSize: '17.5px'  }}
              >
                Home
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}> {/* Contenedor con margen superior */}
              <Link to="/contact"
                className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
                style={{ textDecoration: 'none', fontSize: '17.5px' }}
              >
                Services
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}> {/* Contenedor con margen superior */}
              <Link to="/contact"
                className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
                style={{ textDecoration: 'none', fontSize: '17.5px' }}
              >
                Prices
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}> {/* Contenedor con margen superior */}
              <Link to="/contact"
                className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
                style={{ textDecoration: 'none', fontSize: '17.5px' }}
              >
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
