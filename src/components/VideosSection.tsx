'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

// DADOS DOS VÍDEOS (IDs do YouTube)
const videoCarousel = [
  { id: 'tvSFbP4ZMFk', title: 'Encrypted Private Cash' },
  { id: '19i1g1Wo6uE', title: 'Unstoppable Private Money' },
  { id: 'J9Tje9kEWSQ', title: 'Explicando a cerimônia de criação da Zcash.' },
  { id: '4Z0KIcOij3M', title: 'Zcash - Trazendo liberdade para todos.' },
  { id: 'zjZUG0EFrkg', title: 'A corrida começou' },
];

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function VideosSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Função das Setinhas
  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Função de Arrastar (Drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    // MUDANÇA: Reiniciamos isMoving como false no início do clique
    setIsMoving(false); 
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    setIsMoving(true); 
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do arrasto (x2)
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section id="videos" className="mb-32 relative z-30 scroll-mt-32">
      
      {/* CABEÇALHO DA SEÇÃO & SETAS */}
      <motion.div 
        className="mb-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pr-4 md:pr-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div>
          <h2 className="text-brand text-3xl font-black mb-2 uppercase">Aprenda & Assista</h2>
          <p className="text-gray-400">Arraste ou use as setas. Clique no ícone do play para assistir.</p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={scrollLeftBtn}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-brand hover:text-black hover:border-brand transition-all"
          >
            ←
          </button>
          <button 
            onClick={scrollRightBtn}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-brand hover:text-black hover:border-brand transition-all"
          >
            →
          </button>
        </div>
      </motion.div>

      {/* CARROSSEL HÍBRIDO (Setas + Arrastar) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
      >
        <div className="overflow-hidden w-full relative">
          
          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto pb-8 pr-16 md:pr-32 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              div::-webkit-scrollbar { display: none; }
            `}} />

            {videoCarousel.map((video, index) => (
               <div 
                 key={index} 
                 className="w-[85vw] md:w-[45vw] lg:w-[30vw] flex flex-col gap-4 shrink-0 group" // Mantemos o group para o hover da thumnail
                 title="Arraste ou clique no play"
               >
                 {/* CONTAINER DA THUMBNAIL E ÍCONE */}
                 <div 
                   className="aspect-video relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50"
                   onContextMenu={(e) => e.preventDefault()} 
                 >
                   {/* CAPA DO VÍDEO - EFEITO DE HOVER DO CONTAINER */}
                   <Image 
                     src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                     alt={video.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                     unoptimized
                     draggable={false} 
                   />
                   
                   {/* OVERLAY ESCURO - EFEITO DE HOVER DO CONTAINER */}
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none"></div>
                   
                   <div 
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-brand hover:border-brand" 
                    onClick={() => { if (!isMoving) { setActiveVideo(video.id); } }}
                    title="Assistir vídeo"
                   >
                     {/* TRIÂNGULO - ÍCONE DO PLAY */}
                     <div 
                        className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white transition-colors group-hover:border-l-white border-b-[6px] border-b-transparent ml-1"
                     ></div>
                   </div>
                 </div>
                 
                 <h3 className="text-lg font-bold text-gray-200 line-clamp-2">
                   {video.title}
                 </h3>
               </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MODAL DO PLAYER DO YOUTUBE */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)} 
          >
            <motion.div 
              className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative border border-zinc-800"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-brand text-white hover:text-black rounded-full flex items-center justify-center transition-colors font-bold"
              >
                ✕
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}