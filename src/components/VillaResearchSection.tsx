import complexityIcon from '../assets/images/villa-research-complexity.gif';
import discoveryIcon from '../assets/images/villa-research-discovery.gif';
import ecosystemIcon from '../assets/images/villa-research-ecosystem.gif';
import inconsistenciesIcon from '../assets/images/villa-research-inconsistencies.gif';
import testingIcon from '../assets/images/villa-research-testing.gif';
import styles from './VillaResearchSection.module.css';

const METHODS = [
  {
    title: 'Entender el ecosistema',
    description:
      'Se analizaron 32 servicios, 12 hospedajes, 8 eventos y distintos puntos turísticos para identificar necesidades y tipos de contenido.',
    iconSrc: ecosystemIcon,
  },
  {
    title: 'Detectar inconsistencias',
    description:
      'Los registros presentaban diferentes niveles de información y calidad de datos, por lo que fue necesario diseñar fichas flexibles.',
    iconSrc: inconsistenciesIcon,
  },
  {
    title: 'Reducir complejidad',
    description:
      'La información se organizó en 4 entradas principales y categorías específicas para evitar listados extensos y difíciles de recorrer.',
    iconSrc: complexityIcon,
  },
  {
    title: 'Diseñar el descubrimiento',
    description:
      'Se incorporaron mapas, narraciones, contenido multimedia y gamificación para complementar la búsqueda tradicional.',
    iconSrc: discoveryIcon,
  },
  {
    title: 'Probar la solución',
    description:
      'El prototipo funcional permitió validar la viabilidad de los flujos, interacciones y principales estados de la experiencia.',
    iconSrc: testingIcon,
  },
] as const;

export function VillaResearchSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-research-title">
      <div className={styles.header}>
        <h2 className={styles.title} id="villa-research-title">
          <span>Metodología</span> de UX Research
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>
          La evidencia disponible del proyecto corresponde principalmente a investigación
          documental, análisis de contenido turístico y estructuración de información. A partir de
          este proceso, se revisó la oferta turística de Villa de Leyva y se identificaron patrones
          en la forma en que estaban organizados los servicios, hospedajes, eventos y puntos de
          interés. Esta investigación permitió transformar información dispersa en una estructura de
          producto más simple, clara y fácil de explorar.
        </p>
      </div>

      <div className={styles.cards}>
        {METHODS.map((method) => (
          <article className={styles.card} key={method.title}>
            <img aria-hidden="true" className={styles.icon} src={method.iconSrc} alt="" />
            <h3>{method.title}</h3>
            <p>{method.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
