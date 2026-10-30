import villaResultsGuide from '../assets/images/villa-results-guide.webp';
import styles from './VillaResultsSection.module.css';

interface ResultCardProps {
  className: string;
  description: string;
  iconClass: string;
  title: string;
  value: string;
}

function ResultCard({ className, description, iconClass, title, value }: ResultCardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.iconBox}>
        <i aria-hidden="true" className={iconClass} />
      </div>
      <div className={styles.cardContent}>
        <strong className={styles.value}>{value}</strong>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function VillaResultsSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-results-title">
      <div className={styles.visual}>
        <img
          alt="Guía sonriente emergiendo de un teléfono con Villa de Leyva al fondo"
          src={villaResultsGuide}
        />
      </div>

      <div className={styles.content}>
        <h2 id="villa-results-title">
          <span>Resultados</span> e impacto
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>
          El MVP permitió convertir información turística dispersa en una experiencia funcional y
          estructurada. A falta de pruebas formales con usuarios, estos resultados reflejan el
          alcance alcanzado por el producto.
        </p>

        <div className={styles.cards}>
          <ResultCard
            className={styles.cardOne}
            description="32 servicios, 12 hospedajes y 8 eventos reunidos dentro de una misma experiencia."
            iconClass="fi fi-sr-search-alt"
            title="Opciones turísticas centralizadas"
            value="52"
          />
          <ResultCard
            className={styles.cardTwo}
            description="Interactivo, Servicios, Hospedaje y Eventos organizan el contenido desde necesidades fáciles de reconocer."
            iconClass="fi fi-sr-smartphone"
            title="Entradas principales"
            value="4"
          />
          <ResultCard
            className={styles.cardThree}
            description="La Ruta Secreta transforma el recorrido por la Plaza Principal en una experiencia progresiva de cinco etapas, complementada con contenido cultural y multimedia."
            iconClass="fi fi-sr-payment-authentication"
            title="Puntos para convertir la exploración en juego"
            value="5"
          />
          <ResultCard
            className={styles.cardFour}
            description="8 categorías estructuran el directorio de servicios y 3 tipologías organizan las opciones de hospedaje."
            iconClass="fi fi-br-roadmap"
            title="Formas de organizar la oferta"
            value="8+3"
          />
        </div>
      </div>
    </section>
  );
}
