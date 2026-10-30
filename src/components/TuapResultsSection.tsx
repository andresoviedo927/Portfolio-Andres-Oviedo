import { MobileCaseStudySection } from './MobileCaseStudySection';
import tuapResults from '../assets/images/tuap-results.webp';
import styles from './TuapResultsSection.module.css';

const results = [
  {
    value: '+12.000',
    description: 'referencias disponibles dentro del ecosistema de abastecimiento.',
    icon: 'fi fi-sr-box-alt',
  },
  {
    value: '5.951',
    description: 'descargas históricas registradas de la app Android.',
    icon: 'fi fi-brands-app-store-ios',
  },
  {
    value: '289',
    description:
      'clientes compradores reportados durante 2022 en la implementación de TuAp Supermercados.',
    icon: 'fi fi-sr-users-alt',
  },
  {
    value: '+120',
    description:
      'La propuesta fue contrastada con usuarios durante su evolución antes de continuar escalando la experiencia.',
    icon: 'fi fi-sr-feedback-hand',
  },
  {
    value: '>95 %',
    description:
      'de entregas a tiempo reportadas posteriormente en la operación logística integrada con Drivin.',
    icon: 'fi fi-sr-shipping-fast',
  },
  {
    value: '6h → 1h',
    description:
      'reducción reportada en el tiempo de planificación de rutas tras la incorporación del sistema logístico.',
    icon: 'fi fi-sr-clock',
  },
] as const;

export function TuapResultsSection() {
  return (
    <MobileCaseStudySection title="Resultados e impacto">
      <section className={styles.section} aria-labelledby="tuap-results-title">
        <div className={styles.visual}>
          <img
            alt="Comerciantes revisando entregas y pedidos digitales desde una tableta"
            src={tuapResults}
          />
        </div>

        <div className={styles.content}>
          <h2 id="tuap-results-title">
            <span>Resultados</span> e impacto
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            TuAp formó parte de una operación que conectaba la experiencia digital con
            almacenamiento, picking, packing, planificación y entrega.
          </p>

          <div className={styles.cards}>
            {results.map((result) => (
              <article className={styles.card} key={result.value}>
                <div className={styles.iconBox}>
                  <i aria-hidden="true" className={result.icon} />
                </div>
                <div className={styles.cardContent}>
                  <strong>{result.value}</strong>
                  <p>{result.description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.notice}>
            <i aria-hidden="true" className="fi-sr-exclamation" />
            <div>
              <strong>Importante</strong>
              <p>
                Las métricas de entregas y planificación corresponden al caso de operación con
                Drivin y no representan resultados atribuibles directamente al diseño UX. El dato de
                descargas corresponde a un registro histórico de terceros de Google Play.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
