import { useId } from 'react';
import styles from './CountryFlag.module.css';

interface CountryFlagProps {
  className?: string;
  countryCode: string;
}

const COUNTRY_NAMES: Record<string, string> = {
  CO: 'Colombia',
};

export function CountryFlag({ className = '', countryCode }: CountryFlagProps) {
  const normalizedCountryCode = countryCode.trim().toUpperCase();
  const clipPathId = `country-flag-${useId().replace(/:/g, '')}`;

  if (normalizedCountryCode !== 'CO') return null;

  return (
    <svg
      aria-label={`Bandera de ${COUNTRY_NAMES[normalizedCountryCode]}`}
      className={`${styles.flag} ${className}`.trim()}
      role="img"
      viewBox="0 0 24 17.14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect width="24" height="17.14" rx="3" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipPathId})`}>
        <rect width="24" height="8.57" fill="#FFDA2C" />
        <rect y="8.57" width="24" height="4.285" fill="#1A47B8" />
        <rect y="12.855" width="24" height="4.285" fill="#F93939" />
      </g>
    </svg>
  );
}
