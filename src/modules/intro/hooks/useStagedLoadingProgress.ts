import { useEffect, useRef, useState } from 'react';

const TIMELINE = {
  firstProgressEnd: 1_680,
  firstPauseEnd: 2_400,
  secondProgressEnd: 5_360,
  secondPauseEnd: 6_080,
  totalDuration: 8_000,
} as const;

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

const interpolate = (
  elapsed: number,
  startTime: number,
  endTime: number,
  start: number,
  end: number,
) => {
  const ratio = Math.min(1, Math.max(0, (elapsed - startTime) / (endTime - startTime)));
  return start + (end - start) * easeInOutCubic(ratio);
};

const getProgressAtTime = (elapsed: number) => {
  if (elapsed <= TIMELINE.firstProgressEnd) {
    return interpolate(elapsed, 0, TIMELINE.firstProgressEnd, 0, 27);
  }

  if (elapsed <= TIMELINE.firstPauseEnd) return 27;

  if (elapsed <= TIMELINE.secondProgressEnd) {
    return interpolate(elapsed, TIMELINE.firstPauseEnd, TIMELINE.secondProgressEnd, 27, 89);
  }

  if (elapsed <= TIMELINE.secondPauseEnd) return 89;

  return interpolate(elapsed, TIMELINE.secondPauseEnd, TIMELINE.totalDuration, 89, 100);
};

export const useStagedLoadingProgress = (onComplete: () => void) => {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let animationFrame = 0;
    const startedAt = performance.now();

    const updateProgress = (timestamp: number) => {
      const elapsed = Math.min(timestamp - startedAt, TIMELINE.totalDuration);
      const nextProgress = Math.round(getProgressAtTime(elapsed));

      setProgress((currentProgress) =>
        currentProgress === nextProgress ? currentProgress : nextProgress,
      );

      if (elapsed >= TIMELINE.totalDuration) {
        if (!completedRef.current) {
          completedRef.current = true;
          onCompleteRef.current();
        }
        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return progress;
};
