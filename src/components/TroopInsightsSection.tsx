import troopInsights from '../assets/images/troop-insights.webp';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './TroopNarrativeSection.module.css';

const insights = [
  {
    icon: 'fi-sr-shield-check',
    title: 'La claridad construye confianza',
    description:
      'En una experiencia de inversión, comprender las características del activo, sus condiciones y los indicadores financieros es fundamental para evaluar una oportunidad.',
    decision:
      'Priorizar la información relevante dentro de las fichas inmobiliarias, facilitando una lectura estructurada de cada activo.',
  },
  {
    icon: 'fi-sr-chart-histogram',
    title: 'La simulación facilita la evaluación',
    description:
      'Los montos de participación y las proyecciones de rentabilidad pueden resultar abstractos cuando se presentan únicamente como cifras estáticas.',
    decision:
      'Integrar herramientas de simulación que permitan explorar diferentes montos y visualizar su relación con posibles resultados financieros.',
  },
  {
    icon: 'fi-sr-bullseye-arrow',
    title: 'Cada interacción debe acercar a una decisión',
    description:
      'La exploración de oportunidades adquiere mayor valor cuando el usuario puede avanzar progresivamente desde el descubrimiento hasta una acción concreta.',
    decision:
      'Estructurar recorridos que conecten el catálogo, la evaluación financiera y las opciones de participación, manteniendo el contexto durante la navegación.',
  },
];

export function TroopInsightsSection() {
  return (
    <MobileCaseStudySection title="Insights clave de usuarios">
      <section className={`${styles.section} ${styles.insights}`} aria-labelledby="troop-insights-title">
        <div className={styles.content}>
          <h2 id="troop-insights-title">
            Insights clave de <span>usuarios</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <ul className={styles.items}>
            {insights.map(({ icon, title, description, decision }) => (
              <li className={styles.item} key={title}>
                <span className={styles.iconBox} aria-hidden="true">
                  <i className={`fi ${icon}`} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className={styles.detailList}>
                    <li>Decisión de producto: {decision}</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          className={styles.visual}
          src={troopInsights}
          alt="Una persona observa la entrada de un local comercial con indicadores de una ruta digital"
          width={1536}
          height={1024}
          loading="lazy"
        />
      </section>
    </MobileCaseStudySection>
  );
}
