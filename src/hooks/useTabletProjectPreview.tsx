import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import {
  TabletProjectPreview,
  type CardPreview,
  type PreviewOrigin,
} from '../components/ui/TabletProjectPreview';

const supportsPressPreview = () => window.matchMedia('(max-width: 1024px)').matches;

export function useTabletProjectPreview(card: CardPreview) {
  const [origin, setOrigin] = useState<PreviewOrigin | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const press = useRef({ x: 0, y: 0, opened: false });
  const cancel = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    const reset = () => {
      cancel();
      setOrigin(null);
    };
    window.addEventListener('scroll', cancel, true);
    window.addEventListener('resize', reset);
    return () => {
      cancel();
      window.removeEventListener('scroll', cancel, true);
      window.removeEventListener('resize', reset);
    };
  }, []);

  const handlers = {
    onPointerDownCapture: (event: PointerEvent<HTMLElement>) => {
      cancel();
      press.current = { x: event.clientX, y: event.clientY, opened: false };
      if (!supportsPressPreview() || !event.isPrimary || event.button !== 0) return;
      const element = event.currentTarget;
      timer.current = setTimeout(() => {
        press.current.opened = true;
        const rect = element.getBoundingClientRect();
        setOrigin({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          color: getComputedStyle(element).getPropertyValue('--project-divider-color'),
        });
      }, 500);
    },
    onPointerMoveCapture: (event: PointerEvent<HTMLElement>) => {
      if (Math.hypot(event.clientX - press.current.x, event.clientY - press.current.y) > 10)
        cancel();
    },
    onPointerUpCapture: (event: PointerEvent<HTMLElement>) => {
      cancel();
      if (press.current.opened) event.preventDefault();
    },
    onPointerCancelCapture: cancel,
    onPointerLeave: cancel,
    onClickCapture: (event: MouseEvent<HTMLElement>) => {
      if (!press.current.opened) return;
      event.preventDefault();
      event.stopPropagation();
    },
    onContextMenu: (event: MouseEvent<HTMLElement>) => {
      if (supportsPressPreview()) event.preventDefault();
    },
  };

  return {
    isOpen: origin !== null,
    handlers,
    preview: createPortal(
      <AnimatePresence>
        {origin && (
          <TabletProjectPreview
            {...card}
            origin={origin}
            onClose={() => setOrigin(null)}
            onOpen={() => {
              setOrigin(null);
              card.onOpen();
            }}
          />
        )}
      </AnimatePresence>,
      document.body,
    ),
  };
}
