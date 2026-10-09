import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from './ThumbnailMockupGallery.module.css';

export interface ThumbnailMockupItem {
  alt?: string;
  src: string;
  thumb?: string;
}

interface ThumbnailMockupGalleryProps {
  ariaLabel?: string;
  className?: string;
  defaultIndex?: number;
  items: readonly ThumbnailMockupItem[];
  orientation?: 'landscape' | 'portrait';
  variant?: 'default' | 'periodico' | 'tuap-web' | 'tuap-app';
}

const AUTOPLAY_INTERVAL = 8000;

const normalizeIndex = (index: number, length: number) =>
  length > 0 ? ((index % length) + length) % length : 0;

export function ThumbnailMockupGallery({
  ariaLabel = 'Galería de mockups',
  className = '',
  defaultIndex = 0,
  items,
  orientation = 'landscape',
  variant = 'default',
}: ThumbnailMockupGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(() => normalizeIndex(defaultIndex, items.length));
  const [interactionSequence, setInteractionSequence] = useState(0);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({ moved: false, pointerId: -1, scrollLeft: 0, startX: 0 });
  const suppressClickRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const currentIndex = normalizeIndex(activeIndex, items.length);

  useEffect(() => {
    items.forEach((item) => {
      const image = new Image();
      image.src = item.src;
    });
  }, [items]);

  useEffect(() => {
    if (items.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => normalizeIndex(current + 1, items.length));
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [interactionSequence, items.length]);

  useEffect(() => {
    const strip = thumbnailStripRef.current;
    if (!strip || !window.matchMedia('(max-width: 767px)').matches) return;

    const activeThumbnail = strip.querySelector<HTMLElement>(`[data-index="${currentIndex}"]`);
    if (!activeThumbnail) return;

    const centeredPosition =
      activeThumbnail.offsetLeft - (strip.clientWidth - activeThumbnail.offsetWidth) / 2;
    strip.scrollTo({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: centeredPosition,
    });
  }, [currentIndex, prefersReducedMotion]);

  if (items.length === 0) return null;

  const activeItem = items[currentIndex];

  const selectIndex = (index: number) => {
    setActiveIndex(normalizeIndex(index, items.length));
    setInteractionSequence((current) => current + 1);
  };

  const selectRelative = (offset: number) => selectIndex(currentIndex + offset);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;

    const strip = event.currentTarget;
    dragStateRef.current = {
      moved: false,
      pointerId: event.pointerId,
      scrollLeft: strip.scrollLeft,
      startX: event.clientX,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragStateRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = 'true';
    }
    if (!drag.moved) return;

    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
  };

  const finishPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragStateRef.current;
    if (drag.pointerId !== event.pointerId) return;

    suppressClickRef.current = drag.moved;
    if (drag.moved) {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delete event.currentTarget.dataset.dragging;
    dragStateRef.current.pointerId = -1;
    if (drag.moved) setInteractionSequence((current) => current + 1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectRelative(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectRelative(1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectIndex(items.length - 1);
    }
  };

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className={`${styles.gallery} ${className}`.trim()}
      data-orientation={orientation}
      data-variant={variant}
      onKeyDown={handleKeyDown}
      role="region"
      tabIndex={0}
    >
      <div className={styles.preview}>
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            alt={activeItem.alt ?? ''}
            animate={{ opacity: 1 }}
            className={styles.previewImage}
            decoding="async"
            draggable={false}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key={activeItem.src}
            src={activeItem.src}
            transition={{
              duration: prefersReducedMotion ? 0 : 2.56,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </AnimatePresence>
      </div>

      <div
        ref={thumbnailStripRef}
        aria-label="Seleccionar mockup"
        className={styles.thumbnails}
        onPointerCancel={finishPointerDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerDrag}
        role="tablist"
      >
        {items.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              aria-label={`Mostrar ${item.alt ?? `mockup ${index + 1}`}`}
              aria-selected={isActive}
              className={styles.thumbnail}
              data-active={isActive || undefined}
              data-index={index}
              key={item.src}
              onClick={() => {
                if (suppressClickRef.current) {
                  suppressClickRef.current = false;
                  return;
                }
                selectIndex(index);
              }}
              role="tab"
              type="button"
            >
              <img
                alt=""
                decoding="async"
                draggable={false}
                loading="lazy"
                src={item.thumb ?? item.src}
              />
            </button>
          );
        })}
      </div>

      <span aria-live="polite" className="sr-only">
        {activeItem.alt ?? `Mockup ${currentIndex + 1}`} — {currentIndex + 1} de {items.length}
      </span>
    </section>
  );
}
