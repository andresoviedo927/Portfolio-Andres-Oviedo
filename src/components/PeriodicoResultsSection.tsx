import { MobileCaseStudySection } from './MobileCaseStudySection';
import periodicoResults from '../assets/images/periodico-results.webp';
import styles from './PeriodicoResultsSection.module.css';

const results = [
  {
    title: '+500',
    subtitle: 'Descargas en Google Play',
    description: 'El MVP superó las 500 descargas registradas en Android.',
    icon: 'fi fi-sr-user',
    compact: true,
  },
  {
    title: '5 tipos de contenido',
    subtitle: 'Vehículos · apartamentos · locales · eventos · video',
    description: 'Diferentes publicaciones y necesidades comerciales del periódico.',
    icon: 'fi fi-sr-newspaper',
    compact: true,
  },
  {
    title: 'Socializar para adoptar',
    subtitle: 'La experiencia también debía enseñarse.',
    description:
      'El equipo del periódico fue capacitado para explicar a los lectores cómo descargar, instalar y utilizar la aplicación.',
    icon: 'fi fi-sr-meeting',
    compact: false,
  },
  {
    title: 'Interés + aprendizaje',
    subtitle: 'Una idea atractiva que todavía necesitaba contexto.',
    description:
      'Los usuarios mostraron interés por una experiencia percibida como novedosa, pero el escaneo no siempre resultaba intuitivo y la cantidad de contenido disponible todavía era limitada.',
    icon: 'fi fi-sr-lightbulb-on',
    compact: false,
  },
] as const;

export function PeriodicoResultsSection() {
  return (
    <MobileCaseStudySection title="Resultados e impacto">
      <section className={styles.section} aria-labelledby="periodico-results-title">
        <div className={styles.visual}>
          <img
            alt="Dos generaciones compartiendo noticias entre un periódico y un teléfono móvil"
            src={periodicoResults}
          />
        </div>

        <div className={styles.content}>
          <h2 id="periodico-results-title">
            <span>Resultados</span> e impacto
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            Entérese RA llegó a Google Play y comenzó a utilizarse en publicaciones reales del
            periódico. Su implementación permitió comprobar el interés por conectar el papel con
            nuevas experiencias digitales y, al mismo tiempo, entender qué hacía falta para que una
            tecnología nueva pudiera ser adoptada por una audiencia tradicional.
          </p>

          <div className={styles.cards}>
            {results.map((result) => (
              <article
                className={`${styles.card} ${result.compact ? styles.compactCard : ''}`}
                key={result.title}
              >
                <div className={styles.iconBox}>
                  <i aria-hidden="true" className={result.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{result.title}</h3>
                  <strong>{result.subtitle}</strong>
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
