import troopChallenge from '../assets/images/troop-challenge.webp';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './TroopChallengeSection.module.css';

const problems = [
  {
    icon: 'fi-sr-file-chart-line',
    title: 'Sobrecarga de información financiera',
    description:
      'La cantidad de variables asociadas a cada activo puede dificultar la identificación de los datos más relevantes para comprender una oportunidad de participación.',
  },
  {
    icon: 'fi-sr-chart-line-up-down',
    title: 'Falta de claridad para proyectar escenarios',
    description:
      'Sin una representación comprensible de montos, rentabilidad esperada y posibles ingresos, resulta más difícil evaluar alternativas según las posibilidades del usuario.',
  },
  {
    icon: 'fi-sr-workflow',
    title: 'Complejidad para avanzar entre procesos',
    description:
      'Pasar de descubrir un inmueble a consultar sus condiciones, simular una participación y continuar hacia una acción requiere recorridos conectados, claros y predecibles.',
  },
];

export function TroopChallengeSection() {
  return (
    <div className={styles.section}>
      <div className={styles.columns}>
        <MobileCaseStudySection title="Desafío de diseño">
          <section className={styles.column} aria-labelledby="troop-challenge-title">
            <h2 id="troop-challenge-title">
              <span>Desafío</span> de diseño
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.description}>
              <p>
                El desafío era diseñar una experiencia que permitiera a los usuarios pasar de explorar
                oportunidades inmobiliarias a comprender y evaluar posibles participaciones, sin
                sentirse abrumados por la información financiera.
              </p>
              <p>
                Esto requería estructurar los contenidos, priorizar los indicadores relevantes y
                conectar las funcionalidades en recorridos coherentes, logrando que cada interacción
                aportara claridad y facilitara la toma de decisiones.
              </p>
            </div>
          </section>
        </MobileCaseStudySection>

        <MobileCaseStudySection title="Problemas y fricciones">
          <section className={`${styles.column} ${styles.problems}`} aria-labelledby="troop-problems-title">
            <h2 id="troop-problems-title">
              Problemas <span>y fricciones</span>
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <ul className={styles.problemList}>
              {problems.map(({ icon, title, description }) => (
                <li className={styles.problem} key={title}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <i className={`fi ${icon}`} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </MobileCaseStudySection>
      </div>
      <img
        className={styles.visual}
        src={troopChallenge}
        alt="Tres personas revisan una tablet junto a una maqueta arquitectónica"
        width={2172}
        height={724}
        loading="lazy"
      />
    </div>
  );
}
