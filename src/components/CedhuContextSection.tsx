import { MobileCaseStudySection } from './MobileCaseStudySection';
import contextImage from '../assets/images/cedhu-context.webp';
import userCheckIcon from '../assets/icons/flaticon-11271937.svg';
import calendarPenIcon from '../assets/icons/flaticon-7602613.svg';
import bellIcon from '../assets/icons/flaticon-3914279.svg';
import styles from './CedhuContextSection.module.css';

const ITEMS = [
  {
    title: 'Seguir el progreso',
    description: 'Entender cómo avanza el estudiante durante el año escolar.',
    icon: userCheckIcon,
  },
  {
    title: 'Anticiparse',
    description: 'Conocer actividades, horarios y eventos antes de que ocurran.',
    icon: calendarPenIcon,
  },
  {
    title: 'Estar informado',
    description: 'Acceder a novedades académicas relevantes desde un mismo lugar.',
    icon: bellIcon,
  },
] as const;

export function CedhuContextSection() {
  return (
    <MobileCaseStudySection title="Contexto del proyecto">
      <section className={styles.section} aria-labelledby="cedhu-context-title">
        <div className={styles.visual}>
          <img src={contextImage} alt="Padre e hijo revisando juntos el proceso académico" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title} id="cedhu-context-title">
            Contexto del <span>proyecto</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            Acompañar el proceso académico significa estar atento a muchas cosas al mismo tiempo:
            cómo avanzan las notas, qué actividades vienen, si existe una nueva observación o si una
            ausencia necesita atención. CEDHU Padres parte de esa realidad para transformar
            diferentes momentos de seguimiento en una experiencia más simple y cercana para las
            familias.
          </p>
          <div className={styles.list}>
            {ITEMS.map((item) => (
              <article className={styles.item} key={item.title}>
                <span className={styles.iconBox}>
                  <img alt="" aria-hidden="true" src={item.icon} />
                </span>
                <div>
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
