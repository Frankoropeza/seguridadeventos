// src/lib/blog.ts — utilidades del blog (paginación + categorías)

export const POSTS_PER_PAGE = 16;

/** Convierte un nombre de categoría en slug URL-safe. Ej: "Casos de Éxito" → "casos-de-exito". */
export function catSlug(cat: string): string {
  return (cat || 'Blog')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Número total de páginas del listado (16 cards por página). */
export function totalBlogPages(totalPosts: number): number {
  return Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
}

/** Posts del grid para una página dada (1-indexada). Exactamente POSTS_PER_PAGE por página. */
export function postsForPage<T>(posts: T[], page: number): T[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}
