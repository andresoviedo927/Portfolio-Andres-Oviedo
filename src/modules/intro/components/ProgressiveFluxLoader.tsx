import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Transition } from 'motion/react';
import styles from './IntroFlow.module.css';

export interface ProgressiveFluxPhase {
  at: number;
  label: string;
}

interface ProgressiveFluxLoaderProps {
  ariaLabel: string;
  duration: number;
  loop: boolean;
  onComplete: () => void;
  phases: readonly ProgressiveFluxPhase[];
}

const LABEL_TRANSITION: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

const LETTER_TRANSITION: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

function pickLabel(value: number, phases: ProgressiveFluxPhase[]) {
  let activeLabel = phases[0]?.label ?? '';

  for (const phase of phases) {
    if (value >= phase.at) activeLabel = phase.label;
  }

  return activeLabel;
}

interface FluxLabelProps {
  label: string;
  reducedMotion: boolean;
}

function FluxLabel({ label, reducedMotion }: FluxLabelProps) {
  if (reducedMotion) {
    return (
      <div className={styles.fluxLabel} aria-hidden="true">
        {label}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          filter: ['blur(14px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'],
          opacity: [0, 1, 1, 1],
          scale: [0.65, 1.08, 0.985, 1],
          z: [-380, 60, -8, 0],
        }}
        aria-hidden="true"
        className={styles.fluxLabel}
        exit={{
          filter: 'blur(10px)',
          opacity: 0,
          scale: 1.35,
          transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] },
          z: 220,
        }}
        initial={{ filter: 'blur(14px)', opacity: 0, scale: 0.65, z: -380 }}
        key={label}
        transition={LABEL_TRANSITION}
      >
        <span className={styles.fluxLabelLetters}>
          {Array.from(label).map((character, index) => (
            <motion.span
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              className={styles.fluxLabelLetter}
              initial={{ filter: 'blur(8px)', opacity: 0, y: 12 }}
              key={`${label}-${index}`}
              transition={{ ...LETTER_TRANSITION, delay: 0.18 + index * 0.035 }}
            >
              {character === ' ' ? '\u00a0' : character}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProgressiveFluxLoader({
  ariaLabel,
  duration,
  loop,
  onComplete,
  phases,
}: ProgressiveFluxLoaderProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let animationFrame = 0;
    let restartTimer = 0;
    let startedAt: number | null = null;
    const totalMilliseconds = duration * 1000;

    const updateProgress = (timestamp: number) => {
      if (startedAt === null) startedAt = timestamp;

      const nextProgress = Math.min(100, ((timestamp - startedAt) / totalMilliseconds) * 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        if (!completedRef.current) {
          completedRef.current = true;
          onCompleteRef.current();
        }

        if (loop) {
          restartTimer = window.setTimeout(() => {
            startedAt = null;
            completedRef.current = false;
            setProgress(0);
            animationFrame = window.requestAnimationFrame(updateProgress);
          }, 700);
        }

        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(restartTimer);
    };
  }, [duration, loop]);

  const sortedPhases = useMemo(() => [...phases].sort((a, b) => a.at - b.at), [phases]);
  const activeLabel = useMemo(() => pickLabel(progress, sortedPhases), [progress, sortedPhases]);
  const roundedProgress = Math.round(progress);

  return (
    <div className={styles.fluxLoader}>
      <div className={styles.fluxLabelStage}>
        <FluxLabel label={activeLabel} reducedMotion={reducedMotion} />
      </div>

      <div
        aria-label={ariaLabel}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={roundedProgress}
        aria-valuetext={`${roundedProgress}% – ${activeLabel}`}
        className={styles.fluxTrack}
        role="progressbar"
      >
        <motion.div
          animate={{ width: `${progress}%` }}
          className={styles.fluxFill}
          initial={false}
          transition={
            reducedMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {!reducedMotion && <span aria-hidden="true" className={styles.fluxSheen} />}
        </motion.div>
      </div>
    </div>
  );
}
