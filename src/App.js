import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './NavBar/Header';
import Body from './body/body';
import Cards from './CardsSer/cards'; // Importa tu componente Cards
import InfoPage from './InfoPage/InfoPage'; // Importa el componente InfoPage
import ContactForm from './ContactForm/ContactForm';
import Footer from './footer/footer';
import Services from './Services/services';
import Camaras from './CCTV/Camaras';
import  Paths from './RTS/paths';
import FibraOptica from './FO/FibraOptica'
import Mantenimiento from './Mnto/Mantenimiento'
import Antivirus from './PROTAVT/Antivirus'
import Card1 from './Card1/card1'
import Card2 from './Card2/card2'
import Card3 from './Card3/card3'
import Card4 from './Card4/card4'
import Card5 from './Card5/card5'
import Card6 from './Card6/card6'
import Card7 from './Card7/card7'
import Login from './Login/Login'
import Register from './Registrer/Register'

const App = () => {
  return (
    <Router>
          
      <div className="App">
      <Header/>
        <Routes>
          
          <Route path="/" element={<Body />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/camaras" element={<Camaras />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/fibra" element={<FibraOptica />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          <Route path="/antivirus" element={<Antivirus />} />
          <Route path="/card1" element={<Card1 />} />
          <Route path="/card2" element={<Card2 />} />
          <Route path="/card3" element={<Card3 />} />
          <Route path="/card4" element={<Card4 />} />
          <Route path="/card5" element={<Card5 />} />
          <Route path="/card6" element={<Card6 />} />
          <Route path="/card7" element={<Card7 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        </Routes>
        <Footer />
      </div>

    </Router>
    
    
  );
};

export default App;
