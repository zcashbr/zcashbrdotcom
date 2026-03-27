import SimpleNavbar from '@/components/SimpleNavbar';
import Footer from '@/components/Footer';

export default function PrivacidadePage() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col font-sans text-white">
      
      {/* Navbar secundária (com botão de voltar para a Home) */}
      <SimpleNavbar />

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 md:px-8 pt-32 pb-20 relative z-10">
        
        {/* Cabeçalho da Página */}
        <div className="border-b border-zinc-800 pb-8 mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-brand">
            Política de Privacidade
          </h1>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium uppercase tracking-widest">
            Última atualização: Março de 2026
          </p>
        </div>

        {/* Corpo do Texto */}
        <div className="max-w-4xl mx-auto space-y-10 text-zinc-300 leading-relaxed">
          
          <section>
            <p className="text-lg">
              A comunidade Zcash Brasil acredita que a privacidade não é um privilégio, é um direito fundamental. Assim como o protocolo Zcash protege as suas informações financeiras, o nosso portal foi construído para proteger as suas informações de navegação.
            </p>
            <p className="text-xl font-bold text-white mt-6 border-l-4 border-brand pl-4">
              A nossa Política de Privacidade é simples e direta: Nós não te rastreamos...
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">1. Armazenamento e Uso de Dados Pessoais</h2>
            <p className="mb-4">Este site opera como um portal puramente informativo e educacional.</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-brand">
              <li>Não solicitamos o seu nome, e-mail, telefone ou qualquer dado de identificação pessoal ou não pessoal.</li>
              <li>Não possuímos formulários de registo, login ou criação de contas de utilizador.</li>
              <li>Não recolhemos, armazenamos ou processamos informações pessoais nos nossos servidores.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">2. Cookies e Rastreadores (Analytics)</h2>
            <p className="mb-4">
              Nós respeitamos a sua navegação invisível. O portal Zcash Brasil <strong>não utiliza</strong> cookies de rastreamento, pixels do Facebook, Google Analytics ou qualquer ferramenta de publicidade direcionada para monitorar o seu comportamento ou mapear o seu perfil.
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-brand">
              <li>A função de pesquisa ("Buscar artigos") na nossa secção Academia opera apenas alterando a URL do seu próprio navegador para filtrar o conteúdo na sua tela. Nós não registamos o que você pesquisa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">3. Serviços de Terceiros e Links Externos</h2>
            <p className="mb-4">
              Para fornecer a melhor experiência e conteúdo, o nosso site liga-se a serviços e comunidades externas. É importante notar que, ao clicar nestes links, estará sujeito às políticas de privacidade dessas respectivas plataformas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-brand">
              <li><strong>Substack:</strong> Os nossos artigos (Academia) são alojados no Substack. Ao clicar em "Ler agora", é direcionado para lá.</li>
              <li><strong>Redes Sociais e Comunidade:</strong> Temos links para o X, Discord, Telegram, YouTube e Instagram.</li>
              <li><strong>Ferramentas do Ecossistema:</strong> Recomendamos e deixamos links para carteiras (como a Zodl, antiga Zashi) e ferramentas da comunidade (como ZecStats e Zcash Metro).</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              Recomendamos que reveja as políticas de privacidade destes sites de terceiros, pois não temos controle sobre como eles gerenciam os seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">4. Hospedagem e Logs do Servidor</h2>
            <p>
              O site da Zcash Brasil é hospedado de forma estática. Provedores de hospedagem podem reter temporariamente logs de acesso anônimos (como endereços IP) por razões de segurança (prevenção contra ataques DDoS e manutenção da integridade do servidor), mas esses dados não são/serão usados por nós para identificação pessoal ou marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">5. Isenção de Responsabilidade (Disclaimer)</h2>
            <p>
              O conteúdo deste site é estritamente educacional e informativo. Nenhuma informação aqui presente constitui aconselhamento financeiro, legal ou recomendação de investimento (NFA). O uso das ferramentas e carteiras mencionadas é de total responsabilidade do utilizador.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">6. Contato</h2>
            <p>
              Se tiver qualquer dúvida sobre esta política do nosso portal, sinta-se à vontade para nos contatar nos nossos canais oficiais no <strong>Discord</strong> ou <strong>Telegram</strong>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}