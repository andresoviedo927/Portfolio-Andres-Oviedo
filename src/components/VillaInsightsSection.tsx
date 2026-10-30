import gardenerImage from '../assets/images/villa-insights-gardener.webp';
import connectIcon from '../assets/icons/villa-insight-connect.svg';
import discoverIcon from '../assets/icons/villa-insight-discover.svg';
import resolveIcon from '../assets/icons/villa-insight-resolve.svg';
import styles from './VillaInsightsSection.module.css';

type InsightIcon = 'discover' | 'resolve' | 'connect';

const INSIGHTS: Array<{
  description: string;
  icon: InsightIcon;
  iconSrc: string;
  persona: string;
  title: string;
}> = [
  {
    title: 'Descubrir',
    description:
      'El visitante no siempre llega sabiendo qué quiere hacer. Necesita una forma sencilla de explorar lugares, actividades y nuevas opciones sin partir de una búsqueda específica.',
    persona: 'El explorador',
    icon: 'discover',
    iconSrc: discoverIcon,
  },
  {
    title: 'Resolver',
    description:
      'Durante el viaje aparecen necesidades inmediatas: encontrar dónde comer, hospedarse, localizar un servicio o saber cómo llegar. La información debe ser clara y accesible en pocos pasos.',
    persona: 'El visitante práctico',
    icon: 'resolve',
    iconSrc: resolveIcon,
  },
  {
    title: 'Conectar',
    description:
      'Conocer un destino va más allá de encontrar información práctica. Las historias, imágenes y experiencias interactivas ayudan a comprender el lugar y crear una relación más cercana con su cultura.',
    persona: 'El viajero experiencial',
    icon: 'connect',
    iconSrc: connectIcon,
  },
];

export function VillaInsightsSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-insights-title">
      <div className={styles.content}>
        <h2 className={styles.title} id="villa-insights-title">
          <span>Insights</span> clave de usuarios
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>
          La investigación documental, el análisis de la información turística y las decisiones
          reflejadas en el producto permitieron sintetizar la experiencia del visitante en tres
          necesidades principales: descubrir nuevas opciones, resolver necesidades prácticas y
          conectar con la historia y cultura del destino. Estas necesidades orientaron la estructura
          de navegación, la organización del contenido y el desarrollo de experiencias interactivas.
        </p>

        <div className={styles.list}>
          {INSIGHTS.map((insight, index) => (
            <article className={styles.item} data-insight={insight.icon} key={insight.title}>
              <span className={styles.iconBox}>
                <img alt="" aria-hidden="true" src={insight.iconSrc} />
              </span>
              <div className={styles.itemCopy}>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
              <span className={`${styles.persona} ${styles[`persona${index + 1}`]}`}>
                {insight.persona}
              </span>
            </article>
          ))}
        </div>
      </div>

      <img
        className={styles.illustration}
        src={gardenerImage}
        alt="Guía de Villa de Leyva con sombrero de paja y pala"
      />
    </section>
  );
}
