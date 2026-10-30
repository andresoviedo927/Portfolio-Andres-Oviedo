import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TropiStockResearchSection.module.css';

const METHODS = [
  {
    title: 'Entendimiento del contexto',
    description:
      'Análisis de los requerimientos comerciales y del proceso de toma de inventarios para identificar los objetivos de la operación, los actores involucrados y la información que debía gestionarse.',
    imageSrc: images.tropiStockResearchContext,
  },
  {
    title: 'Identificación de necesidades',
    description:
      'Organización de las tareas y necesidades funcionales de dos perfiles principales: personal comercial encargado del registro en campo y administradores responsables de consultar la información.',
    imageSrc: images.tropiStockResearchNeeds,
  },
  {
    title: 'Análisis de referentes y patrones',
    description:
      'Revisión de una aplicación de referencia para explorar patrones de identificación de productos, captura de cantidades y navegación en procesos de inventario.',
    imageSrc: images.tropiStockResearchAnalysis,
  },
  {
    title: 'Definición de la experiencia',
    description:
      'Traducción de los requerimientos en flujos de usuario y prototipos para móvil y web, priorizando la claridad de las tareas, la estructura de los datos y la continuidad entre ambas experiencias.',
    imageSrc: images.tropiStockResearchDefinition,
  },
] as const;

export function TropiStockResearchSection() {
  return (
    <MobileCaseStudySection title="Metodología de UX Research">
      <section className={styles.section} aria-labelledby="tropi-stock-research-title">
        <header className={styles.header}>
          <h2 id="tropi-stock-research-title">
            <span>Metodología</span> de UX Research
          </h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        <div className={styles.cards}>
          {METHODS.map((method) => (
            <article className={styles.card} key={method.title}>
              <img src={method.imageSrc} alt="" aria-hidden="true" />
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
