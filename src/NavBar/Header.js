import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


//posible imagen a utilizar 
//<img loading="lazy" decoding="async" width="1280" height="841" src="https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269.jpeg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt srcset="https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269.jpeg 1280w, https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269-250x164.jpeg 250w, https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269-300x197.jpeg 300w, https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269-1024x673.jpeg 1024w, https://solucione.com.mx/corporativo/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-16-at-15.44.57-e1603297825269-768x505.jpeg 768w" sizes="(max-width: 1280px) 100vw, 1280px"/>

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
