import { MobileCaseStudySection } from './MobileCaseStudySection';
import coupleImage from '../assets/images/cedhu-insights-couple.webp';
import searchLocationIcon from '../assets/icons/villa-insight-discover.svg';
import megaphoneIcon from '../assets/icons/flaticon-3914501.svg';
import calendarPenIcon from '../assets/icons/flaticon-7602613.svg';
import styles from './CedhuInsightsSection.module.css';

const INSIGHTS = [
  {
    title: 'Entender antes de explorar',
    description:
      'El acudiente necesita reconocer rápidamente qué está pasando antes de entrar al detalle.',
    decision: 'Decisión: priorizar estados, fechas, categorías y resúmenes claros en cada módulo.',
    icon: searchLocationIcon,
  },
  {
    title: 'Ver primero lo que importa',
    description:
      'No todas las novedades tienen el mismo peso. Algunas informan; otras requieren atención.',
    decision:
      'Decisión: destacar contenidos nuevos, pendientes y acciones relevantes mediante jerarquía visual y estados diferenciados.',
    icon: megaphoneIcon,
  },
  {
    title: 'Sentirse familiar en cada módulo',
    description:
      'Calificaciones, agenda, asistencia y observaciones resuelven necesidades distintas, pero no deberían sentirse como productos diferentes.',
    decision:
      'Decisión: mantener patrones de navegación, componentes e interacciones consistentes en toda la experiencia.',
    icon: calendarPenIcon,
  },
] as const;

export function CedhuInsightsSection() {
  return (
    <MobileCaseStudySection title="Insights clave de usuarios">
      <section className={styles.section} aria-labelledby="cedhu-insights-title">
        <div className={styles.content}>
          <h2 id="cedhu-insights-title">
            Insights clave de <span>usuarios</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            A partir del análisis de los principales momentos de consulta y seguimiento académico,
            identificamos tres necesidades que ayudaron a orientar la estructura de la experiencia y
            las decisiones de interfaz.
          </p>
          <div className={styles.list}>
            {INSIGHTS.map((insight) => (
              <article className={styles.item} key={insight.title}>
                <span className={styles.iconBox}>
                  <img alt="" aria-hidden="true" src={insight.icon} />
                </span>
                <div>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <p>{insight.decision}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.visual}>
          <img src={coupleImage} alt="Pareja preocupada revisando documentos académicos" />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
