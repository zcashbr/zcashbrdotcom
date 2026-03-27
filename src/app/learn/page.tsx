import { getSubstackArticles } from '@/lib/substack';
import LearnSection from '@/components/LearnSection';
import LearnNavbar from '@/components/LearnNavbar';
import MatrixBackground from '@/components/MatrixBackground';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export default async function LearnPage() {
  // URL do Substack
  const articles = await getSubstackArticles('https://zcashbrazil.substack.com/'); 

  return (
    <div className="bg-black min-h-screen w-full flex flex-col font-sans">
      
      <LearnNavbar />

      <MatrixBackground />
      
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 md:px-8 pt-32 pb-20 text-white relative z-10">
        
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-brand">
            Artigos
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Explore artigos, tutoriais e relatórios do ecossistema Zcash.
          </p>
        </div>
        
        {/* O LearnSection vai renderizar a sidebar de filtros e a grid de ArticleCards */}
        <Suspense fallback={<div className="w-full text-center py-20 text-brand animate-pulse font-mono tracking-widest">CARREGANDO DADOS DA REDE...</div>}>
          <LearnSection articles={articles} />
        </Suspense>
        
      </main>

      {/* Footer Padrão no final da página */}
      <Footer />
      
    </div>
  );
}