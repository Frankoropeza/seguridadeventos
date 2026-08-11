import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { existsSync, statSync, readFileSync } from 'node:fs';
import { isRedirectOrigin, stripSlash } from './src/lib/canonical';

// ─── Sitemap lastmod dinámico ──────────────────────────────────────────────
// Resuelve URL → archivo fuente → fecha real (git log → mtime → omitir).
// Mejor omitir lastmod que mentir con la fecha del build.
// Requiere fetch-depth: 0 en el checkout del workflow (si no, git log da HEAD).
const ROOT = dirname(fileURLToPath(import.meta.url));
const _dateCache = new Map();

function sourceDate(relPath) {
  if (_dateCache.has(relPath)) return _dateCache.get(relPath);
  let date = null;
  const abs = join(ROOT, relPath);
  if (existsSync(abs)) {
    try {
      const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (out) date = new Date(out);
    } catch {}
    if (!date) {
      try {
        date = statSync(abs).mtime;
      } catch {}
    }
  }
  _dateCache.set(relPath, date);
  return date;
}

function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '');
  const rel = path === '' ? 'index' : path.replace(/^\//, '');
  const last = rel.split('/').pop();
  const candidates = [
    `src/pages/${rel}/index.astro`,
    `src/pages/${rel}.astro`,
    `src/pages/${rel}/index.md`,
  ];
  // Content collections: ruta completa bajo la colección y slug final
  for (const col of ['blog', 'servicios']) {
    const sub = rel.startsWith(`${col}/`) ? rel.slice(col.length + 1) : rel;
    for (const ext of ['md', 'mdx']) {
      candidates.push(`src/content/${col}/${sub}.${ext}`);
      candidates.push(`src/content/${col}/${sub}/index.${ext}`);
      candidates.push(`src/content/${col}/${last}.${ext}`);
    }
  }
  for (const c of candidates) {
    const d = sourceDate(c);
    if (d) return d;
  }
  return null;
}

// ─── Filtro del sitemap ────────────────────────────────────────────────────
// El sitemap solo debe listar URLs canónicas e indexables. Se excluye:
//   · /draft/ y /api/            → nunca son contenido público
//   · orígenes de redirect       → la URL viva es el destino, no el origen
//   · páginas con <meta robots noindex> → contradicen al propio sitemap
// El noindex se LEE del HTML ya emitido en dist (el hook del sitemap corre
// después de escribir las páginas), así no hay lista que mantener a mano:
// hoy eso saca /aviso-de-privacidad/ y /terminos/, que iban en el sitemap
// declarándose noindex.
const EXCLUDE = new Set(['/404']);

function esNoindex(pathname) {
  const rel = stripSlash(pathname).replace(/^\//, '');
  for (const f of [join(ROOT, 'dist', rel, 'index.html'), join(ROOT, 'dist', `${rel}.html`)]) {
    try {
      if (existsSync(f)) {
        return /<meta[^>]+name="robots"[^>]*content="[^"]*noindex/i.test(readFileSync(f, 'utf8'));
      }
    } catch {
      // Si no se puede leer, no se excluye: mejor un sitemap de más que vacío.
    }
  }
  return false;
}

function sitemapFilter(page) {
  const pathname = new URL(page).pathname;
  const bare = stripSlash(pathname);
  if (pathname.includes('/draft/') || pathname.includes('/api/')) return false;
  if (EXCLUDE.has(bare)) return false;
  if (isRedirectOrigin(bare)) return false;
  if (esNoindex(bare)) return false;
  return true;
}

export default defineConfig({
  site: 'https://seguridadeventos.com',
  output: 'static',
  // Explícitos, no heredados del default: seguridadeventos.com responde 308 de
  // `/ruta` a `/ruta/` (verificado con `curl -sI`). 'directory' + 'always' es
  // lo único coherente con lo que sirve el dominio y con el canonical emitido.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => sitemapFilter(page),
      serialize: (item) => {
        // lastmod real por archivo fuente; si no se resuelve, se omite
        const lm = lastmodForUrl(item.url);
        if (lm) {
          item.lastmod = lm.toISOString();
        } else {
          delete item.lastmod;
        }
        // Prioridad por tipo de página: home > servicios > zonas > resto > blog
        const p = new URL(item.url).pathname;
        if (p === '/') item.priority = 1.0;
        else if (p.startsWith('/servicios/')) item.priority = 0.9;
        else if (p.startsWith('/zonas/')) item.priority = 0.8;
        else if (p.startsWith('/blog/')) item.priority = 0.6;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
