import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './NavBar/Header';
import Body from './body/body';
import Cards from './CardsSer/cards'; // Importa tu componente Cards
import InfoPage from './InfoPage/InfoPage'; // Importa el componente InfoPage
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
