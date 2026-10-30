import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoResearchSection.module.css';

const METHODS = [
  {
    title: 'Medio',
    description:
      'Analizamos las limitaciones del periódico impreso y qué tipos de contenido podían beneficiarse realmente de una extensión digital.',
    imageSrc: images.periodicoResearchMedium,
  },
  {
    title: 'Usuario',
    description:
      'Consideramos los hábitos de una audiencia tradicional, con una presencia importante de lectores mayores y distintos niveles de familiaridad con el uso de smartphones.',
    imageSrc: images.periodicoResearchUser,
  },
  {
    title: 'Tecnología',
    description:
      'Revisamos las capacidades de los dispositivos disponibles en 2017 y las restricciones que podían limitar el acceso a experiencias de realidad aumentada.',
    imageSrc: images.periodicoResearchTechnology,
  },
  {
    title: 'Operación',
    description:
      'Analizamos cómo debía planificarse el contenido digital para acompañar publicaciones con ciclos de producción y circulación rápidos.',
    imageSrc: images.periodicoResearchOperation,
  },
] as const;

export function PeriodicoResearchSection() {
  return (
    <MobileCaseStudySection title="Metodología de UX Research">
      <section className={styles.section} aria-labelledby="periodico-research-title">
        <header className={styles.header}>
          <h2 id="periodico-research-title">
            <span>Metodología</span> de UX Research
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            La exploración inicial se concentró en entender cuatro dimensiones que podían determinar
            la viabilidad de la experiencia.
          </p>
        </header>
        <div className={styles.cards}>
          {METHODS.map((method) => (
            <article className={styles.card} key={method.title}>
              <img aria-hidden="true" alt="" src={method.imageSrc} />
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
