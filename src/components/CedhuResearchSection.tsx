import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './CedhuResearchSection.module.css';

const METHODS = [
  {
    title: 'Identificar necesidades',
    description:
      'Se analizaron los principales escenarios del acudiente: seguir el rendimiento, anticipar actividades, revisar novedades y atender situaciones que requieren acción.',
    image: images.cedhuResearchIdentify,
  },
  {
    title: 'Priorizar la información',
    description:
      'Cada necesidad se transformó en una categoría de contenido y se definió qué información debía aparecer primero, qué podía profundizarse y qué requería un estado o acción específica.',
    image: images.cedhuResearchPrioritize,
  },
  {
    title: 'Construir recorridos',
    description:
      'Se diseñaron flujos independientes para cada necesidad manteniendo patrones comunes de navegación, interacción y feedback.',
    image: images.cedhuResearchJourneys,
  },
  {
    title: 'Iterar sobre la experiencia',
    description:
      'El prototipo permitió revisar la coherencia entre módulos, ajustar estados y consolidar componentes reutilizables antes de una futura validación con usuarios reales.',
    image: images.cedhuResearchIterate,
  },
] as const;

export function CedhuResearchSection() {
  return (
    <MobileCaseStudySection title="Metodología de UX Research">
      <section className={styles.section} aria-labelledby="cedhu-research-title">
        <div className={styles.header}>
          <h2 id="cedhu-research-title">
            <span>Metodología</span> de UX Research
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            Más que diseñar pantallas aisladas, el proceso buscó entender qué necesita saber,
            encontrar o resolver un acudiente en cada momento del seguimiento académico. Ante la
            ausencia de research directo documentado con usuarios, el trabajo se estructuró
            alrededor de necesidades inferidas del contexto, análisis de contenido y prototipado
            funcional.
          </p>
        </div>
        <div className={styles.cards}>
          {METHODS.map((method) => (
            <article className={styles.card} key={method.title}>
              <img aria-hidden="true" src={method.image} alt="" />
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
