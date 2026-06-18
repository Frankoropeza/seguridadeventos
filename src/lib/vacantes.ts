// src/lib/vacantes.ts — Bolsa de trabajo SEPRIEV (fuente única de datos)
// Alimenta la lista (/bolsa-de-trabajo) y las páginas de detalle L3 (/bolsa-de-trabajo/[slug]).

export interface Ciudad {
  l: string; // localidad
  r: string; // región / estado
}

export const CIUDADES: Record<string, Ciudad> = {
  cdmx: { l: 'Ciudad de México', r: 'CDMX' },
  gdl: { l: 'Guadalajara', r: 'Jalisco' },
  mty: { l: 'Monterrey', r: 'Nuevo León' },
  pue: { l: 'Puebla', r: 'Puebla' },
  cun: { l: 'Cancún', r: 'Quintana Roo' },
};

export interface FAQItem {
  q: string;
  a: string;
}

export interface Vacante {
  slug: string;
  puesto: string;
  tipo: string;                 // etiqueta de contratación (badge)
  employmentType: string[];     // schema.org JobPosting
  ubicacion: string;            // texto para card / hero
  ciudades: string[];           // claves de CIUDADES (schema jobLocation)
  imagen: string;               // base sin sufijo de tamaño
  desc: string;                 // descripción corta (card + meta)
  perfil: string[];             // 4 viñetas de la card
  jornada: string;
  experienciaResumen: string;
  occupationalCategory: string;
  heroSub: string;
  introLead: string;
  introParrafos: string[];
  responsabilidades: string[];
  indispensables: string[];
  deseables: string[];
  faq: FAQItem[];
}

