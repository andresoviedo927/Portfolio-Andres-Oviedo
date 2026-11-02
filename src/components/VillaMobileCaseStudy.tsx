import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { images } from '../assets/images';
import contextRoadmapIcon from '../assets/icons/villa-context-roadmap.svg';
import contextSearchIcon from '../assets/icons/villa-context-search-alt.svg';
import contextSmartphoneIcon from '../assets/icons/villa-context-smartphone.svg';
import insightConnectIcon from '../assets/icons/villa-insight-connect.svg';
import insightDiscoverIcon from '../assets/icons/villa-insight-discover.svg';
import insightResolveIcon from '../assets/icons/villa-insight-resolve.svg';
import researchComplexityIcon from '../assets/images/villa-research-complexity.gif';
import researchDiscoveryIcon from '../assets/images/villa-research-discovery.gif';
import researchEcosystemIcon from '../assets/images/villa-research-ecosystem.gif';
import researchInconsistenciesIcon from '../assets/images/villa-research-inconsistencies.gif';
import researchTestingIcon from '../assets/images/villa-research-testing.gif';
import { VillaComponentSamples } from './VillaComponentSamples';
import styles from './VillaMobileCaseStudy.module.css';

export type VillaMobilePanelId =
  | 'context'
  | 'challenge'
  | 'problems'
  | 'research'
  | 'insights'
  | 'features'
  | 'architecture'
  | 'visual-system'
  | 'results';

interface VillaMobileAccordionProps {
  activePanel: VillaMobilePanelId | null;
  id: VillaMobilePanelId;
  onToggle: (id: VillaMobilePanelId) => void;
  title: string;
  children: ReactNode;
}

function VillaMobileAccordion({
  activePanel,
  children,
  id,
  onToggle,
  title,
}: VillaMobileAccordionProps) {
  const expanded = activePanel === id;
  const reactId = useId().replace(/:/g, '');
  const buttonId = `villa-mobile-${id}-${reactId}-button`;
  const panelId = `villa-mobile-${id}-${reactId}-panel`;

  return (
    <section className={styles.accordion} data-expanded={expanded}>
      <h2>
        <button
          aria-controls={panelId}
          aria-expanded={expanded}
          className={styles.accordionButton}
          id={buttonId}
          onClick={() => onToggle(id)}
          type="button"
        >
          <span>{title}</span>
          <i aria-hidden="true" className="fi fi-sr-caret-down" />
        </button>
      </h2>
      <div
        aria-hidden={!expanded}
        aria-labelledby={buttonId}
        className={styles.accordionPanel}
        id={panelId}
        role="region"
      >
        <div className={styles.accordionPanelInner}>{children}</div>
      </div>
    </section>
  );
}

const CONTEXT_HIGHLIGHTS = [
  {
    title: 'Información dispersa',
    description:
      'Lugares, servicios, hospedajes y eventos estaban distribuidos entre diferentes fuentes.',
    icon: contextSearchIcon,
  },
  {
    title: 'Descubrimiento poco integrado',
    description:
      'Encontrar información útil no siempre ayudaba a conocer mejor el destino o descubrir nuevas experiencias.',
    icon: contextRoadmapIcon,
  },
  {
    title: 'Oportunidad de conexión',
    description:
      'Existía espacio para unir orientación, cultura, entretenimiento y comercio local dentro de una misma experiencia.',
    icon: contextSmartphoneIcon,
  },
] as const;

const PROBLEMS = [
  {
    title: 'Demasiados puntos de consulta',
    description:
      'El visitante debía cambiar entre mapas, redes sociales, páginas de establecimientos y otras fuentes según la necesidad que quisiera resolver.',
    icon: 'fi fi-sr-clip-file',
  },
  {
    title: 'Falta de jerarquía',
    description:
      'La cantidad de lugares y opciones disponibles podía dificultar la exploración cuando no existía una estructura clara para organizar y priorizar la información.',
    icon: 'fi fi-sr-window-alt',
  },
  {
    title: 'Experiencia poco integrada',
    description:
      'Orientación, información práctica y contenido cultural aparecían separados, reduciendo la posibilidad de vivir el destino como una experiencia continua.',
    icon: 'fi fi-sr-payment-authentication',
  },
] as const;

