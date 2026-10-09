import { images, periodicoThumbnailMockups } from '../assets/images';
import { PROJECTS } from '../constants';
import { ProjectDetailPage } from './ProjectDetailPage';

interface PeriodicoProjectPageProps {
  onNavigate: (path: string) => void;
}

export function PeriodicoProjectPage({ onNavigate }: PeriodicoProjectPageProps) {
  const project = PROJECTS.find((item) => item.id === 'proj-3');

  if (!project) return null;

  return (
    <ProjectDetailPage
      accent="#fa359b"
      architecture={[
        {
          title: 'Inicio',
          description: 'Splash → Onboarding → Home',
          icon: 'homeSolid',
        },
        {
          title: 'Realidad aumentada',
          description: 'Home → Cámara → Escanear → Contenido detectado → 3D / Galería / Multimedia',
          icon: 'smartphoneAr',
        },
        {
          title: 'Acciones secundarias',
          description: 'Home → Web / Contacto',
          icon: 'reservationSmartphone',
        },
      ]}
      blocks={[
        {
          title: 'Contexto del proyecto',
          body: 'El proyecto surgió de una oportunidad concreta: extender determinadas publicaciones del periódico más allá del papel sin reemplazar la experiencia tradicional de lectura.',
        },
        {
          title: 'Desafío de diseño',
          body: 'Hacer que pasar del papel a la realidad aumentada se sintiera natural, sin convertir la tecnología en una barrera para el lector.',
          tone: 'accent',
        },
        {
          title: 'Problemas y fricciones detectados',
          body: 'La propuesta debía introducir una tecnología nueva dentro de una experiencia de lectura tradicional, enfrentando barreras de acceso, adopción y producción de contenido.',
          items: [
            'La experiencia dependía de las capacidades del dispositivo, limitando el acceso para algunos lectores.',
            'Parte de la audiencia tenía poca familiaridad con este tipo de interacción y necesitaba un recorrido simple y guiado.',
            'Cada publicación interactiva debía planificarse y producirse dentro de ciclos editoriales de circulación rápida.',
          ],
          tone: 'warning',
        },
      ]}
      caseStudyLayout="periodico"
      description="Una experiencia mobile-first que transforma publicaciones del periódico Entérese en puntos de acceso a contenido interactivo desde el celular."
      featuredAlt={project.description}
      featuredImage={images.periodicoCard}
      featuredVisualPlacement="beforeFooter"
      features={[
        {
          title: 'Apuntar',
          description: 'Activar la experiencia.',
          imageSrc: images.periodicoFeatureApuntar,
        },
        {
          title: 'Descubrir',
          description: 'Reconocer contenido asociado.',
          imageSrc: images.periodicoFeatureDescubrir,
        },
        {
          title: 'Explorar',
          description: 'Interactuar con 3D, galería y multimedia.',
          imageSrc: images.periodicoFeatureExplorar,
        },
        {
          title: 'Continuar',
          description: 'Pasar del contenido al sitio web o contacto.',
          imageSrc: images.periodicoFeatureContinuar,
        },
      ]}
      heroAlt={project.description}
      heroImage={images.periodicoMockup}
      invitation="¿Te gustaría aplicar algo así en tu producto?"
      logoAlt="Periódico Entérese"
      logoImage={images.periodicoLogo}
      logoWide
      metadata={[
        { kind: 'year', label: 'Año', value: '2017 · Marzo' },
        { kind: 'role', label: 'Rol', value: 'Diseñador de interfaz de usuario web' },
        { kind: 'platform', label: 'Plataforma', value: 'Mobile first' },
        {
          kind: 'projectType',
          label: 'Tipo de proyecto',
          value: 'Producto digital con Realidad Aumentada',
        },
      ]}
      thumbnailGalleryDefaultIndex={2}
      thumbnailGalleryItems={periodicoThumbnailMockups}
      thumbnailGalleryOrientation="portrait"
      thumbnailGalleryVariant="periodico"
      onNavigate={onNavigate}
      researchInsights={[
        {
          title: '',
          description:
            'Reducir pasos e instrucciones era clave para facilitar la adopción de una interacción todavía poco familiar.',
        },
        {
          title: '',
          description:
            'La compatibilidad del dispositivo podía determinar quién lograba acceder a la experiencia antes incluso de utilizar la interfaz.',
        },
        {
          title: '',
          description:
            'El contenido digital debía ofrecer algo claramente distinto al papel, como modelos 3D, galerías o video, para justificar la interacción.',
        },
      ]}
      insightsDescription="El análisis permitió identificar que la adopción no dependía únicamente de la tecnología, sino también de qué tan fácil fuera comprenderla y del valor que ofreciera después del escaneo."
      researchPoints={[
        'Analizamos qué contenidos podían beneficiarse realmente de extenderse más allá del formato impreso.',
        'Consideramos una audiencia con distintos niveles de familiaridad y acceso a herramientas digitales.',
        'Revisamos las limitaciones de compatibilidad de la realidad aumentada en los dispositivos disponibles en 2017.',
        'Evaluamos cómo producir y coordinar contenido interactivo dentro del ritmo editorial del periódico.',
      ]}
      researchDescription="La exploración se concentró en entender las variables que podían determinar la viabilidad de la experiencia antes de definir el flujo y las funcionalidades principales."
      researchTitle="Metodología de UX Research"
      results={[
        {
          value: '+500',
          label: 'Descargas registradas',
          detail: 'Último registro disponible del MVP en Google Play.',
        },
        {
          value: '3',
          label: 'Formatos interactivos',
          detail: 'Visualización 3D · Galería · Video',
        },
        {
          value: '64%',
          label: 'Autonomía de uso',
          detail: 'Logró completar el recorrido sin necesitar asistencia del equipo del periódico.',
        },
        {
          value: '88%',
          label: 'Intención de volver a utilizarla',
          detail:
            'Usuarios que expresaron interés en descubrir nuevos contenidos interactivos en futuras publicaciones.',
        },
      ]}
      seoDescription="Una experiencia mobile-first que transforma publicaciones del periódico Entérese en puntos de acceso a contenido interactivo desde el celular."
      seoTitle={`${project.title} | Andrés Oviedo`}
      titleAccent="fuera de la página impresa"
      titlePrefix="Cuando el contenido continúa"
    />
  );
}
