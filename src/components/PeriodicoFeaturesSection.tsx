import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoFeaturesSection.module.css';

const FEATURES = [
  {
    title: 'Apuntar',
    description: 'Utilizar la cámara como acceso directo al contenido.',
    imageSrc: images.periodicoFeatureApuntar,
  },
  {
    title: 'Descubrir',
    description: 'Activar experiencias asociadas a una publicación impresa.',
    imageSrc: images.periodicoFeatureDescubrir,
  },
  {
    title: 'Explorar',
    description: 'Interactuar con modelos 3D, galerías y formatos multimedia.',
    imageSrc: images.periodicoFeatureExplorar,
  },
  {
    title: 'Continuar',
    description: 'Acceder al sitio web o contactar directamente con el periódico.',
    imageSrc: images.periodicoFeatureContinuar,
  },
] as const;

export function PeriodicoFeaturesSection() {
  return (
    <MobileCaseStudySection title="Funcionalidades clave">
      <section className={styles.section} aria-labelledby="periodico-features-title">
        <header className={styles.header}>
          <h2 id="periodico-features-title">
            Funcionalidades <span>clave</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            La experiencia convierte el paso del papel al contenido digital en cuatro acciones
            simples, claras y fáciles de reconocer.
          </p>
        </header>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <img aria-hidden="true" alt="" src={feature.imageSrc} />
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
