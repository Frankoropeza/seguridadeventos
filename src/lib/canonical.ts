// ─── Canonical único para todo el sitio ────────────────────────────────────
// seguridadeventos.com responde 308 de `/ruta` a `/ruta/` (verificado con
// `curl -sI`). Un canonical sin slash final apunta por definición a un
// redirect: ese era el defecto "Canonical points to redirect" y, de rebote,
// "Non-canonical page in sitemap" (el sitemap sí lleva slash).

export const SITE_URL = 'https://seguridadeventos.com';

/**
 * Tabla de redirects internos declarados en el sitio.
 * Hoy vacía: seguridadeventos.com no declara `redirects` en astro.config.mjs
 * ni tiene public/_redirects. Se deja el mecanismo montado para que, cuando se
 * añada el primero, el canonical apunte solo al destino final sin tocar nada más.
 */
export const REDIRECTS: Record<string, string> = {};

/** Quita el slash final para comparar rutas de forma estable ('/' se conserva). */
export function stripSlash(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

/** Sigue la cadena de redirects hasta el destino final (a prueba de ciclos). */
export function resolveRedirect(pathname: string): string {
  let current = stripSlash(pathname);
  const seen = new Set<string>();
  while (REDIRECTS[current] && !seen.has(current)) {
    seen.add(current);
    current = stripSlash(REDIRECTS[current]);
  }
  return current;
}

/** true si la ruta es ORIGEN de un redirect: jamás debe entrar al sitemap. */
export function isRedirectOrigin(pathname: string): boolean {
  return Object.prototype.hasOwnProperty.call(REDIRECTS, stripSlash(pathname));
}

/**
 * Canonical definitivo: destino final de la cadena de redirects + trailing
 * slash. Acepta ruta relativa ('/contacto') o URL absoluta; siempre devuelve
 * una URL absoluta.
 */
export function canonicalUrl(input: string | URL, site: string | URL = SITE_URL): string {
  const base = site.toString();
  const pathname = new URL(input.toString(), base).pathname;
  const target = resolveRedirect(pathname);
  const withSlash = target === '/' ? '/' : `${target}/`;
  return new URL(withSlash, base).toString();
}
