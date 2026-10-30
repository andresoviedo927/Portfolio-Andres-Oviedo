import { MobileCaseStudySection } from './MobileCaseStudySection';
import tuapChallenge from '../assets/images/tuap-challenge.webp';
import styles from './TuapChallengeSection.module.css';

const problems = [
  {
    title: 'Baja autonomía en el abastecimiento',
    description:
      'La compra dependía en gran medida de la interacción con vendedores y otros canales asistidos.',
    icon: 'fi fi-sr-hand-holding-box',
  },
  {
    title: 'Reabastecimiento repetitivo',
    description:
      'El comerciante necesitaba volver constantemente sobre productos, categorías y listas para mantener disponible el surtido.',
    icon: 'fi fi-br-refresh',
  },
  {
    title: 'Desconexión entre compra y operación',
    description:
      'Completar el pedido no resolvía toda la experiencia: soporte, coordinación y entrega seguían siendo puntos críticos.',
    icon: 'fi fi-br-wifi-slash',
  },
] as const;

export function TuapChallengeSection() {
  return (
    <MobileCaseStudySection title="Desafío de diseño" splitProblems>
      <section className={styles.section} aria-label="Desafío de diseño y problemas de TuAp">
        <div className={styles.visual}>
          <img
            alt="Dos comerciantes revisando cuentas y existencias en una tienda"
            src={tuapChallenge}
          />
        </div>

        <div className={styles.content}>
          <section className={styles.challenge} aria-labelledby="tuap-challenge-title">
            <h2 id="tuap-challenge-title">
              <span>Desafío</span> de diseño
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <p>
              Convertir una operación tradicionalmente asistida en una experiencia digital
              autogestionada, capaz de adaptarse a distintos roles sin fragmentar el producto. La
              solución debía equilibrar simplicidad para el comerciante con la profundidad necesaria
              para gestionar catálogo, compras, pedidos, negocio y herramientas específicas para la
              fuerza comercial.
            </p>
          </section>

          <section className={styles.problems} aria-labelledby="tuap-problems-title">
            <h2 id="tuap-problems-title">
              Problemas <span>y fricciones</span>
            </h2>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.problemList}>
              {problems.map((problem) => (
                <article className={styles.problem} key={problem.title}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <i className={problem.icon} />
                  </span>
                  <div>
                    <h3>{problem.title}</h3>
                    <p>{problem.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
