import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="#about">Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="footer-button">
        <button>Contacto</button>
      </div>
    </footer>
  );
};

export default Footer;
