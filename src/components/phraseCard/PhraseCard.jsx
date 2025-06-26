import React, { useEffect, useState } from 'react';
import { authorImages } from '../../data/authorImages';
import './PhraseCard.css';
import ShareButtons from '../Share/ShareButtons.jsx';

const PhraseCard = ({ quote, onNewQuote }) => {
  const backgroundImage = authorImages[quote.author];
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleNewQuote = () => {
    const newQuote = getRandomQuote(quotes, currentQuote);
    setCurrentQuote(newQuote);
  };

  useEffect(() => {
    setFadeClass('fade-out');
    const timeout = setTimeout(() => setFadeClass('fade-in'), 100);
    return () => clearTimeout(timeout);
  }, [quote.text]);

  return (
    <div className="phrase-card-container">
    <div
      className={`phrase-card ${fadeClass}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}    >
      <div className="phrase-overlay">
        <blockquote>“{quote.text}”</blockquote>
        <footer>— {quote.author}</footer>
        <div className="tags">
          {quote.tags?.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
          
        </div>
      </div>
          <ShareButtons quote={quote} />

      <button className="new-quote-button" onClick={onNewQuote}>
           Revelar otra reflexión
      </button>
    </div>
    </div>
  );
};

export default PhraseCard;
