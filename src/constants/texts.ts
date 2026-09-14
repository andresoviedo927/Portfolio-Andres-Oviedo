import type { ContactInfo, EducationItem, ExperienceItem, ProjectItem } from '../types';

export const TEXTS = {
  intro: {
    firstName: 'ANDRES',
    lastName: 'OVIEDO',
    avatarAlt: 'Andres Oviedo',
    enterLabel: 'Entrar al portafolio de Andres Oviedo',
  },
  loading: {
    label: 'Cargando portafolio',
  },
  navigation: {
    ariaLabel: 'Navegación principal',
    items: [
      { id: 'hero', label: 'Inicio' },
      { id: 'sobre-mi', label: 'Sobre mi' },
      { id: 'proyectos', label: 'Proyectos' },
      { id: 'contacto', label: 'Contáctame' },
    ],
    availableShort: 'Disponible',
    contact: 'Hablemos',
    contactMobile: 'Contactar conmigo',
    openMenu: 'Abrir menú',
  },
  hero: {
    bannerAlt: 'Retrato de Andres Oviedo',
    eyebrow: 'Digital Product Design & Strategy',
    locationDate: '[LATAM / ESPAÑA • 2026]',
    posterPattern: 'LOADING DIGITAL EXPERIENCE • DESIGN SYSTEM • INTERACTION DESIGN •',
    version: 'v3.4.0',
    portfolioYear: 'PORTFOLIO 2026',
    previewName: 'Heritage UI',
    previewTitle: 'Case Studies & Systems',
    previewAction: 'Explorar Proyectos',
    discipline: 'Human-Centered UI/UX',
    location: 'Madrid, ES',
    title: 'Portfolio',
    rolePrefix: 'Product',
    roleAccent: 'Designer',
    summary:
      'Especializado en diseñar productos digitales comprensibles, sistemas escalables y flujos de interacción que transforman la complejidad en experiencias memorables.',
    viewProjects: 'Ver Proyectos',
    stats: [
      { value: '5+', label: 'Años de Exp.' },
      { value: '30+', label: 'Proyectos UX' },
      { value: '100%', label: 'Enfoque Humano' },
    ],
    scrollHint: 'Scroll para descubrir',
  },
  about: {
    label: 'Sobre mi',
    avatarAlt: 'Avatar de Andres Oviedo',
    introduction: [
      [
        { text: 'Soy ', accent: false },
        {
          text: 'Product Designer / UX/UI Designer con 6+ años de experiencia',
          accent: true,
        },
        { text: ' creando productos digitales ', accent: false },
        { text: 'B2B y SaaS', accent: true },
        { text: ' intuitivos, funcionales y escalables.', accent: false },
      ],
      [
        { text: 'Me especializo en ', accent: false },
        {
          text: 'Figma, UX Research, prototipado y Design Systems,',
          accent: true,
        },
        {
          text: ' conectando necesidades de usuarios, negocio y tecnología. He contribuido a ',
          accent: false,
        },
        {
          text: 'acelerar en un 25 % los procesos de entrega de diseño y a reducir cerca de un 30 % los tiempos de tarea',
          accent: true,
        },
        { text: ' en productos digitales.', accent: false },
      ],
      [
        { text: 'También integro ', accent: false },
        { text: 'Inteligencia Artificial', accent: true },
        {
          text: ' en investigación, ideación y diseño para agilizar procesos y mejorar la toma de decisiones.',
          accent: false,
        },
      ],
    ],
    experience: 'Experiencia',
    education: 'Educación',
    certifications: 'Licencias y certificaciones',
  },
  projects: {
    eyebrow: 'Portafolio Seleccionado',
    title: 'Proyectos',
    description:
      'Explora una selección de mis proyectos más recientes en diseño de producto, UX/UI y diseño estratégico.',
    categories: ['Todos', 'Mobile', 'Web App', 'UI/UX', 'Design System'],
    previous: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    viewCase: 'Ver Caso',
    goTo: 'Ir al proyecto',
  },
  footer: {
    avatarAlt: 'Andres Oviedo',
    avatarLabel: 'ANDRES OVIEDO',
    title: '¿Tienes un proyecto en mente?',
    description:
      'Disponible para roles de diseño de producto, diseño de sistemas de diseño o consultorías estratégicas.',
    contact: 'Escríbeme directamente',
    copied: '¡Copiado!',
    copy: 'Copiar',
    copyEmail: 'Copiar email',
    copyright:
      '© 2026 Andres Oviedo. Todos los derechos reservados. Diseñado con rigor y pasión por los detalles.',
    backToTop: 'Volver arriba',
    links: {
      email: 'Correo Directo',
      linkedin: 'LinkedIn',
      behance: 'Behance Portfolio',
      dribbble: 'Dribbble Shots',
    },
  },
  contactModal: {
    title: 'Iniciar conversación',
    close: 'Cerrar modal',
    directEmail: 'Correo directo',
    copyEmail: 'Copiar email',
    copied: '¡Copiado!',
    successTitle: '¡Mensaje recibido con éxito!',
    successPrefix: 'Gracias por escribirme. Te responderé en menos de 24 horas a',
    back: 'Volver al portafolio',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Ej. Sofia Martínez',
    emailLabel: 'Tu correo electrónico',
    emailPlaceholder: 'tu@empresa.com',
    projectTypeLabel: 'Tipo de colaboración',
    messageLabel: 'Detalles del proyecto o mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto, objetivos, plazos o cualquier pregunta...',
    cancel: 'Cancelar',
    send: 'Enviar mensaje',
    projectTypes: [
      'Diseño de Producto / UX',
      'Sistema de Diseño & Tokens',
      'Rediseño de Aplicación Móvil',
      'Oportunidad Laboral Full-Time',
      'Consultoría puntual',
    ],
  },
  caseStudy: {
    close: 'Cerrar modal',
    eyebrow: 'APLICACIÓN TURÍSTICA • 2016',
    titlePrefix: 'Rediseñando la forma de descubrir',
    titleAccent: 'Villa de Leyva',
    description:
      'Una experiencia móvil para explorar Villa de Leyva a través de lugares, historias, rutas, juegos y realidad aumentada, conectando al visitante con la cultura y el comercio local.',
    metrics: [
      { value: '96', label: 'Visitantes testeados', icon: 'usersSolid' },
      { value: '88%', label: 'Navegación intuitiva', icon: 'tapSolid' },
      { value: '4.4/5', label: 'Valoración promedio', icon: 'starSolid' },
    ],
    tabs: [
      { id: 'challenge', label: 'El reto y la oportunidad' },
      { id: 'experience', label: 'De la información a la experiencia' },
      { id: 'result', label: 'Resultado del proyecto' },
    ],
    challenge: {
      contextTitle: 'Contexto del proyecto',
      context:
        'La información turística de Villa de Leyva estaba fragmentada entre diferentes fuentes y ofrecía poca continuidad durante el recorrido. Diseñamos una experiencia móvil capaz de conectar orientación, cultura, entretenimiento y comercio local en un mismo ecosistema.',
      bannerTitle: 'Desafío de diseño',
      banner:
        'El principal reto fue construir una experiencia con diferentes niveles de interacción. Los momentos transaccionales necesitaban claridad y rapidez, mientras que la exploración cultural podía permitirse un lenguaje más narrativo, visual y lúdico. El sistema debía hacer convivir ambos mundos sin perder coherencia.',
      tagsTitle: 'Etiquetas y disciplinas',
      tags: ['UX/UI Design', 'Turismo', 'Realidad aumentada', 'Product Design', 'Mobile App'],
    },
    experience: {
      title: 'Enfoque / solución diseñada',
      description:
        'Convertimos una guía turística tradicional en un ecosistema de exploración. Mapas, servicios y eventos resuelven las necesidades prácticas del visitante, mientras rutas, personajes, contenido multimedia y realidad aumentada transforman los lugares en experiencias.',
      featuresTitle: 'Funcionalidades clave',
      features: [
        {
          title: 'Mapa interactivo',
          description:
            'Explorar puntos turísticos, servicios y lugares de interés desde una representación visual del territorio.',
          icon: 'mapMarkerSolid',
        },
        {
          title: 'Centro de experiencias',
          description:
            'Reúne historia, audio, fotografías, video, panorámicas y distintas formas de descubrir cada lugar.',
          icon: 'filmSolid',
        },
        {
          title: 'Experiencias y servicios conectados',
          description:
            'Descubre y accede fácilmente a restaurantes, hoteles y servicios locales, con la opción de integrarlos en recorridos interactivos si quieres una experiencia más completa.',
          icon: 'storeAltSolid',
        },
      ],
    },
    result: {
      deliverablesTitle: 'Entregables del proyecto',
      deliverables: [
        { label: 'Flujos de experiencia', icon: 'departmentStructure' },
        { label: 'UI Kit y sistema visual', icon: 'paletteSolid' },
        { label: 'Prototipo interactivo', icon: 'reservationSmartphone' },
      ],
      imageAlt: 'Mockups de la aplicación turística Villa de Leyva',
      teamTitle: 'Equipo y contexto',
      team:
        'Trabajamos en un equipo reducido, complementado por conocimiento local de Villa de Leyva. Esta combinación permitió conectar decisiones de producto y diseño con necesidades reales del territorio y su ecosistema turístico.',
      commerceTitle: 'Modelo con comercio local',
      commerce:
        'La propuesta conectaba turismo y economía local: establecimientos participantes podían aparecer dentro de la aplicación y vincular beneficios o recompensas a determinadas experiencias y recorridos.',
    },
    invitation: '¿Te gustaría aplicar algo así en tu producto?',
    contactAction: 'Hablemos',
  },
} as const;

