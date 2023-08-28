import type { Author } from './author.model'

export interface Book {
  title: string;
  pages: number;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}
