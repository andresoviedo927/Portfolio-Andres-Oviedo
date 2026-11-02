import { useMobileCaseStudy } from '../hooks/useMobileCaseStudy';
import { useHorizontalDrag } from '../hooks/useHorizontalDrag';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import { useLayoutEffect, useRef, type ReactNode } from 'react';
import styles from './TuapArchitectureSection.module.css';

type NodeTone = 'root' | 'channel' | 'role' | 'detail';

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
    <svg aria-hidden="true" className={styles.connectors} fill="none" viewBox="0 0 992 692">
      <defs>
        <marker
          id="tuap-architecture-arrow"
          markerHeight="12"
          markerUnits="userSpaceOnUse"
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
        stroke="#1A212B"
        strokeDasharray="9 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M496 56v44" markerEnd="url(#tuap-architecture-arrow)" />
        <path d="M496 138v44" markerEnd="url(#tuap-architecture-arrow)" />

        <path
          d="M496 220v30q0 18-18 18H337q-18 0-18 18v26"
          markerEnd="url(#tuap-architecture-arrow)"
        />
        <path
          d="M496 220v30q0 18 18 18h218q18 0 18 18v26"
          markerEnd="url(#tuap-architecture-arrow)"
        />

        <path
          d="M337 366v20q0 14-14 14H185q-14 0-14 14v12"
          markerEnd="url(#tuap-architecture-arrow)"
        />
        <path d="M337 366v34h-28v26" markerEnd="url(#tuap-architecture-arrow)" />
        <path
          d="M337 366v20q0 14 14 14h108q14 0 14 14v12"
          markerEnd="url(#tuap-architecture-arrow)"
        />
        <path
          d="M750 366v20q0 14-14 14h-62q-14 0-14 14v12"
          markerEnd="url(#tuap-architecture-arrow)"
        />
        <path
          d="M750 366v20q0 14 14 14h34q14 0 14 14v12"
          markerEnd="url(#tuap-architecture-arrow)"
        />

        <path d="M185 464v46M308 464v46M473 464v46M660 464v46M812 464v46" />
        <path d="M185 510h627" />
        <path d="M496 510v46" markerEnd="url(#tuap-architecture-arrow)" />

        <path
          d="M496 610v18q0 12-12 12H289q-12 0-12 12v2"
          markerEnd="url(#tuap-architecture-arrow)"
        />
        <path d="M496 610v30h28v14" markerEnd="url(#tuap-architecture-arrow)" />
        <path
          d="M496 610v18q0 12 12 12h223q12 0 12 12v2"
          markerEnd="url(#tuap-architecture-arrow)"
        />
      </g>
    </svg>
  );
}

