import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PhraseCard from './components/phraseCard/PhraseCard.jsx';
import TagFilter from './components/filters/TagFilter.jsx';
import AmbientSound from './components/AmbientSound/AmbientSound.jsx';
import { getRandomQuote } from './utils/randomizer';
import quotes from './data/quotes.json';
import ShareButtons from './components/Share/ShareButtons.jsx';
import './App.css';



function App() {

  // Estado para la etiqueta activa
const [activeTag, setActiveTag] = useState(null);
const [isMuted, setIsMuted] = useState(false);

// Recolectar todas las etiquetas disponibles
const allTags = Array.from(
  new Set(quotes.flatMap(q => q.tags || []))
).sort();

// Frases disponibles según filtro activo
const filteredQuotes = activeTag
  ? quotes.filter(q => q.tags?.includes(activeTag))
  : quotes;


// Obtener nueva frase según filtro activo
const handleNewQuote = () => {
  const newQuote = getRandomQuote(filteredQuotes, currentQuote);
  setCurrentQuote(newQuote);
};

  // Frase actualmente mostrada
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote(filteredQuotes));

  return (
    <>
      <div className="app-container">

        <button
          className={`mute-button ${!isMuted ? 'sound-on' : ''}`}
          onClick={() => setIsMuted(prev => !prev)}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          title={isMuted ? 'Activar sonido ambiental' : 'Silenciar sonido ambiental'}>
          {isMuted ? '🔇' : '🔊'}
        </button>
        <Header />
        <main className="main-content">

          <PhraseCard quote={currentQuote} onNewQuote={handleNewQuote} />

          <TagFilter
             tags={allTags}
             activeTag={activeTag}
             onSelectTag={setActiveTag}
            />
        </main>
        <Footer />
      </div>

      <AmbientSound isMuted={isMuted} /> {/* Va por fuera */}
    </>
  );
}

export default App;

