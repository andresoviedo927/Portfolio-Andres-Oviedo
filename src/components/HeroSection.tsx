import { images } from '../assets/images';
import { PERSONAL_INFO, TEXTS } from '../constants';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <span className={`${styles.corner} ${styles.topRight}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bottomLeft}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bottomRight}`} aria-hidden="true" />

      <div className={styles.content}>
        <figure className={styles.visual}>
          <img
            alt={TEXTS.hero.bannerAlt}
            className={styles.heroImage}
            draggable="false"
            src={images.heroBanner}
          />
        </figure>

        <div className={styles.copy}>
          <h2 className={styles.name}>{PERSONAL_INFO.name}</h2>
          <h1 className={styles.title}>{TEXTS.hero.title}</h1>
          <div className={styles.roleBlock}>
            <h3 className={styles.role}>
              {TEXTS.hero.rolePrefix} <span>{TEXTS.hero.roleAccent}</span>
            </h3>
            <span className={styles.divider} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
