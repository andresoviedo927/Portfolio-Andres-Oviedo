import { useRef, useState, useSyncExternalStore, type FC, type ReactNode } from 'react';
import { images, toolIcons } from '../assets/images';
import { CERTIFICATIONS, EDUCATIONS, EXPERIENCES, PERSONAL_INFO, TEXTS } from '../constants';
import { AboutCursor } from './AboutCursor';
import styles from './AboutSection.module.css';

interface TimelineItemProps {
  date: string;
  location?: string;
  title: string;
  subtitle: string;
}

const TimelineItem: FC<TimelineItemProps> = ({ date, location, title, subtitle }) => (
  <li className={styles.timelineItem}>
    <div className={styles.timelineDate}>
      <span>{date}</span>
      {location && <span>{location}</span>}
    </div>
    <span className={styles.timelineNode} aria-hidden="true" />
    <div className={styles.timelineContent}>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  </li>
);

interface TimelineCardProps {
  children: ReactNode;
  id: string;
  title: string;
  hidden?: boolean;
  tabbed?: boolean;
}

const TimelineCard: FC<TimelineCardProps> = ({ children, id, title, hidden, tabbed }) => (
  <article
    id={id}
    className={styles.timelineCard}
    hidden={hidden}
    role={tabbed ? 'tabpanel' : undefined}
    aria-labelledby={tabbed ? `about-tab-${id}` : undefined}
  >
    <header className={styles.cardHeader}>
      <h3>{title}</h3>
      <span aria-hidden="true" />
    </header>
    <ol className={styles.timeline}>{children}</ol>
  </article>
);

