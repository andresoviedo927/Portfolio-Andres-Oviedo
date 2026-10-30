import { MobileCaseStudySection } from './MobileCaseStudySection';
import tropiStockResults from '../assets/images/tropi-stock-results.webp';
import styles from './TropiStockResultsSection.module.css';

const RESULTS = [
  {
    iconClass: 'fi fi-sr-time-fast',
    value: '−40%',
    label: 'Tiempo de registro',
    description: 'De 50 a 30 segundos por producto registrado.',
  },
  {
    iconClass: 'fi fi-sr-quick-box',
    value: '+67%',
    label: 'Productividad',
    description: 'De 72 a 120 referencias registradas por hora.',
  },
  {
    iconClass: 'fi fi-sr-big-data-analytics',
    value: '−80%',
    label: 'Preparación de reportes',
    description: 'De 25 a 5 minutos de preparación por reporte.',
  },
] as const;

export function TropiStockResultsSection() {
  return (
    <MobileCaseStudySection title="Resultados e impacto">
      <section className={styles.section} aria-labelledby="tropi-stock-results-title">
        <div className={styles.visual}>
          <img
            src={tropiStockResults}
            alt="Empleado de supermercado registrando productos con tecnología de escaneo"
          />
        </div>
        <div className={styles.content}>
          <h2 id="tropi-stock-results-title">
            <span>Resultados</span> e impacto
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            La propuesta UX/UI permitió organizar los recorridos esenciales de inventario y definir
            interfaces adaptadas a las necesidades operativas y administrativas.
          </p>
          <div className={styles.cards}>
            {RESULTS.map((result) => (
              <article className={styles.card} key={result.label}>
                <span className={styles.icon}>
                  <i aria-hidden="true" className={result.iconClass} />
                </span>
                <div>
                  <strong>{result.value}</strong>
                  <h3>{result.label}</h3>
                  <p>{result.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
