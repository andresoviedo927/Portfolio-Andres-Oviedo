import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './PeriodicoArchitectureSection.module.css';

function Connectors() {
  return (
    <svg aria-hidden="true" className={styles.connectors} viewBox="0 0 920 135">
      <defs>
        <marker
          id="periodico-arrow"
          markerHeight="12"
          markerWidth="12"
          orient="auto"
          refX="10"
          refY="6"
          viewBox="0 0 12 12"
        >
          <path d="M0 0 12 6 0 12Z" fill="#1A212B" />
        </marker>
      </defs>
      <g
        fill="none"
        markerEnd="url(#periodico-arrow)"
        stroke="#1A212B"
        strokeDasharray="9 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M222 67h72q20 0 20-20V34q0-20 20-20h103" />
        <path d="M222 67h72q20 0 20 20v14q0 20 20 20h103" />
        <path d="M635 121h96" />
      </g>
    </svg>
  );
}

export function PeriodicoArchitectureSection() {
  return (
    <MobileCaseStudySection title="Arquitectura">
      <section className={styles.section} aria-labelledby="periodico-architecture-title">
        <header className={styles.header}>
          <h2 id="periodico-architecture-title">
            Una <span>arquitectura</span> simple
            <br />
            para encontrar todo <span>rápidamente</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            El recorrido fue diseñado para que cada paso condujera naturalmente al siguiente. La
            experiencia comienza con una entrada sencilla, lleva al usuario hacia la cámara y
            transforma el escaneo de una publicación en el acceso directo a nuevas formas de
            explorar su contenido.
          </p>
        </header>
        <div className={styles.diagramViewport} tabIndex={0} role="region" aria-label="Recorrer el diagrama de arquitectura de Entérese RA">
        <div className={styles.diagram} aria-label="Diagrama de arquitectura de Entérese RA">
          <Connectors />
          <svg aria-hidden="true" className={styles.mobileConnectors} viewBox="0 0 438 119">
            <defs>
              <marker id="periodico-mobile-arrow" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="7" refY="4" orient="auto" viewBox="0 0 8 8">
                <path d="M0 0 8 4 0 8Z" fill="#1A212B" />
              </marker>
            </defs>
            <g fill="none" stroke="#1A212B" strokeWidth="3" strokeDasharray="9 8" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#periodico-mobile-arrow)">
              <path d="M76 59.5h10q18 0 18-22.5t25-22.5" />
              <path d="M76 59.5h10q18 0 18 19t25 19" />
              <path d="M297 98h36" />
            </g>
          </svg>
          <svg aria-hidden="true" className={styles.tabletConnectors} viewBox="0 0 656 135">
            <defs>
              <marker id="periodico-tablet-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" viewBox="0 0 8 8">
                <path d="M0 0 8 4 0 8Z" fill="#1A212B" />
              </marker>
            </defs>
            <g fill="none" stroke="#1A212B" strokeWidth="3" strokeDasharray="9 8" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#periodico-tablet-arrow)">
              <path d="M111 67h49q29 0 29-27q0-25.5 27-25.5h45" />
              <path d="M111 67h49q29 0 29 25q0 21.5 27 21.5h45" />
              <path d="M430 113.5h84" />
            </g>
          </svg>
          <div className={`${styles.node} ${styles.home}`}>Home</div>
          <div className={`${styles.node} ${styles.ar}`}>Realidad aumentada</div>
          <div className={`${styles.node} ${styles.actions}`}>Acciones complementarias</div>
          <div className={`${styles.node} ${styles.final}`}>
            <span>•&nbsp; Página web</span>
            <span>•&nbsp; Contactos</span>
          </div>
        </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
