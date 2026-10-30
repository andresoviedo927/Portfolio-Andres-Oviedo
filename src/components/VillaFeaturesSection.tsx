import { images } from '../assets/images';
import styles from './VillaFeaturesSection.module.css';

type FeatureIcon = 'map' | 'services' | 'hotel' | 'events' | 'place' | 'route';

const FEATURES: Array<{
  description: string;
  icon?: FeatureIcon;
  imageSrc?: string;
  title: string;
}> = [
  {
    title: 'Descubrir lugares',
    description:
      'El mapa interactivo permite explorar puntos de interés y acceder progresivamente a nuevas experiencias.',
    imageSrc: images.villaFeatureDiscover,
  },
  {
    title: 'Resolver necesidades',
    description:
      'El directorio reúne 32 servicios en 8 categorías, facilitando el acceso a ubicación, contacto, horarios y otra información práctica.',
    imageSrc: images.villaFeatureResolve,
  },
  {
    title: 'Encontrar dónde hospedarse',
    description:
      'Las opciones de alojamiento se organizan mediante categorías, mapas y fichas que concentran la información necesaria para tomar una decisión.',
    imageSrc: images.villaFeatureHotel,
  },
  {
    title: 'Descubrir qué está pasando',
    description:
      'El módulo de eventos presenta festividades y actividades culturales para ampliar las posibilidades de exploración según la época del año.',
    imageSrc: images.villaFeaturePlan,
  },
  {
    title: 'Conectar con el lugar',
    description:
      'Plaza Principal combina lectura, narración, fotografías, panorámica 360° y video para complementar la información práctica con historia y cultura.',
    imageSrc: images.villaFeatureConnect,
  },
  {
    title: 'Participar en la experiencia',
    description:
      'La Ruta Secreta, la cámara y las experiencias concebidas para realidad aumentada introducen gamificación e interacción para convertir al visitante en parte activa del recorrido.',
    imageSrc: images.villaFeatureRoute,
  },
];

function FeatureIconGraphic({ icon }: { icon: FeatureIcon }) {
  const dark = '#1A212B';
  const accent = '#F2930D';

  if (icon === 'map') {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        <path
          d="m5 18 17-7 20 7 17-7v38l-17 7-20-7-17 7V18Z"
          stroke={dark}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <path d="M22 11v38M42 18v38" stroke={dark} strokeWidth="3.5" />
        <path
          d="M42 4c-7 0-12 5-12 12 0 10 12 20 12 20s12-10 12-20c0-7-5-12-12-12Z"
          fill="#fff"
          stroke={accent}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <path
          d="m42 10 2 4 4.5.6-3.2 3.1.8 4.4-4.1-2-4.1 2 .8-4.4-3.2-3.1 4.5-.6 2-4Z"
          fill={accent}
        />
      </svg>
    );
  }

  if (icon === 'services') {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        <path
          d="M18 46 8 37a5 5 0 0 1 7-7l10 8h14l10-8a5 5 0 0 1 7 7l-10 9v11H18V46Z"
          stroke={dark}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <circle cx="32" cy="28" r="6" stroke={dark} strokeWidth="3.5" />
        <path
          d="M26 7c0-5 4-7 8-7s8 2 8 7c0 6-7 7-7 12M35 23h.1"
          stroke={dark}
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <rect x="2" y="13" width="16" height="16" stroke={accent} strokeWidth="3.5" />
        <path
          d="m7 21 3 3 5-6"
          stroke={accent}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <rect x="46" y="13" width="16" height="16" stroke={accent} strokeWidth="3.5" />
        <path d="m51 18 6 6M57 18l-6 6" stroke={accent} strokeLinecap="round" strokeWidth="3" />
      </svg>
    );
  }

  if (icon === 'hotel') {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        <path
          d="M8 22H2v40h60V22h-6M12 62V28h10v34M42 62V28h10v34"
          stroke={dark}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <path d="M22 17h20M22 41h20" stroke={dark} strokeLinecap="round" strokeWidth="3.5" />
        <path d="M22 2h20v28H22V2Z" fill="#fff" stroke={accent} strokeWidth="3.5" />
        <path d="M28 9v14M36 9v14M28 16h8" stroke={dark} strokeLinecap="round" strokeWidth="3.5" />
        <path d="M27 62V46h10v16" stroke={accent} strokeWidth="3.5" />
      </svg>
    );
  }

  if (icon === 'events') {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        <rect x="4" y="7" width="56" height="53" stroke={dark} strokeWidth="3.5" />
        <path
          d="M4 18h56M14 3v8M25 3v8M39 3v8M50 3v8"
          stroke={dark}
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <path
          d="m32 27 4.6 9.3 10.3 1.5-7.5 7.3 1.8 10.3L32 50.6l-9.2 4.8 1.8-10.3-7.5-7.3 10.3-1.5L32 27Z"
          stroke={accent}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
      </svg>
    );
  }

  if (icon === 'place') {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        <path
          d="M32 4C20 4 11 13 11 25c0 15 21 33 21 33s21-18 21-33C53 13 44 4 32 4Z"
          fill="#fff"
          stroke={dark}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <path d="M12 60c7-4 33-4 40 0" stroke={dark} strokeLinecap="round" strokeWidth="3.5" />
        <path
          d="M21 20c5-2 8-1 11 2 3-3 6-4 11-2v17c-5-2-8-1-11 2-3-3-6-4-11-2V20Z"
          stroke={accent}
          strokeLinejoin="round"
          strokeWidth="3.5"
        />
        <path d="M32 22v17" stroke={accent} strokeWidth="3.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
      <path
        d="M12 51h19c9 0 16-7 16-16V23"
        stroke={dark}
        strokeDasharray="3 5"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <circle cx="12" cy="51" r="6" fill="#fff" stroke={dark} strokeWidth="3.5" />
      <circle cx="32" cy="51" r="6" fill="#fff" stroke={dark} strokeWidth="3.5" />
      <circle cx="47" cy="34" r="6" fill="#fff" stroke={dark} strokeWidth="3.5" />
      <path
        d="M12 10c-6 0-10 4-10 10 0 8 10 17 10 17s10-9 10-17c0-6-4-10-10-10Z"
        fill="#fff"
        stroke={accent}
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
      <circle cx="12" cy="20" r="3" fill={dark} />
      <path
        d="M47 2c-6 0-10 4-10 10 0 8 10 17 10 17s10-9 10-17c0-6-4-10-10-10Z"
        fill="#fff"
        stroke={accent}
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
      <circle cx="47" cy="12" r="3" fill={dark} />
    </svg>
  );
}

export function VillaFeaturesSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-features-title">
      <header className={styles.header}>
        <h2 className={styles.title} id="villa-features-title">
          Funcionalidades <span>clave</span>
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p>
          Las funcionalidades se diseñaron alrededor de tres necesidades principales del visitante:
          descubrir, resolver y conectar con el destino.
        </p>
      </header>

      <div className={styles.grid}>
        {FEATURES.map((feature) => (
          <article className={styles.card} key={feature.title}>
            <span className={styles.icon}>
              {feature.imageSrc ? (
                <img alt="" aria-hidden="true" src={feature.imageSrc} />
              ) : (
                <FeatureIconGraphic icon={feature.icon ?? 'map'} />
              )}
            </span>
            <div className={styles.copy}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
