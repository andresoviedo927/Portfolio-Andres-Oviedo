import troopImpact from '../assets/images/troop-impact.webp';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import narrative from './TroopNarrativeSection.module.css';
import styles from './TroopImpactSection.module.css';

const title = 'Evolución e impacto del producto';

const metrics = [
  {
    icon: 'fi-sr-laptop',
    value: '100 % digital',
    label: 'Modelo de participación comunicado',
    description:
      'La plataforma presenta un proceso digital de vinculación y participación que busca reducir las gestiones presenciales tradicionales.',
  },
  {
    icon: 'fi-sr-list-check',
    value: '4',
    label: 'Etapas principales',
    description:
      'Registro, selección del proyecto, firma y pago, y recepción de utilidades: una secuencia organizada para comunicar el funcionamiento de TROOP.',
  },
  {
    icon: 'fi-sr-clock',
    value: '3:10 min',
    label: 'Duración promedio de visita',
    description:
      'Tiempo medio estimado que los visitantes permanecían en la plataforma durante una sesión.',
  },
  {
    icon: 'fi-sr-users',
    value: '39',
    label: 'Participantes en menos de tres semanas',
    description:
      'TROOPERS reportados en una oportunidad inmobiliaria específica en Estados Unidos que recaudó USD 100.000 durante ese período.',
  },
];

export function TroopImpactSection() {
  return (
    <MobileCaseStudySection title={title}>
      <section className={`${narrative.section} ${styles.section}`} aria-labelledby="troop-impact-title">
        <div className={`${narrative.content} ${styles.content}`}>
          <h2 id="troop-impact-title">
            <span>Evolución</span> e impacto del producto
          </h2>
          <div className={narrative.divider} aria-hidden="true" />
          <p className={`${narrative.description} ${styles.intro}`}>
            TROOP reúne en una experiencia web la exploración de oportunidades inmobiliarias, la
            evaluación financiera y la participación en activos.
          </p>
          <div className={styles.metrics}>
            {metrics.map(({ icon, value, label, description }) => (
              <article className={styles.metric} key={label}>
                <span className={narrative.iconBox} aria-hidden="true">
                  <i className={`fi ${icon}`} />
                </span>
                <div className={styles.metricCopy}>
                  <strong className={styles.value}>{value}</strong>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className={styles.notice} aria-label="Fuentes">
            <i aria-hidden="true" className="fi fi-sr-exclamation" />
            <div>
              <strong>Fuentes</strong>
              <p>
                Sitio oficial de TROOP, HypeStat y comunicación pública de su fundador. Los
                resultados comerciales no están atribuidos causalmente al diseño.
              </p>
            </div>
          </aside>
        </div>
        <img
          className={`${narrative.visual} ${narrative.portrait} ${styles.illustration}`}
          src={troopImpact}
          alt="Maqueta de un local comercial con indicadores de crecimiento"
          width={1122}
          height={1402}
          loading="lazy"
        />
      </section>
    </MobileCaseStudySection>
  );
}
