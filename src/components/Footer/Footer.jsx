import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Templo de Sabiduría Digital · Desarrollado por Armando
      </p>
      <p className="quote">
        “Construimos templos no de piedra, sino del pensamiento interior.”
      </p>
    </footer>
  );
};

export default Footer;
