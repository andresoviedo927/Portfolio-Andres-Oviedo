import { MobileCaseStudySection, useMobileCaseStudy, useHorizontalDrag } from './MobileCaseStudySection';
import { useEffect, useRef, type ReactNode } from 'react';
import styles from './TropiStockArchitectureSection.module.css';

type NodeTone = 'root' | 'platform' | 'branch' | 'action';

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

function DesktopConnectors() {
  return (
    <svg aria-hidden="true" className={styles.desktopConnectors} fill="none" viewBox="0 0 920 406">
      <defs>
        <marker
          id="tropi-stock-arrow"
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
        <path d="M460 80v28q0 20-20 20H307q-20 0-20 20v24" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M460 80v28q0 20 20 20h135q20 0 20 20v24" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M287 228v44" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M635 228v44" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M286 312v20q0 14-14 14H157q-14 0-14 14v6" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M286 312v54" markerEnd="url(#tropi-stock-arrow)" />
        <path d="M286 312v20q0 14 14 14h153q14 0 14 14v6" markerEnd="url(#tropi-stock-arrow)" />
      </g>
    </svg>
  );
}

function WebConnectors() {
  return (
    <svg
      aria-hidden="true"
      className={styles.webConnectors}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 992 382"
    >
      <defs>
        <marker
          id="tropi-stock-web-arrow"
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
        <path
          d="M496 60v24q0 20-20 20h-74.5q-20 0-20 20v22"
          markerEnd="url(#tropi-stock-web-arrow)"
        />
        <path d="M496 60v24q0 20 20 20h187q20 0 20 20v22" markerEnd="url(#tropi-stock-web-arrow)" />
        <path d="M381.5 206v38" markerEnd="url(#tropi-stock-web-arrow)" />
        <path d="M723 206v38" markerEnd="url(#tropi-stock-web-arrow)" />
        <path
          d="M381.5 288v8q0 20-20 20h-103q-20 0-20 20v6"
          markerEnd="url(#tropi-stock-web-arrow)"
        />
        <path d="M381.5 288v8q0 20 11.5 20v26" markerEnd="url(#tropi-stock-web-arrow)" />
        <path
          d="M381.5 288v8q0 20 20 20H516q20 0 20 20v6"
          markerEnd="url(#tropi-stock-web-arrow)"
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
      preserveAspectRatio="none"
      viewBox="0 0 656 374"
    >
      <defs>
        <marker
          id="tropi-stock-tablet-arrow"
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
        <path
          d="M328 52v24q0 20-20 20h-74.5q-20 0-20 20v22"
          markerEnd="url(#tropi-stock-tablet-arrow)"
        />
        <path
          d="M328 52v24q0 20 20 20h170.5q20 0 20 20v22"
          markerEnd="url(#tropi-stock-tablet-arrow)"
        />
        <path d="M213.5 198v38" markerEnd="url(#tropi-stock-tablet-arrow)" />
        <path d="M538.5 198v38" markerEnd="url(#tropi-stock-tablet-arrow)" />
        <path
          d="M213.5 280v8q0 20-20 20h-87q-20 0-20 20v6"
          markerEnd="url(#tropi-stock-tablet-arrow)"
        />
        <path d="M213.5 280v8q0 20 11.5 20v26" markerEnd="url(#tropi-stock-tablet-arrow)" />
        <path
          d="M213.5 280v8q0 20 20 20h99q20 0 20 20v6"
          markerEnd="url(#tropi-stock-tablet-arrow)"
        />
      </g>
    </svg>
  );
}

function MobileConnectors() {
  return (
    <svg aria-hidden="true" className={styles.mobileConnectors} fill="none" viewBox="0 0 536 303">
      <defs>
        <marker
          id="tropi-stock-mobile-arrow"
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
        <path
          d="M268 38v8q0 20-20 20h-55.5q-20 0-20 20v6"
          markerEnd="url(#tropi-stock-mobile-arrow)"
        />
        <path
          d="M268 38v8q0 20 20 20h136.5q20 0 20 20v6"
          markerEnd="url(#tropi-stock-mobile-arrow)"
        />
        <path d="M172.5 134v38" markerEnd="url(#tropi-stock-mobile-arrow)" />
        <path d="M444.5 134v38" markerEnd="url(#tropi-stock-mobile-arrow)" />
        <path
          d="M172.5 214v12q0 16-16 16h-79q-16 0-16 16v10"
          markerEnd="url(#tropi-stock-mobile-arrow)"
        />
        <path d="M172.5 214v12q0 16 9.5 16v26" markerEnd="url(#tropi-stock-mobile-arrow)" />
        <path
          d="M172.5 214v12q0 16 16 16H277q16 0 16 16v10"
          markerEnd="url(#tropi-stock-mobile-arrow)"
        />
      </g>
    </svg>
  );
}

export function TropiStockArchitectureSection() {
  const mobile = useMobileCaseStudy();
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useHorizontalDrag();
  useEffect(() => {
    if (!mobile || !viewportRef.current) return;
    const viewport = viewportRef.current;
    const center = () => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
    };
    const observer = new ResizeObserver(center);
    observer.observe(viewport);
    center();
    return () => observer.disconnect();
  }, [mobile]);
  return (
    <MobileCaseStudySection title="Arquitectura">
      <section className={styles.section} aria-labelledby="tropi-stock-architecture-title">
        <header className={styles.header}>
          <h2 id="tropi-stock-architecture-title">
            Una <span>arquitectura</span> simple
            <br />
            para encontrar todo <span>rápidamente</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p>
            Diseñamos recorridos diferenciados para simplificar las acciones principales de cada
            perfil. La aplicación concentra las tareas de captura y actualización de inventarios,
            mientras que la Web organiza la consulta de registros y reportes.
          </p>
        </header>

        <div className={styles.diagramViewport} ref={viewportRef} {...(mobile ? drag : {})}>
          <div className={styles.diagram} aria-label="Diagrama de arquitectura de Tropi Stock">
            <DesktopConnectors />
            <WebConnectors />
            <TabletConnectors />
            <MobileConnectors />

            <DiagramNode className={styles.rootNode} tone="root">
              TROPI STOCK
            </DiagramNode>
            <DiagramNode className={styles.appNode} tone="platform">
              APP
            </DiagramNode>
            <DiagramNode className={styles.webNode} tone="platform">
              WEB
            </DiagramNode>
            <DiagramNode className={styles.businessNode} tone="branch">
              Selección negocio
            </DiagramNode>
            <DiagramNode className={styles.inventoryNode} tone="branch">
              Consultar inventarios
            </DiagramNode>
            <DiagramNode className={styles.registerNode} tone="action">
              Registrar inventario
            </DiagramNode>
            <DiagramNode className={styles.editNode} tone="action">
              Editar producto
            </DiagramNode>
            <DiagramNode className={styles.reportNode} tone="action">
              Generar reporte
            </DiagramNode>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
