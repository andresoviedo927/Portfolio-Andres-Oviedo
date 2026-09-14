import { useCallback, useEffect, useRef, type PointerEvent } from 'react';

type TiltEffect = 'normal' | 'reverse';

const MAX_ROTATION = 9;

const resetTilt = (element: HTMLElement) => {
  element.removeAttribute('data-tilt-active');
  element.style.setProperty('--card-rotate-x', '0');
  element.style.setProperty('--card-rotate-y', '0');
  element.style.setProperty('--card-background-x', '0%');
  element.style.setProperty('--card-background-y', '0%');
};

export const useCardTilt = <
  TiltElement extends HTMLElement = HTMLButtonElement,
  PointerSurface extends HTMLElement = HTMLDivElement,
>(
  tiltEffect: TiltEffect,
) => {
  const cardRef = useRef<TiltElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handlePointerEnter = useCallback((event: PointerEvent<PointerSurface>) => {
    if (
      event.pointerType !== 'touch' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      cardRef.current?.setAttribute('data-tilt-active', 'true');
    }
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent<PointerSurface>) => {
      if (
        event.pointerType === 'touch' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const card = cardRef.current;
      if (!card) return;

      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const horizontalPosition = ((event.clientX - left) / width - 0.5) * 2;
      const verticalPosition = ((event.clientY - top) / height - 0.5) * 2;
      const direction = tiltEffect === 'reverse' ? 1 : -1;
      const rotationY = horizontalPosition * MAX_ROTATION * direction;
      const rotationX = verticalPosition * -MAX_ROTATION * direction;

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        card.style.setProperty('--card-rotate-x', rotationX.toFixed(2));
        card.style.setProperty('--card-rotate-y', rotationY.toFixed(2));
        card.style.setProperty('--card-background-x', `${(-rotationX / 4).toFixed(2)}%`);
        card.style.setProperty('--card-background-y', `${(-rotationY / 4).toFixed(2)}%`);
      });
    },
    [tiltEffect],
  );

  const handlePointerLeave = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (cardRef.current) resetTilt(cardRef.current);
  }, []);

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    },
    [],
  );

  return {
    cardRef,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
  };
};
