'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonProps = {
  children: ReactNode;
  distance?: number;
};

export function MagneticButton({ children, distance = 0.6 }: MagneticButtonProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    const desktopPointer = window.matchMedia(
      '(min-width: 1025px) and (hover: hover) and (pointer: fine)',
    );
    const resetPosition = () => {
      x.set(0);
      y.set(0);
    };
    resetPosition();
    if (reduceMotion) return;

    const followPointer = (event: PointerEvent) => {
      if (!desktopPointer.matches || event.pointerType !== 'mouse' || !anchorRef.current) {
        resetPosition();
        return;
      }

      const rect = anchorRef.current.getBoundingClientRect();
      const deltaX = event.clientX - (rect.left + rect.width / 2);
      const deltaY = event.clientY - (rect.top + rect.height / 2);
      const radius = Math.max(rect.width, rect.height) / 2 + 48;
      const influence = Math.max(0, 1 - Math.hypot(deltaX, deltaY) / radius);

      x.set(Math.max(-12, Math.min(12, deltaX * distance * influence)));
      y.set(Math.max(-12, Math.min(12, deltaY * distance * influence)));
    };

    window.addEventListener('pointermove', followPointer);
    window.addEventListener('blur', resetPosition);
    document.documentElement.addEventListener('pointerleave', resetPosition);
    desktopPointer.addEventListener('change', resetPosition);
    return () => {
      window.removeEventListener('pointermove', followPointer);
      window.removeEventListener('blur', resetPosition);
      document.documentElement.removeEventListener('pointerleave', resetPosition);
      desktopPointer.removeEventListener('change', resetPosition);
    };
  }, [distance, reduceMotion, x, y]);

  return (
    <div ref={anchorRef} style={{ display: 'flex' }}>
      <motion.div style={{ display: 'flex', x: springX, y: springY }}>{children}</motion.div>
    </div>
  );
}
