import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  const services = [
    'Antivirus en la nube',
    'Gestión de vulnerabilidades',
    'Sandboxing en la nube',
    'Protección de correo electrónico'
  ];

  const handleContactClick = () => {
    navigate('/contact', { state: { services } });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-800 ease-in-out h-16 ${headerClass}`}>
      <nav className="flex justify-between items-center px-5 h-full">
        <div className="text-white text-lg md:text-xl">Grupo Alternativas y Soluciones</div>
        <ul className=" text-white flex space-x-5 list-none">
          <li style={{ marginTop: '1.2rem' }}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li style={{ marginTop: '1.2rem' }}>
            <Link to="/contact" onClick={handleContactClick} className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
