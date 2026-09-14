import { images } from '../../../assets/images';
import { TEXTS } from '../../../constants';
import { usePointerGlow } from '../hooks/usePointerGlow';
import { BlurText } from './BlurText';
import { ParticleField } from './ParticleField';
import styles from './IntroFlow.module.css';

interface IntroScreenProps {
  isExiting: boolean;
  onEnter: () => void;
}

export function IntroScreen({ isExiting, onEnter }: IntroScreenProps) {
  const { elementRef, handlePointerMove, resetGlowPosition } =
    usePointerGlow<HTMLButtonElement>();

  return (
    <button
      ref={elementRef}
      className={`${styles.screen} ${styles.introScreen} ${isExiting ? styles.exiting : ''}`}
      disabled={isExiting}
      id="intro-screen"
      type="button"
      aria-label={TEXTS.intro.enterLabel}
      onClick={onEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetGlowPosition}
    >
      <ParticleField depth="background" />
      <ParticleField depth="foreground" />

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
            src={images.avatarInicio}
            alt={TEXTS.intro.avatarAlt}
            draggable="false"
          />
        </span>
      </span>
    </button>
  );
}
