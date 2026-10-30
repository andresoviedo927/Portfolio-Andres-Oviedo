import type { ReactNode } from 'react';
import styles from './VillaArchitectureSection.module.css';

type NodeTone = 'home' | 'module' | 'detail';

interface DiagramNodeProps {
  children: ReactNode;
  className?: string;
  tone: NodeTone;
}

function DiagramNode({ children, className = '', tone }: DiagramNodeProps) {
  return <div className={`${styles.node} ${styles[tone]} ${className}`}>{children}</div>;
}

function ArchitectureConnectors() {
  return (
    <svg aria-hidden="true" className={styles.connectors} fill="none" viewBox="0 0 992 564">
      <defs>
        <marker
          id="villa-architecture-arrow"
          markerHeight="16"
          markerUnits="userSpaceOnUse"
          markerWidth="16"
          orient="auto"
          refX="14"
          refY="8"
          viewBox="0 0 16 16"
        >
          <path d="M0 0 16 8 0 16Z" fill="#1A212B" />
        </marker>
      </defs>

      <g
        markerEnd="url(#villa-architecture-arrow)"
        stroke="#1A212B"
        strokeDasharray="10 10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M496 56V82Q496 104 474 104H220Q198 104 198 126V144" />
        <path d="M496 56V82Q496 104 518 104H540V144" />
        <path d="M496 56V82Q496 104 518 104H746V144" />
        <path d="M496 56V82Q496 104 518 104H922Q944 104 944 126V144" />

        <path d="M198 202V258" />
        <path d="M540 202V258" />
        <path d="M746 202V258" />
        <path d="M944 202V258" />

        <path d="M198 300V333Q198 350 181 350H48Q31 350 31 367V381" />
        <path d="M198 300V333Q198 350 181 350H129Q112 350 112 367V381" />
        <path d="M198 300V333Q198 350 215 350H223V381" />
        <path d="M198 300V333Q198 350 215 350H327Q344 350 344 367V381" />
        <path d="M223 423V486" />

        <path d="M540 300V381" />
        <path d="M746 300V381" />
        <path d="M944 300V381" />
      </g>
    </svg>
  );
}

export function VillaArchitectureSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-architecture-title">
      <header className={styles.header}>
        <h2 className={styles.title} id="villa-architecture-title">
          Una <span>arquitectura</span> simple
          <br />
          para encontrar todo <span>rápidamente</span>
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p>
          La arquitectura se diseñó para llevar al visitante desde una necesidad amplia hasta una
          acción concreta. Cada módulo utiliza una lógica progresiva: descubrir, filtrar,
          seleccionar y profundizar.
        </p>
      </header>

      <div className={styles.diagram} aria-label="Diagrama de arquitectura de la información">
        <ArchitectureConnectors />

        <DiagramNode className={styles.homeNode} tone="home">
          Home
        </DiagramNode>

        <DiagramNode className={styles.interactiveNode} tone="module">
          Interactivo
        </DiagramNode>
        <DiagramNode className={styles.servicesNode} tone="module">
          Servicios
        </DiagramNode>
        <DiagramNode className={styles.lodgingNode} tone="module">
          Hospedaje
        </DiagramNode>
        <DiagramNode className={styles.eventsNode} tone="module">
          Eventos
        </DiagramNode>

        <DiagramNode className={styles.mapNode} tone="detail">
          Mapa turístico
        </DiagramNode>
        <DiagramNode className={styles.servicesCategoriesNode} tone="detail">
          Categorías
        </DiagramNode>
        <DiagramNode className={styles.lodgingCategoriesNode} tone="detail">
          Categorías
        </DiagramNode>
        <DiagramNode className={styles.calendarNode} tone="detail">
          Calendario
        </DiagramNode>

        <DiagramNode className={styles.gameNode} tone="detail">
          Juego
        </DiagramNode>
        <DiagramNode className={styles.readingNode} tone="detail">
          Lectura
        </DiagramNode>
        <DiagramNode className={styles.galleryNode} tone="detail">
          Galería
        </DiagramNode>
        <DiagramNode className={styles.cameraNode} tone="detail">
          Cámara / AR
        </DiagramNode>

        <DiagramNode className={styles.galleryDetailNode} tone="detail">
          <ul>
            <li>Fotografías</li>
            <li>Panorámica</li>
            <li>Video drone</li>
          </ul>
        </DiagramNode>
        <DiagramNode className={styles.servicesDetailNode} tone="detail">
          <ul>
            <li>Mapa</li>
            <li>Detalle</li>
          </ul>
        </DiagramNode>
        <DiagramNode className={styles.lodgingDetailNode} tone="detail">
          <ul>
            <li>Mapa</li>
            <li>Detalle</li>
          </ul>
        </DiagramNode>
        <DiagramNode className={styles.eventsDetailNode} tone="detail">
          <ul>
            <li>Detalle</li>
            <li>Fotos</li>
            <li>Drone</li>
          </ul>
        </DiagramNode>
      </div>
    </section>
  );
}
