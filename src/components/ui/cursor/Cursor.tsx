import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type SpringOptions,
  type Transition,
  type Variant,
} from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

interface CursorProps {
  children: ReactNode;
  className?: string;
  hotspot?: {
    x: number;
    y: number;
  };
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
}

const DEFAULT_VARIANTS = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.3, opacity: 0 },
};

export function Cursor({
  children,
  className = '',
  hotspot = { x: 0, y: 0 },
  springConfig,
  attachToParent = false,
  variants = DEFAULT_VARIANTS,
  transition = { ease: 'easeInOut', duration: 0.15 },
  onPositionChange,
}: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, springConfig ?? { duration: 0 });
  const cursorYSpring = useSpring(cursorY, springConfig ?? { duration: 0 });
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const parent = attachToParent ? cursorRef.current?.parentElement : document.body;
    if (!parent) return;

    const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!precisePointer.matches) return;

    const updatePosition = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      onPositionChange?.(event.clientX, event.clientY);
    };

    const handleMouseEnter = (event: MouseEvent) => {
      updatePosition(event);
      parent.style.cursor = 'none';
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      parent.style.cursor = '';
      setIsVisible(false);
    };

    if (attachToParent) {
      parent.addEventListener('mouseenter', handleMouseEnter);
      parent.addEventListener('mouseleave', handleMouseLeave);
      parent.addEventListener('mousemove', updatePosition);
    } else {
      parent.style.cursor = 'none';
      setIsVisible(true);
      document.addEventListener('mousemove', updatePosition);
    }

    return () => {
      parent.style.cursor = '';
      setIsVisible(false);
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      parent.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [attachToParent, cursorX, cursorY, onPositionChange]);

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: -hotspot.x,
        translateY: -hotspot.y,
        pointerEvents: 'none',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={prefersReducedMotion ? { duration: 0.001 } : transition}
            style={{ transformOrigin: `${hotspot.x}px ${hotspot.y}px` }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
