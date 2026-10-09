import { images, villaThumbnailMockups } from '../assets/images';
import { ProjectDetailPage } from './ProjectDetailPage';

interface VillaProjectPageProps {
  onNavigate: (path: string) => void;
}

export function VillaProjectPage({ onNavigate }: VillaProjectPageProps) {
  return (
    <ProjectDetailPage
      accent="#f2930d"
      architecture={[
        {
          title: 'Interactivo',
          description: 'Mapa → Plaza Principal → Juego / Lectura / Galería / AR',
          icon: 'homeSolid',
        },
        {
          title: 'Servicios',
          description: 'Categoría → Mapa → Lugar → Detalle',
          icon: 'mapMarkerMapSolid',
        },
        {
          title: 'Hospedaje',
          description: 'Categoría → Opciones → Alojamiento → Detalle',
          icon: 'hotelSolid',
        },
        {
          title: 'Eventos',
          description: 'Calendario → Evento → Contenido',
          icon: 'calendarSolid',
        },
      ]}
      blocks={[
        {
          title: 'Contexto del proyecto',
          body: 'Explorar Villa de Leyva implicaba cambiar constantemente entre distintas plataformas para resolver necesidades como descubrir lugares, encontrar servicios o consultar eventos.',
        },
        {
          title: 'Desafío de diseño',
          body: 'Diseñar una arquitectura capaz de reunir esas necesidades dentro de un mismo producto, manteniendo una navegación clara y dejando espacio para experiencias culturales e interactivas.',
          tone: 'accent',
        },
        {
          title: 'Problemas y fricciones detectados',
          body: 'El análisis de la experiencia permitió identificar fricciones relacionadas con la forma de buscar, organizar y conectar la información turística durante el recorrido.',
          items: [
            'El visitante debía consultar diferentes plataformas para resolver necesidades dentro del mismo viaje.',
            'La cantidad de opciones sin una estructura clara podía dificultar la exploración y la toma de decisiones.',
            'La información práctica, la orientación y el contenido cultural funcionaban de manera poco conectada.',
          ],
          tone: 'warning',
        },
      ]}
      caseStudyLayout="villa"
      description="Una experiencia móvil que reúne lugares, cultura y servicios para explorar Villa de Leyva de una forma más visual, interactiva y conectada."
      featuredAlt="Personas explorando Villa de Leyva desde la aplicación móvil"
      featuredImage={images.villaCard}
      featuredVisualPlacement="beforeFooter"
      features={[
        {
          title: 'Descubrir',
          description: 'Mapa interactivo y puntos turísticos.',
          imageSrc: images.villaFeatureDiscover,
        },
        {
          title: 'Resolver',
          description: 'Servicios, hospedaje y ubicación.',
          imageSrc: images.villaFeatureResolve,
        },
        {
          title: 'Planificar',
          description: 'Eventos y actividades culturales.',
          imageSrc: images.villaFeaturePlan,
        },
        {
          title: 'Conectar',
          description: 'Narraciones, galerías, recorridos y experiencias interactivas.',
          imageSrc: images.villaFeatureConnect,
        },
      ]}
      heroAlt="Mockup de la aplicación turística Villa de Leyva"
      heroImage={images.villaMockup}
      heroImageScale={1.16}
      invitation="¿Te gustaría aplicar algo así en tu producto?"
      logoAlt="Logo de la aplicación turística Villa de Leyva"
      logoImage={images.villaLogo}
      metadata={[
        { kind: 'year', label: 'Año', value: '2016 · Octubre' },
        { kind: 'role', label: 'Rol', value: 'Diseñador de interfaz de usuario web' },
        {
          kind: 'platform',
          label: 'Plataforma',
          value: 'Mobile App, optimizada para orientación horizontal.',
        },
        {
          kind: 'projectType',
          label: 'Tipo de proyecto',
          value: 'Producto digital · Turismo · Experiencia interactiva',
        },
      ]}
      thumbnailGalleryItems={villaThumbnailMockups}
      onNavigate={onNavigate}
      researchDescription="La investigación se centró en analizar la oferta turística existente, identificar patrones de información y definir una estructura capaz de simplificar su consulta."
      researchPoints={[
        'Se revisaron 52 registros turísticos entre servicios, hospedajes y eventos.',
        'La información se reorganizó en 4 entradas principales según las necesidades del visitante.',
        'Se definieron estructuras flexibles para manejar diferentes tipos y niveles de información.',
      ]}
      researchInsights={[
        {
          title: '',
          description:
            'El visitante necesita una estructura que le permita descubrir opciones sin partir siempre de una búsqueda específica.',
        },
        {
          title: '',
          description:
            'Durante el viaje, las necesidades cambian y requieren acceder rápidamente a información útil desde un mismo lugar.',
        },
        {
          title: '',
          description:
            'La experiencia gana valor cuando la información práctica se complementa con historia, cultura y contexto.',
        },
      ]}
      insightsDescription="El análisis permitió sintetizar tres necesidades que orientaron la navegación, la organización del contenido y las principales decisiones del producto."
      researchTitle="Metodología de UX Research"
      results={[
        {
          value: '52',
          label: 'Opciones turísticas centralizadas',
          detail: '32 servicios · 12 hospedajes · 8 eventos',
        },
        {
          value: '4',
          label: 'Entradas principales',
          detail: 'Interactivo · Servicios · Hospedaje · Eventos',
        },
        {
          value: '11',
          label: 'Categorías de organización',
          detail: '8 categorías de servicios · 3 tipologías de hospedaje',
        },
        {
          value: '5',
          label: 'Puntos de recorrido gamificado',
          detail: 'Una experiencia progresiva dentro de Plaza Principal',
        },
      ]}
      seoDescription="Una experiencia móvil que reúne lugares, cultura y servicios para explorar Villa de Leyva de una forma más visual, interactiva y conectada."
      seoTitle="App Turística Villa de Leyva | Andrés Oviedo"
      titleAccent="Villa de Leyva"
      titlePrefix="Rediseñando la forma de descubrir"
    />
  );
}
