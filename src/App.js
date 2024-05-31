import React from 'react';
import './App.css';
import Header from './NavBar/Header';
import Footer from './footer/footer';
import Body from './body/body';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">        
      </header>
      <Body></Body>
      <Footer />
    </div>
  );
}

export default App;
