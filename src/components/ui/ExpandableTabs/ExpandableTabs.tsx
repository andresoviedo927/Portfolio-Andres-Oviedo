import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import styles from './ExpandableTabs.module.css';

export interface ExpandableTabItem {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  accessibleName: string;
}

interface ExpandableTabsProps {
  ariaLabel: string;
  items: ExpandableTabItem[];
  directLinksOnMobile?: boolean;
  className?: string;
}

const tabVariants = {
  initial: { gap: 0 },
  animate: (isSelected: boolean) => ({ gap: isSelected ? '0.75rem' : 0 }),
};

const labelVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const tabTransition = {
  type: 'tween' as const,
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function ExpandableTabs({
  ariaLabel,
  items,
  directLinksOnMobile = false,
  className = '',
}: ExpandableTabsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [useDirectLinks, setUseDirectLinks] = useState(
    () => directLinksOnMobile && window.matchMedia('(max-width: 639px)').matches,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const labelIdPrefix = useId();
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : tabTransition;

  useEffect(() => {
    if (!directLinksOnMobile) return undefined;

    const mobileQuery = window.matchMedia('(max-width: 639px)');
    const handleChange = (event: MediaQueryListEvent) => setUseDirectLinks(event.matches);
    mobileQuery.addEventListener('change', handleChange);

    return () => mobileQuery.removeEventListener('change', handleChange);
  }, [directLinksOnMobile]);

  useEffect(() => {
    if (!activeId) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setActiveId(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
    };

    document.addEventListener('pointerdown', handlePointerDown, true);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeId]);

  return (
    <div
      ref={rootRef}
      className={`${styles.tabs} ${className}`.trim()}
      role="toolbar"
      aria-label={ariaLabel}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        const labelId = `${labelIdPrefix}-${item.id}`;

        if (useDirectLinks) {
          return (
            <div key={item.id} className={styles.tab}>
              <motion.a
                aria-label={item.accessibleName}
                className={styles.trigger}
                href={item.href}
                rel={item.external ? 'noopener noreferrer' : undefined}
                target={item.external ? '_blank' : undefined}
              >
                {item.icon}
              </motion.a>
            </div>
          );
        }

        return (
          <motion.div
            animate="animate"
            className={styles.tab}
            custom={isActive}
            data-active={isActive || undefined}
            initial={false}
            key={item.id}
            transition={transition}
            variants={tabVariants}
          >
            <motion.button
              type="button"
              className={styles.trigger}
              aria-expanded={isActive}
              aria-controls={labelId}
              aria-label={`${isActive ? 'Contraer' : 'Expandir'} ${item.accessibleName}`}
              onClick={() => setActiveId((current) => (current === item.id ? null : item.id))}
            >
              {item.icon}
            </motion.button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  id={labelId}
                  className={styles.labelMotion}
                  animate="animate"
                  exit="exit"
                  initial="initial"
                  transition={transition}
                  variants={labelVariants}
                >
                  <a
                    className={styles.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setActiveId(null)}
                  >
                    {item.label}
                  </a>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
