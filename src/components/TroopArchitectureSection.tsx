import { useCallback } from 'react';
import { MobileCaseStudySection, useHorizontalDrag } from './MobileCaseStudySection';
import styles from './TroopArchitectureSection.module.css';

const homePages = [
  'Información',
  'Cómo funciona',
  'Descubre TROOP',
  'Blog',
  'FAQ / PQRS / Glosario',
  'Contacto',
];
const participationPages = ['Detalle del activo', 'Simulación', 'Registro / Contacto', 'Solicitud'];
const salePages = ['Categoría de inmueble', 'Datos de propiedad', 'Documentación', 'Solicitud'];
const accountPages = ['Perfil', 'Mis inversiones', 'Mis transacciones'];

export function TroopArchitectureSection() {
  const drag = useHorizontalDrag();
  const viewportRef = useCallback((viewport: HTMLDivElement | null) => {
    if (!viewport) return;

    const center = () => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
    };
    const observer = new ResizeObserver(center);
    observer.observe(viewport);
    center();
    return () => observer.disconnect();
  }, []);

  return (
    <MobileCaseStudySection title="Arquitectura">
      <section className={styles.section} aria-labelledby="troop-architecture-title">
        <header className={styles.header}>
          <h2 id="troop-architecture-title">
            Una <span>arquitectura</span> simple
            <br />
            para encontrar todo <span>rápidamente</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            Diseñamos recorridos diferenciados para simplificar las acciones principales de cada
            perfil. La plataforma organiza sus funcionalidades en áreas que conectan la exploración
            de oportunidades inmobiliarias, los procesos de participación, la comercialización de
            activos y la gestión de información personal.
          </p>
        </header>

        <div
          className={styles.viewport}
          role="region"
          aria-label="Mapa de navegación de Troop"
          tabIndex={0}
          ref={viewportRef}
          {...drag}
        >
          <div className={styles.chart}>
            <svg
              className={`${styles.connectors} ${styles.standardConnectors}`}
              viewBox="0 0 1120 624"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="troop-architecture-arrow"
                  viewBox="0 0 32 28"
                  markerWidth="32"
                  markerHeight="28"
                  markerUnits="userSpaceOnUse"
                  refX="27"
                  refY="14"
                  orient="auto"
                >
                  <path d="M1 1 31 14 1 27Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
                </marker>
              </defs>
              <g stroke="currentColor" strokeWidth="6" strokeDasharray="11 9" strokeLinecap="round">
                <path d="M560 68v54q0 26-26 26H120.5" />
                <path d="M560 122q0 26 26 26h287.5" />
                <g markerEnd="url(#troop-architecture-arrow)">
                  <path d="M120.5 148q-28 0-28 28v44" />
                  <path d="M345.5 148q-28 0-28 28v44" />
                  <path d="M560 122q0 18-8.75 26t-8.75 28v44" />
                  <path d="M873.5 148q28 0 28 28v44" />
                  <path d="M92.5 278v88" />
                  <path d="M317.5 278v88" />
                  <path d="M542.5 278v88" />
                  <path d="M317.5 424v88" />
                  <path d="M901.5 278v24q0 24-24 24h-133q-24 0-24 24v16" />
                  <path d="M901.5 302q0 24-24 24h-2q-24 0-24 24v16" />
                  <path d="M901.5 302q0 24 24 24h83q24 0 24 24v16" />
                </g>
              </g>
            </svg>
            <svg
              className={`${styles.connectors} ${styles.tabletConnectors}`}
              viewBox="0 0 1047 444"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="troop-architecture-tablet-arrow"
                  viewBox="0 0 16 14"
                  markerWidth="16"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  refX="15"
                  refY="7"
                  orient="auto"
                >
                  <path d="M1 1 15 7 1 13Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
                </marker>
              </defs>
              <g stroke="currentColor" strokeWidth="3" strokeDasharray="12 11" strokeLinecap="round">
                <path d="M523.5 52v22q0 22-22 22h-387" />
                <path d="M523.5 74q0 22 22 22h261" />
                <g markerEnd="url(#troop-architecture-tablet-arrow)">
                  <path d="M114.5 96q-22 0-22 22v20" />
                  <path d="M315 96q-22 0-22 22v20" />
                  <path d="M523.5 66q0 22-19 31-11 6-11 20v21" />
                  <path d="M806.5 96q22 0 22 22v20" />
                  <path d="M92.5 198v38" />
                  <path d="M293 198v38" />
                  <path d="M493.5 198v38" />
                  <path d="M293 296v38" />
                  <path d="M828.5 198q0 20-22 20h-138q-22 0-22 18" />
                  <path d="M828.5 198q0 20-22 20h-6q-22 0-22 18" />
                  <path d="M828.5 198q0 20 22 20h87q22 0 22 18" />
                </g>
              </g>
            </svg>

            <svg
              className={`${styles.connectors} ${styles.mobileConnectors}`}
              viewBox="0 0 847 366"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <marker id="troop-architecture-mobile-arrow" viewBox="0 0 16 14" markerWidth="16" markerHeight="14" markerUnits="userSpaceOnUse" refX="15" refY="7" orient="auto">
                  <path d="M1 1 15 7 1 13Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
                </marker>
              </defs>
              <g stroke="currentColor" strokeWidth="3" strokeDasharray="10 6" strokeLinecap="round">
                <path d="M423.5 46v24q0 20-20 20H96" />
                <path d="M423.5 70q0 20 20 20H636" />
                <g markerEnd="url(#troop-architecture-mobile-arrow)">
                  <path d="M96 90q-20 0-20 20v22" />
                  <path d="M248.5 90q-20 0-20 20v22" />
                  <path d="M423.5 66q0 24-25 24-17.5 0-17.5 20v22" />
                  <path d="M636 90q20 0 20 20v22" />
                  <path d="M76 170v42M228.5 170v42M228.5 250v42M381 186v42" />
                  <path d="M656 186q0 24-24 24H516q-20 0-20 18" />
                  <path d="M656 186q0 24-24 24h-3.5q-20 0-20 18" />
                  <path d="M656 186q0 24 24 24h75.5q20 0 20 18" />
                </g>
              </g>
            </svg>

            <div className={styles.root}>TROOP</div>
            <ul className={styles.branches}>
              <li className={styles.home}>
                <h3 className={styles.branchTitle}>Inicio</h3>
                <ul className={styles.pages}>
                  {homePages.map((page) => <li key={page}>{page}</li>)}
                </ul>
              </li>
              <li className={styles.participate}>
                <h3 className={styles.branchTitle}>Participar</h3>
                <div className={styles.catalog}>
                  <h4 className={styles.pageTitle}>Catálogo</h4>
                  <ul className={styles.pages}>
                    {participationPages.map((page) => <li key={page}>{page}</li>)}
                  </ul>
                </div>
              </li>
              <li className={styles.sell}>
                <h3 className={styles.branchTitle}>Vender</h3>
                <ul className={styles.pages}>
                  {salePages.map((page) => <li key={page}>{page}</li>)}
                </ul>
              </li>
              <li className={styles.account}>
                <h3 className={styles.branchTitle}>Mi cuenta</h3>
                <ul className={styles.accountPages}>
                  {accountPages.map((page) => <li className={styles.pageTitle} key={page}>{page}</li>)}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
