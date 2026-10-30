import { MobileCaseStudySection } from './MobileCaseStudySection';
import tuapContext from '../assets/images/tuap-context.webp';
import styles from './TuapContextSection.module.css';

const features = [
  {
    icon: 'fi fi-sr-home',
    text: 'Digitalización de un modelo tradicional de venta tienda a tienda.',
  },
  {
    icon: 'fi fi-sr-shopping-cart-add',
    text: 'Mayor autonomía para realizar compras y gestionar el abastecimiento.',
  },
  {
    icon: 'fi fi-brands-app-store-ios',
    text: 'Acceso a productos y servicios desde diferentes canales digitales.',
  },
] as const;

export function TuapContextSection() {
  return (
    <MobileCaseStudySection title="Contexto del proyecto">
      <section className={styles.section} aria-labelledby="tuap-context-title">
        <header className={styles.header}>
          <h2 id="tuap-context-title">
            Contexto del <span>proyecto</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            El abastecimiento de tiendas de barrio y pequeños comercios dependía tradicionalmente de
            visitas comerciales, llamadas y procesos coordinados de forma manual. TuAp surgió como
            una iniciativa para llevar parte de esa operación a canales digitales, permitiendo que
            tenderos, minimercados y supermercados independientes gestionaran sus compras con mayor
            autonomía. La plataforma buscaba reunir catálogo, compra y servicios relacionados con el
            negocio dentro de una experiencia disponible desde Web y App.
          </p>
        </header>

        <div className={styles.features}>
          {features.map((feature) => (
            <article className={styles.feature} key={feature.text}>
              <span className={styles.iconBox} aria-hidden="true">
                <i className={feature.icon} />
              </span>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.visual}>
          <img
            alt="Comerciante gestionando pedidos digitales mientras se prepara una entrega"
            src={tuapContext}
          />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
