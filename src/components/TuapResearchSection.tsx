import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TuapResearchSection.module.css';

const METHODS = [
  {
    title: 'Entender el contexto',
    description:
      'Se analizó cómo tenderos y comercios gestionaban el abastecimiento, identificando la dependencia de vendedores, la recurrencia de compra y la necesidad de mayor autonomía.',
    imageSrc: images.tuapResearchContext,
  },
  {
    title: 'Validar con usuarios',
    description:
      'La documentación pública del proyecto reporta más de 120 grupos focales, utilizados para contrastar la propuesta y comprender mejor las necesidades del canal tradicional.',
    imageSrc: images.tuapResearchValidate,
  },
  {
    title: 'Detectar fricciones',
    description:
      'El análisis de la experiencia evidenció problemas en la generación de pedidos, tiempos de solución y coordinación logística, reforzando la necesidad de autogestión y mayor visibilidad.',
    imageSrc: images.tuapResearchFrictions,
  },
  {
    title: 'Traducir hallazgos en producto',
    description:
      'La información se convirtió en arquitectura, flujos y prototipos diferenciados para Cliente, Vendedor y Administrador, adaptados a Web y App.',
    imageSrc: images.tuapResearchTranslate,
  },
] as const;

export function TuapResearchSection() {
  return (
    <MobileCaseStudySection title="Metodología de UX Research">
      <section className={styles.section} aria-labelledby="tuap-research-title">
        <header className={styles.header}>
          <h2 id="tuap-research-title">
            <span>Metodología</span> de UX Research
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            La investigación combinó conocimiento del usuario, análisis de la operación y validación
            progresiva para convertir un proceso tradicional de abastecimiento en una experiencia
            digital.
          </p>
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
