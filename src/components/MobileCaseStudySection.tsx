import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
  type PointerEvent as ReactPointerEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import reference from './VillaMobileCaseStudy.module.css';
import styles from './MobileCaseStudySection.module.css';

const MobilePanels = createContext<{ active: string | null; toggle: (id: string) => void }>({
  active: null,
  toggle: () => undefined,
});
const subscribe = (notify: () => void) => {
  const query = matchMedia('(max-width: 719px)');
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
export function useMobileCaseStudy() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia('(max-width: 719px)').matches,
    () => false,
  );
}
export function MobileCaseStudyProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <MobilePanels.Provider
      value={{ active, toggle: (id) => setActive((current) => (current === id ? null : id)) }}
    >
      {children}
    </MobilePanels.Provider>
  );
}

// Partition the existing JSX tree; every resource stays in exactly one panel.
function partition(
  node: ReactNode,
  matches: (element: ReactElement<Record<string, unknown>>) => boolean,
): [ReactNode, ReactNode[]] {
  const found: ReactNode[] = [];
  const rest = Children.map(node, (child) => {
    if (!isValidElement<Record<string, unknown>>(child)) return child;
    if (matches(child)) {
      found.push(child);
      return null;
    }
    if (!child.props.children) return child;
    const [children, nested] = partition(child.props.children as ReactNode, matches);
    found.push(...nested);
    return cloneElement(child, undefined, children);
  });
  return [rest, found];
}
const hasClass = (element: ReactElement<Record<string, unknown>>, name: string) =>
  (name.includes('components') && element.props.mobileVisualPanel === 'components') ||
  new RegExp(`_(?:${name})_`).test(String(element.props.className ?? ''));

export function Accordion({
  title,
  children,
  visual = false,
}: {
  title: string;
  children: ReactNode;
  visual?: boolean;
}) {
  const { active, toggle } = useContext(MobilePanels);
  const expanded = active === title;
  const id = useId().replace(/:/g, '');
  return (
    <section
      className={`${reference.accordion} ${styles.accordion}`}
      data-mobile-accordion={title}
      data-expanded={expanded}
    >
      <h2>
        <button
          className={reference.accordionButton}
          id={`${id}-button`}
          aria-controls={`${id}-panel`}
          aria-expanded={expanded}
          onClick={() => toggle(title)}
          type="button"
        >
          <span>{title}</span>
          <i aria-hidden="true" className="fi fi-sr-caret-down" />
        </button>
      </h2>
      <div
        className={reference.accordionPanel}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className={reference.accordionPanelInner}>
          <div className={styles.sectionContent} data-visual={visual || undefined}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function useHorizontalDrag() {
  const drag = useRef({ pointerId: -1, x: 0, left: 0, moved: false });
  const suppressClick = useRef(false);
  return {
    onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
      if (
        event.pointerType !== 'mouse' ||
        event.button !== 0 ||
        (event.target as HTMLElement).closest('input,label')
      )
        return;
      suppressClick.current = false;
      drag.current = {
        pointerId: event.pointerId,
        x: event.clientX,
        left: event.currentTarget.scrollLeft,
        moved: false,
      };
    },
    onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
      const state = drag.current;
      if (state.pointerId !== event.pointerId) return;
      const distance = event.clientX - state.x;
      if (!state.moved && Math.abs(distance) > 5) {
        state.moved = true;
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      if (state.moved) {
        event.preventDefault();
        event.currentTarget.scrollLeft = state.left - distance;
      }
    },
    onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
      if (drag.current.pointerId !== event.pointerId) return;
      suppressClick.current = drag.current.moved;
      if (event.currentTarget.hasPointerCapture(event.pointerId))
        event.currentTarget.releasePointerCapture(event.pointerId);
      drag.current.pointerId = -1;
    },
    onPointerCancel() {
      drag.current.pointerId = -1;
    },
    onClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
      if (suppressClick.current && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }
    },
    onDragStart(event: import('react').DragEvent<HTMLDivElement>) {
      event.preventDefault();
    },
  };
}

export function ComponentViewport({
  children,
  label = 'Explorar componentes de CEDHU',
}: {
  children: ReactNode;
  label?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useHorizontalDrag();
  return (
    <div className={styles.componentViewportGroup}>
      <div
        className={styles.componentViewport}
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label={label}
        {...drag}
        onScroll={(event) => {
          const element = event.currentTarget;
          const distance = element.scrollWidth - element.clientWidth;
          setProgress(distance > 0 ? (element.scrollLeft / distance) * 100 : 0);
        }}
      >
        {children}
      </div>
      <input
        className={styles.componentScrollbar}
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={progress}
        aria-label="Desplazamiento horizontal de componentes"
        onChange={(event) => {
          const value = Number(event.target.value);
          setProgress(value);
          if (scroller.current)
            scroller.current.scrollLeft =
              ((scroller.current.scrollWidth - scroller.current.clientWidth) * value) / 100;
        }}
      />
    </div>
  );
}

function wrapComponentBoards(node: ReactNode, label?: string): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement<Record<string, unknown>>(child)) return child;
    if (hasClass(child, 'componentBoard|componentContent'))
      return <ComponentViewport label={label}>{child}</ComponentViewport>;
    return child.props.children
      ? cloneElement(
          child,
          undefined,
          wrapComponentBoards(child.props.children as ReactNode, label),
        )
      : child;
  });
}

