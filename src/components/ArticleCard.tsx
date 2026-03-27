import { Article } from '@/types/article';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function ArticleCard({ article }: { article: Article }) {
  const cardVariants : Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.4 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <motion.a 
      href={article.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative flex flex-col h-full bg-[#0a0a0a] border border-zinc-800/50 shadow-lg hover:border-zinc-700 transition-all duration-300 group overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* Imagem que aparece no Hover */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={`Capa do artigo: ${article.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            priority={false}
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-zinc-900 text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-4xl font-black">Z</span>
          </div>
        )}
      </div>

      {/* Gradiente para garantir que o texto fique legível quando a imagem aparecer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* SEÇÃO DE TEXTO */}
      <div className="relative z-20 flex flex-col h-full p-6 md:p-8 flex-grow">
        <h2 className="text-lg md:text-xl font-black mb-4 uppercase text-white group-hover:text-brand transition-colors line-clamp-3">
          {article.title}
        </h2>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {article.contentSnippet}
        </p>
        
        {/* RODAPÉ DO CARD */}
        <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase pt-4 border-t border-zinc-800/50 mt-auto flex justify-between items-center">
          <span>{article.categories[0] || 'Artigo'}</span>
          <span className="text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ler agora &rarr;
          </span>
        </div>
      </div>
    </motion.a>
  );
}