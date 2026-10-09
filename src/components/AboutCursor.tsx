import type { SVGProps } from 'react';
import { Cursor } from './ui/cursor';
import styles from './AboutCursor.module.css';

const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42.5} height={50} fill="none" {...props}>
    <g clipPath="url(#about-cursor-clip)">
      <path
        fill="#22c55e"
        fillRule="evenodd"
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={2}
        d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="about-cursor-clip">
        <path fill="#22c55e" d="M0 0h26v31H0z" />
      </clipPath>
    </defs>
  </svg>
);

export function AboutCursor() {
  return (
    <Cursor
      attachToParent
      hotspot={{ x: 2.549, y: 2.935 }}
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      transition={{ ease: 'easeInOut', duration: 0.15 }}
      className={styles.customCursor}
    >
      <div className={styles.content}>
        <MouseIcon />
        <span>Sobre mí</span>
      </div>
    </Cursor>
  );
}