function VisualTabs({
  children,
  combinedResources = false,
  project = 'cedhu',
}: {
  children: ReactNode;
  combinedResources?: boolean;
  project?: 'cedhu' | 'periodico' | 'tuap' | 'tropi';
}) {
  const [active, setActive] = useState('colors');
  const tabDrag = useHorizontalDrag();
  const componentDrag = useHorizontalDrag();
  const id = useId().replace(/:/g, '');
  const [intro, panels] = partition(children, (e) =>
    hasClass(e, 'colorsPanel|colorsCard|resourcesPanel|typeCard|componentsPanel|componentsCard'),
  );
  const colors = panels.filter(
    (p) => isValidElement<Record<string, unknown>>(p) && hasClass(p, 'colorsPanel|colorsCard'),
  );
  const components = panels.filter(
    (p) =>
      isValidElement<Record<string, unknown>>(p) && hasClass(p, 'componentsPanel|componentsCard'),
  );
  const type = panels.filter(
    (p) => isValidElement<Record<string, unknown>>(p) && hasClass(p, 'resourcesPanel|typeCard'),
  );
  const [, resourceItems] = partition(type, (e) => hasClass(e, 'resourceItem|typeItem'));
  const [, resourceGroups] = partition(type, (e) => hasClass(e, 'resources'));
  const resources = resourceItems.length
    ? resourceItems
    : resourceGroups.flatMap((group) =>
        isValidElement<{ children: ReactNode }>(group)
          ? Children.toArray(group.props.children).map((child) =>
              cloneElement(group, undefined, child),
            )
          : [],
      );
  const tabs = combinedResources
    ? [
        { id: 'colors', label: 'Colores', content: colors },
        {
          id: 'typography-icons',
          label: 'Tipografía e iconos',
          content: <div className={styles.resourcesCard}>{[...resources].reverse()}</div>,
        },
        {
          id: 'components',
          label: 'Componentes',
          content:
            project === 'tuap' || project === 'tropi'
              ? components
              : wrapComponentBoards(
                  components,
                  project === 'periodico' ? 'Explorar componentes de Entérese' : undefined,
                ),
        },
      ]
    : [
        { id: 'colors', label: 'Colores', content: colors },
        { id: 'typography', label: 'Tipografía', content: resources.slice(0, 1) },
        { id: 'icons', label: 'Iconos', content: resources.slice(1) },
        { id: 'components', label: 'Componentes', content: components },
      ];
  const content = (
    <>
      <div className={styles.visualIntro}>{intro}</div>
      <div className={styles.tabs} {...tabDrag} role="tablist" aria-label="Sistema visual">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`${id}-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active === tab.id}
            aria-controls={`${id}-${tab.id}-panel`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={(event) => {
              setActive(tab.id);
              event.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }}
            onKeyDown={(event) => {
              const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
              if (direction || event.key === 'Home' || event.key === 'End') {
                event.preventDefault();
                const next =
                  event.key === 'Home'
                    ? 0
                    : event.key === 'End'
                      ? tabs.length - 1
                      : (index + direction + tabs.length) % tabs.length;
                setActive(tabs[next].id);
                document.getElementById(`${id}-${tabs[next].id}`)?.focus();
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${id}-${tab.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-${tab.id}`}
          hidden={active !== tab.id}
          className={styles.tabPanel}
          data-kind={tab.id}
          data-component-carousel={(tab.id === 'components' && project === 'tuap') || undefined}
          tabIndex={0}
          {...(tab.id === 'components' && !combinedResources && project !== 'tuap'
            ? componentDrag
            : {})}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
  return combinedResources ? (
    <div
      data-visual-project={project}
      className={
        project === 'tropi'
          ? undefined
          : project === 'tuap'
            ? styles.tuapVisual
            : project === 'periodico'
              ? styles.periodicoVisual
              : styles.cedhuVisual
      }
    >
      {content}
    </div>
  ) : (
    content
  );
}

export function MobileCaseStudySection({
  children,
  title,
  splitProblems = false,
  visual = false,
  visualVariant,
}: {
  children: ReactNode;
  title: string;
  splitProblems?: boolean;
  visual?: boolean;
  visualVariant?: 'cedhu' | 'periodico' | 'tuap' | 'tropi';
}) {
  const mobile = useMobileCaseStudy();
  if (!mobile) return <>{children}</>;
  if (splitProblems) {
    const [challenge, problems] = partition(children, (e) => hasClass(e, 'problems'));
    return (
      <>
        <Accordion title={title}>{challenge}</Accordion>
        <Accordion title="Problemas y fricciones">{problems}</Accordion>
      </>
    );
  }
  return (
    <Accordion title={title} visual={visual}>
      {visual ? (
        <VisualTabs
          combinedResources={
            visualVariant === 'cedhu' ||
            visualVariant === 'periodico' ||
            visualVariant === 'tuap' ||
            visualVariant === 'tropi'
          }
          project={visualVariant}
        >
          {children}
        </VisualTabs>
      ) : (
        children
      )}
    </Accordion>
  );
}