const TABLET_QUERY = '(max-width: 1024px)';
const subscribeTablet = (notify: () => void) => {
  const query = matchMedia(TABLET_QUERY);
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
const HISTORY_TABS = [
  { id: 'card-experiencia', label: 'Experiencia' },
  { id: 'card-educacion', label: 'Educación' },
  { id: 'card-certificaciones', label: 'Certificaciones' },
] as const;

export const AboutSection: FC = () => {
  const tablet = useSyncExternalStore(
    subscribeTablet,
    () => matchMedia(TABLET_QUERY).matches,
    () => false,
  );
  const [activeTab, setActiveTab] = useState<string>('card-experiencia');
  const tabDrag = useRef({ pointerId: -1, x: 0, scrollLeft: 0, moved: false });
  return (
    <section id="sobre-mi" className={styles.section} aria-label={TEXTS.about.label}>
      <AboutCursor />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>
            Sobre <span>mi</span>
          </h2>
          <span aria-hidden="true" />
        </div>

        <div className={styles.profileHeader}>
          <img className={styles.avatar} src={images.avatarSobreMi} alt={TEXTS.about.avatarAlt} />
        </div>

        <div className={`${styles.introduction} ${styles.legacyIntroduction}`}>
          {TEXTS.about.introduction.map((paragraph, paragraphIndex) => (
            <p key={`about-introduction-${paragraphIndex}`}>
              {paragraph.map((fragment, fragmentIndex) =>
                fragment.accent ? (
                  <strong key={`about-fragment-${paragraphIndex}-${fragmentIndex}`}>
                    {fragment.text}
                  </strong>
                ) : (
                  fragment.text
                ),
              )}
            </p>
          ))}
        </div>
        <p className={styles.desktopIntroduction}>
          Product Designer con más de 6 años de experiencia transformando procesos complejos en
          experiencias digitales intuitivas, eficientes y escalables. Especializado en productos
          B2B, SaaS, UX Research y Design Systems, con resultados que incluyen mejoras superiores al
          25 % en eficiencia de uso y reducciones aproximadas del 30 % en tiempos de tarea. Combino
          estrategia de producto, diseño centrado en el usuario e inteligencia artificial para
          construir soluciones que conectan necesidades reales, objetivos de negocio y tecnología.
        </p>

        <div className={styles.timelineGroup}>
          {tablet && (
            <div
              className={styles.historyTabs}
              role="tablist"
              aria-label="Trayectoria profesional"
              onPointerDown={(event) => {
                if (event.pointerType !== 'mouse' || event.button !== 0 || innerWidth >= 720)
                  return;
                tabDrag.current = {
                  pointerId: event.pointerId,
                  x: event.clientX,
                  scrollLeft: event.currentTarget.scrollLeft,
                  moved: false,
                };
              }}
              onPointerMove={(event) => {
                const drag = tabDrag.current;
                if (drag.pointerId !== event.pointerId) return;
                const distance = event.clientX - drag.x;
                if (!drag.moved && Math.abs(distance) <= 5) return;
                drag.moved = true;
                event.currentTarget.setPointerCapture(event.pointerId);
                const maxScroll = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;
                event.currentTarget.scrollLeft = Math.max(
                  0,
                  Math.min(maxScroll, drag.scrollLeft - distance),
                );
              }}
              onPointerUp={() => {
                tabDrag.current.pointerId = -1;
              }}
              onPointerCancel={() => {
                tabDrag.current.pointerId = -1;
              }}
              onClickCapture={(event) => {
                if (!tabDrag.current.moved) return;
                event.preventDefault();
                event.stopPropagation();
                tabDrag.current.moved = false;
              }}
            >
              {HISTORY_TABS.map((tab, index) => (
                <button
                  type="button"
                  role="tab"
                  key={tab.id}
                  id={`about-tab-${tab.id}`}
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => {
                    let next = index;
                    if (event.key === 'ArrowRight') next = (index + 1) % HISTORY_TABS.length;
                    else if (event.key === 'ArrowLeft')
                      next = (index + HISTORY_TABS.length - 1) % HISTORY_TABS.length;
                    else if (event.key === 'Home') next = 0;
                    else if (event.key === 'End') next = HISTORY_TABS.length - 1;
                    else return;
                    event.preventDefault();
                    setActiveTab(HISTORY_TABS[next].id);
                    document.getElementById(`about-tab-${HISTORY_TABS[next].id}`)?.focus();
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
          <div className={styles.cards}>
            <TimelineCard
              id="card-experiencia"
              title={TEXTS.about.experience}
              tabbed={tablet}
              hidden={tablet && activeTab !== 'card-experiencia'}
            >
              {EXPERIENCES.map((experience) => (
                <TimelineItem
                  key={experience.id}
                  date={experience.period}
                  location={experience.location}
                  title={experience.role}
                  subtitle={experience.company}
                />
              ))}
            </TimelineCard>

            <TimelineCard
              id="card-educacion"
              title={TEXTS.about.education}
              tabbed={tablet}
              hidden={tablet && activeTab !== 'card-educacion'}
            >
              {EDUCATIONS.map((education) => (
                <TimelineItem
                  key={education.id}
                  date={education.year}
                  title={education.degree}
                  subtitle={education.institution}
                />
              ))}
            </TimelineCard>

            <TimelineCard
              id="card-certificaciones"
              title={TEXTS.about.certifications}
              tabbed={tablet}
              hidden={tablet && activeTab !== 'card-certificaciones'}
            >
              {CERTIFICATIONS.map((certification) => (
                <TimelineItem
                  key={certification.id}
                  date={certification.year}
                  title={certification.degree}
                  subtitle={certification.institution}
                />
              ))}
            </TimelineCard>
          </div>
        </div>

        <ul className={styles.tools} aria-label="Herramientas que utilizo">
          {toolIcons.map((tool) => (
            <li className={styles.toolItem} key={tool.id} title={tool.name} data-tool={tool.id}>
              <img src={tool.imageSrc} alt={tool.name} loading="lazy" draggable={false} />
            </li>
          ))}
        </ul>

        <figure className={styles.quote}>
          <blockquote>“{PERSONAL_INFO.tagline}”</blockquote>
        </figure>
      </div>
    </section>
  );
};
