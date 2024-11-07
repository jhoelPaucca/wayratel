import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./inicio.png" alt="" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#inicio"><i className="fas fa-home"></i> Inicio</a></li>
          <li><a href="#servicios"><i className="fas fa-concierge-bell"></i> Servicios</a></li>
          <li><a href="#contacto"><i className="fas fa-envelope"></i> Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;