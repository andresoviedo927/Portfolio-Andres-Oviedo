import { images } from '../../../assets/images';
import { TEXTS } from '../../../constants';
import { BlurText } from './BlurText';
import styles from './IntroFlow.module.css';

interface IntroScreenProps {
  isExiting: boolean;
  onEnter: () => void;
}

export function IntroScreen({ isExiting, onEnter }: IntroScreenProps) {
  return (
    <button
      className={`${styles.screen} ${isExiting ? styles.exiting : ''}`}
      disabled={isExiting}
      id="intro-screen"
      type="button"
      aria-label={TEXTS.intro.enterLabel}
      onClick={onEnter}
    >
      <span className={`${styles.corner} ${styles.topLeft}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.topRight}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bottomLeft}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bottomRight}`} aria-hidden="true" />

      <span className={styles.composition}>
        <span className={styles.name} aria-hidden="true">
          <BlurText className={styles.nameLine} text={TEXTS.intro.firstName} />
          <BlurText
            className={styles.nameLine}
            offsetMs={TEXTS.intro.firstName.length * 70 + 80}
            text={TEXTS.intro.lastName}
          />
        </span>

        <span className={styles.avatarFrame}>
          <img
            className={styles.avatar}
            src={images.avatar}
            alt={TEXTS.intro.avatarAlt}
            draggable="false"
          />
        </span>
      </span>
    </button>
  );
}
