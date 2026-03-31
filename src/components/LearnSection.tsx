'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Article } from '@/types/article';
import SidebarFilter from './SidebarFilter';
import ArticleCard from './ArticleCard';
import { AnimatePresence, motion } from 'framer-motion'; 

const FILTROS_FIXOS = ['Shielded Magazine', 'Zona Z', 'Arborist Call', 'Outros'];
// Define quantos artigos aparecem por vez
const ARTICLES_PER_PAGE = 12; 

export default function LearnSection({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams(); 
  const searchQuery = searchParams.get('q')?.toLowerCase() || '';

  const [activeFilter, setActiveFilter] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  // Reseta a paginação sempre que o filtro ou a busca mudarem
  useEffect(() => {
    setVisibleCount(ARTICLES_PER_PAGE);
  }, [activeFilter, searchQuery]);

  const filteredArticles = useMemo(() => {
    // Garantimos que articles seja um array para evitar erros de map/filter
    return (articles || []).filter(article => {
      // 1. Filtro de Categoria com Null Safety
      const categories = article.categories || [];
      const matchesCategory = activeFilter === 'Todos' || categories.includes(activeFilter);
      
      // 2. Filtro de Busca com Null Safety (evita quebra se title ou snippet forem nulos)
      const title = article.title?.toLowerCase() || '';
      const snippet = article.contentSnippet?.toLowerCase() || '';

      const matchesSearch = 
        title.includes(searchQuery) || 
        snippet.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [articles, activeFilter, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="flex flex-col md:flex-row gap-12 mt-12">
      <SidebarFilter 
        categories={FILTROS_FIXOS} 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <div className="w-full flex flex-col">
        {/* Grade de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {displayedArticles.length > 0 ? (
              displayedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  layout 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.3,
                    // Delay apenas para os novos itens que entram na página atual
                    delay: (index % ARTICLES_PER_PAGE) * 0.05 
                  }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                key="empty" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center text-gray-500 font-medium"
              >
                Nenhum artigo encontrado para "{searchQuery}". Tente usar outros termos.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botão Load More */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="mt-16 mb-8 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount(prev => prev + ARTICLES_PER_PAGE)}
                className="px-8 py-3 bg-gray-500 border border-black text-black font-semibold tracking-widest uppercase text-sm hover:bg-brand hover:text-white transition-colors duration-300"
              >
                Load More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}