export const theme = {
  colors: {
    brandPrimary: 'var(--brand-primary)',
    brandPrimaryHover: 'var(--brand-primary-hover)',
    brandSecondary: 'var(--brand-secondary)',
    brandSoft: 'var(--brand-soft)',
    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',
    textBody: 'var(--text-body)',
    surfacePrimary: 'var(--surface-primary)',
    surfaceSecondary: 'var(--surface-secondary)',
    divider: 'var(--divider)',
    borderSubtle: 'var(--border-subtle)',
  },
  typography: {
    fontFamily: 'var(--font-family-primary)',
    display: ['var(--text-display-lg)', 'var(--text-display-md)', 'var(--text-display-sm)'],
    headline: ['var(--text-headline-lg)', 'var(--text-headline-md)', 'var(--text-headline-sm)'],
    title: ['var(--text-title-lg)', 'var(--text-title-md)', 'var(--text-title-sm)'],
    body: ['var(--text-body-lg)', 'var(--text-body-md)', 'var(--text-body-sm)'],
  },
  spacing: [2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 160].map((value) => `var(--space-${value})`),
  elevation: {
    none: 'var(--elevation-none)',
    small: 'var(--elevation-small)',
    medium: 'var(--elevation-medium)',
    large: 'var(--elevation-large)',
  },
} as const;

export type Theme = typeof theme;
