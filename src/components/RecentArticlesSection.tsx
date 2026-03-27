'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Tipagem para os dados do artigo
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const fadeUpVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function RecentArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // URL DO SEU SUBSTACK
  const SUBSTACK_URL = 'https://zcashbrazil.substack.com/feed';

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${SUBSTACK_URL}`);
        const data = await response.json();

        if (data.status === 'ok') {
          const latestArticles = data.items.slice(0, 5).map((item: any) => {
            const stripHtml = (html: string) => {
              const doc = new DOMParser().parseFromString(html, 'text/html');
              return doc.body.textContent || "";
            };

            const dateObj = new Date(item.pubDate);
            const formattedDate = dateObj.toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            });

            return {
              id: item.guid,
              title: item.title,
              excerpt: stripHtml(item.description).substring(0, 120) + '...',
              date: formattedDate,
              link: item.link, 
            };
          });

          setArticles(latestArticles);
        }
      } catch (error) {
        console.error("Erro ao carregar os artigos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <section id="artigos" className="mb-32 relative z-30 scroll-mt-32">
      
      {/* CABEÇALHO */}
      <motion.div 
        className="mb-10 relative z-10 pr-4 md:pr-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div>
          <h2 className="text-brand text-3xl font-black mb-2 uppercase">Últimos Artigos</h2>
          <p className="text-gray-400">Fique por dentro das novidades da Zcash e Web3.</p>
        </div>
      </motion.div>

      {/* LISTA DE ARTIGOS */}
      <div className="flex flex-col gap-4 relative z-10 pr-4 md:pr-8 mb-10">
        
        {loading ? (
          /* SKELETONS */
          [1, 2, 3].map((skeleton) => (
            <div key={skeleton} className="h-32 rounded-xl bg-zinc-900 border border-zinc-800 animate-pulse"></div>
          ))
        ) : articles.length > 0 ? (
          
          /* ARTIGOS REAIS */
          articles.map((article, index) => (
            <motion.div 
              key={article.id} 
              // MUDANÇA AQUI: Adicionamos animação independente para cada card quando ele carrega!
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Efeito cascata baseado no índice
            >
              <a 
                href={article.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand hover:bg-zinc-800/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col gap-2 md:max-w-[75%]">
                  <div className="flex gap-4 items-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-brand"></span>
                    <span className="text-brand">Substack</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-zinc-700 text-gray-400 group-hover:text-black group-hover:bg-brand group-hover:border-brand transition-all">
                  <span className="text-xl leading-none -mt-1">↗</span>
                </div>
              </a>
            </motion.div>
          ))
        ) : (
          /* MENSAGEM SE ESTIVER VAZIO OU DER ERRO */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full p-10 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center text-center gap-4"
          >
            <span className="text-4xl">📰</span>
            <h3 className="text-xl font-bold text-white">Nenhum artigo encontrado</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Não conseguimos carregar os artigos no momento. Tente novamente mais tarde.
            </p>
          </motion.div>
        )}
      </div>

      {/* BOTÃO VER MAIS */}
      <motion.div 
        className="flex justify-center md:justify-start pr-4 md:pr-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <Link 
          href="/learn"
          className="group flex items-center gap-3 bg-transparent border-2 border-brand text-brand px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand hover:text-black transition-all"
        >
          Ver todos os artigos no Learn
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </motion.div>

    </section>
  );
}