function TabletConnectors() {
  return (
    <svg
      aria-hidden="true"
      className={styles.tabletConnectors}
      fill="none"
      viewBox="0 0 656 668"
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id="tuap-tablet-arrow"
          markerHeight="12"
          markerWidth="12"
          markerUnits="userSpaceOnUse"
          orient="auto"
          refX="10"
          refY="6"
          viewBox="0 0 12 12"
        >
          <path d="M0 0 12 6 0 12Z" fill="#1A212B" />
        </marker>
      </defs>
      <g
        stroke="#1A212B"
        strokeDasharray="9 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M328 52v38" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M328 134v38" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M328 216v26q0 18-18 18H198.5q-18 0-18 18v24" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M328 216v26q0 18 18 18h189q18 0 18 18v24" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M180.5 354v14q0 14-14 14H62q-18 0-18 18v8" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M180.5 354v14q0 14-14 14H165q-14 0-14 14v12" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M180.5 354v14q0 14 14 14h75q18 0 18 18v8" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M553 354v14q0 14-14 14h-27q-18 0-18 18v8" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M553 354v14q0 14 14 14h16q18 0 18 18v8" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M44 452v24q0 20 20 20h244q20 0 20 20v22" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M151 452v24q0 20 20 20h137 M287.5 452v24q0 20 20 20 M494 452v24q0 20-20 20H348q-20 0-20 20 M601 452v24q0 20-20 20H348" />
        <path d="M328 590v8q0 12-12 12H149q-12 0-12 12v6" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M328 590v8q0 12 12 12h4q12 0 12 12v6" markerEnd="url(#tuap-tablet-arrow)" />
        <path d="M328 590v8q0 12 12 12h195q12 0 12 12v6" markerEnd="url(#tuap-tablet-arrow)" />
      </g>
    </svg>
  );
}

function MobileConnectors() {
  return (
    <svg aria-hidden="true" className={styles.mobileConnectors} fill="none" viewBox="0 0 567 553">
      <defs>
        <marker
          id="tuap-mobile-arrow"
          markerHeight="12"
          markerWidth="12"
          markerUnits="userSpaceOnUse"
          orient="auto"
          refX="10"
          refY="6"
          viewBox="0 0 12 12"
        >
          <path d="M0 0 12 6 0 12Z" fill="#1A212B" />
        </marker>
      </defs>
      <g
        stroke="#1A212B"
        strokeDasharray="9 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M283.5 38v36" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M283.5 115v36" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M283.5 192v8q0 20-20 20H185q-20 0-20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M283.5 192v8q0 20 20 20h149q20 0 20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M165 288v12q0 16-16 16H60.5q-20 0-20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M165 288v12q0 16-16 16h-10v24" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M165 288v12q0 16 16 16h63.5q20 0 20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M472.5 288v12q0 16-16 16h-18q-20 0-20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M472.5 288v12q0 16 16 16H497q20 0 20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M40.5 384v8q0 20 20 20h203q20 0 20 20v4" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M139 384v8q0 20 20 20h104.5 M264.5 384v8q0 20 19 20 M418.5 384v8q0 20-20 20h-95q-20 0-20 20 M517 384v8q0 20-20 20H303.5" />
        <path d="M283.5 480v2q0 18-18 18H138q-20 0-20 16" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M283.5 480v2q0 18 18 18h5v16" markerEnd="url(#tuap-mobile-arrow)" />
        <path d="M283.5 480v2q0 18 18 18h151q20 0 20 16" markerEnd="url(#tuap-mobile-arrow)" />
      </g>
    </svg>
  );
}

export function TuapArchitectureSection() {
  const mobile = useMobileCaseStudy();
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useHorizontalDrag();
  useLayoutEffect(() => {
    const element = viewport.current;
    if (!mobile || !element) return;
    const center = () => {
      element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
    };
    center();
    const observer = new ResizeObserver(center);
    observer.observe(element);
    return () => observer.disconnect();
  }, [mobile]);
  return (
    <MobileCaseStudySection title="Arquitectura">
      <section className={styles.section} aria-labelledby="tuap-architecture-title">
        <header className={styles.header}>
          <h2 id="tuap-architecture-title">
            Una <span>arquitectura</span> simple
            <br />
            para encontrar todo <span>rápidamente</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            TuAp se estructuró como un ecosistema multicanal donde Web y App comparten una misma
            lógica funcional, adaptando navegación, roles y capacidades según el contexto de uso.
          </p>
        </header>

        <div
          className={styles.diagram}
          ref={viewport}
          {...(mobile ? drag : {})}
          tabIndex={mobile ? 0 : undefined}
          role={mobile ? 'region' : undefined}
          aria-label="Diagrama de arquitectura de TuAp"
        >
          <div className={styles.diagramCanvas}>
            <Connectors />
            <TabletConnectors />
            <MobileConnectors />

            <DiagramNode className={styles.tuapNode} tone="root">
              TUAP
            </DiagramNode>
            <DiagramNode className={styles.accessNode} tone="detail">
              Acceso + Rol
            </DiagramNode>
            <DiagramNode className={styles.businessNode} tone="detail">
              Selección negocio
            </DiagramNode>

            <DiagramNode className={styles.webNode} tone="channel">
              WEB
            </DiagramNode>
            <DiagramNode className={styles.appNode} tone="channel">
              APP
            </DiagramNode>

            <DiagramNode className={styles.webClientNode} tone="role">
              Cliente
            </DiagramNode>
            <DiagramNode className={styles.webSellerNode} tone="role">
              Vendedor
            </DiagramNode>
            <DiagramNode className={styles.adminNode} tone="role">
              Administrador
            </DiagramNode>
            <DiagramNode className={styles.appClientNode} tone="role">
              Cliente
            </DiagramNode>
            <DiagramNode className={styles.appSellerNode} tone="role">
              Vendedor
            </DiagramNode>

            <DiagramNode className={styles.coreNode} tone="channel">
              Núcleo compartido
            </DiagramNode>
            <DiagramNode className={styles.searchNode} tone="detail">
              Buscar · Comprar · Gestionar
            </DiagramNode>
            <DiagramNode className={styles.checkoutNode} tone="detail">
              Asistente · Carrito · Pago · Pedidos
            </DiagramNode>
            <DiagramNode className={styles.trackingNode} tone="detail">
              Seguimiento · Perfil
            </DiagramNode>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