export const CASE_STUDIES = {
  'proj-1': TEXTS.caseStudy,
  'proj-2': {
    close: 'Cerrar modal',
    eyebrow: 'CONTROL ACADÉMICO • 2017',
    titlePrefix: 'Simplificando el',
    titleAccent: 'seguimiento académico',
    titleSuffix: 'para las familias',
    description:
      'Una experiencia móvil que centraliza calificaciones, tareas, asistencia y eventos escolares para que padres y acudientes puedan acompañar el proceso académico de sus hijos de forma simple y confiable.',
    metrics: [
      { value: '84', label: 'Padres\nparticipantes', icon: 'usersSolid' },
      { value: '91%', label: 'Tareas\ncompletadas', icon: 'taskChecklist' },
      { value: '34 seg', label: 'Tiempo de\nbúsqueda', icon: 'clockTimeTracking' },
    ],
    tabs: [
      { id: 'challenge', label: 'Contexto y desafío' },
      { id: 'experience', label: 'De la información al acompañamiento' },
      { id: 'result', label: 'Resultado del proyecto' },
    ],
    challenge: {
      contextTitle: 'Contexto del proyecto',
      context:
        'El proyecto surgió de la necesidad de facilitar el seguimiento académico diario y crear un punto de acceso más claro entre las familias y la información generada por el colegio.',
      bannerTitle: 'Desafío de diseño',
      banner:
        'El principal desafío fue reducir la complejidad sin perder información importante. La experiencia debía permitir que padres y acudientes encontraran rápidamente lo que necesitaban, incluso al consultar diferentes materias, periodos, actividades o novedades escolares.',
      tagsTitle: 'Etiquetas y disciplinas',
      tags: ['UX/UI Design', 'EdTech', 'Académico', 'Product Design', 'Mobile-first'],
    },
    experience: {
      title: 'Enfoque / solución diseñada',
      description:
        'Diseñamos una experiencia móvil que organiza la información académica alrededor de las necesidades más frecuentes de las familias. Un inicio modular permite acceder rápidamente a calificaciones, agenda, horarios, observaciones, asistencia y calendario.',
      featuresTitle: 'Funcionalidades clave',
      features: [
        {
          title: 'Información académica centralizada',
          description:
            'Notas, agenda, horarios, asistencia y observaciones reunidas en un mismo punto de acceso.',
          icon: 'bookSolid',
        },
        {
          title: 'Comunicación colegio–familia',
          description:
            'Contactos, observaciones y notificaciones permiten mantener a las familias informadas durante el año escolar.',
          icon: 'bellSchoolSolid',
        },
        {
          title: 'Gestión de ausencias',
          description:
            'Los acudientes pueden consultar asistencias y adjuntar soportes al momento de justificar una ausencia.',
          icon: 'calendarXmarkSolid',
        },
      ],
    },
    result: {
      deliverablesTitle: 'Entregables del proyecto',
      deliverables: [
        { label: 'Flujos de experiencia', icon: 'departmentStructure' },
        { label: 'UI Kit y sistema visual', icon: 'paletteSolid' },
        { label: 'Prototipo mobile-first', icon: 'reservationSmartphone' },
      ],
      imageAlt: 'Mockups de la aplicación de control académico CEDHU',
      teamTitle: 'Proyecto y entorno',
      team:
        'CEDHU Padres fue concebida como una herramienta de acompañamiento familiar, simplificando el acceso a la información académica y reuniendo las principales consultas del año escolar en una sola aplicación.',
      commerceTitle: 'Acompañamiento familiar centralizado',
      commerce:
        'La propuesta reúne en un mismo entorno la información académica más relevante para las familias, facilitando el seguimiento de calificaciones, tareas, asistencia, observaciones y actividades escolares durante todo el año académico.',
    },
    invitation: '¿Te gustaría aplicar algo así en tu producto?',
    contactAction: 'Hablemos',
  },
} as const;

