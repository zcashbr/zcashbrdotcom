'use client';

import Link from 'next/link';
import Image from 'next/image';

// ÍCONES DAS REDES SOCIAIS
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black border-t border-zinc-800/50 pt-16 pb-8 relative z-20">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        
        {/* GRID PRINCIPAL DE COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUNA 1: LOGO E RESUMO */}
          <div className="flex flex-col items-start gap-6">
            <a 
              href="#topo"
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {/* LOGO REDONDA */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                <Image 
                  src="/logo.png.png" 
                  alt="Logo Zcash Brasil" 
                  fill
                  className="object-cover p-[2px]" 
                  sizes="48px"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                <span className="text-brand">Zcash</span> <span className="text-white">Brasil</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Um espaço aberto e colaborativo focado em educação, privacidade digital e liberdade financeira através do ecossistema Zcash.
            </p>

            <a 
              href="https://reserva.ink/580043/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 mt-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-brand rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all"
            >
              <FaShoppingBag className="w-4 h-4 text-brand" />
              Conheça Nossa Loja
              <span className="text-[10px] text-gray-500 group-hover:text-brand transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>
            </a>
          
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Navegação</h3>
            <Link href="/#sobre" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Sobre a Zcash</Link>
            <Link href="/#time" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Nosso Time</Link>
            <Link href="/#projetos" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Projetos da Comunidade</Link>
            <Link href="/#videos" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Vídeos e Tutoriais</Link>
            <Link href="/#artigos" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Artigos (Substack)</Link>
          </div>

          {/* COLUNA 3: ECOSSISTEMA E FERRAMENTAS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Ecossistema</h3>
            <a href="https://zips.z.cash/protocol/protocol.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Whitepaper ↗</a>
            <a href="https://zecfaucet.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Zecfaucet ↗</a>
            <a href="https://zodl.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Zodl Wallet ↗</a>
            <a href="https://z.cash/ecosystem/zec-block-explorer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">Explorador de Blocos ↗</a>
            <a href="https://github.com/zcash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors text-sm w-fit">GitHub Oficial ↗</a>
          </div>

          {/* COLUNA 4: AVISOS LEGAIS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Avisos Legais</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-2">
              <strong className="text-gray-400">Disclaimer:</strong> O conteúdo deste site é estritamente <b>educacional</b> e <b>informativo</b>. Não constitui conselho financeiro ou recomendação de investimento (NFA).
            </p>
            <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors text-xs underline underline-offset-4 w-fit">
              Política de Privacidade
            </Link>
          </div>

        </div>

        {/* RODAPÉ DO RODAPÉ */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 gap-6">
          
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} Zcash Brasil. Construído pela comunidade para a comunidade.
          </p>

          {/* ÍCONES SOCIAIS*/}
          <div className="flex items-center gap-4">
            {socialMedias.map(({ title, url, Icon }) => (
              <a 
                key={title} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand hover:-translate-y-1 transition-all duration-300"
                title={title}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}