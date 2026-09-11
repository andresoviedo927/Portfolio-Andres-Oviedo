import type { CSSProperties } from 'react';

const ICON_CLASSES = {
  arrowDown: 'fi-rr-arrow-down',
  arrowUp: 'fi-rr-arrow-up',
  arrowUpRight: 'fi-rr-arrow-up-right',
  check: 'fi-rr-check',
  checkCircle: 'fi-rr-check-circle',
  chevronLeft: 'fi-rr-angle-left',
  chevronRight: 'fi-rr-angle-right',
  close: 'fi-rr-cross',
  compass: 'fi-rr-compass-alt',
  copy: 'fi-rr-copy',
  cursor: 'fi-rr-cursor-finger',
  dribbble: 'fi-brands-dribbble',
  email: 'fi-rr-envelope',
  expand: 'fi-rr-expand',
  externalLink: 'fi-rr-arrow-up-right-from-square',
  globe: 'fi-rr-globe',
  graduation: 'fi-rr-graduation-cap',
  layers: 'fi-rr-layers',
  linkedin: 'fi-brands-linkedin',
  menu: 'fi-rr-menu-burger',
  portfolio: 'fi-rr-briefcase',
  send: 'fi-rr-paper-plane',
} as const;

export type IconName = keyof typeof ICON_CLASSES;

interface IconProps {
  className?: string;
  name: IconName;
  style?: CSSProperties;
}

export function Icon({ className = '', name, ...props }: IconProps) {
  return (
    <i
      aria-hidden="true"
      className={`ui-icon ${ICON_CLASSES[name]} ${className}`.trim()}
      {...props}
    />
  );
}
