import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TuapInsightsSection.module.css';

const INSIGHTS = [
  {
    title: 'Autonomía no significa ausencia de acompañamiento',
    description:
      'El comerciante necesitaba reducir su dependencia de procesos asistidos, pero seguir contando con orientación para completar acciones importantes.',
    decision:
      'Diseño: combinar autogestión con onboarding, asistencia de compra y puntos claros de soporte.',
    iconClass: 'fi fi-sr-customer-care',
  },
  {
    title: 'El abastecimiento es recurrente, no una compra aislada',
    description:
      'Los comerciantes vuelven continuamente sobre categorías y productos similares para mantener surtido su negocio.',
    decision:
      'Diseño: priorizar listas, recomendaciones y mecanismos que reduzcan decisiones repetitivas.',
    iconClass: 'fi fi-sr-ballot-check',
  },
  {
    title: 'Comprar es solo una parte de la experiencia',
    description:
      'La confianza también depende de poder resolver inconvenientes y conocer qué sucede con el pedido después de generarlo.',
    decision: 'Diseño: extender el recorrido hacia seguimiento, estados y notificaciones.',
    iconClass: 'fi fi-sr-boxes',
  },
] as const;

export function TuapInsightsSection() {
  return (
    <MobileCaseStudySection title="Insights clave de usuarios">
      <section className={styles.section} aria-labelledby="tuap-insights-title">
        <div className={styles.content}>
          <h2 id="tuap-insights-title">
            Insights clave de <span>usuarios</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.list}>
            {INSIGHTS.map((insight) => (
              <article className={styles.item} key={insight.title}>
                <span className={styles.iconBox}>
                  <i aria-hidden="true" className={insight.iconClass} />
                </span>
                <div className={styles.itemCopy}>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <p>{insight.decision}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src={images.tuapInsights}
            alt="Comerciantes reunidos para revisar la operación de un supermercado"
          />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