export const PERSONAL_INFO = {
  name: 'Andres Oviedo',
  role: 'Product Designer',
  tagline: 'Diseño experiencias digitales que hacen simples las cosas complejas.',
  bio: 'Especializado en diseño de interacción, sistemas de diseño escalables y productos digitales centrados en las personas. Combino investigación de usuarios, pensamiento visual y rigor técnico para crear soluciones intuitivas y memorables.',
  available: true,
  statusText: 'Disponible para proyectos',
};

export const CONTACT_DATA: ContactInfo = {
  email: 'andresoviedo927.2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andresoviedo927/',
  behance: 'https://www.behance.net/AndresOviedoDesign',
  dribbble: 'https://dribbble.com/andresoviedo',
  github: 'https://github.com/andresoviedo',
  location: 'Madrid / Remoto',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Abr 2022 — Julio 2026',
    location: 'En remoto',
    role: 'UX/UI Designer Advance',
    company: 'NYXN',
  },
  {
    id: 'exp-2',
    period: 'Ago 2020 — Feb 2022',
    location: 'En remoto',
    role: 'Diseñador de Experiencia de usuario I',
    company: 'Xolit',
  },
  {
    id: 'exp-3',
    period: 'Oct 2016 — Jun 2017',
    location: 'Sogamoso, Boyaca',
    role: 'Diseñador de interfaz de usuario web',
    company: 'Sofed S.A.S',
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'edu-1',
    year: '2025',
    institution: 'BIG School',
    degree: 'Máster en Inteligencia Artificial',
  },
  {
    id: 'edu-2',
    year: '2022 — 2023',
    institution: 'Three Points The School for Digital Business',
    degree: 'Máster en Diseño de Experiencia de Usuario, Usabilidad e Interfaces',
  },
  {
    id: 'edu-3',
    year: '2011 — 2017',
    institution: 'Universidad Pedagógica y Tecnológica de Colombia',
    degree: 'Diseño Industrial',
  },
];

