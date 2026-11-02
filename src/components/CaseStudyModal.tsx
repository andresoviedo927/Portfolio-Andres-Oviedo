import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { CASE_STUDIES } from '../constants';
import {
  CASE_STUDY_ASSETS,
  isCaseStudyProjectId,
} from '../modules/projects/data/caseStudyAssets';
import type { ProjectItem } from '../types';
import styles from './CaseStudyModal.module.css';
import { CardStack } from './ui/CardStack';
import { Icon, type IconName } from './ui/Icon';
import { ContactActionButton } from './shared/ContactActionButton';

type CaseStudyTab = (typeof CASE_STUDIES)['proj-1']['tabs'][number]['id'];
type TabDirection = 'forward' | 'backward';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<CaseStudyTab>('challenge');
  const [tabDirection, setTabDirection] = useState<TabDirection>('forward');
  const [isClosing, setIsClosing] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isClosingRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);

  const requestClose = useCallback(() => {
    if (isClosingRef.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose();
      return;
    }

    isClosingRef.current = true;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(onClose, 360);
  }, [onClose]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!project) return;
    setActiveTab('challenge');
    setTabDirection('forward');
    setIsClosing(false);
    isClosingRef.current = false;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [project, requestClose]);

  if (!project || !isCaseStudyProjectId(project.id)) return null;
  const content = CASE_STUDIES[project.id];
  const presentation = CASE_STUDY_ASSETS[project.id];
  const themeClass = presentation.theme === 'cedhu' ? styles.cedhuTheme : styles.villaTheme;
  const carouselScale = presentation.theme === 'cedhu' ? 4 / 3 : 1;

  const handleTabChange = (nextTab: CaseStudyTab) => {
    if (nextTab === activeTab) return;

    const currentIndex = content.tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = content.tabs.findIndex((tab) => tab.id === nextTab);
    setTabDirection(nextIndex > currentIndex ? 'forward' : 'backward');
    setActiveTab(nextTab);
  };

  return (
    <div
      className={`${styles.backdrop} ${themeClass} ${isClosing ? styles.closing : ''}`}
      onMouseDown={(event) => event.target === event.currentTarget && requestClose()}
    >
      <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className={styles.modalHeader}>
          <h2 id={titleId}>{content.eyebrow}</h2>
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            type="button"
            onClick={requestClose}
            aria-label={content.close}
          >
            <Icon name="close" />
          </button>
        </header>

        <div className={styles.scrollArea}>
          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <img className={styles.projectIcon} src={presentation.logo} alt={`Logo de ${project.title}`} />
              <h3 className={'titleSuffix' in content ? styles.cedhuTitle : undefined}>
                {'titleSuffix' in content ? (
                  <>
                    <span>{content.titlePrefix}</span>
                    <span className={styles.titleAccent}>{content.titleAccent}</span>
                    <span>{content.titleSuffix}</span>
                  </>
                ) : (
                  <>
                    {content.titlePrefix} <span className={styles.titleAccent}>{content.titleAccent}</span>
                  </>
                )}
              </h3>
              <p>{content.description}</p>
              <div className={styles.metrics}>
                {content.metrics.map((metric) => (
                  <div className={styles.metric} key={metric.value}>
                    <span className={styles.metricIcon}>
                      <Icon name={metric.icon as IconName} />
                    </span>
                    <span className={styles.metricCopy}>
                      <strong>{metric.value}</strong>
                      <small>{metric.label}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroVisual}>
              <img src={presentation.hero} alt={content.result.imageAlt} />
            </div>
          </div>

          <nav
            className={styles.tabs}
            data-active-tab={activeTab}
            aria-label="Contenido del caso de estudio"
          >
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? styles.activeTab : undefined}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div
            className={styles.tabContent}
            data-direction={tabDirection}
            key={activeTab}
            role="tabpanel"
          >
            {activeTab === 'challenge' && (
              <>
                <section className={styles.copySection}>
                  <h4>{content.challenge.contextTitle}</h4>
                  <p>{content.challenge.context}</p>
                </section>
                <aside className={styles.challengeBanner}>
                  <h4>{content.challenge.bannerTitle}</h4>
                  <p>{content.challenge.banner}</p>
                </aside>
                <section className={`${styles.copySection} ${styles.projectTagsSection}`}>
                  <h4>{content.challenge.tagsTitle}</h4>
                  <div className={styles.tags}>
                    {content.challenge.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </section>
              </>
            )}

            {activeTab === 'experience' && (
              <>
                <section className={styles.copySection}>
                  <h4>{content.experience.title}</h4>
                  <p>{content.experience.description}</p>
                </section>
                <section className={`${styles.copySection} ${styles.contentEndSpacing}`}>
                  <h4>{content.experience.featuresTitle}</h4>
                  <div className={styles.features}>
                    {content.experience.features.map((feature) => (
                      <article className={styles.feature} key={feature.title}>
                        <span className={styles.featureIcon}>
                          <Icon name={feature.icon as IconName} />
                        </span>
                        <div>
                          <h5>{feature.title}</h5>
                          <p>{feature.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </>
            )}

            {activeTab === 'result' && (
              <>
                <section className={styles.copySection}>
                  <h4>{content.result.deliverablesTitle}</h4>
                  <div className={styles.deliverables}>
                    {content.result.deliverables.map((deliverable) => (
                      <div className={styles.deliverable} key={deliverable.label}>
                        <Icon name={deliverable.icon as IconName} />
                        <span>{deliverable.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <div className={styles.resultVisual}>
                  <CardStack
                    items={presentation.mockups}
                    cardWidth={720 * carouselScale}
                    cardHeight={360 * carouselScale}
                    loop
                    autoAdvance
                    intervalMs={8000}
                    pauseOnHover={false}
                    showDots
                    springStiffness={180}
                    springDamping={26}
                    ariaLabel={content.result.imageAlt}
                    renderCard={(item) => (
                      <img src={item.imageSrc} alt={item.alt} draggable={false} />
                    )}
                  />
                </div>
                <aside className={styles.teamBanner}>
                  <h4>{content.result.teamTitle}</h4>
                  <p>{content.result.team}</p>
                </aside>
                <section className={`${styles.copySection} ${styles.contentEndSpacing}`}>
                  <h4>{content.result.commerceTitle}</h4>
                  <p>{content.result.commerce}</p>
                </section>
              </>
            )}
          </div>
        </div>

        <footer className={styles.modalFooter}>
          <p>{content.invitation}</p>
          <ContactActionButton label={content.contactAction} disabled={isClosing} />
        </footer>
      </section>
    </div>
  );
}
