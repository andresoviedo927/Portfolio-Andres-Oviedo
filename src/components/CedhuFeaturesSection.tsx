import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './CedhuFeaturesSection.module.css';

const FEATURES = [
  {
    title: 'Seguir',
    description: 'Calificaciones y desempeño académico organizados por periodos y asignaturas.',
    image: images.cedhuFeatureFollow,
  },
  {
    title: 'Anticipar',
    description:
      'Agenda y calendario para visualizar actividades, evaluaciones y eventos próximos.',
    image: images.cedhuFeatureAnticipate,
  },
  {
    title: 'Ubicarse',
    description: 'Horario diario con clases, franjas y profesores disponibles de forma rápida.',
    image: images.cedhuFeatureLocate,
  },
  {
    title: 'Entender',
    description:
      'Observaciones y asistencias con estados claros para reconocer qué ocurrió y cuándo.',
    image: images.cedhuFeatureUnderstand,
  },
  {
    title: 'Actuar',
    description:
      'Justificación de ausencias con motivo, descripción y soporte desde un mismo flujo.',
    image: images.cedhuFeatureAct,
  },
  {
    title: 'Estar al día',
    description: 'Notificaciones que conectan cada novedad con el contenido académico relacionado.',
    image: images.cedhuFeatureUpdate,
  },
] as const;

export function CedhuFeaturesSection() {
  return (
    <MobileCaseStudySection title="Funcionalidades clave">
      <section className={styles.section} aria-labelledby="cedhu-features-title">
        <div className={styles.header}>
          <h2 id="cedhu-features-title">
            Funcionalidades <span>clave</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            Las funcionalidades se diseñaron para que padres y acudientes puedan seguir, anticipar y
            actuar sobre la vida académica desde un mismo lugar.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <img aria-hidden="true" src={feature.image} alt="" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
