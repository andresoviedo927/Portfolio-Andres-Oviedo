import { MobileCaseStudySection } from './MobileCaseStudySection';
import familyImage from '../assets/images/cedhu-challenge-family.webp';
import bookIcon from '../assets/icons/flaticon-3914157.svg';
import warningIcon from '../assets/icons/flaticon-10469030.svg';
import homeIcon from '../assets/icons/flaticon-3917032.svg';
import styles from './CedhuChallengeSection.module.css';

const PROBLEMS = [
  {
    title: 'Demasiada información, poco contexto',
    description:
      'El acudiente necesita consultar distintos tipos de información sin perder de vista qué es realmente importante.',
    icon: bookIcon,
  },
  {
    title: 'No todo requiere la misma atención',
    description:
      'Una calificación, una actividad próxima o una ausencia pendiente deben reconocerse y priorizarse de forma diferente.',
    icon: warningIcon,
  },
  {
    title: 'Una experiencia, muchas necesidades',
    description:
      'Cada módulo resuelve una tarea distinta, pero todos debían sentirse parte del mismo sistema.',
    icon: homeIcon,
  },
] as const;

export function CedhuChallengeSection() {
  return (
    <MobileCaseStudySection title="Desafío de diseño" splitProblems>
      <section className={styles.section} aria-label="Desafío de diseño y problemas de CEDHU">
        <div className={styles.header}>
          <h2>
            <span>Desafío</span> de diseño
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            El desafío era hacer que una experiencia con muchas capas de información se sintiera
            simple. El producto debía reunir notas, actividades, horarios, observaciones,
            asistencias y eventos sin obligar al acudiente a entender una estructura compleja. La
            prioridad fue construir una experiencia donde lo importante pudiera reconocerse rápido,
            cada módulo tuviera una lógica clara y las novedades que requieren atención no pasaran
            desapercibidas.
          </p>
        </div>
        <div className={styles.visual}>
          <img
            src={familyImage}
            alt="Familia acompañando a un estudiante mientras hace sus deberes"
          />
        </div>
        <div className={styles.problems}>
          <h2>
            Problemas <span>y fricciones</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.problemList}>
            {PROBLEMS.map((problem) => (
              <article className={styles.problem} key={problem.title}>
                <span className={styles.iconBox}>
                  <img alt="" aria-hidden="true" src={problem.icon} />
                </span>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
