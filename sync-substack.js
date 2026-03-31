const fs = require('fs');
const path = require('path');

const SUBSTACK_URL = 'https://zcashbrazil.substack.com';
const CACHE_FILE = path.join(__dirname, 'articles-cache.json');

async function syncArticles() {
  console.log('Iniciando sincronização inteligente com o Substack...');
  try {
    // 1. Lê o cache atual para saber o que já temos
    let existingArticles = [];
    let newestCachedId = null;

    if (fs.existsSync(CACHE_FILE)) {
      const rawData = fs.readFileSync(CACHE_FILE, 'utf8');
      existingArticles = JSON.parse(rawData);
      
      if (existingArticles.length > 0) {
        // Pega o ID do primeiro artigo (o mais recente que temos salvo)
        newestCachedId = existingArticles[0].id; 
        console.log(`Cache encontrado com ${existingArticles.length} artigos. Último ID: ${newestCachedId}`);
      }
    }

    let newPosts = [];
    let offset = 0;
    const limit = 50;
    let hasMore = true;
    let foundExisting = false;

    // 2. Busca na API do Substack (sempre do mais novo para o mais velho)
    while (hasMore && !foundExisting && offset < 1000) {
      console.log(`Verificando novidades a partir do offset ${offset}...`);
      
      const res = await fetch(`${SUBSTACK_URL}/api/v1/archive?sort=new&limit=${limit}&offset=${offset}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'application/json',
        }
      });

      if (!res.ok) {
        console.error(`Erro na API do Substack. Status: ${res.status}`);
        break;
      }

      const posts = await res.json();

      if (posts.length === 0) {
        hasMore = false;
      } else {
        // 3. Compara os posts que chegaram com o nosso cache
        for (const post of posts) {
          const postId = post.id ? post.id.toString() : '';

          // Se esbarrarmos num artigo que já temos, paramos imediatamente!
          if (newestCachedId && postId === newestCachedId) {
            console.log('Artigo já conhecido encontrado! Parando a busca para economizar recursos.');
            foundExisting = true;
            break; 
          }

          newPosts.push(post);
        }

        // Se ainda não achamos o ponto de intersecção, continua buscando a próxima página
        if (!foundExisting) {
          offset += limit;
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    }

    // 4. Se não houver nada novo, encerra sem reescrever o arquivo à toa
    if (newPosts.length === 0) {
      console.log('✅ Nenhum artigo novo publicado. O cache já está 100% atualizado!');
      return; 
    }

    console.log(`Encontrados ${newPosts.length} artigos novos! Categorizando...`);

    // 5. Formata apenas os artigos INÉDITOS
    const formattedNewArticles = newPosts.map((post) => {
      const titleLower = (post.title || '').toLowerCase();
      const authorArray = post.publishedBylines || post.authors || [];
      const authorsString = authorArray.map(author => author.name).join(' ').toLowerCase();

      let customCategory = 'Outros';

      if (titleLower.includes('shielded magazine')) {
        customCategory = 'Shielded Magazine';
      } else if (titleLower.includes('zona z') || authorsString.includes('amandita')) {
        customCategory = 'Zona Z';
      } else if (titleLower.includes('arborist call')) {
        customCategory = 'Arborist Call';
      }

      return {
        id: post.id ? post.id.toString() : Math.random().toString(),
        title: post.title || '',
        link: post.canonical_url || `${SUBSTACK_URL}/p/${post.slug}`,
        pubDate: post.post_date || '',
        contentSnippet: post.description || post.subtitle || '',
        categories: [customCategory],
        imageUrl: post.cover_image || null,
      };
    });

    // 6. Junta os NOVOS (no topo) com os ANTIGOS (embaixo)
    const finalArticles = [...formattedNewArticles, ...existingArticles];

    // 7. Salva o arquivo final atualizado
    fs.writeFileSync(CACHE_FILE, JSON.stringify(finalArticles, null, 2));
    console.log(`✅ Sincronização concluída! Arquivo atualizado para um total de ${finalArticles.length} artigos.`);

  } catch (error) {
    console.error('❌ Erro fatal durante a sincronização:', error);
  }
}

syncArticles();