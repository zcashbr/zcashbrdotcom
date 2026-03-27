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

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full mb-32 mt-12 md:mt-24 relative z-30 scroll-mt-32">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        
        {/* Coluna da Esquerda (Textos) */}
        <div className="flex flex-col h-full">
          
          <motion.div 
            className="bg-brand py-10 pr-10 pl-16 md:py-16 md:pr-16 md:pl-[6.5rem] -ml-6 md:-ml-10 text-black flex-1 relative z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black mb-6">SOBRE A ZCASH?</h2>
            <p className="mb-4 font-medium leading-relaxed">
              Zcash (ZEC) é uma criptomoeda construída para fortalecer a liberdade econômica. É semelhante ao Bitcoin em seu design... Mas usa uma tecnologia de privacidade que criptografa informações de transações e permite que os usuários protejam os seus ativos.
            </p>
            <p className="font-medium leading-relaxed">
              Armazene, gaste ou envie. Zcash é uma moeda digital e uma reserva de valor, que mantém todas as suas informações financeiras privadas e sob seu controle.
            </p>
          </motion.div>

          <motion.div 
            className="bg-zinc-950 py-10 pr-10 pl-16 md:py-16 md:pr-16 md:pl-[6.5rem] -ml-6 md:-ml-10 flex-1 relative z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-black mb-6">QUAL A DIFERENÇA ENTRE ZCASH E ZEC?</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              As pessoas usam estes termos de forma intercambiável o tempo todo e está tudo bem, sem problemas... Mas tecnicamente, Zcash é o protocolo e $ZEC é a moeda.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Você pode enviar $ZEC para um amigo, usar para comprar algo ou trocar por alguma outra moeda ou ativo.
            </p>
            <a href="https://zodl.com/" target="_blank" rel="noopener noreferrer" className="text-brand font-bold text-xl hover:underline uppercase tracking-wider">
              Aproveite e conheça a ZODL Wallet
            </a>
          </motion.div>
        </div>

        {/* Coluna da Direita - Imagem Expandida */}
        <motion.div 
          className="bg-brand relative min-h-[400px] lg:min-h-full min-w-0 z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-[200vw] bg-brand -z-10"></div>
        
          <div className="absolute top-0 bottom-0 left-0 w-[100vw] lg:w-[50vw]">
            <Image 
              src="/width_800.webp" 
              alt="Ilustração 3D sobre Zcash" 
              fill
              className="object-cover select-none pointer-events-none drop-shadow-2xl" 
              priority={false}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}