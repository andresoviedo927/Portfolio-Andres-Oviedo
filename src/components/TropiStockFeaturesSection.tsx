import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TropiStockFeaturesSection.module.css';

const FEATURES = [
  {
    title: 'Ubicar',
    description:
      'Cada inventario comienza con la selección del punto de venta, estableciendo el contexto del establecimiento donde se registrarán los productos.',
    imageSrc: images.tropiStockFeatureLocate,
  },
  {
    title: 'Identificar',
    description:
      'Escanear o ingresar un código permite acceder a la información del producto y continuar con el registro de sus existencias.',
    imageSrc: images.tropiStockResearchNeeds,
  },
  {
    title: 'Registrar',
    description:
      'Una experiencia enfocada en contabilizar unidades en buen estado, averiadas y vencidas, manteniendo una visión organizada de las cantidades y el precio de venta.',
    imageSrc: images.tropiStockFeatureRegister,
  },
  {
    title: 'Actualizar',
    description:
      'Los productos registrados pueden consultarse y editarse para corregir cantidades o precios, sin necesidad de repetir todo el proceso de identificación.',
    imageSrc: images.tropiStockFeatureUpdate,
  },
  {
    title: 'Consultar y analizar',
    description:
      'La plataforma web reúne herramientas para explorar registros, aplicar filtros y consultar detalles, mientras que los reportes permiten obtener información estructurada para el seguimiento comercial.',
    imageSrc: images.tropiStockFeatureAnalyze,
  },
] as const;

export function TropiStockFeaturesSection() {
  return (
    <MobileCaseStudySection title="Funcionalidades clave">
      <section className={styles.section} aria-labelledby="tropi-stock-features-title">
        <header className={styles.header}>
          <h2 id="tropi-stock-features-title">
            Funcionalidades <span>clave</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        <div className={styles.cards}>
          {FEATURES.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <img src={feature.imageSrc} alt="" aria-hidden="true" />
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
