// App.js
import React, { useState } from 'react';

import './App.css';
import Header from './NavBar/Header';
import Footer from './footer/footer';
import Body from './body/body';
import ContactForm from './ContactForm/ContactForm';


const App = () => {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      <Header setView={setView} />
      {view === 'home' && <Body />}
      {view === 'contact' && <ContactForm setView={setView} />}
      <Footer />
    </div>
  );
};

export default App;