import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import styles from './TabletProjectPreview.module.css';

export interface CardPreview {
  title: string;
  description: string;
  image: string;
  href?: string;
  onOpen: () => void;
}

export interface PreviewOrigin {
  top: number;
  left: number;
  width: number;
  height: number;
  color: string;
}

export function TabletProjectPreview({ title, description, image, href, onOpen, origin, onClose }: CardPreview & {
  origin: PreviewOrigin;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const backdropPressed = useRef(false);
  const cardPressed = useRef(false);
  const reducedMotion = useReducedMotion();
  const mobile = window.innerWidth < 720;
  const width = mobile
    ? window.innerWidth - 32
    : Math.min(window.innerWidth - 64, (window.innerHeight - 96) * 632 / 420, 960);
  const height = mobile ? Math.min(360, window.innerHeight - 96) : width * 420 / 632;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  const source = { top: origin.top, left: origin.left, width: origin.width, height: origin.height };
  return (
    <motion.dialog
      ref={dialog}
      className={styles.dialog}
      aria-label={`Vista previa de ${title}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onPointerDown={(event) => {
        event.stopPropagation();
        backdropPressed.current = event.target === event.currentTarget;
      }}
      onPointerMove={(event) => event.stopPropagation()}
      onPointerUp={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target === event.currentTarget && backdropPressed.current) onClose();
        backdropPressed.current = false;
      }}
      initial={{ backgroundColor: 'rgba(26,33,43,0)' }}
      animate={{ backgroundColor: 'rgba(26,33,43,0.4)' }}
      exit={{ backgroundColor: 'rgba(26,33,43,0)' }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
    >
      <motion.article
        className={styles.card}
        initial={source}
        animate={{ top: (window.innerHeight - height) / 2, left: (window.innerWidth - width) / 2, width, height }}
        exit={source}
        transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          className={styles.projectLink}
          href={href ?? '#'}
          aria-label={`Abrir proyecto: ${title}`}
          onPointerDown={() => { cardPressed.current = true; }}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // Ignore the synthetic click produced when the opening long press ends.
            if (cardPressed.current || event.detail === 0) onOpen();
            cardPressed.current = false;
          }}
        >
        <img className={styles.image} src={image} alt="" />
        <span className={styles.divider} style={{ backgroundColor: origin.color }} aria-hidden="true" />
        <motion.div className={styles.text} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>
        </a>
        <button type="button" className={styles.close} aria-label="Cerrar vista previa" onClick={onClose}>×</button>
      </motion.article>
    </motion.dialog>
  );
}