export const VACANTES: Vacante[] = [
  {
    slug: 'guardia-de-seguridad-para-eventos',
    puesto: 'Guardia de Seguridad para Eventos',
    tipo: 'Tiempo completo / Por evento',
    employmentType: ['FULL_TIME', 'TEMPORARY', 'PART_TIME'],
    ubicacion: 'CDMX · Guadalajara · Monterrey · Puebla · Cancún',
    ciudades: ['cdmx', 'gdl', 'mty', 'pue', 'cun'],
    imagen: '/img/eventos/guardias-seguridad-privada',
    desc: 'Vigilancia, control de acceso, revisión y atención al público en conciertos, ferias, eventos corporativos y sociales.',
    perfil: ['Mayor de 18 años', 'Secundaria o preparatoria', 'Sin antecedentes penales', 'Disponibilidad fines de semana'],
    jornada: 'Turnos, con disponibilidad de fines de semana',
    experienciaResumen: 'No indispensable — te capacitamos',
    occupationalCategory: 'Guardia de seguridad',
    heroSub: 'Únete al equipo de la empresa de seguridad privada para eventos con más experiencia en México. Capacitación certificada sin costo, prestaciones de ley y crecimiento real.',
    introLead: 'El guardia de seguridad es la primera cara de la operación y la pieza clave para que un evento transcurra sin incidentes.',
    introParrafos: [
      'Como Guardia de Seguridad para Eventos serás parte del operativo que protege conciertos, ferias, eventos corporativos y sociales en algunos de los recintos más importantes del país. Tu trabajo combina vigilancia, control de acceso y atención al público.',
      'No necesitas experiencia previa: te formamos con capacitación certificada ante la STPS y te integramos a un equipo con supervisión, protocolos claros y un plan de crecimiento. Buscamos personas responsables, con buena presentación y vocación de servicio.',
    ],
    responsabilidades: [
      'Vigilancia y resguardo del recinto antes, durante y después del evento.',
      'Control de acceso, revisión de boletos y acreditaciones en entradas.',
      'Revisión preventiva de asistentes y objetos según el protocolo del evento.',
      'Atención al público con trato amable, orientación y resolución de dudas.',
      'Apoyo en el control de aforo y el flujo de personas en pasillos y salidas.',
      'Reporte inmediato de incidencias a su supervisor y registro en bitácora.',
      'Aplicación de protocolos de emergencia y evacuación cuando se requiera.',
    ],
    indispensables: [
      'Mayor de 18 años',
      'Secundaria o preparatoria concluida',
      'Sin antecedentes penales',
      'Disponibilidad de fines de semana',
      'Identificación oficial vigente (INE)',
      'Buena presentación y vocación de servicio',
    ],
    deseables: [
      'Experiencia previa en seguridad o eventos',
      'Cartilla militar liberada (hombres)',
      'Constancias DC-3 previas',
      'Buena condición física',
      'Facilidad de palabra y trato con el público',
    ],
    faq: [
      { q: '¿Necesito experiencia para ser guardia de seguridad en eventos?', a: 'No. Para el puesto de guardia capacitamos desde cero con formación certificada ante la STPS. Si ya tienes experiencia en seguridad o eventos, lo tomamos como un plus.' },
      { q: '¿Qué documentos necesito para postularme?', a: 'Para iniciar solo necesitas tu identificación oficial (INE) y tus datos de contacto. Para tu alta te pediremos CURP, comprobante de domicilio, comprobante de estudios y carta de no antecedentes penales. Si te falta alguno, te orientamos para tramitarlo.' },
      { q: '¿El trabajo es de planta o por evento?', a: 'Ofrecemos ambos esquemas según tu disponibilidad y la operación: plaza de tiempo completo o colaboración por evento. Puedes indicar tu preferencia en el formulario.' },
      { q: '¿La capacitación tiene algún costo?', a: 'No. Toda la capacitación es gratuita y está certificada ante la STPS, con constancias DC-3 a tu nombre que te sirven para toda tu carrera en el sector.' },
      { q: '¿En qué ciudades hay vacante de guardia?', a: 'Operamos en CDMX, Guadalajara, Monterrey, Puebla y Cancún. Indica tu ciudad al postularte y te contactamos según las plazas disponibles en tu zona.' },
      { q: '¿Cuánto tiempo tarda el proceso de selección?', a: 'En la mayoría de los casos, de la postulación a la capacitación pasan unos pocos días, dependiendo de tu disponibilidad y de que tengas tu documentación lista.' },
    ],
  },

  {
    slug: 'supervisor-operativo',
    puesto: 'Supervisor Operativo',
    tipo: 'Tiempo completo',
    employmentType: ['FULL_TIME'],
    ubicacion: 'CDMX · Guadalajara · Monterrey',
    ciudades: ['cdmx', 'gdl', 'mty'],
    imagen: '/img/eventos/personal-seguridad-evento',
    desc: 'Liderazgo de equipos en campo, coordinación de despliegues, control de bitácoras y enlace con coordinación general.',
    perfil: ['3+ años en seguridad privada', 'Experiencia liderando personal', 'Licencia de conducir vigente', 'Manejo de reportes'],
    jornada: 'Tiempo completo, disponibilidad de horario',
    experienciaResumen: '3+ años en seguridad privada',
    occupationalCategory: 'Supervisor de seguridad',
    heroSub: 'Lidera operativos de seguridad en los eventos más importantes del país. Buscamos supervisores con experiencia, criterio y vocación de mando.',
    introLead: 'El supervisor operativo es el responsable de que el plan de seguridad se ejecute tal como fue diseñado, en tiempo real y en campo.',
    introParrafos: [
      'Como Supervisor Operativo coordinas al equipo de guardias durante el evento: asignas posiciones, verificas relevos, resuelves contingencias y eres el enlace directo entre el personal en campo y la coordinación general. Tu liderazgo marca la diferencia entre un operativo ordenado y uno que se desborda.',
      'Buscamos personas con experiencia comprobable liderando personal de seguridad, capacidad de decisión bajo presión y comunicación clara. A cambio ofrecemos un puesto de responsabilidad, con plan de crecimiento hacia coordinación y el respaldo de una empresa formal con licencia DGSSP.',
    ],
    responsabilidades: [
      'Despliegue y posicionamiento del personal de seguridad en sitio.',
      'Supervisión de turnos, relevos y cumplimiento de protocolos.',
      'Enlace directo con la coordinación general y con el cliente en campo.',
      'Toma de decisiones y manejo de contingencias en tiempo real.',
      'Control de bitácoras, listas de asistencia y reportes de incidencias.',
      'Briefing previo al equipo y cierre operativo posterior al evento.',
      'Aplicación de la cadena de mando y de los protocolos de emergencia.',
    ],
    indispensables: [
      '3+ años de experiencia en seguridad privada',
      'Experiencia comprobable liderando personal',
      'Licencia de conducir vigente',
      'Manejo de reportes y bitácoras',
      'Disponibilidad de horario y fines de semana',
      'Sin antecedentes penales',
    ],
    deseables: [
      'Formación o constancias en seguridad (STPS)',
      'Experiencia en eventos masivos o conciertos',
      'Manejo de radio y equipos de comunicación',
      'Conocimiento de protocolos de Protección Civil',
      'Liderazgo y excelente comunicación',
    ],
    faq: [
      { q: '¿Qué experiencia necesito para ser supervisor?', a: 'Pedimos al menos 3 años en seguridad privada y experiencia comprobable liderando personal. Valoramos especialmente la experiencia en eventos o lugares de alta afluencia.' },
      { q: '¿El puesto requiere disponibilidad para viajar?', a: 'Principalmente operas en tu ciudad base (CDMX, Guadalajara o Monterrey), pero pueden presentarse operativos especiales que requieran traslado, siempre con apoyo de la empresa.' },
      { q: '¿Hay plan de crecimiento desde supervisor?', a: 'Sí. La ruta natural es supervisor → coordinador de operaciones, según desempeño y resultados. Promovemos internamente siempre que es posible.' },
      { q: '¿Qué prestaciones ofrecen?', a: 'Prestaciones de ley desde tu alta (IMSS, aguinaldo, vacaciones y prima vacacional), sueldo competitivo y bonos por operativo.' },
      { q: '¿Necesito licencia de conducir?', a: 'Sí, vigente. El supervisor se desplaza entre posiciones y a veces entre sedes, por lo que la licencia es indispensable.' },
    ],
  },

  {
    slug: 'escolta-proteccion-vip',
    puesto: 'Escolta / Agente de Protección VIP',
    tipo: 'Tiempo completo / Por proyecto',
    employmentType: ['FULL_TIME', 'CONTRACTOR'],
    ubicacion: 'Cobertura nacional',
    ciudades: ['cdmx', 'gdl', 'mty', 'pue', 'cun'],
    imagen: '/img/eventos/proteccion-ejecutiva-mexico',
    desc: 'Protección ejecutiva y escolta de artistas, ejecutivos y personalidades en eventos y traslados.',
    perfil: ['Formación en protección ejecutiva', 'Manejo defensivo / evasivo', 'Excelente condición física', 'Discreción y presentación'],
    jornada: 'Variable según operativo y traslados',
    experienciaResumen: 'Formación en protección ejecutiva',
    occupationalCategory: 'Escolta / Protección ejecutiva',
    heroSub: 'Protege a artistas, ejecutivos y personalidades en los eventos de más alto perfil del país. Buscamos agentes formados, discretos y profesionales.',
    introLead: 'El agente de protección VIP es responsable de la seguridad cercana de figuras de alto perfil, donde la anticipación y la discreción lo son todo.',
    introParrafos: [
      'Como Escolta / Agente de Protección VIP brindas seguridad cercana a artistas, ejecutivos y personalidades durante eventos, presentaciones y traslados. Tu trabajo combina anticipación, lectura del entorno, manejo de riesgos y un trato impecable: proteger sin invadir.',
      'Buscamos agentes con formación en protección ejecutiva, excelente condición física, manejo defensivo y, sobre todo, criterio y discreción. Ofrecemos proyectos de alto nivel, esquemas de tiempo completo o por proyecto, y el respaldo de una empresa con experiencia coordinando seguridad de figuras nacionales e internacionales.',
    ],
    responsabilidades: [
      'Protección cercana del protegido en eventos, accesos y traslados.',
      'Avanzada de seguridad: revisión previa de rutas, sedes y accesos.',
      'Lectura del entorno y detección temprana de riesgos.',
      'Coordinación con el equipo del cliente y con el dispositivo del evento.',
      'Manejo defensivo y evasivo cuando el traslado lo requiere.',
      'Discreción absoluta sobre la información y los movimientos del protegido.',
      'Aplicación de protocolos de reacción y extracción ante incidentes.',
    ],
    indispensables: [
      'Formación en protección ejecutiva o escolta',
      'Excelente condición física y salud',
      'Manejo defensivo / evasivo',
      'Discreción, presentación y trato profesional',
      'Disponibilidad para viajar (cobertura nacional)',
      'Sin antecedentes penales',
    ],
    deseables: [
      'Experiencia con figuras públicas o artistas',
      'Primeros auxilios / RCP',
      'Inglés básico o intermedio',
      'Licencia de conducir y manejo de protección en ruta',
      'Constancias de capacitación vigentes',
    ],
    faq: [
      { q: '¿Necesito experiencia previa como escolta?', a: 'Sí. Este puesto requiere formación en protección ejecutiva y, preferentemente, experiencia en seguridad cercana. No es una posición de inicio.' },
      { q: '¿El trabajo es por proyecto o de planta?', a: 'Ofrecemos ambos esquemas: agentes de planta de tiempo completo y colaboración por proyecto para operativos específicos. Lo definimos según tu perfil y disponibilidad.' },
      { q: '¿Tengo que viajar?', a: 'Sí. La cobertura es nacional y los traslados son parte del trabajo; los gastos de operativo corren por cuenta de la empresa.' },
      { q: '¿El servicio se presta conforme a la ley?', a: 'Siempre. Operamos conforme a la Ley de Seguridad Privada y a los lineamientos de la DGSSP. Cualquier requerimiento especial se maneja dentro del marco legal vigente.' },
      { q: '¿Qué valoran más en un agente?', a: 'Criterio, discreción y anticipación. La mejor protección es la que previene, no la que reacciona.' },
    ],
  },

  {
    slug: 'monitorista-cctv',
    puesto: 'Monitorista CCTV',
    tipo: 'Tiempo completo / Turnos',
    employmentType: ['FULL_TIME'],
    ubicacion: 'Ciudad de México',
    ciudades: ['cdmx'],
    imagen: '/img/eventos/centro-monitoreo-cctv-eventos',
    desc: 'Monitoreo de cámaras, registro de incidencias y coordinación con personal en campo desde central de monitoreo.',
    perfil: ['Manejo de sistemas CCTV', 'Atención al detalle', 'Disponibilidad por turnos', 'Redacción de bitácoras'],
    jornada: 'Turnos rotativos (incluye noches y fines)',
    experienciaResumen: 'Deseable — capacitamos en el sistema',
    occupationalCategory: 'Monitorista CCTV',
    heroSub: 'Sé los ojos de cada operativo desde la central de monitoreo. Buscamos personas atentas, ordenadas y confiables para nuestro centro de control de eventos.',
    introLead: 'El monitorista CCTV es la mirada que anticipa: detecta desde la central lo que en campo aún no se ve.',
    introParrafos: [
      'Como Monitorista CCTV operas la central de monitoreo del evento: vigilas las cámaras, identificas conductas o situaciones de riesgo, registras incidencias y coordinas por radio con el personal en campo para una respuesta rápida. Eres clave para medir la densidad por zona y anticipar aglomeraciones.',
      'Buscamos personas con atención al detalle, capacidad de concentración por turnos prolongados y buena redacción para las bitácoras. La experiencia en CCTV es deseable, pero capacitamos en nuestro sistema. Ofrecemos un puesto estable, en interior, con prestaciones de ley y crecimiento.',
    ],
    responsabilidades: [
      'Monitoreo continuo de cámaras CCTV durante el operativo.',
      'Detección temprana de incidentes, riesgos y aglomeraciones.',
      'Coordinación por radio con guardias y supervisores en campo.',
      'Registro de incidencias y novedades en bitácora.',
      'Apoyo en el conteo de aforo y la densidad por zona.',
      'Resguardo y respaldo de grabaciones según protocolo.',
      'Escalamiento inmediato a la cadena de mando ante emergencias.',
    ],
    indispensables: [
      'Mayor de 18 años',
      'Atención al detalle y capacidad de concentración',
      'Disponibilidad para turnos rotativos (noches y fines)',
      'Buena redacción para bitácoras',
      'Manejo básico de computadora',
      'Sin antecedentes penales',
    ],
    deseables: [
      'Experiencia previa en CCTV o centrales de monitoreo',
      'Conocimiento de sistemas de videovigilancia',
      'Manejo de radio',
      'Constancias de capacitación en seguridad',
      'Residencia en CDMX o zona metropolitana',
    ],
    faq: [
      { q: '¿Necesito experiencia en CCTV?', a: 'Es deseable, pero no indispensable. Si tienes atención al detalle y disponibilidad de turnos, te capacitamos en nuestro sistema de monitoreo.' },
      { q: '¿Qué turnos se manejan?', a: 'Turnos rotativos que pueden incluir noches y fines de semana, según la agenda de eventos. Lo coordinamos contigo al ingresar.' },
      { q: '¿El trabajo es de oficina o en evento?', a: 'Operas desde la central de monitoreo, en interior. En algunos eventos la central es móvil y se instala en el recinto.' },
      { q: '¿Ofrecen prestaciones?', a: 'Sí, prestaciones de ley desde tu alta, sueldo competitivo y un puesto estable.' },
      { q: '¿En qué ciudad es la vacante?', a: 'Actualmente en Ciudad de México. Para otras ciudades, regístrate en el banco de talento y te contactamos al abrir plaza.' },
    ],
  },

  {
    slug: 'coordinador-de-eventos-logistica',
    puesto: 'Coordinador de Eventos / Logística',
    tipo: 'Tiempo completo',
    employmentType: ['FULL_TIME'],
    ubicacion: 'Ciudad de México',
    ciudades: ['cdmx'],
    imagen: '/img/eventos/seguridad-empresarial-evento',
    desc: 'Planeación operativa, asignación de personal y enlace con cliente, Protección Civil y autoridades locales.',
    perfil: ['Experiencia en logística de eventos', 'Organización y liderazgo', 'Trato directo con cliente', 'Disponibilidad para viajar'],
    jornada: 'Tiempo completo, con disponibilidad para viajar',
    experienciaResumen: 'Experiencia en logística de eventos',
    occupationalCategory: 'Coordinador de operaciones',
    heroSub: 'Diseña y dirige la logística de seguridad de eventos de principio a fin. Buscamos coordinadores organizados, resolutivos y con trato impecable con el cliente.',
    introLead: 'El coordinador es el arquitecto del operativo: convierte los requerimientos del cliente en un plan de seguridad ejecutable.',
    introParrafos: [
      'Como Coordinador de Eventos / Logística planeas el dispositivo de seguridad completo: analizas el evento, realizas la visita al venue, defines el número y perfil del personal, elaboras el plan operativo y coordinas con el cliente, Protección Civil y autoridades. Eres responsable de que todo encaje antes de que llegue el primer asistente.',
      'Buscamos personas con experiencia en logística de eventos, capacidad de organización, liderazgo y excelente comunicación. Ofrecemos un puesto estratégico, con incidencia directa en la calidad del servicio, plan de crecimiento y el respaldo de una empresa líder en seguridad para eventos.',
    ],
    responsabilidades: [
      'Análisis de riesgo y planeación operativa de cada evento.',
      'Visita previa al venue y mapeo de accesos, salidas y puntos críticos.',
      'Definición del número, perfil y posiciones del personal.',
      'Elaboración del plan operativo y del plan de contingencia.',
      'Enlace con el cliente, Protección Civil y autoridades locales.',
      'Coordinación del montaje, ejecución y cierre del operativo.',
      'Elaboración del reporte posterior con incidencias y recomendaciones.',
    ],
    indispensables: [
      'Experiencia en logística u operación de eventos',
      'Capacidad de organización y planeación',
      'Liderazgo y trato directo con cliente',
      'Disponibilidad para viajar',
      'Manejo de office y elaboración de reportes',
      'Sin antecedentes penales',
    ],
    deseables: [
      'Experiencia en seguridad privada',
      'Conocimiento de trámites de Protección Civil',
      'Licencia de conducir vigente',
      'Inglés básico o intermedio',
      'Estudios en administración, logística o afín',
    ],
    faq: [
      { q: '¿Qué perfil buscan para coordinador?', a: 'Personas con experiencia en logística u operación de eventos, muy organizadas, con liderazgo y excelente trato con el cliente. La experiencia en seguridad es un plus.' },
      { q: '¿Necesito experiencia en seguridad privada?', a: 'Es deseable, no excluyente. Si vienes de logística o producción de eventos y tienes capacidad de aprendizaje, te integramos a nuestros protocolos.' },
      { q: '¿El puesto implica trabajo de campo?', a: 'Sí. Combina planeación de escritorio con visitas a venues y presencia en el evento durante el montaje y la operación.' },
      { q: '¿Hay crecimiento?', a: 'Sí, hacia jefaturas de operación y dirección operativa, según resultados.' },
      { q: '¿Dónde es la vacante?', a: 'En Ciudad de México, con disponibilidad para viajar a operativos en otras ciudades.' },
    ],
  },

  {
    slug: 'personal-control-acceso-acreditacion',
    puesto: 'Personal de Control de Acceso y Acreditación',
    tipo: 'Tiempo completo / Por evento',
    employmentType: ['FULL_TIME', 'TEMPORARY', 'PART_TIME'],
    ubicacion: 'CDMX · Guadalajara · Monterrey · Cancún',
    ciudades: ['cdmx', 'gdl', 'mty', 'cun'],
    imagen: '/img/eventos/control-acceso-credenciales',
    desc: 'Registro de asistentes, validación de acreditaciones y boletos, y filtrado de accesos en conciertos, ferias y eventos corporativos.',
    perfil: ['Mayor de 18 años', 'Buen trato y presentación', 'Manejo básico de dispositivos', 'Disponibilidad fines de semana'],
    jornada: 'Por evento y turnos, fines de semana',
    experienciaResumen: 'No indispensable — te capacitamos',
    occupationalCategory: 'Control de acceso',
    heroSub: 'Sé la primera impresión del evento y la primera línea de control. Buscamos personal de acceso amable, ágil y confiable.',
    introLead: 'El personal de control de acceso garantiza que solo entre quien debe entrar, sin convertir la entrada en un cuello de botella.',
    introParrafos: [
      'Como Personal de Control de Acceso y Acreditación gestionas las entradas del evento: registras asistentes, validas boletos y acreditaciones (QR/NFC), entregas gafetes y filtras el ingreso por zonas. Eres la primera cara que ve el público, por lo que combinas control con un trato amable y ágil.',
      'No necesitas experiencia previa: te capacitamos en los sistemas de validación y en los protocolos de acceso. Buscamos personas con buena presentación, facilidad de trato y disponibilidad de fines de semana. Ofrecemos capacitación STPS, prestaciones de ley y esquemas de tiempo completo o por evento.',
    ],
    responsabilidades: [
      'Registro y validación de boletos y acreditaciones (QR/NFC).',
      'Entrega y control de gafetes y pulseras por zona.',
      'Filtrado de accesos según el nivel de acreditación.',
      'Orientación y atención amable al público en las entradas.',
      'Apoyo en el conteo y control de aforo.',
      'Detección y reporte de accesos irregulares o duplicados.',
      'Coordinación con guardias y supervisión en los filtros.',
    ],
    indispensables: [
      'Mayor de 18 años',
      'Buena presentación y trato con el público',
      'Manejo básico de dispositivos (lector / celular)',
      'Disponibilidad de fines de semana',
      'Identificación oficial vigente (INE)',
      'Sin antecedentes penales',
    ],
    deseables: [
      'Experiencia en accesos, taquilla o atención a clientes',
      'Agilidad y tolerancia al trabajo bajo presión',
      'Inglés básico (eventos internacionales)',
      'Constancias de capacitación previas',
      'Disponibilidad inmediata',
    ],
    faq: [
      { q: '¿Necesito experiencia para control de acceso?', a: 'No. Capacitamos en los sistemas de validación y en los protocolos. Valoramos el buen trato y la agilidad.' },
      { q: '¿Qué hago exactamente en la entrada?', a: 'Validas boletos y acreditaciones, entregas gafetes, filtras por zona y orientas al público, manteniendo el flujo ágil y seguro.' },
      { q: '¿Es trabajo de planta o por evento?', a: 'Ambos esquemas. Muchos colaboradores inician por evento y pasan a tiempo completo según disponibilidad y desempeño.' },
      { q: '¿En qué ciudades hay vacante?', a: 'CDMX, Guadalajara, Monterrey y Cancún. Indica tu ciudad al postularte.' },
      { q: '¿Ofrecen capacitación y prestaciones?', a: 'Sí, capacitación certificada STPS sin costo y prestaciones de ley desde tu alta.' },
    ],
  },
];

