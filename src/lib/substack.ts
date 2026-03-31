import fs from 'fs';
import path from 'path';
import { Article } from '@/types/article';

export async function getSubstackArticles(): Promise<Article[]> {
  try {
    // Caminho exato para o arquivo gerado pelo nosso Worker
    const filePath = path.join(process.cwd(), 'articles-cache.json');
    
    // Verifica se o arquivo já existe
    if (!fs.existsSync(filePath)) {
      console.warn("Arquivo de cache não encontrado. Rode o script de sincronização.");
      return [];
    }

    // Lê o arquivo JSON local instantaneamente
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Erro fatal ao ler o cache local de artigos:", error);
    return [];
  }
}