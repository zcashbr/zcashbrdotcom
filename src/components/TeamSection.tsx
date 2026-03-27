'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const CORTE_PULSOS_Y = "-100px"; 

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const teamMembers = [
  { name: 'Michae2xl', 
    twitterUrl: 'https://x.com/michael2xl',
    imageUrl: '/Michael.jpg' 
  },
  { name: 'James Katz',
    twitterUrl: 'https://x.com/jameskatzcrypto',
    imageUrl: '/James.jpg'
  },
  { name: 'Iogy', 
    twitterUrl: 'https://x.com/pedamerico', 
    imageUrl: '/Iogy.jpg' 
  },
  { name: 'Mine', 
    twitterUrl: 'https://x.com/taminevg', 
    imageUrl: '/Mine.jpg' 
  },
  { name: 'Schonell', 
    twitterUrl: 'https://x.com/SchonellRodrigo', 
    imageUrl: '/Schonell.jpg' 
  },
  { name: 'E-Zec', 
    twitterUrl: 'https://x.com/ezecZshield', 
    imageUrl: '/E-zec.jpg' 
  },
  { name: 'AAmandita', 
    twitterUrl: 'https://x.com/AAmandita_', 
    imageUrl: '/AAmandita.jpg' 
  },
  { name: 'PacBR', 
    twitterUrl: 'https://x.com/paow4n', 
    imageUrl: '/PacBr.jpg' 
  },
  { name: 'Zarkwing Duck', 
    twitterUrl: 'https://x.com/andersonbarlac', 
    imageUrl: '/Zarkwing Duck.jpg' 
  },
];

// Multiply members list to give idea infinity.
const infiniteMembers = Array(10).fill(teamMembers).flat();

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="time" className="w-full mb-0 relative z-30 scroll-mt-32" style={{ marginTop: CORTE_PULSOS_Y }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        
        {/* Bloco Amarelo */}
        <motion.div 
          className="bg-brand py-10 pr-10 pl-16 md:py-16 md:pr-16 md:pl-[6.5rem] -ml-6 md:-ml-10 text-black relative z-20 h-full flex flex-col justify-center rounded-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="text-3xl font-black mb-6 uppercase">Zcash Brasil</h2>
          <p className="font-medium leading-relaxed max-w-2xl text-sm md:text-base">
            A comunidade @zcashbrazil é um espaço aberto e colaborativo onde pessoas de todo o Brasil se reúnem para aprender, compartilhar e debater sobre privacidade digital, liberdade financeira e o uso da criptomoeda Zcash. Voltada tanto para iniciantes quanto para entusiastas mais experientes, a comunidade promove educação acessível, divulga ferramentas que protegem dados pessoais e incentiva o uso consciente de tecnologias que devolvem o controle para o usuário. Aqui, acreditamos que privacidade não é crime, mas sim um direito fundamental.
          </p>
        </motion.div>

        {/* Bloco Cinza (Time) */}
        <motion.div 
          className="bg-[#0a0a0a] min-w-0 py-10 pl-0 md:py-16 relative z-10 h-full flex flex-col justify-center border-t lg:border-t-0 border-zinc-800 rounded-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <div className="absolute top-0 bottom-0 left-0 w-[200vw] bg-[#0a0a0a] -z-10 border-t lg:border-t-0 border-zinc-800/50"></div>

          <h2 className="text-brand text-3xl font-black mb-10 uppercase pl-10 md:pl-16">Time</h2>
          
          <div 
            className="overflow-hidden w-[100vw] lg:w-[50vw] relative" 
            ref={carouselRef}
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            <motion.div 
              className="flex gap-8 md:gap-12 items-center justify-start py-4 pl-10 md:pl-16 pr-10 w-max cursor-grab active:cursor-grabbing"
              drag="x" 
              dragConstraints={carouselRef} 
              whileTap={{ cursor: 'grabbing' }} 
            >
                {/* Agora mapeamos a lista gigante multiplicada */}
                {infiniteMembers.map((member, i) => (
                  // Usamos a chave 'i' única do map infinito para o React não reclamar de itens repetidos
                  <div key={i} className="flex flex-col items-center gap-4 select-none shrink-0">
                    
                    <div 
                      onDoubleClick={() => window.open(member.twitterUrl, '_blank', 'noopener,noreferrer')}
                      className="block hover:scale-105 transition-transform duration-300 cursor-pointer"
                      title="Duplo clique para abrir o Twitter"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-800 border-2 border-brand flex items-center justify-center overflow-hidden relative">
                        <span className="text-[10px] text-zinc-500 absolute text-center px-2 select-none">Avatar de {member.name}</span>
                        <Image 
                          src={member.imageUrl} 
                          alt={`Avatar de ${member.name}`}
                          fill
                          className="object-cover select-none pointer-events-none"
                          draggable={false}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-sm font-black uppercase tracking-widest select-none">{member.name}</span>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}