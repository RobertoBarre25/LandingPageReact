import React, { useState, useEffect } from 'react';

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
            <button
              onClick={() => setView('home')}
              className="text-white top-(-10) font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
            >
              Home
            </button>
          </li>
          <li>
          <button
              onClick={() => setView('home')}
              className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3">
              Home
            </button>
          </li>
          <li>
          <button
              onClick={() => setView('home')}
              className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3">
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setView('contact')}
              className="text-white font-bold transition-colors duration-300 hover:bg-blue-700 focus:outline-none bg-transparent p-3 m-3"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
