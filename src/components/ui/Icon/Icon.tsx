import type { CSSProperties } from 'react';

const ICON_CLASSES = {
  arrowDown: 'fi-rr-arrow-down',
  arrowSmallRight: 'fi-sr-arrow-small-right',
  arrowSmallRightRegular: 'fi-rr-arrow-small-right',
  arrowUp: 'fi-rr-arrow-up',
  arrowUpRight: 'fi-rr-arrow-up-right',
  behance: 'fi-brands-behance',
  bellSchoolSolid: 'fi-sr-bell-school',
  bookSolid: 'fi-sr-book',
  calendarXmarkSolid: 'fi-sr-calendar-xmark',
  check: 'fi-rr-check',
  checkCircle: 'fi-rr-check-circle',
  chevronLeft: 'fi-rr-angle-left',
  chevronRight: 'fi-rr-angle-right',
  close: 'fi-rr-cross',
  clockTimeTracking: 'fi-sr-clock-time-tracking',
  compass: 'fi-rr-compass-alt',
  copy: 'fi-rr-copy',
  crossSmallBold: 'fi-br-cross-small',
  cursor: 'fi-rr-cursor-finger',
  departmentStructure: 'fi-sr-department-structure',
  dribbble: 'fi-brands-dribbble',
  email: 'fi-rr-envelope',
  emailSolid: 'fi-sr-envelope',
  expand: 'fi-rr-expand',
  externalLink: 'fi-rr-arrow-up-right-from-square',
  globe: 'fi-rr-globe',
  graduation: 'fi-rr-graduation-cap',
  layers: 'fi-rr-layers',
  linkedin: 'fi-brands-linkedin',
  mapMarker: 'fi-rr-marker',
  mapMarkerSolid: 'fi-sr-map-marker',
  menu: 'fi-rr-menu-burger',
  media: 'fi-rr-film',
  palette: 'fi-rr-palette',
  paletteSolid: 'fi-sr-palette',
  portfolio: 'fi-rr-briefcase',
  prototype: 'fi-rr-mobile-notch',
  puzzle: 'fi-rr-puzzle-piece',
  send: 'fi-rr-paper-plane',
  reservationSmartphone: 'fi-sr-reservation-smartphone',
  starSolid: 'fi-sr-star',
  store: 'fi-rr-shop',
  storeAltSolid: 'fi-sr-store-alt',
  tap: 'fi-rr-cursor-finger',
  tapSolid: 'fi-sr-tap',
  taskChecklist: 'fi-sr-task-checklist fi-sr-checklist-task-budget',
  users: 'fi-rr-users-alt',
  usersSolid: 'fi-sr-users',
  filmSolid: 'fi-sr-film',
  workflow: 'fi-rr-sitemap',
  whatsapp: 'fi-brands-whatsapp',
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
