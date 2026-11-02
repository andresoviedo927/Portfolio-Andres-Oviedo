import { useMobileCaseStudy } from '../hooks/useMobileCaseStudy';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import { useLayoutEffect, useRef, type ReactNode } from 'react';
import styles from './CedhuArchitectureSection.module.css';

type NodeTone = 'home' | 'module' | 'detail';

function DiagramNode({
  children,
  className,
  tone,
}: {
  children: ReactNode;
  className: string;
  tone: NodeTone;
}) {
  return <div className={`${styles.node} ${styles[tone]} ${className}`}>{children}</div>;
}

function Connectors() {
  return (
    <svg aria-hidden="true" className={styles.connectors} fill="none" viewBox="0 0 1170 430">
      <defs>
        <marker
          id="cedhu-architecture-arrow"
          markerHeight="14"
          markerUnits="userSpaceOnUse"
          markerWidth="14"
          orient="auto"
          refX="12"
          refY="7"
          viewBox="0 0 14 14"
        >
          <path d="M0 0 14 7 0 14Z" fill="#1A212B" />
        </marker>
      </defs>

      <g
        markerEnd="url(#cedhu-architecture-arrow)"
        stroke="#1A212B"
        strokeDasharray="10 10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M585 56v28q0 24-24 24H302q-24 0-24 24v18" />
        <path d="M585 56v28q0 24 24 24h162q24 0 24 24v18" />
        <path d="M585 56v28q0 24 24 24h409q24 0 24 24v18" />

        <path d="M278 200v24q0 20-20 20H62q-20 0-20 20v18" />
        <path d="M278 200v24q0 20-20 20h-81q-20 0-20 20v18" />
        <path d="M278 200v44h-27v38" />
        <path d="M278 200v24q0 20 20 20h64v38" />
        <path d="M278 200v24q0 20 20 20h238v38" />
        <path d="M278 200v24q0 20 20 20h369v38" />

        <path d="M1042 200v24q0 20-20 20h-82q-20 0-20 20v18" />
        <path d="M1042 200v82" />
        <path d="M1042 200v24q0 20 20 20h50q20 0 20 20v18" />

        <path d="M536 334v48" />
      </g>
    </svg>
  );
}

function TabletConnectors({ mobile = false }: { mobile?: boolean }) {
  const branches = mobile ? [260.5, 591.5, 758.5] : [293.5, 665, 850.5];
  const modules = mobile
    ? [46.5, 132.5, 203, 291, 391, 481.5]
    : [53.5, 150, 228, 327, 440.5, 542.5];
  const navbar = mobile ? [688.5, 760, 830] : [772.5, 852, 930];
  const connect = (x: number, y: number, target: number, bottom: number) => {
    if (x === target) return `M${x} ${y}V${bottom}`;
    const direction = target > x ? 1 : -1;
    const middle = y + (bottom - y) / 2;
    return `M${x} ${y}V${middle - 16}Q${x} ${middle} ${x + direction * 16} ${middle}H${target - direction * 16}Q${target} ${middle} ${target} ${middle + 16}V${bottom}`;
  };
  return (
    <svg
      aria-hidden="true"
      className={styles.tabletConnectors}
      viewBox={mobile ? '0 0 855 332' : '0 0 958 414'}
      fill="none"
    >
      <defs>
        <marker
          id="cedhu-tablet-arrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0 0 12 6 0 12Z" fill="#1A212B" />
        </marker>
      </defs>
      <g
        stroke="#1A212B"
        strokeWidth="3"
        strokeDasharray="8 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#cedhu-tablet-arrow)"
      >
        {branches.map((x) => (
          <path
            key={`home-${x}`}
            d={mobile ? connect(427.5, 34, x, 127) : connect(479, 48, x, 141)}
          />
        ))}
        {modules.map((x) => (
          <path
            key={`module-${x}`}
            d={mobile ? connect(260.5, 162, x, 223) : connect(293.5, 186, x, 279)}
          />
        ))}
        {navbar.map((x) => (
          <path
            key={`navbar-${x}`}
            d={mobile ? connect(758.5, 162, x, 223) : connect(850.5, 194, x, 287)}
          />
        ))}
        <path d={mobile ? 'M391 255V300' : 'M440.5 316V377'} />
      </g>
    </svg>
  );
}

export function CedhuArchitectureSection() {
  const mobile = useMobileCaseStudy();
  const diagramRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!mobile || !diagramRef.current) return;
    const diagram = diagramRef.current;
    let previousWidth = 0;
    const centerHome = () => {
      if (diagram.clientWidth && diagram.clientWidth !== previousWidth) {
        previousWidth = diagram.clientWidth;
        diagram.scrollTo({
          left: (diagram.scrollWidth - diagram.clientWidth) / 2,
          behavior: 'instant',
        });
      }
    };
    centerHome();
    const observer = new ResizeObserver(centerHome);
    observer.observe(diagram);
    return () => observer.disconnect();
  }, [mobile]);
  return (
    <MobileCaseStudySection title="Arquitectura">
      <section className={styles.section} aria-labelledby="cedhu-architecture-title">
        <header className={styles.header}>
          <h2 id="cedhu-architecture-title">
            Una <span>arquitectura</span> simple
            <br />
            para encontrar todo <span>rápidamente</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            La arquitectura se construyó alrededor de un inicio que concentra el acceso a las
            principales áreas de seguimiento académico, manteniendo una navegación simple entre
            consulta, detalle y acción.
          </p>
        </header>

        <div
          className={styles.diagram}
          ref={diagramRef}
          tabIndex={mobile ? 0 : undefined}
          role={mobile ? 'region' : undefined}
          aria-label="Diagrama de arquitectura de CEDHU"
        >
          <div className={styles.diagramCanvas}>
            <Connectors />
            <TabletConnectors mobile={mobile} />
            <DiagramNode className={styles.homeNode} tone="home">
              Home
            </DiagramNode>
            <DiagramNode className={styles.modulesNode} tone="module">
              Módulos
            </DiagramNode>
            <DiagramNode className={styles.notificationsNode} tone="module">
              Notificaciones
            </DiagramNode>
            <DiagramNode className={styles.navbarNode} tone="module">
              Navbar
            </DiagramNode>

            <DiagramNode className={styles.gradesNode} tone="detail">
              Calificaciones
            </DiagramNode>
            <DiagramNode className={styles.agendaNode} tone="detail">
              Agenda
            </DiagramNode>
            <DiagramNode className={styles.scheduleNode} tone="detail">
              Horario
            </DiagramNode>
            <DiagramNode className={styles.observationsNode} tone="detail">
              Observaciones
            </DiagramNode>
            <DiagramNode className={styles.attendanceNode} tone="detail">
              Asistencia
            </DiagramNode>
            <DiagramNode className={styles.calendarNode} tone="detail">
              Calendario
            </DiagramNode>

            <DiagramNode className={styles.startNode} tone="detail">
              Inicio
            </DiagramNode>
            <DiagramNode className={styles.contactsNode} tone="detail">
              Contactos
            </DiagramNode>
            <DiagramNode className={styles.profileNode} tone="detail">
              Perfil
            </DiagramNode>
            <DiagramNode className={styles.justifyNode} tone="detail">
              •&nbsp; Justificar
            </DiagramNode>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
