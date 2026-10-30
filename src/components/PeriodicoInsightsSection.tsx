import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoInsightsSection.module.css';

const INSIGHTS = [
  {
    title: 'Menos aprendizaje, más descubrimiento',
    description:
      'Una tecnología nueva podía generar incertidumbre, especialmente entre lectores menos familiarizados con herramientas digitales. La experiencia debía reducir decisiones y orientar el recorrido hacia una acción simple: abrir, apuntar y descubrir.',
    iconClass: 'fi fi-sr-smartphone-ar',
  },
  {
    title: 'La accesibilidad comenzaba antes de usar la interfaz',
    description:
      'Las capacidades del dispositivo condicionaban quién podía acceder a la experiencia. Esto hacía necesario contemplar la compatibilidad tecnológica como parte del diseño del producto, no únicamente como una restricción técnica.',
    iconClass: 'fi fi-sr-smartphone',
  },
  {
    title: 'La interacción debía aportar un valor adicional claro',
    description:
      'Escanear una publicación solo tenía sentido si el resultado ampliaba realmente el contenido impreso. Por eso se priorizaron formatos capaces de ofrecer una experiencia distinta al papel, como 3D y galerías visuales.',
    iconClass: 'fi fi-ss-rocket-lunch',
  },
] as const;

export function PeriodicoInsightsSection() {
  return (
    <MobileCaseStudySection title="Insights clave de usuarios">
      <section className={styles.section} aria-labelledby="periodico-insights-title">
        <div className={styles.content}>
          <h2 id="periodico-insights-title">
            Insights clave de <span>usuarios</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.list}>
            {INSIGHTS.map((insight) => (
              <article className={styles.item} key={insight.title}>
                <span className={styles.iconBox}>
                  {insight.iconClass === 'fi fi-sr-smartphone-ar' ? (
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="m2 7 10-5 10 5-10 5L2 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 14h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4Z" fill="currentColor" />
                      <path d="M11 19h2" stroke="#fa359b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <i aria-hidden="true" className={insight.iconClass} />
                  )}
                </span>
                <div>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.visual}>
          <img
            src={images.periodicoInsights}
            alt="Dos generaciones compartiendo noticias impresas y digitales"
          />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
