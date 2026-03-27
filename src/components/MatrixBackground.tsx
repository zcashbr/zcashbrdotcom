'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const characters = 'Z0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&'.split('');
    const fontSize = 24; // Ajusta o tamanho da fonte
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * -100));

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#f97316'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] >= 0) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Controle de opacidade {opacity}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none opacity-15 z-0" 
    />
  );
}