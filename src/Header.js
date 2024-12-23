import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/src/inicio.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <div className="footer-button">
            <button href="#contacto">Contacto</button>
          </div>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
