import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/src/inicio.png" alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="footer-button">
        <button>WhatsApp</button>
      </div>
    </footer>
  );
};

export default Footer;