export const CERTIFICATIONS: EducationItem[] = [
  {
    id: 'cert-1',
    year: '2025',
    institution: 'Coursera',
    degree: 'Microsoft UX Design Professional Certificate',
  },
  {
    id: 'cert-2',
    year: '2025',
    institution: 'Coursera',
    degree: 'Google UX Design Professional Certificate',
  },
  {
    id: 'cert-3',
    year: '2024',
    institution: 'Coderhouse',
    degree: 'Diseño UX/UI Avanzado',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'App Turística Villa de Leyva',
    category: 'Mobile',
    subtitle: 'Una experiencia móvil para explorar Villa de Leyva.',
    description:
      'Una experiencia móvil para explorar Villa de Leyva a través de lugares, historias, rutas, juegos y realidad aumentada, conectando al visitante con la cultura y el comercio local.',
    coverType: 'heritage',
    accentColor: 'var(--project-heritage)',
    tags: ['App Móvil', 'iOS', 'Turismo Cultural', 'UX Research'],
    year: '2024',
    client: 'Heritage Group Europe',
    metrics: [
      { label: 'Conversión de reservas', value: '+42%' },
      { label: 'Valoración en App Store', value: '4.9★' },
      { label: 'Tiempo de check-in digital', value: '< 2 min' },
    ],
    overview:
      'El reto principal era digitalizar la experiencia de hospedaje en enclaves de alto valor histórico sin perder la calidez humana y el encanto arquitectónico.',
    challenge:
      'Los huéspedes buscaban una experiencia sin fricciones pero altamente personalizada, desde la selección de habitación temática hasta guías históricas guiadas por audio.',
    solution:
      'Diseño de un flujo minimalista con vista interactiva 3D del claustro, llave digital NFC y asistente de concierge local en tiempo real.',
    features: [
      'Visualizador inmersivo de habitaciones con historia del edificio',
      'Flujo de reserva en 3 pasos con Apple Pay / Google Pay',
      'Itinerario gastronómico y cultural integrado',
    ],
    deliverables: [
      'Research Synthesis',
      'Figma Prototype',
      'UI Kit & Component Library',
      'iOS Design Guidelines',
    ],
    figmaUrl: 'https://figma.com/@andresoviedo',
    behanceUrl: 'https://www.behance.net/AndresOviedoDesign',
  },
  {
    id: 'proj-2',
    title: 'CEDHU - Control Académico',
    category: 'Mobile',
    subtitle: 'Control académico móvil para familias y estudiantes.',
    description:
      'Una experiencia móvil que centraliza calificaciones, tareas, asistencia y eventos escolares para que padres y acudientes puedan acompañar el proceso académico de sus hijos de forma simple y confiable.',
    coverType: 'crypto',
    accentColor: 'var(--project-crypto)',
    tags: ['App móvil', 'Educación', 'Control académico', 'UX/UI'],
    year: '2017',
    client: 'CEDHU',
  },
  {
    id: 'proj-3',
    title: 'Aura Gourmet & Breakfast',
    category: 'UI/UX',
    subtitle: 'Experiencia Gastronómica & Room Service de Lujo',
    description:
      'Servicio digital para huéspedes de hoteles 5 estrellas para la personalización de desayunos gourmet y cenas de autor servidas en suite.',
    coverType: 'luxury',
    accentColor: 'var(--brand-primary)',
    tags: ['Gastronomía', 'Luxury UI', 'Interacción Táctil', 'Tablet App'],
    year: '2023',
    client: 'Aura Grand Palace Hotel',
    metrics: [
      { label: 'Adopción en suites', value: '94%' },
      { label: 'Ticket promedio de room service', value: '+28%' },
      { label: 'Satisfacción del huésped', value: '98%' },
    ],
    overview:
      'Diseñada para pantallas táctiles instaladas en suites de lujo y dispositivos móviles personales de los huéspedes, garantizando una estética editorial sofisticada.',
    challenge:
      'Reemplazar las tradicionales cartas de papel por un sistema táctil sin que el huésped sintiera frialdad tecnológica.',
    solution:
      'Diseño con fotografía artística generosa, tipografía serif editorial (Perpetua) y selector táctil de ingredientes frescos según alergias o preferencias horarias.',
    features: [
      'Selector de hora de entrega exacta al minuto',
      'Configurador de café y maridaje de zumos naturales',
      'Integración directa con el equipo de mayordomía',
    ],
    deliverables: ['Tablet UI', 'PWA Huésped', 'Backoffice para Cocina', 'Design Tokens'],
    figmaUrl: 'https://figma.com/@andresoviedo',
    behanceUrl: 'https://www.behance.net/AndresOviedoDesign',
  },
  {
    id: 'proj-4',
    title: 'Pulse Habit & Wellbeing',
    category: 'Mobile',
    subtitle: 'App de Salud Preventiva y Ritmos Biológicos',
    description:
      'Aplicación enfocada en la creación de micro-hábitos saludables y monitorización del bienestar mediante interacción háptica relajante.',
    coverType: 'wellness',
    accentColor: 'var(--project-wellness)',
    tags: ['Health Tech', 'Mobile UX', 'Microinteracciones', 'Gamificación'],
    year: '2023',
    client: 'Pulse Labs',
    metrics: [
      { label: 'Usuarios activos diarios', value: '180K' },
      { label: 'Racha media de hábitos', value: '28 días' },
      { label: 'Calificación', value: '4.8★' },
    ],
    overview:
      'Un enfoque humanizado y calmado para el seguimiento de rutinas de descanso, hidratación y foco sin notificaciones agresivas.',
    challenge: 'Evitar la frustración del usuario cuando rompe una racha de hábitos.',
    solution:
      'Mecánicas de reanudación compasiva, feedback sonoro suave y gráficos circulares fluidos.',
    features: [
      'Anillos de progreso cinético',
      'Modo de respiración guiada interactiva',
      'Widget iOS en pantalla de bloqueo',
    ],
    deliverables: ['iOS / Android Flow', 'Motion Specs', 'Iconografía a medida'],
    figmaUrl: 'https://figma.com/@andresoviedo',
    behanceUrl: 'https://www.behance.net/AndresOviedoDesign',
  },
  {
    id: 'proj-5',
    title: 'Nexus Multi-Brand System',
    category: 'Design System',
    subtitle: 'Sistema de Diseño y Tokens Multiplataforma',
    description:
      'Infraestructura de componentes unificada para 4 marcas digitales globales, permitiendo despliegues de UI un 60% más rápidos.',
    coverType: 'ecommerce',
    accentColor: 'var(--project-system)',
    tags: ['Design System', 'Tokens', 'Accesibilidad', 'Figma Variables'],
    year: '2023',
    client: 'Nexus Group',
    metrics: [
      { label: 'Componentes reusables', value: '240+' },
      { label: 'Velocidad de entrega', value: '+60%' },
      { label: 'Cumplimiento WCAG AA', value: '100%' },
    ],
    overview:
      'Creación de un ecosistema de diseño modular con tokens semánticos compartidos entre Figma y React/Tailwind.',
    challenge:
      'Mantener consistencia de marca mientras cada filial conservaba su propia paleta y estilo tipográfico.',
    solution:
      'Arquitectura de tokens en 3 niveles (global, semántico y de componente) con documentación interactiva en Storybook.',
    features: [
      'Variables nativas de Figma con modo claro/oscuro',
      'Reglas de accesibilidad automáticas integradas',
      'Guías detalladas de uso para desarrolladores y diseñadores',
    ],
    deliverables: ['Figma Library', 'Storybook Documentation', 'Design Token Pipeline'],
    figmaUrl: 'https://figma.com/@andresoviedo',
    behanceUrl: 'https://www.behance.net/AndresOviedoDesign',
  },
];
