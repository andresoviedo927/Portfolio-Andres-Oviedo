import { useState, type PointerEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import styles from './animated-3d-card.module.css';

interface Animated3DCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// Adapted from Shailendra Kumar's Animated 3D Card on 21st.dev.
export function Animated3DCard({ children, className, id }: Animated3DCardProps) {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 400, damping: 35, mass: 0.8 };
  const rotateX = useSpring(y, spring);
  const rotateY = useSpring(x, spring);
  const reflection = useTransform(x, (value) =>
    `linear-gradient(${value + 135}deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)`,
  );

  const reset = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || reducedMotion) return;
    // Measure the stationary link so rotation never shifts the pointer's origin.
    const bounds = event.currentTarget.parentElement!.getBoundingClientRect();
    x.set(Math.max(-12.5, Math.min(12.5, ((event.clientX - bounds.left) / bounds.width - 0.5) * 25)));
    y.set(Math.max(-12.5, Math.min(12.5, ((event.clientY - bounds.top) / bounds.height - 0.5) * -25)));
  };

  return (
    <motion.div
      id={id}
      className={`${className ?? ''} ${styles.card}`}
      data-3d-hovered={hovered || undefined}
      onPointerEnter={(event) => {
        if (event.pointerType !== 'touch') setHovered(true);
      }}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      animate={{ z: hovered && !reducedMotion ? 30 : 0 }}
      transition={{ type: 'spring', ...spring }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className={styles.reflection}
        style={{ background: reflection }}
        animate={{ opacity: hovered && !reducedMotion ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
