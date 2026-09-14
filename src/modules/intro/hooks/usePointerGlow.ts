import { useRef, type PointerEvent as ReactPointerEvent } from 'react';

export function usePointerGlow<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  const handlePointerMove = (event: ReactPointerEvent<T>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const element = elementRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    element.style.setProperty('--intro-glow-x', `${event.clientX - bounds.left}px`);
    element.style.setProperty('--intro-glow-y', `${event.clientY - bounds.top}px`);
  };

  const resetGlowPosition = () => {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty('--intro-glow-x', '50%');
    element.style.setProperty('--intro-glow-y', '50%');
  };

  return { elementRef, handlePointerMove, resetGlowPosition };
}
