export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  categories: string[];
  imageUrl?: string; 
}