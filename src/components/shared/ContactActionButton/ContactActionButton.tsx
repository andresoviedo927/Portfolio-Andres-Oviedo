import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '../../ui/Icon';
import styles from './ContactActionButton.module.css';

const CONTACT_ACTIONS = [
  {
    label: 'andresoviedo927@outlook.com',
    href: 'mailto:andresoviedo927@outlook.com',
    icon: 'email' as const,
    kind: 'email' as const,
  },
  {
    label: '+57 320 736 8686',
    href: 'https://wa.me/573207368686',
    icon: 'whatsapp' as const,
    kind: 'whatsapp' as const,
    external: true,
  },
];

const buttonTransition = {
  type: 'spring' as const,
  stiffness: 360,
  damping: 28,
  mass: 0.82,
};

const buttonCloseTransition = {
  type: 'tween' as const,
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
};

const itemTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 22,
  mass: 0.72,
};

const iconTransition = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 26,
  mass: 0.65,
};

const labelTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

const STAGGER_INTERVAL = 0.07;

interface ContactActionButtonProps {
  disabled?: boolean;
  label: string;
}

export function ContactActionButton({ disabled = false, label }: ContactActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const actionsId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (disabled) setIsOpen(false);
  }, [disabled]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setIsOpen(false);
    };
    const handleOutsidePointer = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape, true);
    document.addEventListener('pointerdown', handleOutsidePointer, true);
    return () => {
      window.removeEventListener('keydown', handleEscape, true);
      document.removeEventListener('pointerdown', handleOutsidePointer, true);
    };
  }, [isOpen]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : isOpen
      ? buttonTransition
      : buttonCloseTransition;
  const actionListVariants = {
    hidden: {
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: STAGGER_INTERVAL, staggerDirection: -1 },
    },
    visible: {
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: STAGGER_INTERVAL },
    },
  };
  const actionVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.86,
      y: shouldReduceMotion ? 0 : 18,
      transition: shouldReduceMotion ? { duration: 0 } : itemTransition,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0 } : itemTransition,
    },
  };

  return (
    <div ref={rootRef} className={styles.root}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={actionsId}
            className={styles.actions}
            role="group"
            aria-label="Opciones de contacto"
            variants={actionListVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {CONTACT_ACTIONS.map((action) => (
              <motion.a
                key={action.href}
                className={styles.action}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                aria-label={
                  action.kind === 'whatsapp'
                    ? `WhatsApp: ${action.label}`
                    : `Correo: ${action.label}`
                }
                variants={actionVariants}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.965 }}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`${styles.optionInner} ${
                    action.kind === 'whatsapp' ? styles.whatsappOption : styles.emailOption
                  }`}
                >
                  <span className={styles.optionLabel}>{action.label}</span>
                  <span className={styles.optionIcon}>
                    <Icon name={action.icon} />
                  </span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.mainButton}
        type="button"
        disabled={disabled}
        aria-expanded={isOpen}
        aria-controls={actionsId}
        aria-label={isOpen ? 'Cerrar opciones de contacto' : label}
        onClick={() => setIsOpen((current) => !current)}
        animate={{
          width: isOpen ? 48 : 148,
          borderRadius: isOpen ? 9999 : 16,
          paddingLeft: isOpen ? 0 : 16,
          paddingRight: isOpen ? 0 : 16,
        }}
        transition={transition}
        whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.015 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      >
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.span
              key="label"
              className={styles.mainLabel}
              initial={{ opacity: 0, width: 0, x: 6 }}
              animate={{ opacity: 1, width: 'auto', x: 0 }}
              exit={{ opacity: 0, width: 0, x: 6 }}
              transition={shouldReduceMotion ? { duration: 0 } : labelTransition}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
        <span className={styles.mainIcon}>
          <AnimatePresence initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'arrow'}
              className={styles.mainIconGlyph}
              initial={{ opacity: 0, scale: 0.72, rotate: isOpen ? -90 : -18 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.72, rotate: isOpen ? 90 : 18 }}
              transition={shouldReduceMotion ? { duration: 0 } : iconTransition}
            >
              <Icon name={isOpen ? 'crossSmallBold' : 'arrowSmallRightRegular'} />
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.button>
    </div>
  );
}
