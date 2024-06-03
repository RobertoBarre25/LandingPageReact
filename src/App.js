// App.js
import React from 'react';
import './App.css';
import Header from './NavBar/Header';
import Footer from './footer/footer';
import Body from './body/body';
import HorizontalCard from './CardShadow/HorizontalCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <HorizontalCard
          imageSrc="https://fundacioncarlosslim.org/wp-content/uploads/2016/11/redes-de-datos.jpg"
          title="Redes de Datos"
          description="¿Quieres saber sobre los servicios de Redes de Datos?
            En Grupo Alternativas y Soluciones te ofrecemos un servicio profesional."
        />
      <Footer />
    </div>
  );
}

export default App;
