import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isBlue }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

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

  const isContactPage = location.pathname === '/contact';
  const headerClass = isContactPage
    ? scrollPosition > 20 ? 'bg-transparent' : (isBlue ? 'bg-blue-700' : 'bg-transparent')
    : scrollPosition > 20 ? 'bg-blue-700' : 'bg-transparent';

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleServicesClick = () => {
    navigate('/service'); // Cambia "/nueva-ruta" a la ruta que desees
  };
  
  const handleHomeClick = () => {
    navigate('/'); // Cambia "/nueva-ruta" a la ruta que desees
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-800 ease-in-out h-16 ${headerClass}`}>
      <nav className="flex justify-between items-center px-5 h-full">
        <a href='https://solucione.com.mx/corporativo/'><div className="text-white text-lg md:text-xl">Grupo Alternativas Soluciones</div></a>
        <ul className="text-white flex space-x-5 list-none">
          <li style={{ marginTop: '1.2rem' }}>
            <button onClick={handleHomeClick} className="nav-link">Home</button>
          </li>
          <li style={{ marginTop: '1.2rem' }}>
            <button onClick={handleServicesClick} className="nav-link">Servicios</button>
          </li>
          <li style={{ marginTop: '1.2rem' }}>
            <button onClick={handleContactClick} className="nav-link">Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
