/*'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Array com os parceiros. 
const partners = [
  { name: 'Parceiro 1', logoUrl: '/logo-parceiro-1.png', link: '#' },
  { name: 'Parceiro 2', logoUrl: '/logo-parceiro-2.png', link: '#' },
  { name: 'Parceiro 3', logoUrl: '/logo-parceiro-3.png', link: '#' },
  { name: 'Parceiro 4', logoUrl: '/logo-parceiro-4.png', link: '#' },
];

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function PartnersSection() {
  return (
    <section id="parceiros" className="w-full pt-8 pb-20 -mt-20 relative z-20 scroll-mt-32">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        
        { TÍTULO DA SEÇÃO }
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="text-brand text-xl md:text-3xl font-black uppercase tracking-widest mb-2">
            Nossos Parceiros
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Organizações que apoiam a Zcash Brasil.
          </p>
        </motion.div>

        { GRID DE LOGOS }
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariant}
              className="block relative w-32 h-16 md:w-48 md:h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={partner.logoUrl}
                alt={`Logo ${partner.name}`}
                fill
                className="object-contain"
                onError={(e) => { e.currentTarget.style.opacity = '0.2'; }} 
              />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}*/

//Esse código vai ficar em stand-by até ser definido como iremos definir os parceiros com as devidas autorizações. 