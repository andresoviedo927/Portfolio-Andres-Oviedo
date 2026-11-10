import businessAnimation from '../assets/images/troop-research-analysis.gif';
import needsAnimation from '../assets/images/troop-research-needs.gif';
import journeysAnimation from '../assets/images/troop-research-journeys.gif';
import ideaIcon from '../assets/images/troop-research-idea.svg';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './TroopAnimatedCards.module.css';

const methods = [
  {
    title: 'Comprensión del negocio',
    description:
      'Análisis del modelo de participación inmobiliaria y sus principales variables financieras para identificar qué información necesita comprender una persona antes de evaluar una oportunidad.',
    image: businessAnimation,
  },
  {
    title: 'Identificación de necesidades',
    description:
      'Reconocimiento de necesidades funcionales asociadas a la exploración de activos, la interpretación de indicadores financieros y la simulación de posibles escenarios de participación.',
    image: needsAnimation,
  },
  {
    title: 'Definición de recorridos',
    description:
      'Análisis de los flujos de usuario y su arquitectura para conectar las etapas de descubrimiento, evaluación y participación mediante una navegación coherente.',
    image: journeysAnimation,
  },
  {
    title: 'Análisis de la solución',
    description:
      'Revisión de las interfaces y componentes del producto para examinar cómo se presenta la información, se organizan las acciones y se mantiene la continuidad de la experiencia.',
    image: journeysAnimation,
    smallScreenImage: ideaIcon,
  },
];

export function TroopResearchSection() {
  return (
    <MobileCaseStudySection title="Metodología de UX Research">
      <section className={`${styles.section} ${styles.research}`} aria-labelledby="troop-research-title">
        <header className={styles.header}>
          <h2 id="troop-research-title">
            <span>Metodología</span> de UX Research
          </h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>
        <div className={styles.cards}>
          {methods.map(({ title, description, image, smallScreenImage }) => (
            <article className={styles.card} key={title}>
              <picture>
                {smallScreenImage && (
                  <source media="(max-width: 1024px)" srcSet={smallScreenImage} />
                )}
                <img src={image} alt="" width={64} height={64} loading="lazy" />
              </picture>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
