import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
  type MotionValue,
} from 'motion/react';
import type { ReactElement } from 'react';
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import styles from './SpringElement.module.css';

interface SpringPathConfig {
  coilCount?: number;
  amplitudeMin?: number;
  amplitudeMax?: number;
  curveRatioMin?: number;
  curveRatioMax?: number;
  bezierOffset?: number;
}

interface SpringPhysicsConfig {
  stiffness?: number;
  damping?: number;
}

type SpringElementProps = {
  children: ReactElement;
  className?: string;
  springClassName?: string;
  dragElastic?: number;
  springConfig?: SpringPhysicsConfig;
  springPathConfig?: SpringPathConfig;
} & Omit<HTMLMotionProps<'div'>, 'children' | 'drag' | 'dragElastic'>;

const generateSpringPath = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  springConfig: SpringPathConfig = {},
) => {
  const {
    coilCount = 8,
    amplitudeMin = 8,
    amplitudeMax = 20,
    curveRatioMin = 0.5,
    curveRatioMax = 1,
    bezierOffset = 8,
  } = springConfig;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < 2) return `M${x1},${y1}`;

  const coilLength = dist / coilCount;
  const heightRatio = Math.max(0.8, 1 - (dist - 40) / 200);
  const amplitude = Math.max(
    amplitudeMin,
    Math.min(amplitudeMax, amplitudeMax * heightRatio),
  );
  const curveRatio =
    dist <= 40
      ? curveRatioMax
      : dist <= 120
        ? curveRatioMax - ((dist - 40) / 80) * (curveRatioMax - curveRatioMin)
        : curveRatioMin;
  const unitX = dx / dist;
  const unitY = dy / dist;
  const perpendicularX = -unitY;
  const perpendicularY = unitX;
  const path: string[] = [];

  for (let index = 0; index < coilCount; index += 1) {
    const startX = x1 + unitX * (index * coilLength);
    const startY = y1 + unitY * (index * coilLength);
    const endX = x1 + unitX * ((index + 1) * coilLength);
    const endY = y1 + unitY * ((index + 1) * coilLength);
    const middleX =
      x1 + unitX * ((index + 0.5) * coilLength) + perpendicularX * amplitude;
    const middleY =
      y1 + unitY * ((index + 0.5) * coilLength) + perpendicularY * amplitude;
    const control1X = startX + coilLength * curveRatio * unitX;
    const control1Y = startY + coilLength * curveRatio * unitY;
    const control2X = middleX + unitX * bezierOffset;
    const control2Y = middleY + unitY * bezierOffset;
    const control3X = middleX - unitX * bezierOffset;
    const control3Y = middleY - unitY * bezierOffset;
    const control4X = endX - coilLength * curveRatio * unitX;
    const control4Y = endY - coilLength * curveRatio * unitY;

    path.push(index === 0 ? `M${startX},${startY}` : `L${startX},${startY}`);
    path.push(
      `C${control1X},${control1Y} ${control2X},${control2Y} ${middleX},${middleY}`,
    );
    path.push(`C${control3X},${control3Y} ${control4X},${control4Y} ${endX},${endY}`);
  }

  return path.join(' ');
};

function useMotionValueValue(motionValue: MotionValue<number>) {
  return useSyncExternalStore(
    (callback) => motionValue.on('change', callback),
    () => motionValue.get(),
    () => motionValue.get(),
  );
}

export function SpringElement({
  children,
  className = '',
  springClassName = '',
  dragElastic = 0.2,
  springConfig = { stiffness: 200, damping: 16 },
  springPathConfig = {},
  ...props
}: SpringElementProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
  });
  const springY = useSpring(y, {
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
  });
  const springXValue = useMotionValueValue(springX);
  const springYValue = useMotionValueValue(springY);
  const draggableRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [hasPrecisePointer, setHasPrecisePointer] = useState(false);

  useEffect(() => {
    const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updatePointerCapability = () => setHasPrecisePointer(precisePointer.matches);

    updatePointerCapability();
    precisePointer.addEventListener('change', updatePointerCapability);

    return () => precisePointer.removeEventListener('change', updatePointerCapability);
  }, []);

  useLayoutEffect(() => {
    const updateCenter = () => {
      if (!draggableRef.current) return;

      const rect = draggableRef.current.getBoundingClientRect();
      setCenter({
        x: rect.left + rect.width / 2 - springX.get(),
        y: rect.top + rect.height / 2 - springY.get(),
      });
    };

    updateCenter();
    window.addEventListener('resize', updateCenter);
    window.addEventListener('scroll', updateCenter, true);

    return () => {
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter, true);
    };
  }, [springX, springY]);

  const dragEnabled = hasPrecisePointer && !shouldReduceMotion;
  const path = generateSpringPath(
    center.x,
    center.y,
    center.x + springXValue,
    center.y + springYValue,
    springPathConfig,
  );

  return (
    <div className={`${styles.root} ${className}`.trim()}>
      <svg
        aria-hidden="true"
        className={styles.springCanvas}
        width="100vw"
        height="100vh"
        focusable="false"
      >
        <path
          className={`${styles.springPath} ${springClassName}`.trim()}
          d={path}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <motion.div
        ref={draggableRef}
        className={styles.draggable}
        style={{ x: springX, y: springY }}
        drag={dragEnabled}
        dragElastic={dragElastic}
        dragMomentum={false}
        onDrag={(_, info) => {
          x.set(info.offset.x);
          y.set(info.offset.y);
        }}
        onDragEnd={() => {
          x.set(0);
          y.set(0);
        }}
        whileHover={dragEnabled ? { scale: 1.03 } : undefined}
        whileDrag={dragEnabled ? { scale: 1.05 } : undefined}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 200, damping: 16 }
        }
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
