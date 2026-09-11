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
    phases: [
      { at: 0, label: 'Iniciando' },
      { at: 25, label: 'Cargando recursos' },
      { at: 55, label: 'Preparando experiencia' },
      { at: 80, label: 'Casi listo' },
      { at: 100, label: 'Listo' },
    ],
  },
  navigation: {
    ariaLabel: 'Navegación principal',
    items: [
      { id: 'hero', label: 'Inicio' },
      { id: 'sobre-mi', label: 'Sobre mi' },
      { id: 'proyectos', label: 'Proyectos' },
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
    introPrefix:
      'Soy Product Designer / UX/UI Designer con +8 años de experiencia, especializado en crear productos intuitivos, funcionales y visualmente sólidos utilizando',
    introAccent: 'Figma, UX Research, prototipado e Inteligencia Artificial.',
    experience: 'Experiencia',
    education: 'Educación',
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
    tabs: {
      overview: 'Visión General & Reto',
      features: 'Solución & Funcionalidades',
      impact: 'Entregables & Resultados',
    },
    context: 'Contexto del Proyecto',
    challenge: 'El Desafío de Diseño',
    fallbackChallenge:
      'Diseñar una experiencia que redujera la fricción y elevara la conversión manteniendo los más altos estándares de accesibilidad.',
    tags: 'Etiquetas & Disciplinas',
    solution: 'Enfoque y Solución Diseñada',
    keyFeatures: 'Funcionalidades Clave Diseñadas',
    deliverables: 'Entregables del Proyecto',
    client: 'Cliente & Entorno',
    clientPrefix: 'Proyecto ejecutado para',
    clientSuffix: 'en colaboración directa con equipos de producto y desarrollo.',
    invitation: '¿Interesado en un enfoque similar?',
    closeAction: 'Cerrar',
    contactAction: 'Hablar sobre este proyecto',
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
  linkedin: 'https://linkedin.com/in/andres-oviedo',
  behance: 'https://behance.net/andresoviedo',
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

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Heritage Stays & Hotels',
    category: 'Mobile',
    subtitle: 'Nuestros Hoteles & Experiencias de Patrimonio',
    description:
      'Plataforma de reservas boutique para hoteles situados en monasterios y cascos históricos, fusionando respeto patrimonial con reservas ágiles.',
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
    behanceUrl: 'https://behance.net/andresoviedo',
  },
  {
    id: 'proj-2',
    title: 'Kinetix Asset Trading',
    category: 'Web App',
    subtitle: 'Plataforma DeFi & Gestión Patrimonial',
    description:
      'Dashboard de trading financiero de alta frecuencia diseñado para simplificar la toma de decisiones con visualizaciones de datos claras y sin sobrecarga cognitiva.',
    coverType: 'crypto',
    accentColor: 'var(--project-crypto)',
    tags: ['Dashboard', 'Fintech', 'Data Viz', 'Design System'],
    year: '2024',
    client: 'Kinetix Finance',
    metrics: [
      { label: 'Volumen operado mensual', value: '$84M+' },
      { label: 'Tiempo de lectura de charts', value: '-38%' },
      { label: 'Tasa de retención 90 días', value: '76%' },
    ],
    overview:
      'Un rediseño integral de la consola de operaciones para traders institucionales y retail, reorganizando métricas críticas en módulos modulares y personalizables.',
    challenge:
      'La sobrecarga informativa generaba fatiga visual y errores operativos en momentos de alta volatilidad de mercado.',
    solution:
      'Jerarquía visual de alto contraste, modo de concentración táctico, gráficos D3 optimizados y microanimaciones que confirman la ejecución de órdenes al instante.',
    features: [
      'Disposición modular con widgets reordenables',
      'Alertas inteligentes predictivas con IA',
      'Modo nocturno con ratio de contraste accesible WCAG AAA',
    ],
    deliverables: [
      'Design System Tokens',
      'Figma Components',
      'Prototipo interactivo',
      'Guía de microinteracciones',
    ],
    figmaUrl: 'https://figma.com/@andresoviedo',
    behanceUrl: 'https://behance.net/andresoviedo',
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
    behanceUrl: 'https://behance.net/andresoviedo',
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
    behanceUrl: 'https://behance.net/andresoviedo',
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
    behanceUrl: 'https://behance.net/andresoviedo',
  },
];
