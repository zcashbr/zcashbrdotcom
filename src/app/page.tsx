import HomeNavbar from '@/components/HomeNavbar';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import VideosSection from '@/components/VideosSection';
import RecentArticlesSection from '@/components/RecentArticlesSection';
//import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
      
      <HomeNavbar />

      <main className="text-white w-full max-w-[1920px] mx-auto overflow-hidden relative">
        <div className="w-full max-w-[1536px] mx-auto px-4 md:px-8 pt-20 pb-0">
          
          <div className="md:pl-10 flex flex-col gap-24 relative">
            
            {/*Adicionado hidden md:block para a linha sumir no celular e aparecer no desktop */}
            <div className="hidden md:block absolute left-0 top-48 bottom-0 w-1.5 bg-brand z-50 rounded-t-full pointer-events-none"></div>
            
            <HeroSection />
            <TeamSection />
            <AboutSection />
            <ProjectsSection />
            <VideosSection />
            <RecentArticlesSection />
            
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}