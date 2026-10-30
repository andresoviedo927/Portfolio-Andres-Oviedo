import { MobileCaseStudySection } from './MobileCaseStudySection';
import tropiStockChallengeBanner from '../assets/images/tropi-stock-challenge-banner.webp';
import styles from './TropiStockChallengeSection.module.css';

const FRICTIONS = [
  {
    iconClass: 'fi fi-sr-compliance-document',
    title: 'Complejidad en la captura',
    description:
      'Registrar productos durante una visita comercial exigía una experiencia ágil, con acciones claras y el mínimo de pasos innecesarios.',
  },
  {
    iconClass: 'fi fi-sr-file-circle-info',
    title: 'Información con distintos niveles de detalle',
    description:
      'Un mismo producto podía tener unidades disponibles, averiadas y vencidas, lo que requería organizar sus datos sin fragmentar el registro.',
  },
  {
    iconClass: 'fi fi-sr-attention-detail',
    title: 'Necesidades de consulta diferentes',
    description:
      'Mientras el personal en campo necesitaba registrar información, los administradores requerían visualizarla, filtrarla y consultar sus detalles para el seguimiento comercial.',
  },
] as const;

export function TropiStockChallengeSection() {
  return (
    <MobileCaseStudySection title="Desafío de diseño" splitProblems>
      <section className={styles.section} aria-label="Desafío de diseño y problemas de Tropi Stock">
        <div className={styles.top}>
          <section className={styles.challenge} aria-labelledby="tropi-stock-challenge-title">
            <h2 id="tropi-stock-challenge-title">
              <span>Desafío</span> de diseño
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.challengeCopy}>
              <p>
                El desafío consistía en diseñar una solución que respondiera a dos necesidades
                diferentes, pero conectadas: facilitar el registro de inventarios durante las
                visitas comerciales y permitir que los equipos administrativos consultaran e
                interpretaran esa información.
              </p>
              <p>
                Esto implicaba construir experiencias diferenciadas para móvil y web, equilibrando
                la agilidad de las tareas operativas con la organización, precisión y nivel de
                detalle necesarios para el seguimiento de inventarios.
              </p>
            </div>
          </section>

          <section className={styles.problems} aria-labelledby="tropi-stock-problems-title">
            <h2 id="tropi-stock-problems-title">
              Problemas <span>y fricciones</span>
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.problemList}>
              {FRICTIONS.map((friction) => (
                <article className={styles.problem} key={friction.title}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <i className={friction.iconClass} />
                  </span>
                  <div className={styles.problemCopy}>
                    <h3>{friction.title}</h3>
                    <p>{friction.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.banner}>
          <img
            src={tropiStockChallengeBanner}
            alt="Equipo de campo registrando inventarios en un supermercado"
          />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
