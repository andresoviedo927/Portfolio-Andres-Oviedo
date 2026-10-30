import { MobileCaseStudySection } from './MobileCaseStudySection';
import cedhuResultsCouple from '../assets/images/cedhu-results-couple.webp';
import userIcon from '../assets/icons/flaticon-3917711.svg';
import smartphoneIcon from '../assets/icons/villa-context-smartphone.svg';
import signOutIcon from '../assets/icons/flaticon-13088093.svg';
import chartIcon from '../assets/icons/flaticon-7653199.svg';
import styles from './CedhuResultsSection.module.css';

const results = [
  {
    value: '82%',
    title: 'Adopción entre los padres participantes',
    description:
      'La mayoría de los acudientes incorporó la plataforma como uno de sus principales puntos de consulta académica durante el piloto.',
    icon: userIcon,
  },
  {
    value: '+34%',
    title: 'Mejora en facilidad de uso percibida',
    description:
      'La organización por módulos, los estados visuales y los recorridos simplificados facilitaron encontrar y comprender la información académica.',
    icon: smartphoneIcon,
  },
  {
    value: '-41%',
    title: 'Tiempo en consultas frecuentes',
    description:
      'La arquitectura simplificada permitió llegar más rápido desde el inicio hasta la información o acción requerida.',
    icon: signOutIcon,
  },
  {
    value: '89%',
    title: 'Satisfacción con la experiencia',
    description:
      'Los padres valoraron especialmente la posibilidad de consultar diferentes aspectos del proceso académico desde un mismo lugar.',
    icon: chartIcon,
  },
] as const;

export function CedhuResultsSection() {
  return (
    <MobileCaseStudySection title="Resultados e impacto">
      <section className={styles.section} aria-labelledby="cedhu-results-title">
        <div className={styles.visual}>
          <img
            alt="Pareja sonriendo mientras consulta información académica en una tableta"
            src={cedhuResultsCouple}
          />
        </div>

        <div className={styles.content}>
          <h2 id="cedhu-results-title">
            <span>Resultados</span> e impacto
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            Después de un año de piloto con padres y acudientes de 10.º y 11.º, la experiencia
            mostró señales positivas de adopción, facilidad de uso y seguimiento académico.
          </p>

          <div className={styles.cards}>
            {results.map((result) => (
              <article className={styles.card} key={result.value}>
                <div className={styles.iconBox}>
                  <img alt="" aria-hidden="true" src={result.icon} />
                </div>
                <div className={styles.cardContent}>
                  <strong>{result.value}</strong>
                  <h3>{result.title}</h3>
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
