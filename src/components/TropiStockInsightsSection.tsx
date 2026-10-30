import { MobileCaseStudySection } from './MobileCaseStudySection';
import tropiStockInsights from '../assets/images/tropi-stock-insights.webp';
import styles from './TropiStockInsightsSection.module.css';

const INSIGHTS = [
  {
    title: 'Identificar productos sin complicar el recorrido',
    description:
      'La toma de inventarios requiere identificar múltiples referencias durante una misma visita. Esto plantea la necesidad de agilizar la búsqueda y reducir las acciones necesarias para registrar cada producto.',
    decision:
      'Decisión de diseño: incorporar escaneo de códigos de barras y búsqueda manual como métodos complementarios de identificación.',
    iconClass: 'fi fi-sr-barcode-read',
  },
  {
    title: 'Registrar cantidades con claridad',
    description:
      'Un mismo producto puede presentar unidades en diferentes condiciones. La experiencia debe permitir registrar estos valores por separado sin perder la información total del inventario.',
    decision:
      'Decisión de diseño: organizar las cantidades en tres estados; buen estado, averiadas y vencidas; dentro de un único registro de producto.',
    iconClass: 'fi fi-sr-ballot-check',
  },
  {
    title: 'Consultar información con suficiente contexto',
    description:
      'Para revisar un inventario no basta con conocer la cantidad registrada. También es necesario identificar el establecimiento, la fecha y el responsable del registro.',
    decision:
      'Decisión de diseño: estructurar una tabla administrativa con información resumida y una vista de detalle para profundizar en cada registro.',
    iconClass: 'fi fi-sr-dashboard-monitor',
  },
] as const;

export function TropiStockInsightsSection() {
  return (
    <MobileCaseStudySection title="Insights clave de usuarios">
      <section className={styles.section} aria-labelledby="tropi-stock-insights-title">
        <div className={styles.content}>
          <h2 id="tropi-stock-insights-title">
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
            src={tropiStockInsights}
            alt="Colaboración durante la revisión de productos en una tienda"
          />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
