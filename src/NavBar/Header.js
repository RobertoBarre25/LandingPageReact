import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

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
    ? scrollPosition > 20 ? 'bg-transparent' : 'bg-blue-700'
    : scrollPosition > 20 ? 'bg-blue-700' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-800 ease-in-out h-20 ${headerClass}`}>
      <nav className="flex justify-between items-center px-5 h-full">
        <div className="text-white text-xl md:text-2xl">Grupo Alternativas y Soluciones</div>
        <ul className="flex space-x-5 list-none">
          <li>
            <div style={{ marginTop: '1.3rem' }}>
              <Link to="/" className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3" style={{ textDecoration: 'none', fontSize: '17.5px' }}>
                Home
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}>
              <Link to="/services" className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3" style={{ textDecoration: 'none', fontSize: '17.5px' }}>
                Services
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}>
              <Link to="/prices" className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3" style={{ textDecoration: 'none', fontSize: '17.5px' }}>
                Prices
              </Link>
            </div>
          </li>
          <li>
            <div style={{ marginTop: '1.3rem' }}>
              <Link to="/contact" className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3" style={{ textDecoration: 'none', fontSize: '17.5px' }}>
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
