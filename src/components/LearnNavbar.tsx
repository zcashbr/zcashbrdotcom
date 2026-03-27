'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { FaSearch, FaDiscord, FaTelegramPlane, FaYoutube, FaInstagram, FaSoundcloud, FaShoppingBag } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

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

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/learn?q=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push(`/learn`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center justify-start h-10">
      <button
        type="button"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 shrink-0 ${
          isSearchOpen ? 'bg-brand text-black' : 'bg-transparent text-gray-400 hover:text-brand'
        }`}
        title="Pesquisar"
      >
        <FaSearch className="w-[18px] h-[18px]" />
      </button>

      <input
        type="text"
        placeholder="Buscar artigos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`absolute left-0 transition-all duration-300 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white rounded-full py-2 text-sm focus:outline-none focus:border-brand ${
          isSearchOpen ? 'w-48 md:w-64 pl-12 pr-4 opacity-100 pointer-events-auto' : 'w-10 pl-10 pr-0 opacity-0 pointer-events-none'
        }`}
      />
    </form>
  );
}

export default function LearnNavbar() {
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
        <div className="relative flex items-center gap-6 md:gap-12 justify-start w-1/3">
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

        <div className="flex items-start justify-start w-1/3">
          <Suspense fallback={<div className="w-10 h-10 rounded-full bg-zinc-800 animate-pulse"></div>}>
            <SearchInput />
          </Suspense>
        </div>

        {/* DIREITA: Redes Sociais + Loja */}
        <div className="flex items-center justify-end w-1/3">
          
          <div className="hidden lg:flex items-center gap-4 pr-4 xl:pr-6 border-r border-zinc-800">
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
          
          {/* Botão da loja na Learn Navbar */}
          <a 
            href="https://reserva.ink/580043/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-brand transition-colors text-xs md:text-sm font-bold uppercase tracking-widest pl-4 xl:pl-6"
            title="Loja Oficial Zcash Brasil"
          >
            <FaShoppingBag className="w-4 h-4 md:w-5 md:h-5 mb-[2px]" />
            <span className="hidden sm:block">Loja</span>
          </a>

        </div>

      </div>
    </nav>
  );
}