const RESEARCH_METHODS = [
  {
    title: 'Entender el ecosistema',
    description:
      'Se analizaron 32 servicios, 12 hospedajes, 8 eventos y distintos puntos turísticos para identificar necesidades y tipos de contenido.',
    icon: researchEcosystemIcon,
  },
  {
    title: 'Detectar inconsistencias',
    description:
      'Los registros presentaban diferentes niveles de información y calidad de datos, por lo que fue necesario diseñar fichas flexibles.',
    icon: researchInconsistenciesIcon,
  },
  {
    title: 'Reducir complejidad',
    description:
      'La información se organizó en 4 entradas principales y categorías específicas para evitar listados extensos y difíciles de recorrer.',
    icon: researchComplexityIcon,
  },
  {
    title: 'Diseñar el descubrimiento',
    description:
      'Se incorporaron mapas, narraciones, contenido multimedia y gamificación para complementar la búsqueda tradicional.',
    icon: researchDiscoveryIcon,
  },
  {
    title: 'Probar la solución',
    description:
      'El prototipo funcional permitió validar la viabilidad de los flujos, interacciones y principales estados de la experiencia.',
    icon: researchTestingIcon,
  },
] as const;

const INSIGHTS = [
  {
    title: 'Descubrir',
    description:
      'El visitante no siempre llega sabiendo qué quiere hacer. Necesita una forma sencilla de explorar lugares, actividades y nuevas opciones sin partir de una búsqueda específica.',
    persona: 'El explorador',
    icon: insightDiscoverIcon,
  },
  {
    title: 'Resolver',
    description:
      'Durante el viaje aparecen necesidades inmediatas: encontrar dónde comer, hospedarse, localizar un servicio o saber cómo llegar. La información debe ser clara y accesible en pocos pasos.',
    persona: 'El visitante práctico',
    icon: insightResolveIcon,
  },
  {
    title: 'Conectar',
    description:
      'Conocer un destino va más allá de encontrar información práctica. Las historias, imágenes y experiencias interactivas ayudan a comprender el lugar y crear una relación más cercana con su cultura.',
    persona: 'El viajero experiencial',
    icon: insightConnectIcon,
  },
] as const;

const FEATURES = [
  {
    title: 'Descubrir lugares',
    description:
      'El mapa interactivo permite explorar puntos de interés y acceder progresivamente a nuevas experiencias.',
    icon: images.villaFeatureDiscover,
  },
  {
    title: 'Resolver necesidades',
    description:
      'El directorio reúne 32 servicios en 8 categorías, facilitando el acceso a ubicación, contacto, horarios y otra información práctica.',
    icon: images.villaFeatureResolve,
  },
  {
    title: 'Encontrar dónde hospedarse',
    description:
      'Las opciones de alojamiento se organizan mediante categorías, mapas y fichas que concentran la información necesaria para tomar una decisión.',
    icon: images.villaFeatureHotel,
  },
  {
    title: 'Descubrir qué está pasando',
    description:
      'El módulo de eventos presenta festividades y actividades culturales para ampliar las posibilidades de exploración según la época del año.',
    icon: images.villaFeaturePlan,
  },
  {
    title: 'Conectar con el lugar',
    description:
      'Plaza Principal combina lectura, narración, fotografías, panorámica 360° y video para complementar la información práctica con historia y cultura.',
    icon: images.villaFeatureConnect,
  },
  {
    title: 'Participar en la experiencia',
    description:
      'La Ruta Secreta, la cámara y las experiencias concebidas para realidad aumentada introducen gamificación e interacción para convertir al visitante en parte activa del recorrido.',
    icon: images.villaFeatureRoute,
  },
] as const;

