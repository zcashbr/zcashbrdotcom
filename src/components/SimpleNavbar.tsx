'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaDiscord, FaTelegramPlane, FaYoutube, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

const socialMedias = [
  { title: "Instagram", url: "https://www.instagram.com/zcashbrazil", Icon: FaInstagram },
  { title: "X.com", url: "https://x.com/zcashbrazil", Icon: FaXTwitter },
  { title: "Discord", url: "https://discord.com/invite/zcash", Icon: FaDiscord },
  { title: "Telegram", url: "https://t.me/brzcash", Icon: FaTelegramPlane },
  { title: "Youtube", url: "https://www.youtube.com/@zcashbrasil", Icon: FaYoutube },
  { title: "Substack", url: "https://zcashbrazil.substack.com/", Icon: SiSubstack },
  { title: "SoundCloud", url: "https://soundcloud.com/zcashbrazil", Icon: FaSoundcloud },
];

export default function SimpleNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 flex items-center justify-between w-full">
        
        {/* LADO ESQUERDO: Logo + Voltar */}
        <div className="relative flex items-center gap-6 md:gap-12 justify-start">
          <Link 
            href="/"
            className="hover:scale-105 transition-transform duration-300 shrink-0 absolute top-[-4px] md:top-[-8px] left-0 rounded-full border-none overflow-hidden flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-transparent"
            title="Voltar para a Home"
          >
            <div className={`absolute bottom-0 left-0 w-full h-[20px] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}></div>
            <Image src="/logo.png.png" alt="Logo Zcash Brasil" fill sizes="(max-width: 768px) 64px, 80px" className="object-cover p-[2px] relative z-10" />
          </Link>

          <div className="pl-20 md:pl-24 hidden sm:block">
            <Link href="/" className="text-gray-400 hover:text-brand transition-colors text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="text-lg mb-[2px]">&larr;</span> Home
            </Link>
          </div>
        </div>

        {/* DIREITA: Redes Sociais */}
        <div className="flex items-center justify-end">
          <div className="hidden lg:flex items-center gap-4">
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
        </div>

      </div>
    </nav>
  );
}