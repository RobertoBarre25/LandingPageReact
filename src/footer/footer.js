import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="https://solucione.com.mx/corporativo/wp-content/uploads/2020/04/logo_blanco150x38.png" alt="Ducati Logo" />
          <p> Grupo Alternativas Solucione S.A. de C.V.</p>
        </div>
        <div className="footer-links">
          <a href="#terms">Términos de uso</a>
          <a href="#privacy">Aviso de privacidad</a>
          <a href="#customer-service">Customer Service</a>
          <a href="#cookies">Información de cookies</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Grupo Alternativas Solucione S.A. de C.V. 2022 All Right Reserved.

</p>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/ZWRckIEnlpmIyRjTWROL8/d9cf76987e3b376aaa8ecd81159c8de1/fb-icon.svg" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/4f48hkC0Lm5qMRHrOT8WwV/63c89f535e32ec23ec3b5dc94ad3de64/twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/5rfCVoq7TMPwjeeig77b9S/19a9c2f929c2e990790e4ff4cee614b3/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/sAz4OhE7CJoOW6d3EzPym/4873db418d8aa82f9d14b411b9f52c67/yt-icon.svg" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/JFrSj1zkgM3piads06CSE/8658ad49ce47062b15b9af7eb4b3b49a/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/3OYWqyJN7mPIyqrYxz4B0Y/9da838348f39cf74633ef6788a81eb8a/tiktok-icon.svg" alt="TikTok" />
          </a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
