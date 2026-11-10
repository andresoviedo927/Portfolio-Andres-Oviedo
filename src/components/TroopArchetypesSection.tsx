import troopArchetypes from '../assets/images/troop-archetypes.webp';
import { MobileCaseStudySection, useMobileCaseStudy } from './MobileCaseStudySection';
import styles from './TroopNarrativeSection.module.css';

const profileFields = [
  ['behavior', 'Comportamiento'],
  ['need', 'Necesidad'],
  ['motivation', 'Motivación'],
  ['friction', 'Fricción potencial'],
] as const;

const profiles = [
  {
    icon: 'fi-rr-search',
    title: 'El explorador — Descubrir oportunidades',
    behavior:
      'Explora activos inmobiliarios, revisa sus características y compara alternativas antes de tomar una decisión.',
    need:
      'Encontrar información organizada y comprensible que facilite identificar oportunidades relevantes.',
    motivation: 'Descubrir nuevas formas de participar en el mercado inmobiliario.',
    friction: 'La cantidad de información técnica y financiera puede dificultar la evaluación inicial.',
  },
  {
    icon: 'fi-rr-chart-histogram',
    title: 'El inversionista — Evaluar y gestionar',
    behavior:
      'Analiza indicadores financieros, simula diferentes montos y busca mantener visibilidad sobre sus participaciones.',
    need: 'Comprender posibles escenarios financieros y consultar información relevante de sus inversiones.',
    motivation: 'Tomar decisiones informadas y realizar seguimiento a sus activos.',
    friction:
      'La falta de contexto entre cifras, proyecciones y movimientos puede dificultar su interpretación.',
  },
  {
    icon: 'fi-rr-house-building',
    mobileIcon: 'fi-sr-house-building',
    title: 'El propietario — Ofrecer un activo',
    behavior:
      'Busca alternativas para comercializar su inmueble y proporciona información sobre sus características y condiciones.',
    need: 'Contar con un recorrido claro para registrar su propiedad y entregar la documentación requerida.',
    motivation: 'Acceder a nuevas oportunidades comerciales para su inmueble.',
    friction: 'La complejidad de los requisitos y procesos documentales puede dificultar la postulación.',
  },
];

export function TroopArchetypesSection() {
  const mobile = useMobileCaseStudy();

  return (
    <MobileCaseStudySection title="Arquetipos de usuario">
      <section className={`${styles.section} ${styles.archetypes}`} aria-labelledby="troop-archetypes-title">
        <div className={styles.content}>
          <h2 id="troop-archetypes-title">
            <span>Arquetipos</span> de usuario
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            Para TROOP identificamos tres perfiles relevantes a partir de sus funcionalidades y
            recorridos: personas que exploran oportunidades inmobiliarias, usuarios interesados en
            evaluar y gestionar participaciones, y propietarios que desean ofrecer sus inmuebles.
          </p>
          <ul className={styles.items}>
            {profiles.map((profile) => (
              <li className={styles.item} key={profile.title}>
                <span className={styles.iconBox} aria-hidden="true">
                  <i className={`fi ${(mobile && profile.mobileIcon) || profile.icon}`} />
                </span>
                <div>
                  <h3>{profile.title}</h3>
                  <ul className={styles.detailList}>
                    {profileFields.map(([field, label]) => (
                      <li key={field}>
                        {label}: {profile[field]}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          className={`${styles.visual} ${styles.portrait}`}
          src={troopArchetypes}
          alt="Cuatro personas exploran inmuebles en un teléfono junto a una maqueta arquitectónica"
          width={1122}
          height={1402}
          loading="lazy"
        />
      </section>
    </MobileCaseStudySection>
  );
}
