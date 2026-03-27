'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// IMPORTS DOS ÍCONES SOCIAIS
import { FaDiscord, FaTelegramPlane, FaYoutube, FaInstagram, FaSoundcloud, FaShoppingBag } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

// ARRAY DE REDES SOCIAIS
const socialMedias = [
  { title: "Instagram", url: "https://www.instagram.com/zcashbrazil", Icon: FaInstagram },
  { title: "X.com", url: "https://x.com/zcashbrazil", Icon: FaXTwitter },
  { title: "Discord", url: "https://discord.com/invite/zcash", Icon: FaDiscord },
  { title: "Telegram", url: "https://t.me/brzcash", Icon: FaTelegramPlane },
  { title: "Youtube", url: "https://www.youtube.com/@zcashbrasil", Icon: FaYoutube },
  { title: "Substack", url: "https://zcashbrazil.substack.com/", Icon: SiSubstack },
  { title: "SoundCloud", url: "https://soundcloud.com/zcashbrazil", Icon: FaSoundcloud },
];

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* LADO ESQUERDO: Logo (Vazando) + Sociais(Mobile) + Links(Desktop) */}
        <div className="relative flex items-center gap-12 lg:gap-20 xl:gap-24 justify-start">
          
          {/* LOGO CONTAINER */}
          <a 
            href="#topo"
            onClick={scrollToTop}
            className="hover:scale-105 transition-transform duration-300 shrink-0 absolute top-[-4px] md:top-[-8px] left-0 rounded-full border-none overflow-hidden flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-transparent"
            title="Voltar ao início"
          >
            {/* Uma div que ocupa só a metade de baixo formando um semi-círculo */}
            <div 
              className={`absolute bottom-0 left-0 w-full h-1/2 transition-all duration-300 ${
                scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
              }`}
            ></div>

            {/* A IMAGEM DA LOGO */}
            <Image 
              src="/logo.png.png" 
              alt="Logo Zcash Brasil" 
              fill
              className="object-cover p-[2px] relative z-10" 
              sizes="(max-width: 768px) 64px, 80px"
            />
          </a>

          <div className="flex items-center gap-12 lg:gap-20 xl:gap-24 pl-20 md:pl-24">
            {/* REDES SOCIAIS (Apenas Mobile - Lado Esquerdo) */}
            <div className="flex lg:hidden items-center gap-2 pr-0 border-l border-zinc-800">
              {socialMedias.map(({ title, url, Icon }) => (
                <a 
                  key={title} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand transition-colors"
                  title={title}
                >
                  <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>

            {/* LINKS DE NAVEGAÇÃO (Apenas Desktop - Lado Esquerdo) */}
            <div className="hidden lg:flex gap-6 xl:gap-8 text-sm font-bold uppercase tracking-widest">
              <a href="#time" onClick={(e) => scrollToSection(e, 'time')} className="text-gray-300 hover:text-brand transition-colors">Time</a>
              <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-gray-300 hover:text-brand transition-colors">Sobre</a>
              <a href="#projetos" onClick={(e) => scrollToSection(e, 'projetos')} className="text-gray-300 hover:text-brand transition-colors">Projetos</a>
              <a href="#videos" onClick={(e) => scrollToSection(e, 'videos')} className="text-gray-300 hover:text-brand transition-colors">Vídeos</a>
              <a href="#artigos" onClick={(e) => scrollToSection(e, 'artigos')} className="text-gray-300 hover:text-brand transition-colors">Artigos</a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Sociais(Desktop) + Botão Learn */}
        <div className="flex items-center gap-4 xl:gap-6">

          {/* REDES SOCIAIS (Apenas Desktop - Lado Direito) */}
          <div className="hidden lg:flex items-center gap-4 pr-6 border-r border-zinc-800">
            {socialMedias.map(({ title, url, Icon }) => (
              <a 
                key={title} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand hover:-translate-y-1 transition-all duration-300"
                title={title}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* BOTÃO DA LOJA */}
          <a 
            href="https://reserva.ink/580043/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-brand transition-colors text-xs md:text-sm font-bold uppercase tracking-widest pr-4 xl:pr-6 border-r border-zinc-800"
            title="Loja Oficial Zcash Brasil"
          >
            <FaShoppingBag className="w-4 h-4 md:w-5 md:h-5 mb-[2px]" />
            <span className="hidden sm:block">Loja</span>
          </a>

          {/* BOTÃO LEARN */}
          <Link 
            href="/learn" 
            className="text-brand hover:text-white transition-colors text-xs md:text-sm font-bold uppercase tracking-widest shrink-0"
          >
            Learn →
          </Link>
        </div>

      </div>
    </nav>
  );
}