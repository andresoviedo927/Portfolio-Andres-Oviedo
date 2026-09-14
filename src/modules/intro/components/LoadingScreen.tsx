import { TEXTS } from '../../../constants';
import { useStagedLoadingProgress } from '../hooks/useStagedLoadingProgress';
import styles from './IntroFlow.module.css';
import { ParticleField } from './ParticleField';

interface LoadingScreenProps {
  isExiting: boolean;
  onComplete: () => void;
}

export function LoadingScreen({ isExiting, onComplete }: LoadingScreenProps) {
  const progress = useStagedLoadingProgress(onComplete);

  return (
    <section
      className={`${styles.screen} ${styles.loadingScreen} ${isExiting ? styles.loadingExit : ''}`}
      id="loading-screen"
      aria-label={TEXTS.loading.label}
    >
      <ParticleField depth="background" />
      <ParticleField depth="foreground" />

      <div
        className={styles.loadingCounter}
        role="progressbar"
        aria-label={TEXTS.loading.label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-valuetext={`${progress}%`}
      >
        <span className={styles.loadingCounterValue} aria-hidden="true">
          {progress}%
        </span>
        <span className={styles.loadingProgressTrack} aria-hidden="true">
          <span className={styles.loadingProgressLine} style={{ width: `${progress}%` }} />
        </span>
      </div>
    </section>
  );
}
