'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';
import { images } from '../../assets/images';
import { CONTACT_LINKS } from '../../constants/contactLinks';
import { Icon } from './Icon';
import { MagneticButton } from './magnetic-button';
import './motion-floating-action-button-utils/index.css';

const buttonTransition = { type: 'spring' as const, stiffness: 500, damping: 30 };
const itemTransition = { type: 'spring' as const, stiffness: 400, damping: 26 };
const actions = [...CONTACT_LINKS].reverse();

export function FloatingActionButton({
  staggerInterval = 0.05,
}: { staggerInterval?: number } = {}) {
  const [open, setOpen] = useState(false);
  const actionsId = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || event.defaultPrevented) return;
      if (root.current?.contains(document.activeElement)) trigger.current?.focus();
      setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="contact-fab" ref={root}>
      <MagneticButton>
        <motion.button
          ref={trigger}
          type="button"
          className="contact-fab__trigger"
          aria-controls={actionsId}
          aria-expanded={open}
          aria-label={open ? 'Cerrar opciones de contacto' : 'Contáctame'}
          onClick={() => setOpen((value) => !value)}
          transition={buttonTransition}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        >
          <img src={images.avatarContactame} alt="" width={56} height={56} draggable={false} />
          <AnimatePresence>
            {open && (
              <motion.span
                className="contact-fab__close"
                initial={{ opacity: 0, rotate: reduceMotion ? 0 : -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              >
                <Icon name="crossSmallBold" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </MagneticButton>

      <div
        className="contact-fab__actions"
        id={actionsId}
        role="group"
        aria-label="Opciones de contacto"
        inert={!open}
      >
        <AnimatePresence>
          {open &&
            actions.map((action, index) => (
              <motion.a
                key={action.id}
                className="contact-fab__action"
                data-contact={action.id}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                aria-label={`${action.accessibleName}: ${action.label}`}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : index * 8,
                  y: reduceMotion ? 0 : 28 + index * 34,
                  scale: reduceMotion ? 1 : 0.55,
                }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { ...itemTransition, delay: index * staggerInterval }
                }
                onClick={() => {
                  trigger.current?.focus();
                  setOpen(false);
                }}
              >
                <span className="contact-fab__icon">
                  <Icon name={action.icon} />
                </span>
              </motion.a>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FloatingActionButton;