// Beneficios y proceso son comunes a todas las vacantes.
export const BENEFICIOS = [
  { icon: '💰', titulo: 'Sueldo competitivo', desc: 'Pago puntual, por encima del promedio del sector, con bonos por evento.' },
  { icon: '📋', titulo: 'Prestaciones de ley', desc: 'IMSS, aguinaldo, vacaciones y prima vacacional desde tu alta.' },
  { icon: '🎓', titulo: 'Capacitación certificada', desc: 'Formación STPS con constancias DC-3 sin costo para ti.' },
  { icon: '🦺', titulo: 'Uniforme y equipo', desc: 'Te damos uniforme, identificación y equipo operativo.' },
  { icon: '📈', titulo: 'Plan de crecimiento', desc: 'Ruta clara: guardia → supervisor → coordinador, por desempeño.' },
  { icon: '🛡️', titulo: 'Empresa formal', desc: 'Licencia DGSSP federal vigente y operación 100% en regla.' },
];

export const PROCESO = [
  { paso: '01', titulo: 'Postulación', desc: 'Llenas el formulario de esta página. Toma menos de 3 minutos.' },
  { paso: '02', titulo: 'Entrevista', desc: 'Entrevista inicial telefónica o presencial con reclutamiento.' },
  { paso: '03', titulo: 'Verificación', desc: 'Revisión de documentos, referencias y no antecedentes penales.' },
  { paso: '04', titulo: 'Capacitación', desc: 'Inducción y capacitación certificada STPS antes de tu primer evento.' },
  { paso: '05', titulo: 'Alta y asignación', desc: 'Te damos de alta y asignamos a tu primer operativo.' },
];

export function getVacante(slug: string): Vacante | undefined {
  return VACANTES.find((v) => v.slug === slug);
}
