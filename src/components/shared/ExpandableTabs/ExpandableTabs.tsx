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
}

const labelTransition = {
  type: 'tween' as const,
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
};

const labelExitTransition = {
  type: 'tween' as const,
  duration: 0.22,
  ease: [0.4, 0, 0.2, 1] as const,
};

export function ExpandableTabs({ ariaLabel, items }: ExpandableTabsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelIdPrefix = useId();
  const shouldReduceMotion = useReducedMotion();
  const openTransition = shouldReduceMotion ? { duration: 0 } : labelTransition;
  const closeTransition = shouldReduceMotion ? { duration: 0 } : labelExitTransition;

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
    <div ref={rootRef} className={styles.tabs} role="toolbar" aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = activeId === item.id;
        const labelId = `${labelIdPrefix}-${item.id}`;

        return (
          <div key={item.id} className={styles.tab} data-active={isActive || undefined}>
            <motion.button
              type="button"
              className={styles.trigger}
              aria-expanded={isActive}
              aria-controls={labelId}
              aria-label={`${isActive ? 'Contraer' : 'Expandir'} ${item.accessibleName}`}
              onClick={() => setActiveId((current) => (current === item.id ? null : item.id))}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.17 }}
            >
              {item.icon}
            </motion.button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  id={labelId}
                  className={styles.labelMotion}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto', transition: openTransition }}
                  exit={{ opacity: 0, width: 0, transition: closeTransition }}
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
          </div>
        );
      })}
    </div>
  );
}
