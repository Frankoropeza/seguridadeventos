// src/lib/seo.ts — Helpers Schema.org

import { SITE, SITE_NAME, PHONE_PRIMARY, EMAIL_CONTACT, ADDRESS_DISPLAY } from './config';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE}/#organization`,
  "name": SITE_NAME,
  "url": SITE,
  "logo": `${SITE}/img/logo-sepriev.png`,
  "telephone": PHONE_PRIMARY,
  "email": EMAIL_CONTACT,
  "description": "Empresa de seguridad privada especializada en eventos. Licencia DGSSP. +500 eventos protegidos en México.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "addressCountry": "MX"
  },
  "areaServed": ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Cancún"],
  "priceRange": "$$",
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Licencia DGSSP" },
    { "@type": "EducationalOccupationalCredential", "name": "Certificación STPS" }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  "url": SITE,
  "name": SITE_NAME,
  "publisher": { "@id": `${SITE}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": `${SITE}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string"
  }
};

export function buildServiceSchema(nombre: string, descripcion: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": nombre,
    "description": descripcion,
    "provider": { "@id": `${SITE}/#organization` },
    "areaServed": "México",
    "url": url
  };
}

export function buildFAQSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };
}

export function buildArticleSchema(titulo: string, descripcion: string, url: string, imagen?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": titulo,
    "description": descripcion,
    "url": url,
    "image": imagen || `${SITE}/img/og-sepriev.jpg`,
    "publisher": { "@id": `${SITE}/#organization` },
    "author": { "@type": "Organization", "name": SITE_NAME }
  };
}

// Grafo de datos estructurados de nivel profesional para páginas de servicio (L3).
// Devuelve WebPage (enlazada por @id) + Service + BreadcrumbList + FAQPage,
// con primaryImageOfPage como ImageObject y areaServed como objetos Place.
export interface ServicePageSchemaOpts {
  slug: string;
  name: string;            // nombre del servicio (titulo / H1 base)
  description: string;     // descripción larga del servicio
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  ogImage: string;         // URL absoluta de la imagen principal
  breadcrumbName: string;  // último nivel del breadcrumb
  offers?: string[];       // nombres de servicios ofertados (hasOfferCatalog)
  faq?: Array<{ q: string; a: string }>;
  datePublished?: string;  // ISO date
  dateModified?: string;   // ISO date
  // Para subcategorías (L4): servicio padre. Anida la URL y agrega un nivel al breadcrumb.
  parent?: { slug: string; name: string };
  // Propiedades extra que se fusionan en el nodo Service (p. ej. availableLanguage).
  serviceExtra?: Record<string, unknown>;
  // Propiedades extra que se fusionan en el nodo WebPage (p. ej. speakable).
  webPageExtra?: Record<string, unknown>;
}

export function buildServicePageSchema(opts: ServicePageSchemaOpts) {
  const {
    slug, name, description, metaTitle, metaDescription, serviceType,
    ogImage, breadcrumbName, offers = [], faq = [],
    datePublished = "2025-01-01", dateModified = "2026-06-18", parent, serviceExtra = {}, webPageExtra = {},
  } = opts;

  const canonical = parent
    ? `${SITE}/servicios/${parent.slug}/${slug}`
    : `${SITE}/servicios/${slug}`;
  const areas = ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Cancún"];

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    "url": canonical,
    "name": metaTitle,
    "description": metaDescription,
    "inLanguage": "es-MX",
    "isPartOf": { "@id": `${SITE}/#website` },
    "primaryImageOfPage": { "@type": "ImageObject", "url": ogImage, "width": 1200, "height": 675 },
    "breadcrumb": { "@id": `${canonical}#breadcrumb` },
    "about": { "@id": `${SITE}/#organization` },
    "mainEntity": { "@id": `${canonical}#service` },
    "datePublished": datePublished,
    "dateModified": dateModified,
    ...webPageExtra,
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    "name": name,
    "serviceType": serviceType,
    "description": description,
    "provider": { "@id": `${SITE}/#organization` },
    "areaServed": [
      ...areas.map((a) => ({ "@type": "AdministrativeArea", "name": a })),
      { "@type": "Country", "name": "México" },
    ],
    "url": canonical,
    ...(parent
      ? { "isRelatedTo": { "@type": "Service", "name": parent.name, "url": `${SITE}/servicios/${parent.slug}` } }
      : {}),
    ...(offers.length
      ? {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": serviceType,
            "itemListElement": offers.map((o) => ({
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": o },
            })),
          },
        }
      : {}),
    ...serviceExtra,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE}/servicios` },
      ...(parent
        ? [{ "@type": "ListItem", "position": 3, "name": parent.name, "item": `${SITE}/servicios/${parent.slug}` },
           { "@type": "ListItem", "position": 4, "name": breadcrumbName, "item": canonical }]
        : [{ "@type": "ListItem", "position": 3, "name": breadcrumbName, "item": canonical }]),
    ],
  };

  const out: object[] = [webPage, service, breadcrumb];
  if (faq.length) out.push(buildFAQSchema(faq));
  return out;
}

// HowTo: hace legible por máquina un proceso de pasos (p. ej. el ProcessSection de una página).
export function buildHowToSchema(
  name: string,
  description: string,
  steps: Array<{ titulo: string; desc: string }>,
  tools: string[] = [],
  supplies: string[] = [],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(tools.length ? { "tool": tools.map((t) => ({ "@type": "HowToTool", "name": t })) } : {}),
    ...(supplies.length ? { "supply": supplies.map((s) => ({ "@type": "HowToSupply", "name": s })) } : {}),
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.titulo,
      "text": s.desc,
    })),
  };
}
