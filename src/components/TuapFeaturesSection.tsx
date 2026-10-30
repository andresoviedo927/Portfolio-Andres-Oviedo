import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TuapFeaturesSection.module.css';

const FEATURES = [
  {
    title: 'Compra asistida',
    description:
      'El Asistente de Compra transforma un catálogo amplio en un recorrido guiado, ayudando a reducir la carga de decisión durante el abastecimiento.',
    imageSrc: images.tuapFeatureCompra,
  },
  {
    title: 'Reabastecimiento recurrente',
    description:
      'Listas de compra y recomendaciones facilitan volver sobre productos habituales sin reconstruir el pedido desde cero.',
    imageSrc: images.tuapFeatureReabastecimiento,
  },
  {
    title: 'Descubrimiento flexible',
    description:
      'Búsqueda, categorías, casas y marcas permiten explorar el portafolio desde diferentes modelos de compra.',
    imageSrc: images.tuapFeatureDescubrimiento,
  },
  {
    title: 'Gestión de punta a punta',
    description:
      'Producto, carrito, pago y pedido mantienen conectadas las principales etapas de la transacción.',
    imageSrc: images.tuapFeatureGestion,
    responsiveImageSrc: images.tuapFeatureVisibilidad,
  },
  {
    title: 'Visibilidad postcompra',
    description:
      'Estados y notificaciones extienden la experiencia después del checkout para mantener al usuario informado sobre su pedido.',
    imageSrc: images.tuapFeatureVisibilidad,
    responsiveImageSrc: images.tuapFeatureHerramientas,
  },
  {
    title: 'Herramientas para la fuerza comercial',
    description:
      'El rol Vendedor incorpora capacidades específicas para gestionar clientes, pedidos y seguimiento de la operación, ampliando TuAp más allá de la experiencia del comprador.',
    imageSrc: images.tuapFeatureHerramientas,
    responsiveImageSrc: images.tuapFeatureGestion,
  },
] as const;

export function TuapFeaturesSection() {
  return (
    <MobileCaseStudySection title="Funcionalidades clave">
      <section className={styles.section} aria-labelledby="tuap-features-title">
        <header className={styles.header}>
          <h2 id="tuap-features-title">
            Funcionalidades <span>clave</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <picture className={styles.picture}>
                {'responsiveImageSrc' in feature && (
                  <source media="(max-width: 1024px)" srcSet={feature.responsiveImageSrc} />
                )}
                <img src={feature.imageSrc} alt="" aria-hidden="true" />
              </picture>
              <div className={styles.copy}>
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
