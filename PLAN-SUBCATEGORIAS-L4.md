# Plan maestro — Subcategorías L4 (SEPRIEV)

Arquitectura del sitio:

- **L1** — Home (`/`) ✅
- **L2** — Servicios (`/servicios`) ✅
- **L3** — Página de cada servicio (`/servicios/<servicio>`) — **10/10 homologadas y al estándar pro** ✅
- **L4** — Subcategoría de cada servicio (`/servicios/<servicio>/<subcategoria>`) — **en progreso (1/30)**

Cada L4 se genera con el MISMO estándar profesional que las L3:
grafo `WebPage` + `Service` + `BreadcrumbList` (4 niveles) + `FAQPage`, `ImageObject`, `areaServed` Place, `isRelatedTo` al servicio padre, `StatsSection`, `aria-labelledby`, alts únicos, enlaces internos y ~8 FAQ. Helper central: `buildServicePageSchema({ parent, ... })`.

**Flujo de trabajo:** una subcategoría por turno → build → verificación → revisión → siguiente.

Total L4: **30** (10 categorías × 3 subcategorías). Hechas: **1**. Pendientes: **29**.

---

## 1. Conciertos y Festivales — `/servicios/seguridad-conciertos-festivales`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Control de multitudes | `…/control-de-multitudes` | ✅ Hecho |
| 2 | Backstage seguro | `…/backstage-seguro` | ✅ Hecho |
| 3 | Coordinación institucional | `…/coordinacion-institucional` | ⬜ Pendiente |

## 2. Eventos Corporativos — `/servicios/seguridad-eventos-corporativos`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Personal bilingüe | `…/personal-bilingue` | ⬜ Pendiente |
| 2 | Dress code adaptable | `…/dress-code-adaptable` | ⬜ Pendiente |
| 3 | Confidencialidad (NDA) | `…/confidencialidad-nda` | ⬜ Pendiente |

## 3. Control de Acceso — `/servicios/control-acceso-eventos`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Detectores de metales | `…/detectores-de-metales` | ⬜ Pendiente |
| 2 | Escaneo de boletos (QR/NFC) | `…/escaneo-qr-boletos` | ⬜ Pendiente |
| 3 | Aforo en tiempo real | `…/aforo-en-tiempo-real` | ⬜ Pendiente |

## 4. Seguridad VIP — `/servicios/seguridad-vip`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Close protection | `…/close-protection` | ⬜ Pendiente |
| 2 | Vehículo blindado | `…/vehiculo-blindado` | ⬜ Pendiente |
| 3 | Discreción total / anti-paparazzi | `…/discrecion-total` | ⬜ Pendiente |

## 5. Protección Ejecutiva — `/servicios/proteccion-ejecutiva`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Análisis de riesgo | `…/analisis-de-riesgo` | ⬜ Pendiente |
| 2 | Contravigilancia | `…/contravigilancia` | ⬜ Pendiente |
| 3 | Traslados seguros | `…/traslados-seguros` | ⬜ Pendiente |

## 6. Ferias y Exposiciones — `/servicios/seguridad-ferias-exposiciones`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Seguridad de stands | `…/seguridad-de-stands` | ⬜ Pendiente |
| 2 | Control de accesos | `…/control-de-accesos` | ⬜ Pendiente |
| 3 | Resguardo de activos | `…/resguardo-de-activos` | ⬜ Pendiente |

## 7. Eventos Sociales — `/servicios/seguridad-eventos-sociales`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Dress code formal | `…/dress-code-formal` | ⬜ Pendiente |
| 2 | Valet parking | `…/valet-parking` | ⬜ Pendiente |
| 3 | Manejo discreto de incidentes | `…/manejo-discreto` | ⬜ Pendiente |

## 8. Eventos Deportivos — `/servicios/seguridad-eventos-deportivos`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Separación de barras | `…/separacion-de-barras` | ⬜ Pendiente |
| 2 | Zona VIP | `…/zona-vip` | ⬜ Pendiente |
| 3 | Protocolo federativo | `…/protocolo-federativo` | ⬜ Pendiente |

## 9. Eventos Masivos — `/servicios/seguridad-masivos`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Drones de vigilancia | `…/drones-de-vigilancia` | ⬜ Pendiente |
| 2 | Puesto de mando | `…/puesto-de-mando` | ⬜ Pendiente |
| 3 | Plan de contingencia | `…/plan-de-contingencia` | ⬜ Pendiente |

## 10. Montaje y Desmontaje — `/servicios/seguridad-montaje-desmontaje`

| # | Subcategoría | Slug (URL) | Estado |
|---|---|---|---|
| 1 | Custodia de equipo | `…/custodia-de-equipo` | ⬜ Pendiente |
| 2 | Control de proveedores | `…/control-de-proveedores` | ⬜ Pendiente |
| 3 | Accesos restringidos | `…/accesos-restringidos` | ⬜ Pendiente |

---

## Paso final (después de completar cada terna)

**Cablear sección "Subcategorías" en cada L3 padre:** cuando una categoría tenga sus 3 L4 listas, agregar en su página L3 una sección que enlace a las 3 (para que dejen de ser huérfanas y se cierre el árbol L3→L4). 10 categorías.

## Orden sugerido

Terminar primero **Conciertos** (Backstage seguro → Coordinación institucional), cablear su sección de subcategorías en el L3, y luego avanzar categoría por categoría en el orden de la lista.
