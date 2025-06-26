import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">

      <div className="about-content">
        <h2>Acerca del Templo de Sabiduría</h2>
        <p>
          Este espacio digital fue erigido con intención doble: como obra técnica y como manifestación simbólica. En su núcleo, el Templo de Sabiduría es un lugar de contemplación interior — un oráculo moderno que no predice, sino que revela.
        </p>
        <p>
          Cada frase es una chispa de conocimiento tallada para despertar la conciencia. Cada imagen es un retrato arquetípico. Cada sonido evoca el entorno de un templo sagrado: hojas que susurran, pájaros que vigilan, viento que respira.
        </p>
        <p>
          El Templo no busca dar respuestas, sino resonar. Es un viaje digital que invita a detenerse, reflexionar y elegir una puerta simbólica: virtud, autor, signo.
        </p>
        <p>
          Fue concebido y desarrollado por <strong>Armando Valdez∴</strong>, quien entre líneas de código y filosofía construyó un espacio donde tecnología y alma dialogan.
        </p>
        <p className="symbolic-mark">∴</p>
        <p className="contact-info">
          <a href="https://armando-valdez-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            Portafolio de Armando Valdez
          </a>{' '}
          ·{' '}
          <a href="mailto:armandorvaldezl@gmail.com">armandorvaldezl@gmail.com</a>
        </p>
              <a href="/" className="back-button">← Regresar al inicio</a>
      </div>

    </section>
  );
};

export default About;
