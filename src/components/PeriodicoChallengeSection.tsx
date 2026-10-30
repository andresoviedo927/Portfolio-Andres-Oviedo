import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoChallengeSection.module.css';

const PROBLEMS = [
  {
    title: 'La tecnología no estaba al alcance de todos',
    description:
      'La compatibilidad con realidad aumentada dependía de las capacidades del dispositivo, por lo que una parte de los lectores podía quedar fuera de la experiencia incluso antes de utilizarla.',
    iconClass: 'fi fi-sr-smartphone-ar',
  },
  {
    title: 'Adoptar la experiencia implicaba aprender una nueva interacción',
    description:
      'El público tradicional del periódico incluía una presencia importante de personas mayores y usuarios con menor cercanía a herramientas digitales, haciendo necesario que el recorrido fuera especialmente simple, guiado y fácil de entender.',
    iconClass: 'fi fi-sr-user',
  },
  {
    title: 'El contenido digital debía avanzar al ritmo del periódico',
    description:
      'Cada experiencia debía definirse y producirse antes de la publicación, coordinando anticipadamente qué anuncios o contenidos serían interactivos dentro de un medio con ciclos de circulación rápidos.',
    iconClass: 'fi fi-sr-newspaper',
  },
] as const;

export function PeriodicoChallengeSection() {
  return (
    <MobileCaseStudySection title="Desafío de diseño" splitProblems>
      <section className={styles.section} aria-label="Desafío de diseño y problemas de Entérese RA">
        <header className={styles.header}>
          <h2>
            <span>Desafío</span> de diseño
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            El reto consistía en introducir una nueva capa digital dentro de una experiencia
            tradicional sin alterar la forma natural de consumir el periódico. La interacción debía
            ser rápida, comprensible y permitir que la tecnología funcionara como un puente hacia el
            contenido, no como una barrera.
          </p>
        </header>
        <div className={styles.visual}>
          <img
            src={images.periodicoChallenge}
            alt="Dos lectores compartiendo el periódico en un parque"
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
                  {problem.iconClass === 'fi fi-sr-smartphone-ar' ? (
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="m2 7 10-5 10 5-10 5L2 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 14h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4Z" fill="currentColor" />
                      <path d="M11 19h2" stroke="#fa359b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <i aria-hidden="true" className={problem.iconClass} />
                  )}
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
