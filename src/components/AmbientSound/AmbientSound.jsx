import React, { useEffect, useRef } from 'react';
import fondo from '../../assets/audio/fondo-templo.mp3';

const AmbientSound = ({ isMuted }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.3;

    const tryPlay = () => {
      if (!isMuted && audio.paused) {
        audio.play().catch((err) => {
          console.warn('Autoplay bloqueado por el navegador:', err.message);
        });
      }
    };

    document.addEventListener('click', tryPlay, { once: true });

    return () => {
      document.removeEventListener('click', tryPlay);
    };
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  }, [isMuted]);

  return <audio ref={audioRef} src={fondo} preload="auto" />;
};

export default AmbientSound;
