// src/lib/config.ts — Configuración global SEPRIEV

export const SITE = "https://seguridadeventos.com.mx";
export const SITE_NAME = "SEPRIEV";
export const SITE_DESC = "Empresa líder en seguridad privada para eventos en México. Conciertos, corporativos, ferias, VIP y eventos masivos. +500 eventos protegidos. Licencia DGSSP.";

export const PHONE_PRIMARY   = "+525516075305";
export const PHONE_DISPLAY   = "55 1607 5305";
export const WHATSAPP_NUMBER = "5215516075305";
export const WHATSAPP_DISPLAY = "55 1607 5305";
export const EMAIL_CONTACT   = "contacto@seguridadeventos.com.mx";
export const EMAIL_RH         = "reclutamiento@seguridadeventos.com.mx";
export const ADDRESS_DISPLAY = "Ciudad de México, CDMX";

export const WHATSAPP_URL = (msg = "Hola%2C+necesito+seguridad+para+mi+evento") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

export const STATS = [
  { valor: "500+",  etiqueta: "Eventos protegidos" },
  { valor: "1,200+", etiqueta: "Guardias certificados" },
  { valor: "15+",   etiqueta: "Años de experiencia" },
  { valor: "0",     etiqueta: "Incidentes graves" },
];

export const SERVICIOS_NAV = [
  { slug: "seguridad-conciertos-festivales",   nombre: "Conciertos y Festivales" },
  { slug: "seguridad-eventos-corporativos",    nombre: "Eventos Corporativos" },
  { slug: "control-acceso-eventos",            nombre: "Control de Acceso" },
  { slug: "seguridad-vip",                     nombre: "Seguridad VIP" },
  { slug: "proteccion-ejecutiva",              nombre: "Protección Ejecutiva" },
  { slug: "seguridad-ferias-exposiciones",     nombre: "Ferias y Exposiciones" },
  { slug: "seguridad-eventos-sociales",        nombre: "Eventos Sociales" },
  { slug: "seguridad-eventos-deportivos",      nombre: "Eventos Deportivos" },
  { slug: "seguridad-masivos",                 nombre: "Eventos Masivos" },
  { slug: "seguridad-montaje-desmontaje",      nombre: "Montaje y Desmontaje" },
];

export const ZONAS_NAV = [
  { slug: "cdmx",          nombre: "Ciudad de México" },
  { slug: "guadalajara",   nombre: "Guadalajara" },
  { slug: "monterrey",     nombre: "Monterrey" },
  { slug: "puebla",        nombre: "Puebla" },
  { slug: "cancun",        nombre: "Cancún" },
];
