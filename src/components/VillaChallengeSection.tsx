import panoramaImage from '../assets/images/villa-challenge-panorama.webp';
import styles from './VillaChallengeSection.module.css';

const PROBLEMS: Array<{ description: string; iconClass: string; title: string }> = [
  {
    title: 'Demasiados puntos de consulta',
    description:
      'El visitante debía cambiar entre mapas, redes sociales, páginas de establecimientos y otras fuentes según la necesidad que quisiera resolver.',
    iconClass: 'fi fi-sr-clip-file',
  },
  {
    title: 'Falta de jerarquía',
    description:
      'La cantidad de lugares y opciones disponibles podía dificultar la exploración cuando no existía una estructura clara para organizar y priorizar la información.',
    iconClass: 'fi fi-sr-window-alt',
  },
  {
    title: 'Experiencia poco integrada',
    description:
      'Orientación, información práctica y contenido cultural aparecían separados, reduciendo la posibilidad de vivir el destino como una experiencia continua.',
    iconClass: 'fi fi-sr-payment-authentication',
  },
];

export function VillaChallengeSection() {
  return (
    <section className={styles.section} aria-label="Desafío de diseño y problemas">
      <div className={styles.columns}>
        <article className={styles.challenge}>
          <h2 className={styles.title}>
            <span>Desafío</span> de diseño
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.challengeCopy}>
            <p>
              El reto no era únicamente reunir información turística, sino definir cómo organizarla
              y priorizarla para que el visitante pudiera encontrar lo que necesitaba sin sentirse
              abrumado por la cantidad de opciones disponibles.
            </p>
            <p>
              La solución debía conectar necesidades muy distintas; descubrir lugares, buscar
              servicios, encontrar hospedaje o consultar eventos, todo dentro de una misma
              arquitectura, manteniendo recorridos simples y predecibles. A esto se sumaba el
              desafío de incorporar experiencias interactivas y contenido cultural sin romper la
              claridad de la navegación ni convertir el producto en una suma de funcionalidades
              aisladas.
            </p>
          </div>
        </article>

        <article className={styles.problems}>
          <h2 className={styles.title}>
            Problemas <span>y fricciones</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.problemList}>
            {PROBLEMS.map((problem) => (
              <div className={styles.problem} key={problem.title}>
                <span className={styles.iconBox}>
                  <i aria-hidden="true" className={problem.iconClass} />
                </span>
                <div className={styles.problemCopy}>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <img
        className={styles.panorama}
        src={panoramaImage}
        alt="Paisaje con lago, montañas y arquitectura colonial"
      />
    </section>
  );
}
