import React from 'react';
import './Header.css';
import logo from '../../assets/El-Oraculo-Diario.png'; // o .png según corresponda

const Header = () => {
  return (
    <header className="header">
  <div className="header-content">
    <div className="header-left">
      <img src={logo} alt="Templo" className="logo" />
      <h1 className="title">Templo de Sabiduría</h1>
    </div>
    <nav className="nav">
      <a href="#frases">Frases</a>
      <a href="/acerca">Acerca de</a>
    </nav>
  </div>
</header>
  );
};

export default Header;
