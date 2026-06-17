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
