import { ABOUT_RESULTS } from '../constants/aboutResults';
import { Icon } from './ui/Icon';
import styles from './AboutTabletImpact.module.css';

export function AboutTabletImpact() {
  return (
    <div className={styles.tablet}>
      <section className={styles.section} aria-labelledby="tablet-impact-title">
        <div className={styles.content}>
          <h2 id="tablet-impact-title">
            <span>Impacto</span> y resultados
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <p className={styles.intro}>
            A lo largo de mi trayectoria he contribuido a transformar desafíos complejos en
            experiencias digitales más intuitivas, eficientes y centradas en el usuario. Mediante la
            optimización de flujos, la mejora de la usabilidad y la implementación de Design
            Systems, he impulsado soluciones que simplifican las interacciones, fortalecen la
            satisfacción de los usuarios y optimizan los procesos de diseño.
          </p>
          <div className={styles.cards}>
            {ABOUT_RESULTS.map((item) => (
              <article className={styles.card} key={item.title}>
                <span className={styles.icon}>
                  <Icon name={item.icon} />
                </span>
                <div className={styles.copy}>
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