const PALETTE = [
  { name: 'Y50', hex: '#fef4e7', rgb: 'rgb(254, 244, 231)', dark: '19.31 AAA', light: '1.09' },
  { name: 'Y75', hex: '#fad39c', rgb: 'rgb(250, 211, 156)', dark: '14.86 AAA', light: '1.41' },
  { name: 'Y100', hex: '#f7c073', rgb: 'rgb(247, 192, 115)', dark: '12.74 AAA', light: '1.65' },
  { name: 'Y200', hex: '#f4a536', rgb: 'rgb(244, 165, 54)', dark: '10.28 AAA', light: '2.04' },
  { name: 'Y300', hex: '#f2930d', rgb: 'rgb(242, 147, 13)', dark: '8.95 AAA', light: '2.35' },
  { name: 'Y400', hex: '#a96709', rgb: 'rgb(169, 103, 9)', dark: '4.63 AA', light: '4.53 AAA' },
  { name: 'Y500', hex: '#945a08', rgb: 'rgb(148, 90, 8)', dark: '3.73 AA', light: '5.64 AAA' },
] as const;

const RESULT_CARDS = [
  {
    value: '52',
    title: 'Opciones turísticas centralizadas',
    description:
      '32 servicios, 12 hospedajes y 8 eventos reunidos dentro de una misma experiencia.',
    icon: 'fi fi-sr-search-alt',
  },
  {
    value: '4',
    title: 'Entradas principales',
    description:
      'Interactivo, Servicios, Hospedaje y Eventos organizan el contenido desde necesidades fáciles de reconocer.',
    icon: 'fi fi-sr-smartphone',
  },
  {
    value: '5',
    title: 'Puntos para convertir la exploración en juego',
    description:
      'La Ruta Secreta transforma el recorrido por la Plaza Principal en una experiencia progresiva de cinco etapas, complementada con contenido cultural y multimedia.',
    icon: 'fi fi-sr-payment-authentication',
  },
  {
    value: '8+3',
    title: 'Formas de organizar la oferta',
    description:
      '8 categorías estructuran el directorio de servicios y 3 tipologías organizan las opciones de hospedaje.',
    icon: 'fi fi-br-roadmap',
  },
] as const;

