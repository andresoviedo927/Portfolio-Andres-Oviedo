import { cedhuThumbnailMockups, images } from '../assets/images';
import { ProjectDetailPage } from './ProjectDetailPage';

interface CedhuProjectPageProps {
  onNavigate: (path: string) => void;
}

export function CedhuProjectPage({ onNavigate }: CedhuProjectPageProps) {
  return (
    <ProjectDetailPage
      accent="#fd3504"
      architecture={[
        {
          title: 'Consultar rendimiento',
          description: 'Inicio → Calificaciones → Periodo → Materia → Detalle',
          icon: 'homeSolid',
        },
        {
          title: 'Revisar una actividad',
          description: 'Inicio → Agenda → Evento → Actividad → Detalle',
          icon: 'bookSolid',
        },
        {
          title: 'Atender una ausencia',
          description: 'Inicio → Asistencia → Registro → Justificar → Enviar',
          icon: 'calendarXmarkSolid',
        },
        {
          title: 'Resolver una novedad',
          description: 'Notificación → Contenido relacionado → Detalle / Acción',
          icon: 'socialMediaNotification',
        },
      ]}
      blocks={[
        {
          title: 'Contexto del proyecto',
          body: 'Acompañar el proceso escolar implica consultar distintos tipos de información y responder a novedades con diferentes niveles de urgencia. El proyecto buscó convertir esas necesidades dispersas en una experiencia única, clara y fácil de recorrer.',
        },
        {
          title: 'Desafío de diseño',
          body: 'El reto consistió en transformar contenidos con diferentes niveles de detalle y urgencia en una experiencia coherente, donde el acudiente pudiera identificar qué consultar, qué entender y qué requería una acción.',
          tone: 'accent',
        },
        {
          title: 'Problemas y fricciones detectados',
          body: 'El seguimiento académico reúne información con distintos niveles de detalle, prioridad y urgencia. El reto era organizarla sin aumentar la carga de navegación ni dificultar la identificación de lo realmente importante.',
          items: [
            'Notas, actividades, asistencias y observaciones necesitan convivir dentro de una misma experiencia sin saturar al usuario.',
            'El acudiente debe distinguir rápidamente entre información de consulta, novedades y situaciones que requieren una acción.',
            'La variedad de módulos exige patrones consistentes para mantener una navegación familiar y reducir el esfuerzo de uso.',
          ],
          tone: 'warning',
        },
      ]}
      caseStudyLayout="cedhu"
      description="Una experiencia diseñada para que padres y acudientes puedan entender qué está pasando en el proceso académico de sus estudiantes de forma simple, rápida y centralizada."
      featuredAlt="Familia consultando el proceso académico en CEDHU"
      featuredImage={images.cedhuCard}
      featuredVisualPlacement="beforeFooter"
      features={[
        {
          title: 'Entender el progreso',
          description:
            'Calificaciones organizadas por periodos y materias para facilitar la lectura del rendimiento académico.',
          imageSrc: images.cedhuFeatureProgress,
        },
        {
          title: 'Anticipar lo que viene',
          description:
            'Agenda, horario y calendario concentran actividades, clases y eventos próximos.',
          imageSrc: images.cedhuFeatureUpcoming,
        },
        {
          title: 'Identificar qué requiere atención',
          description:
            'Observaciones y asistencia utilizan estados claros para diferenciar novedades, registros y pendientes.',
          imageSrc: images.cedhuFeatureAttention,
        },
        {
          title: 'Pasar de información a acción',
          description:
            'Notificaciones y justificación de ausencias permiten llegar directamente al contenido relevante y resolver situaciones desde la misma experiencia.',
          imageSrc: images.cedhuFeatureAction,
        },
      ]}
      heroAlt="Mockups de CEDHU Control Académico"
      heroImage={images.cedhuMockup}
      heroImageScale={1.16}
      invitation="¿Te gustaría aplicar algo así en tu producto?"
      logoAlt="Logo de CEDHU"
      logoImage={images.cedhuLogo}
      metadata={[
        { kind: 'year', label: 'Año', value: '2017 · Enero' },
        { kind: 'role', label: 'Rol', value: 'Diseñador de interfaz de usuario web' },
        { kind: 'platform', label: 'Plataforma', value: 'Mobile first' },
        {
          kind: 'projectType',
          label: 'Tipo de proyecto',
          value: 'Producto digital de seguimiento académico',
        },
      ]}
      thumbnailGalleryItems={cedhuThumbnailMockups}
      thumbnailGalleryOrientation="portrait"
      onNavigate={onNavigate}
      researchInsights={[
        {
          title: '',
          description:
            'El usuario necesita comprender rápidamente qué ocurrió antes de decidir si necesita profundizar en el detalle.',
        },
        {
          title: '',
          description:
            'No todas las novedades tienen el mismo peso; algunas solo informan mientras otras requieren seguimiento o una acción.',
        },
        {
          title: '',
          description:
            'Mantener estructuras, filtros y componentes consistentes entre módulos reduce el esfuerzo necesario para aprender a utilizar la experiencia.',
        },
      ]}
      insightsDescription="El análisis permitió identificar patrones y necesidades que orientaron la arquitectura, la jerarquía de información y los comportamientos principales de la interfaz."
      insightsTitle="Insights clave de usuarios"
      researchPoints={[
        'Identificamos las principales consultas y acciones que un acudiente necesita resolver durante el seguimiento académico.',
        'Priorizamos qué información debía aparecer primero y qué contenidos requerían mayor visibilidad.',
        'Transformamos esas necesidades en módulos, recorridos y niveles de información claramente diferenciados.',
        'Iteramos sobre jerarquías, estados, navegación e interacciones a medida que el producto tomaba forma.',
      ]}
      researchDescription="Sin research directo documentado con usuarios, el proceso se apoyó en el análisis de escenarios de uso, necesidades del acudiente, contenido académico y prototipado funcional para definir y refinar la experiencia."
      researchTitle="Metodología de UX Research"
      results={[
        {
          value: '82%',
          label: 'Adopción',
          detail:
            'La plataforma se incorporó al seguimiento académico de las familias participantes.',
        },
        {
          value: '+34%',
          label: 'Facilidad de uso',
          detail: 'Mejora percibida al consultar y comprender la información.',
        },
        {
          value: '-41%',
          label: 'Tiempo de consulta',
          detail: 'Menos tiempo para completar acciones frecuentes.',
        },
        {
          value: '89%',
          label: 'Satisfacción',
          detail: 'Valoración positiva de la experiencia general.',
        },
      ]}
      seoDescription="Una experiencia diseñada para que padres y acudientes puedan entender qué está pasando en el proceso académico de sus estudiantes de forma simple, rápida y centralizada."
      seoTitle="CEDHU Control Académico | Andrés Oviedo"
      titleAccent="vida académica"
      titlePrefix="Más cerca de su"
    />
  );
}
