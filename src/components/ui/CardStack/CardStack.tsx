import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import styles from './CardStack.module.css';

export interface CardStackItem {
  id: string | number;
}

interface CardStackProps<T extends CardStackItem> {
  items: readonly T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  ariaLabel?: string;
  renderCard: (item: T, state: { active: boolean }) => ReactNode;
}

const wrapIndex = (index: number, length: number) =>
  length > 0 ? ((index % length) + length) % length : 0;

const getSignedOffset = (index: number, active: number, length: number, loop: boolean) => {
  const direct = index - active;
  if (!loop || length <= 1) return direct;
  const wrapped = direct > 0 ? direct - length : direct + length;
  return Math.abs(wrapped) < Math.abs(direct) ? wrapped : direct;
};

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 7,
  cardWidth = 720,
  cardHeight = 360,
  overlap = 0.82,
  spreadDeg = 24,
  perspectivePx = 1200,
  depthPx = 56,
  tiltXDeg = 5,
  activeLiftPx = 16,
  activeScale = 1,
  inactiveScale = 0.94,
  springStiffness = 180,
  springDamping = 26,
  loop = true,
  autoAdvance = false,
  intervalMs = 8000,
  pauseOnHover = true,
  showDots = true,
  ariaLabel = 'Galería de imágenes',
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(() => wrapIndex(initialIndex, items.length));
  const [isHovering, setIsHovering] = useState(false);
  const [stageWidth, setStageWidth] = useState(0);
  const visibleOffset = Math.max(0, Math.floor(maxVisible / 2));
  const stepDegrees = visibleOffset > 0 ? spreadDeg / visibleOffset : 0;
  const horizontalInset = stageWidth <= 768 ? 32 : 128;
  const renderedCardWidth = stageWidth
    ? Math.min(cardWidth, Math.max(0, stageWidth - horizontalInset))
    : cardWidth;
  const cardSpacing = Math.max(24, Math.round(renderedCardWidth * (1 - overlap)));

  const previous = useCallback(() => {
    if (!items.length || (!loop && activeIndex === 0)) return;
    setActiveIndex((current) => wrapIndex(current - 1, items.length));
  }, [activeIndex, items.length, loop]);

  const next = useCallback(() => {
    if (!items.length || (!loop && activeIndex === items.length - 1)) return;
    setActiveIndex((current) => wrapIndex(current + 1, items.length));
  }, [activeIndex, items.length, loop]);

  useEffect(() => {
    setActiveIndex((current) => wrapIndex(current, items.length));
  }, [items.length]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateWidth = () => setStageWidth(stage.getBoundingClientRect().width);
    const resizeObserver = new ResizeObserver(updateWidth);
    updateWidth();
    resizeObserver.observe(stage);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!autoAdvance || reduceMotion || !items.length || (pauseOnHover && isHovering)) return;
    const timer = window.setInterval(next, Math.max(700, intervalMs));
    return () => window.clearInterval(timer);
  }, [autoAdvance, intervalMs, isHovering, items.length, next, pauseOnHover, reduceMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previous();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    }
  };

  if (!items.length) return null;

  return (
    <section
      className={styles.stack}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={stageRef}
        className={styles.stage}
        style={{
          '--card-max-width': `${cardWidth}px`,
          '--card-ratio': `${cardWidth} / ${cardHeight}`,
          perspective: `${perspectivePx}px`,
        } as CSSProperties}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const offset = getSignedOffset(index, activeIndex, items.length, loop);
            const distance = Math.abs(offset);
            if (distance > visibleOffset) return null;

            const isActive = offset === 0;
            const horizontalOffset = offset * cardSpacing;
            const verticalOffset = distance * 8;
            const rotateZ = offset * stepDegrees;
            const translateZ = distance * -depthPx;

            return (
              <motion.div
                className={`${styles.card} ${isActive ? styles.activeCard : styles.inactiveCard}`}
                key={item.id}
                style={{ zIndex: 100 - distance }}
                role="button"
                tabIndex={0}
                aria-label={`Mostrar imagen ${index + 1}`}
                aria-pressed={isActive}
                initial={reduceMotion ? false : { opacity: 0, y: verticalOffset + 24 }}
                animate={{
                  opacity: 1,
                  x: horizontalOffset,
                  y: verticalOffset - (isActive ? activeLiftPx : 0),
                  z: translateZ,
                  rotateX: isActive ? 0 : tiltXDeg,
                  rotateZ,
                  scale: isActive ? activeScale : inactiveScale,
                }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: inactiveScale - 0.04 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: springStiffness, damping: springDamping }
                }
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                onKeyDown={(event) => {
                  if (event.key !== 'Enter' && event.key !== ' ') return;
                  event.preventDefault();
                  event.stopPropagation();
                  setActiveIndex(index);
                }}
                drag={isActive && !reduceMotion ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  const threshold = Math.min(140, renderedCardWidth * 0.2);
                  if (info.offset.x > threshold || info.velocity.x > 650) previous();
                  if (info.offset.x < -threshold || info.velocity.x < -650) next();
                }}
              >
                <div className={styles.cardDepth}>
                  {renderCard(item, { active: isActive })}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {showDots && (
        <div className={styles.dots} aria-label="Seleccionar imagen">
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? styles.activeDot : undefined}
              key={item.id}
              type="button"
              aria-label={`Mostrar imagen ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
