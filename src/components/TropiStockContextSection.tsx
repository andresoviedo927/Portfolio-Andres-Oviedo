import { MobileCaseStudySection } from './MobileCaseStudySection';
import tropiStockContext from '../assets/images/tropi-stock-context.webp';
import styles from './TropiStockContextSection.module.css';

const CONTEXT_ITEMS: Array<{
  description: string;
  iconClass: string;
  title: string;
}> = [
  {
    iconClass: 'fi fi-sr-inventory-alt',
    title: 'Operación en campo',
    description: 'Registro de inventarios durante las visitas a los puntos de venta.',
  },
  {
    iconClass: 'fi fi-sr-description-alt',
    title: 'Información del producto',
    description: 'Identificación de referencias, cantidades y condiciones de las existencias.',
  },
  {
    iconClass: 'fi fi-sr-dashboard-monitor',
    title: 'Gestión administrativa',
    description:
      'Necesidad de disponer de información consolidada y consultable para el seguimiento comercial.',
  },
];

export function TropiStockContextSection() {
  return (
    <MobileCaseStudySection title="Contexto del proyecto">
      <section className={styles.section} aria-labelledby="tropi-stock-context-title">
        <div className={styles.visual}>
          <img
            src={tropiStockContext}
            alt="Vendedor y mercaderista revisando el inventario de un supermercado"
          />
        </div>

        <div className={styles.content}>
          <h2 id="tropi-stock-context-title">
            Contexto del <span>proyecto</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            <span className={styles.mobileLead}>El abastecimiento de tiendas de barrio y pequeños comercios dependía tradicionalmente de visitas. </span>
            La toma de inventarios formaba parte del proceso comercial de Tropi y requería la
            participación de vendedores y mercaderistas que visitaban periódicamente los
            establecimientos de sus clientes. La información recopilada debía servir no solo para
            conocer las existencias de productos, sino también para facilitar su seguimiento y
            apoyar la gestión de los equipos comerciales.
          </p>

          <div className={styles.items}>
            {CONTEXT_ITEMS.map((item) => (
              <article className={styles.item} key={item.title}>
                <span className={styles.iconBox} aria-hidden="true">
                  <i className={item.iconClass} />
                </span>
                <div className={styles.itemCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
