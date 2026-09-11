import type { CSSProperties } from 'react';
import styles from './IntroFlow.module.css';

interface BlurTextProps {
  className?: string;
  delayMs?: number;
  offsetMs?: number;
  text: string;
}

export function BlurText({ className = '', delayMs = 70, offsetMs = 0, text }: BlurTextProps) {
  return (
    <span className={`${styles.blurText} ${className}`} aria-hidden="true">
      {Array.from(text).map((character, index) => (
        <span
          className={styles.blurLetter}
          key={`${character}-${index}`}
          style={{ '--blur-delay': `${offsetMs + index * delayMs}ms` } as CSSProperties}
        >
          {character}
        </span>
      ))}
    </span>
  );
}
