// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './NavBar/Header';
import Body from './body/body';
import Cards from './CardsSer/cards';
import InfoPage from './InfoPage/InfoPage';
import ContactForm from './ContactForm/ContactForm';
import Footer from './footer/footer';
import Services from './Services/services';
import M1 from './Servicios/M1';
import M2 from './Servicios/M2';
import M3 from './Servicios/M3';
import M4 from './Servicios/M4';
import M5 from './Servicios/M5';
import M6 from './Servicios/M6';
import M7 from './Servicios/M7';
import M8 from './Servicios/M8';
import M9 from './Servicios/M9';
import M10 from './Servicios/M10';
import M11 from './Servicios/M11';
import M12 from './Servicios/M12';
import Login from './Login/Login';
import Register from './Registrer/Register';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/M1" element={<M1 />} />
            <Route path="/M2" element={<M2 />} />
            <Route path="/M3" element={<M3 />} />
            <Route path="/M4" element={<M4 />} />
            <Route path="/M5" element={<M5 />} />
            <Route path="/M6" element={<M6 />} />
            <Route path="/M7" element={<M7 />} />
            <Route path="/M8" element={<M8 />} />
            <Route path="/M9" element={<M9 />} />
            <Route path="/M10" element={<M10 />} />
            <Route path="/M11" element={<M11 />} />
            <Route path="/M12" element={<M12 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
