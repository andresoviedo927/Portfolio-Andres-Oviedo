import contextImage from '../assets/images/villa-context.webp';
import roadmapIcon from '../assets/icons/villa-context-roadmap.svg';
import searchAltIcon from '../assets/icons/villa-context-search-alt.svg';
import smartphoneIcon from '../assets/icons/villa-context-smartphone.svg';
import styles from './VillaContextSection.module.css';

const HIGHLIGHTS: Array<{ description: string; iconSrc: string; title: string }> = [
  {
    title: 'Información dispersa',
    description:
      'Lugares, servicios, hospedajes y eventos estaban distribuidos entre diferentes fuentes.',
    iconSrc: searchAltIcon,
  },
  {
    title: 'Descubrimiento poco integrado',
    description:
      'Encontrar información útil no siempre ayudaba a conocer mejor el destino o descubrir nuevas experiencias.',
    iconSrc: roadmapIcon,
  },
  {
    title: 'Oportunidad de conexión',
    description:
      'Existía espacio para unir orientación, cultura, entretenimiento y comercio local dentro de una misma experiencia.',
    iconSrc: smartphoneIcon,
  },
];

export function VillaContextSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-context-title">
      <div className={styles.visual}>
        <img src={contextImage} alt="Guía ancestral de Villa de Leyva emergiendo de un teléfono" />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title} id="villa-context-title">
          Contexto del <span>proyecto</span>
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.description}>
          <p>
            Planear o recorrer Villa de Leyva implicaba consultar mapas, redes sociales, páginas de
            establecimientos y fuentes institucionales para encontrar información que rara vez
            estaba reunida en un mismo lugar. Esta fragmentación dificultaba orientarse, descubrir
            nuevas opciones y tomar decisiones durante el recorrido.
          </p>
          <p>
            A partir de esta situación surgió la oportunidad de diseñar una experiencia digital
            capaz de centralizar la información turística y, al mismo tiempo, hacer que explorar el
            destino fuera más visual, interactivo y cercano.
          </p>
        </div>

        <div className={styles.highlights}>
          {HIGHLIGHTS.map((highlight) => (
            <article className={styles.highlight} key={highlight.title}>
              <span className={styles.iconBox}>
                <img alt="" aria-hidden="true" src={highlight.iconSrc} />
              </span>
              <div className={styles.highlightCopy}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