function IconTextRows({
  items,
}: {
  items: ReadonlyArray<{ description: string; icon?: string; iconSrc?: string; title: string }>;
}) {
  return (
    <div className={styles.iconRows}>
      {items.map((item) => (
        <article className={styles.iconRow} key={item.title}>
          <span className={styles.iconBox}>
            {item.iconSrc ? (
              <img alt="" aria-hidden="true" src={item.iconSrc} />
            ) : (
              <i aria-hidden="true" className={item.icon} />
            )}
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ResearchCards() {
  return (
    <div className={styles.mobileCards}>
      {RESEARCH_METHODS.map((method) => (
        <article className={styles.mobileCard} key={method.title}>
          <img alt="" aria-hidden="true" src={method.icon} />
          <div>
            <h3>{method.title}</h3>
            <p>{method.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FeatureCards() {
  return (
    <div className={styles.mobileCards}>
      {FEATURES.map((feature) => (
        <article className={styles.mobileCard} key={feature.title}>
          <img alt="" aria-hidden="true" src={feature.icon} />
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div
      className={styles.architectureDiagram}
      aria-label="Diagrama de arquitectura de la información"
    >
      <svg aria-hidden="true" viewBox="0 0 334 435">
        <defs>
          <marker
            id="villa-mobile-arrow"
            markerHeight="8"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="4"
          >
            <path d="M0 0 8 4 0 8Z" fill="#1A212B" />
          </marker>
        </defs>
        <g
          fill="none"
          markerEnd="url(#villa-mobile-arrow)"
          stroke="#1A212B"
          strokeDasharray="5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        >
          <path d="M167 44V60H43V82" />
          <path d="M167 44V60H126V82" />
          <path d="M167 44V60H209V82" />
          <path d="M167 44V60H292V82" />
          <path d="M43 116V147" />
          <path d="M126 116V147" />
          <path d="M209 116V147" />
          <path d="M292 116V147" />
          <path d="M43 181V201H20V222" />
          <path d="M43 181V201H64V222" />
          <path d="M43 181V201H108V222" />
          <path d="M43 181V201H152V222" />
          <path d="M108 256V282" />
          <path d="M126 181V282" />
          <path d="M209 181V282" />
          <path d="M292 181V282" />
        </g>
      </svg>
      <span className={`${styles.archNode} ${styles.archHome}`}>Home</span>
      <span className={`${styles.archNode} ${styles.archModule} ${styles.archInteractive}`}>
        Interactivo
      </span>
      <span className={`${styles.archNode} ${styles.archModule} ${styles.archServices}`}>
        Servicios
      </span>
      <span className={`${styles.archNode} ${styles.archModule} ${styles.archLodging}`}>
        Hospedaje
      </span>
      <span className={`${styles.archNode} ${styles.archModule} ${styles.archEvents}`}>
        Eventos
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archMap}`}>
        Mapa turístico
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archServiceCategory}`}>
        Categorías
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archLodgingCategory}`}>
        Categorías
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archCalendar}`}>
        Calendario
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archGame}`}>Juego</span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archReading}`}>
        Lectura
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archGallery}`}>
        Galería
      </span>
      <span className={`${styles.archNode} ${styles.archDetail} ${styles.archCamera}`}>
        Cámara / AR
      </span>
      <span className={`${styles.archNode} ${styles.archDetailList} ${styles.archGalleryDetail}`}>
        • Fotografías
        <br />• Panorámica
        <br />• Video drone
      </span>
      <span className={`${styles.archNode} ${styles.archDetailList} ${styles.archServicesDetail}`}>
        • Mapa
        <br />• Detalle
      </span>
      <span className={`${styles.archNode} ${styles.archDetailList} ${styles.archLodgingDetail}`}>
        • Mapa
        <br />• Detalle
      </span>
      <span className={`${styles.archNode} ${styles.archDetailList} ${styles.archEventsDetail}`}>
        • Detalle
        <br />• Fotos
        <br />• Drone
      </span>
    </div>
  );
}

type VisualTab = 'colors' | 'typography-icons' | 'components';

function MobileContrastBadge({ value, light = false }: { value: string; light?: boolean }) {
  const [ratio, rating] = value.split(' ');
  return (
    <span className={styles.contrastBadge} data-light={light || undefined}>
      <i aria-hidden="true" />
      <b>{ratio}</b>
      {rating && <small>{rating}</small>}
    </span>
  );
}

function VisualSystemTabs() {
  const [activeTab, setActiveTab] = useState<VisualTab>('colors');
  const [tabDirection, setTabDirection] = useState<'backward' | 'forward'>('forward');
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabDragRef = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false });
  const suppressTabClickRef = useRef(false);
  const componentsScrollerRef = useRef<HTMLDivElement>(null);
  const componentsDragRef = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false });
  const suppressComponentClickRef = useRef(false);
  const [componentsScroll, setComponentsScroll] = useState(0);
  const tabs: Array<{ id: VisualTab; label: string }> = [
    { id: 'colors', label: 'Colores' },
    { id: 'typography-icons', label: 'Tipografía e iconos' },
    { id: 'components', label: 'Componentes' },
  ];
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  useLayoutEffect(() => {
    const tabList = tabListRef.current;
    if (!tabList) return undefined;

    const updateIndicator = () => {
      const activeButton = tabList.querySelector<HTMLButtonElement>(
        `#villa-mobile-tab-${activeTab}`,
      );

      if (activeButton) {
        setIndicator({ left: activeButton.offsetLeft, width: activeButton.offsetWidth });
        const inset = parseFloat(getComputedStyle(tabList).paddingInlineStart) || 0;
        const left = activeButton.offsetLeft;
        const right = left + activeButton.offsetWidth;
        let target = tabList.scrollLeft;
        if (left < target + inset) target = left - inset;
        else if (right > target + tabList.clientWidth - inset) {
          target = right - tabList.clientWidth + inset;
        }
        if (target !== tabList.scrollLeft) {
          tabList.scrollTo({
            left: target,
            behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          });
        }
      }
    };

    updateIndicator();
    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(tabList);

    return () => resizeObserver.disconnect();
  }, [activeTab]);

  const selectTab = (nextTab: VisualTab) => {
    const nextTabIndex = tabs.findIndex((tab) => tab.id === nextTab);

    if (nextTab === activeTab) return;

    setTabDirection(nextTabIndex < activeTabIndex ? 'backward' : 'forward');
    setActiveTab(nextTab);
  };

  const startTabDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    suppressTabClickRef.current = false;
    event.currentTarget.scrollTo({ left: event.currentTarget.scrollLeft, behavior: 'instant' });
    tabDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const moveTabDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = tabDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(distance) > 5) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = 'true';
    }
    if (!drag.moved) return;
    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
  };

  const finishTabDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = tabDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    suppressTabClickRef.current = drag.moved;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delete event.currentTarget.dataset.dragging;
    drag.pointerId = -1;
  };

  const startComponentsDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    // Keep the sample slider and switches independently interactive.
    if ((event.target as HTMLElement).closest('input, label')) return;
    suppressComponentClickRef.current = false;
    componentsDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const moveComponentsDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = componentsDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(distance) > 5) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = 'true';
    }
    if (!drag.moved) return;
    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
  };

  const finishComponentsDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = componentsDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    suppressComponentClickRef.current = drag.moved;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delete event.currentTarget.dataset.dragging;
    drag.pointerId = -1;
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, tab: VisualTab) => {
    const currentIndex = tabs.findIndex((item) => item.id === tab);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex].id;
    selectTab(nextTab);
    document.getElementById(`villa-mobile-tab-${nextTab}`)?.focus({ preventScroll: true });
  };

  return (
    <div className={styles.visualTabs}>
      <div
        aria-label="Fundamentos del sistema visual"
        className={styles.tabList}
        ref={tabListRef}
        role="tablist"
        onPointerDown={startTabDrag}
        onPointerMove={moveTabDrag}
        onPointerUp={finishTabDrag}
        onPointerCancel={finishTabDrag}
        onClickCapture={(event) => {
          if (!suppressTabClickRef.current || event.detail === 0) return;
          suppressTabClickRef.current = false;
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        {tabs.map((tab) => (
          <button
            aria-controls={`villa-mobile-tabpanel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            id={`villa-mobile-tab-${tab.id}`}
            key={tab.id}
            onClick={() => selectTab(tab.id)}
            onKeyDown={(event) => handleTabKeyDown(event, tab.id)}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
        <span
          aria-hidden="true"
          className={styles.tabIndicator}
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>

      <div
        aria-labelledby={`villa-mobile-tab-${activeTab}`}
        className={styles.tabPanel}
        data-direction={tabDirection}
        id={`villa-mobile-tabpanel-${activeTab}`}
        key={activeTab}
        role="tabpanel"
        tabIndex={0}
      >
        {activeTab === 'colors' && (
          <div className={styles.palette}>
            {PALETTE.map((color) => (
              <div className={styles.colorRow} key={color.name}>
                <div className={styles.swatch} style={{ backgroundColor: color.hex }}>
                  <MobileContrastBadge value={color.dark} />
                  <MobileContrastBadge value={color.light} light />
                </div>
                <div>
                  <strong>{color.name}</strong>
                  <span>{color.hex}</span>
                  <span>{color.rgb}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'typography-icons' && (
          <div className={styles.typographyIconsCard}>
            <div className={styles.typographyIconsItem}>
              <span className={styles.typographyIconsLeading}>
                <i aria-hidden="true" className="fi fi-sr-square-a" />
              </span>
              <div>
                <strong>Lexend</strong>
                <span>Fuente</span>
              </div>
            </div>
            <div className={styles.typographyIconsItem}>
              <span className={styles.typographyIconsLeading}>
                <i aria-hidden="true" className="fi fi-sr-select" />
              </span>
              <div>
                <strong>Uicons Flaticon</strong>
                <span>Iconos</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className={styles.componentsCard}>
            <div
              className={styles.componentsScroller}
              ref={componentsScrollerRef}
              tabIndex={0}
              aria-label="Explorar componentes del sistema visual"
              onPointerDown={startComponentsDrag}
              onPointerMove={moveComponentsDrag}
              onPointerUp={finishComponentsDrag}
              onPointerCancel={finishComponentsDrag}
              onDragStart={(event) => event.preventDefault()}
              onClickCapture={(event) => {
                if (!suppressComponentClickRef.current || event.detail === 0) return;
                suppressComponentClickRef.current = false;
                event.preventDefault();
                event.stopPropagation();
              }}
              onScroll={(event) => {
                const scroller = event.currentTarget;
                const distance = scroller.scrollWidth - scroller.clientWidth;
                setComponentsScroll(distance > 0 ? (scroller.scrollLeft / distance) * 100 : 0);
              }}
            >
              <VillaComponentSamples className={styles.componentsCanvas} />
            </div>
            <input
              className={styles.componentsScrollbar}
              type="range"
              min="0"
              max="100"
              step="any"
              value={componentsScroll}
              aria-label="Desplazamiento de componentes"
              onChange={(event) => {
                const value = Number(event.target.value);
                setComponentsScroll(value);
                const scroller = componentsScrollerRef.current;
                if (scroller)
                  scroller.scrollLeft =
                    ((scroller.scrollWidth - scroller.clientWidth) * value) / 100;
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface VillaMobileSectionsProps {
  activePanel: VillaMobilePanelId | null;
  onToggle: (id: VillaMobilePanelId) => void;
}

export function VillaMobileSections({ activePanel, onToggle }: VillaMobileSectionsProps) {
  return (
    <div className={styles.mobileSections}>
      <VillaMobileAccordion
        activePanel={activePanel}
        id="context"
        onToggle={onToggle}
        title="Contexto del proyecto"
      >
        <div className={styles.bodyCopy}>
          <p>
            Planear o recorrer Villa de Leyva implicaba consultar mapas, redes sociales, páginas de
            establecimientos y fuentes institucionales para encontrar información que rara vez
            estaba reunida en un mismo lugar. Esta fragmentación dificultaba orientarse, descubrir
            nuevas opciones y tomar decisiones durante el recorrido.
          </p>
          <p>
            A partir de esta situación surgió la oportunidad de diseñar una experiencia digital
            capaz de centralizar la información turística y, al mismo tiempo, hacer que explorar el
            destino fuera más visual, interactivo y cercano.
          </p>
        </div>
        <IconTextRows items={CONTEXT_HIGHLIGHTS.map((item) => ({ ...item, iconSrc: item.icon }))} />
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="challenge"
        onToggle={onToggle}
        title="Desafío de diseño"
      >
        <div className={styles.bodyCopy}>
          <p>
            El reto no era únicamente reunir información turística, sino definir cómo organizarla y
            priorizarla para que el visitante pudiera encontrar lo que necesitaba sin sentirse
            abrumado por la cantidad de opciones disponibles.
          </p>
          <p>
            La solución debía conectar necesidades muy distintas; descubrir lugares, buscar
            servicios, encontrar hospedaje o consultar eventos, todo dentro de una misma
            arquitectura, manteniendo recorridos simples y predecibles. A esto se sumaba el desafío
            de incorporar experiencias interactivas y contenido cultural sin romper la claridad de
            la navegación ni convertir el producto en una suma de funcionalidades aisladas.
          </p>
        </div>
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="problems"
        onToggle={onToggle}
        title="Problemas y fricciones"
      >
        <IconTextRows items={PROBLEMS} />
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="research"
        onToggle={onToggle}
        title="Metodología de UX Research"
      >
        <p className={styles.introCopy}>
          La evidencia disponible del proyecto corresponde principalmente a investigación
          documental, análisis de contenido turístico y estructuración de información. A partir de
          este proceso, se revisó la oferta turística de Villa de Leyva y se identificaron patrones
          en la forma en que estaban organizados los servicios, hospedajes, eventos y puntos de
          interés. Esta investigación permitió transformar información dispersa en una estructura de
          producto más simple, clara y fácil de explorar.
        </p>
        <ResearchCards />
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="insights"
        onToggle={onToggle}
        title="Insights clave de usuarios"
      >
        <p className={styles.introCopy}>
          La investigación documental, el análisis de la información turística y las decisiones
          reflejadas en el producto permitieron sintetizar la experiencia del visitante en tres
          necesidades principales: descubrir nuevas opciones, resolver necesidades prácticas y
          conectar con la historia y cultura del destino. Estas necesidades orientaron la estructura
          de navegación, la organización del contenido y el desarrollo de experiencias interactivas.
        </p>
        <div className={styles.insightsList}>
          {INSIGHTS.map((insight) => (
            <article className={styles.insight} key={insight.title}>
              <span className={styles.iconBox}>
                <img alt="" aria-hidden="true" src={insight.icon} />
              </span>
              <div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <span className={styles.persona}>{insight.persona}</span>
              </div>
            </article>
          ))}
        </div>
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="features"
        onToggle={onToggle}
        title="Funcionalidades clave"
      >
        <p className={styles.introCopy}>
          Las funcionalidades se diseñaron alrededor de tres necesidades principales del visitante:
          descubrir, resolver y conectar con el destino.
        </p>
        <FeatureCards />
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="architecture"
        onToggle={onToggle}
        title="Arquitectura"
      >
        <p className={styles.introCopy}>
          La arquitectura se diseñó para llevar al visitante desde una necesidad amplia hasta una
          acción concreta. Cada módulo utiliza una lógica progresiva: descubrir, filtrar,
          seleccionar y profundizar.
        </p>
        <ArchitectureDiagram />
      </VillaMobileAccordion>

      <VillaMobileAccordion
        activePanel={activePanel}
        id="visual-system"
        onToggle={onToggle}
        title="Sistema visual"
      >
        <div className={styles.visualIntro}>
          <img alt="Iglesia colonial de Villa de Leyva" src={images.villaLogo} />
          <p>
            La identidad visual busca que explorar Villa de Leyva se sienta cercano, dinámico y
            fácil de entender. Los tonos oscuros dan protagonismo a fotografías, mapas y contenido
            multimedia, mientras que el naranja destaca las principales interacciones. La
            combinación tipográfica y los componentes compartidos mantienen una experiencia clara,
            coherente y reconocible.
          </p>
        </div>
        <article className={`${styles.mobileCard} ${styles.principlesCard}`}>
          <img alt="" aria-hidden="true" src={images.villaPrinciples} />
          <div>
            <h3>Principios de interfaz</h3>
            <p>
              La experiencia se construyó sobre patrones simples y repetibles para que el usuario
              pudiera aprender rápidamente cómo moverse por el producto. La accesibilidad, el
              feedback de las acciones y la jerarquía progresiva de la información formaron parte de
              estas decisiones. Además, la orientación landscape permitió aprovechar mejor el
              espacio para experiencias donde mapas, imágenes y contenido interactivo tienen un
              papel central.
            </p>
          </div>
        </article>
        <VisualSystemTabs />
      </VillaMobileAccordion>
    </div>
  );
}

export function VillaMobileResults({ activePanel, onToggle }: VillaMobileSectionsProps) {
  return (
    <div className={styles.mobileResults}>
      <VillaMobileAccordion
        activePanel={activePanel}
        id="results"
        onToggle={onToggle}
        title="Resultados e impacto"
      >
        <p className={styles.introCopy}>
          El MVP permitió convertir información turística dispersa en una experiencia funcional y
          estructurada. A falta de pruebas formales con usuarios, estos resultados reflejan el
          alcance alcanzado por el producto.
        </p>
        <div className={styles.resultCards}>
          {RESULT_CARDS.map((result) => (
            <article className={styles.resultCard} key={result.title}>
              <span className={styles.iconBox}>
                <i aria-hidden="true" className={result.icon} />
              </span>
              <div>
                <strong>{result.value}</strong>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            </article>
          ))}
        </div>
      </VillaMobileAccordion>
    </div>
  );
}
