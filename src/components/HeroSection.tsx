'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-row items-center justify-between min-h-[40vh] md:min-h-[80vh] z-20 pt-6 md:pt-0">
      
      {/* TEXTO HERO */}
      <motion.div 
        className="relative z-20 w-[60%] md:w-1/2 flex flex-col gap-2 md:gap-4 text-left items-start" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand tracking-tighter mb-1 relative z-10 leading-none">
          ZCASH <br className="md:hidden" />BRASIL
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 relative z-10 leading-relaxed max-w-[220px] md:max-w-none">
          Seu portal para o ecossistema Zcash.
        </p>
      </motion.div>

      {/* IMAGEM HERO */}
      <motion.div 
        className="relative md:absolute md:right-0 z-0 flex justify-end items-center w-[40%] md:w-auto h-auto md:pointer-events-none"
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* VERSÃO MOBILE */}
        <div className="block md:hidden relative w-full flex justify-end items-center pr-2">
          <Image 
            src="/logo.png.png" 
            alt="lOGO ZCASH" 
            width={800} 
            height={800} 
            className="w-full h-auto object-contain drop-shadow-2xl scale-110" 
            priority 
          />
        </div>

        {/* VERSÃO DESKTOP */}
        <div className="hidden md:flex relative w-[220%] lg:w-[250%] -mr-[10%] justify-end">
          <Image 
            src="/width_1600-F.webp" 
            alt="Mãos segurando a logo Zcash Brasil" 
            width={1600} 
            height={820} 
            className="w-full h-auto object-contain drop-shadow-2xl" 
            priority 
          />
        </div>

      </motion.div>
    </section>
  );
}