import troopContext from '../assets/images/troop-context.webp';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './TroopNarrativeSection.module.css';

const contextItems = [
  {
    icon: 'fi-sr-brain-circuit',
    title: 'Comprensión',
    description:
      'Transformar información inmobiliaria y financiera en contenidos claros, estructurados y fáciles de consultar.',
  },
  {
    icon: 'fi-sr-clipboard-check',
    title: 'Evaluación',
    description:
      'Facilitar la comparación de oportunidades y la estimación de posibles retornos antes de participar.',
  },
  {
    icon: 'fi-sr-refresh',
    title: 'Continuidad',
    description:
      'Conectar el descubrimiento de activos con los procesos de participación y gestión dentro de una misma experiencia.',
  },
];

export function TroopContextSection() {
  return (
    <MobileCaseStudySection title="Contexto del proyecto">
      <section className={`${styles.section} ${styles.context}`} aria-labelledby="troop-context-title">
        <img
          className={styles.visual}
          src={troopContext}
          alt="Pareja que revisa planos y renders de un proyecto inmobiliario en una tablet"
          loading="lazy"
        />
        <div className={styles.content}>
          <h2 id="troop-context-title">
            Contexto del <span>proyecto</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            Explorar oportunidades de inversión inmobiliaria implica comprender las características
            de cada activo, consultar información financiera y estimar posibles retornos. Troop
            reúne estos elementos en una experiencia web que permite comparar oportunidades y
            simular escenarios antes de decidir si participar.
          </p>
          <ul className={styles.items}>
            {contextItems.map(({ icon, title, description }) => (
              <li className={styles.item} key={title}>
                <span className={styles.iconBox} aria-hidden="true">
                  <i className={`fi ${icon}`} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
