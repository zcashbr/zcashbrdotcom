import { Article } from '@/types/article';

export async function getSubstackArticles(substackUrl: string): Promise<Article[]> {
  try {
    let allPosts: any[] = [];
    let offset = 0;
    const limit = 12; 
    let hasMore = true;

    while (hasMore && offset < 240) {
      const res = await fetch(`${substackUrl}/api/v1/archive?sort=new&limit=${limit}&offset=${offset}`, {
        next: { revalidate: 3600 }, 
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'application/json, text/plain, */*',
          'Referer': substackUrl, 
        }
      });
      
      if (!res.ok) {
        console.error(`Erro ao buscar página no offset ${offset}. Status: ${res.status}`);
        break; 
      }

      const posts = await res.json();

      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts = allPosts.concat(posts);
        offset += limit;
      }
    }

    return allPosts.map((post: any) => {
      
      // === CATEGORIZADOR INTELIGENTE ===
      const titleLower = (post.title || '').toLowerCase();
      
      // Puxa a lista de autores do artigo e transformamos tudo em texto minúsculo
      const authorArray = post.publishedBylines || post.authors || [];
      const authorsString = authorArray.map((author: any) => author.name).join(' ').toLowerCase();

      let customCategory = 'Outros';

      if (titleLower.includes('shielded magazine')) {
        customCategory = 'Shielded Magazine';
      } else if (titleLower.includes('zona z') || authorsString.includes('amandita')) {
        // Agora, se o título tiver "zona z" OU se a Amandita for uma das autoras, o filtro aplica!
        customCategory = 'Zona Z';
      } else if (titleLower.includes('arborist call')) {
        customCategory = 'Arborist Call';
      }

      return {
        id: post.id ? post.id.toString() : Math.random().toString(),
        title: post.title || '',
        link: post.canonical_url || `${substackUrl}/p/${post.slug}`,
        pubDate: post.post_date || '',
        contentSnippet: post.description || post.subtitle || '', 
        categories: [customCategory], 
        imageUrl: post.cover_image || null, 
      };
    });
  } catch (error) {
    console.error("Erro fatal ao buscar artigos do Substack:", error);
    return [];
  }
}