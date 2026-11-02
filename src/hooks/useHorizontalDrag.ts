import {
  useRef,
  type PointerEvent as ReactPointerEvent,
  type MouseEvent as ReactMouseEvent,
  type DragEvent as ReactDragEvent,
} from 'react';

export function useHorizontalDrag() {
  const drag = useRef({ pointerId: -1, x: 0, left: 0, moved: false });
  const suppressClick = useRef(false);
  return {
    onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
      if (
        event.pointerType !== 'mouse' ||
        event.button !== 0 ||
        (event.target as HTMLElement).closest('input,label')
      )
        return;
      suppressClick.current = false;
      drag.current = {
        pointerId: event.pointerId,
        x: event.clientX,
        left: event.currentTarget.scrollLeft,
        moved: false,
      };
    },
    onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
      const state = drag.current;
      if (state.pointerId !== event.pointerId) return;
      const distance = event.clientX - state.x;
      if (!state.moved && Math.abs(distance) > 5) {
        state.moved = true;
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      if (state.moved) {
        event.preventDefault();
        event.currentTarget.scrollLeft = state.left - distance;
      }
    },
    onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
      if (drag.current.pointerId !== event.pointerId) return;
      suppressClick.current = drag.current.moved;
      if (event.currentTarget.hasPointerCapture(event.pointerId))
        event.currentTarget.releasePointerCapture(event.pointerId);
      drag.current.pointerId = -1;
    },
    onPointerCancel() {
      drag.current.pointerId = -1;
    },
    onClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
      if (suppressClick.current && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }
    },
    onDragStart(event: ReactDragEvent<HTMLDivElement>) {
      event.preventDefault();
    },
  };
}
