import React from 'react';
import './ShareButtons.css';

const ShareButtons = ({ quote }) => {
  const text = `"${quote.text}" — ${quote.author}`;
  const urlEncoded = encodeURIComponent(text);
  const currentUrl = window.location.href;

  const whatsappUrl = `https://wa.me/?text=${urlEncoded}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${urlEncoded}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${urlEncoded}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Frase copiada al portapapeles');
  };

  return (
    <div className="share-container">
      <p className="share-label">Comparte en tus Redes Sociales:</p>
      <div className="icon-buttons">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="icon-btn whatsapp" aria-label="Compartir en WhatsApp">
          <svg viewBox="0 0 32 32" fill="white" width="20" height="20">
            <path d="M16.04 2.004c-7.73 0-14 6.27-14 14 0 2.45.65 4.82 1.89 6.91L2 30l7.27-1.88c2.02 1.1 4.29 1.68 6.77 1.68 7.73 0 14-6.27 14-14s-6.27-13.996-14-13.996zM16 26.58c-2.17 0-4.28-.58-6.12-1.67l-.44-.26-4.31 1.11 1.15-4.2-.29-.43c-1.17-1.74-1.79-3.77-1.79-5.83 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.69-10.7 10.69z" />
            <path d="M22.75 19.33c-.35-.18-2.04-1.01-2.35-1.12-.31-.11-.53-.18-.75.18s-.86 1.12-1.06 1.35c-.2.22-.39.25-.73.09-.35-.18-1.49-.55-2.83-1.77-1.05-.94-1.75-2.1-1.96-2.45-.2-.35-.02-.54.15-.72.15-.16.35-.4.52-.61.18-.2.23-.35.35-.58.11-.22.06-.44-.03-.61-.09-.18-.75-1.8-1.03-2.47-.27-.65-.55-.55-.75-.56-.2-.01-.44-.01-.68-.01s-.61.09-.93.44c-.31.35-1.2 1.17-1.2 2.85s1.23 3.29 1.4 3.51c.17.22 2.4 3.67 5.82 5.15.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 2.04-.83 2.33-1.63.29-.8.29-1.49.2-1.63-.1-.14-.31-.22-.65-.39z" />
          </svg>
        </a>

        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="icon-btn twitter" aria-label="Compartir en Twitter/X">
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M20.66 4.5h-2.02l-4.2 5.32-4.27-5.32H4.5l5.77 7.23L4.34 19.5h2.02l4.45-5.66 4.53 5.66h5.16l-6.14-7.74z"/>
          </svg>
        </a>

        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="icon-btn facebook" aria-label="Compartir en Facebook">
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3V22C18.34 21.13 22 16.99 22 12z"/>
          </svg>
        </a>

        <button onClick={copyToClipboard} className="icon-btn copy" aria-label="Copiar frase">
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v16h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 18H8V7h11v16z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
