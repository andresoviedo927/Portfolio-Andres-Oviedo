import { TEXTS } from '../../../constants';
import styles from './IntroFlow.module.css';
import { ProgressiveFluxLoader } from './ProgressiveFluxLoader';

interface LoadingScreenProps {
  isExiting: boolean;
  onComplete: () => void;
}

export function LoadingScreen({ isExiting, onComplete }: LoadingScreenProps) {
  return (
    <section
      className={`${styles.screen} ${styles.loadingScreen} ${isExiting ? styles.loadingExit : ''}`}
      id="loading-screen"
      aria-label={TEXTS.loading.label}
      aria-live="polite"
    >
      <ProgressiveFluxLoader
        ariaLabel={TEXTS.loading.label}
        duration={8}
        loop={false}
        onComplete={onComplete}
        phases={TEXTS.loading.phases}
      />
    </section>
  );
}
