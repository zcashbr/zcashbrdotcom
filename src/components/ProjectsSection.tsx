'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// DADOS DOS PROJETOS
const projectsData = [
  {
    id: 'ZecStats',
    title: 'ZecStats',
    shortDesc: 'Métricas do ecossistema da Zcash em tempo real.',
    fullDesc: 'ZecStats é um painel em tempo real da rede Zcash. Acompanhe o preço (ZEC/USD), o suprimento circulante, o volume de moedas blindadas (Shielded) e o status da blockchain de forma clara e direta.',
    repoLink: 'https://zecstats.info/',
    tags: ['Métricas', 'Zcash', 'Web'],
    cardImageUrl: '/ZECSTATS.webp',
    modalImageUrl: '/ZECSTATS.webp'
  },
  {
    id: 'Zcash PFP Generator',
    title: 'Zcash PFP generator',
    shortDesc: 'Ferramenta criativa e de identidade visual para a comunidade Zcash.',
    fullDesc: 'Zcash PFP é um gerador de avatares personalizado para entusiastas da Zcash. Permite criar fotos de perfil exclusivas com a temática da moeda, fortalecendo a identidade visual da comunidade nas redes sociais.',
    repoLink: 'https://zcashpfp.xyz/',
    tags: ['Privacy', 'Web3', 'ZKP'],
    cardImageUrl: '/ZCASHPFPGENERATOR.webp',
    modalImageUrl: '/ZCASHPFPGENERATOR.webp'
  },
  {
    id: 'Zcash Paper Wallet Generator',
    title: 'Zcash Paper Wallet Generator',
    shortDesc: 'Ferramenta de segurança focada em armazenamento offline (cold storage) para Zcash.',
    fullDesc: 'ZecPaperWallet permite gerar carteiras de papel de forma offline e segura para Zcash. É a ferramenta ideal para armazenamento de longo prazo (cold storage), garantindo que suas chaves privadas nunca toquem a internet.',
    repoLink: 'https://zecpaperwallet.com/',
    tags: ['Ferramenta', 'Carteira', 'UFVK'],
    cardImageUrl: '/ZCASHPAPERWALLETGENERATOR.webp',
    modalImageUrl: '/ZCASHPAPERWALLETGENERATOR2.webp'
  },
  {
    id: 'Zcash Metro',
    title: 'Zcash Metro',
    shortDesc: 'Ferramenta de visualização interativa da rede.',
    fullDesc: 'Zcash Metro é uma ferramenta de visualização interativa em pixel art da rede Zcash. Com uma estética nostálgica, permite acompanhar a chegada de novos blocos e transações na mempool de forma criativa e dinâmica.',
    repoLink: 'https://zcashmetro.io/',
    tags: ['Visualizador de blocos', 'Zcash', 'WEB'],
    cardImageUrl: '/ZCASHMETRO.webp',
    modalImageUrl: '/ZCASHMETRO.webp'
  }
];

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projetos" className="mb-20 scroll-mt-32">
      
      {/* CABEÇALHO COM BOTÃO */}
      <motion.div 
        className="mb-12 relative z-10 pr-4 md:pr-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div>
          <h2 className="text-brand text-3xl font-black mb-2 uppercase">Projetos & Ferramentas</h2>
          <p className="text-gray-400">Iniciativas desenvolvidas pela nossa comunidade.</p>
        </div>

        <a 
          href="https://zcashbrasil.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-transparent border border-brand text-brand px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand hover:text-black transition-all w-fit shrink-0"
        >
          Ver todos <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>

      {/* GRID DE CARDS DOS PROJETOS */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pr-4 md:pr-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-0 cursor-pointer hover:border-brand hover:bg-zinc-800/50 transition-all duration-300 group shadow-lg overflow-hidden"
              variants={fadeUpVariant}
              onClick={() => setActiveProject(project)}
            >
              {/* IMAGEM DO CARD */}
              <div className="aspect-video w-full relative overflow-hidden bg-zinc-950/30">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-700 bg-zinc-950 font-mono">
                  [ Imagem {project.title} ]
                </div>
                <Image 
                  src={project.cardImageUrl} 
                  alt={`Capa do projeto ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="p-5 md:p-6 flex flex-col gap-4 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
                
                {/* TAGS */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-black text-gray-400 group-hover:text-brand transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
        ))}
      </motion.div>

      {/* MODAL / POP-UP DO PROJETO */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)} 
          >
            <motion.div 
              className="w-full max-w-2xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 relative flex flex-col"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
            >
              {/* CABEÇALHO DO POP-UP */}
              <div className="bg-brand p-6 md:p-8 pr-16 relative">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 w-8 h-8 bg-black/20 hover:bg-black text-black hover:text-brand rounded-full flex items-center justify-center transition-colors font-bold z-10"
                >
                  ✕
                </button>
                <h3 className="text-3xl font-black text-black uppercase mb-2">
                  {activeProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-black/20 text-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CORPO DO POP-UP */}
              <div className="p-6 md:p-8 flex flex-col gap-6">
                
                {/* IMAGEM DE DESTAQUE NO MODAL */}
                <div className="aspect-[21/9] w-full relative overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-700 font-mono">
                    [ Imagem de capa {activeProject.title} ]
                  </div>
                  <Image 
                    src={activeProject.modalImageUrl} 
                    alt={`Capa expandida do projeto ${activeProject.title}`}
                    fill 
                    className="object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* DESCRIÇÃO COMPLETA */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {activeProject.fullDesc}
                </p>
                
                {/* BOTÃO DE AÇÃO */}
                <div className="flex justify-end pt-4">
                  <a 
                    href={activeProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center gap-2"
                  >
                    Acessar Projeto <span>→</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}