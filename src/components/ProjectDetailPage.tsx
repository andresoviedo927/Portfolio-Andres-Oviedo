import { useEffect, useState, type ReactNode } from 'react';
import type { IconName } from './ui/Icon';
import { Icon } from './ui/Icon';
import { CardStack, type CardStackItem } from './ui/CardStack';
import { ThumbnailMockupGallery, type ThumbnailMockupItem } from './ui/ThumbnailMockupGallery';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import styles from './ProjectDetailPage.module.css';

type ProjectMetadataKind = 'year' | 'role' | 'platform' | 'projectType' | 'country';

interface ProjectMetadataItem {
  kind: ProjectMetadataKind;
  label: string;
  value: string;
}

const PROJECT_METADATA_ICONS: Record<Exclude<ProjectMetadataKind, 'country'>, IconName> = {
  year: 'calendarSolid',
  role: 'userSolid',
  platform: 'webDesignSolid',
  projectType: 'rocketLunchSolid',
};

interface ProjectContentBlock {
  title: string;
  body?: string;
  items?: string[];
  tone?: 'default' | 'accent' | 'warning';
}

interface ProjectInsight {
  description: string;
  title: string;
}

type ProjectFeature = {
  description: string;
  title: string;
} & ({ icon: IconName; imageSrc?: never } | { icon?: never; imageSrc: string });

interface ProjectFlowItem {
  description: string;
  icon: IconName;
  title: string;
}

interface ProjectResult {
  detail?: string;
  label: string;
  value: string;
}

interface ProjectMockup extends CardStackItem {
  alt: string;
  imageSrc: string;
}

export interface ProjectDetailPageProps {
  accent: string;
  accentFirstTitle?: boolean;
  architecture: ProjectFlowItem[];
  blocks: ProjectContentBlock[];
  caseStudyLayout?: 'default' | 'wideProblems' | 'tuap' | 'periodico' | 'cedhu' | 'villa';
  compactResults?: boolean;
  description: string;
  featuredAlt: string;
  featuredImage: string;
  featuredVisualPlacement?: 'top' | 'beforeFooter';
  features: ProjectFeature[];
  heroAlt: string;
  heroImage: string;
  heroImageScale?: number;
  invitation: string;
  insightsTitle?: string;
  logoAlt?: string;
  logoImage?: string;
  logoWide?: boolean;
  metadata: ProjectMetadataItem[];
  mockupGallery?: ReactNode;
  mockups?: readonly ProjectMockup[];
  thumbnailGalleryDefaultIndex?: number;
  thumbnailGalleryItems?: readonly ThumbnailMockupItem[];
  thumbnailGalleryOrientation?: 'landscape' | 'portrait';
  thumbnailGalleryVariant?: 'default' | 'periodico';
  onNavigate: (path: string) => void;
  insightsDescription?: string;
  researchDescription?: string;
  researchInsights: ProjectInsight[];
  researchPoints?: string[];
  researchTitle?: string;
  results: ProjectResult[];
  resultsColumns?: 3 | 4;
  resultsNote?: {
    body: string;
    title: string;
  };
  seoDescription: string;
  seoTitle: string;
  titleAccent: string;
  titlePrefix: string;
}

export function ProjectDetailPage({
  accent,
  accentFirstTitle = false,
  architecture,
  blocks,
  caseStudyLayout = 'default',
  compactResults = false,
  description,
  featuredAlt,
  featuredImage,
  featuredVisualPlacement = 'top',
  features,
  heroAlt,
  heroImage,
  heroImageScale = 1,
  invitation,
  insightsTitle = 'Insights clave de usuarios',
  logoAlt,
  logoImage,
  logoWide = false,
  metadata,
  mockupGallery,
  mockups = [],
  thumbnailGalleryDefaultIndex = 1,
  thumbnailGalleryItems = [],
  thumbnailGalleryOrientation = 'landscape',
  thumbnailGalleryVariant = 'default',
  onNavigate,
  insightsDescription,
  researchDescription,
  researchInsights,
  researchPoints = [],
  researchTitle,
  results,
  resultsColumns = 4,
  resultsNote,
  seoDescription,
  seoTitle,
  titleAccent,
  titlePrefix,
}: ProjectDetailPageProps) {
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [activeMobileCaseStudyPanel, setActiveMobileCaseStudyPanel] = useState(
    blocks[0]?.title ?? '',
  );
  const supportsMobileAccordion = ['tuap', 'periodico', 'cedhu', 'villa'].includes(caseStudyLayout);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileViewport = () => setIsMobileViewport(mobileQuery.matches);
    updateMobileViewport();
    mobileQuery.addEventListener('change', updateMobileViewport);
    return () => mobileQuery.removeEventListener('change', updateMobileViewport);
  }, []);

  useEffect(() => {
    if (supportsMobileAccordion) {
      setActiveMobileCaseStudyPanel(blocks[0]?.title ?? '');
    }
  }, [blocks, supportsMobileAccordion]);

  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = existingDescription?.content;
    const descriptionElement = existingDescription ?? document.createElement('meta');

    document.title = seoTitle;
    descriptionElement.name = 'description';
    descriptionElement.content = seoDescription;
    if (!existingDescription) document.head.appendChild(descriptionElement);

    return () => {
      document.title = previousTitle;
      if (existingDescription && previousDescription !== undefined) {
        existingDescription.content = previousDescription;
      } else {
        descriptionElement.remove();
      }
    };
  }, [seoDescription, seoTitle]);

  const navigateToProjects = () => onNavigate('/proyectos');
  const isMobileAccordion = supportsMobileAccordion && isMobileViewport;
  const renderCaseStudyTitle = (title: string, id?: string) => (
    <h2 id={id}>
      {isMobileAccordion ? (
        <button
          className={styles.caseStudyToggle}
          type="button"
          aria-expanded={activeMobileCaseStudyPanel === title}
          onClick={() =>
            setActiveMobileCaseStudyPanel((currentTitle) => (currentTitle === title ? '' : title))
          }
        >
          <span>{title}</span>
          <Icon name={activeMobileCaseStudyPanel === title ? 'caretUp' : 'caretDown'} />
        </button>
      ) : (
        title
      )}
    </h2>
  );

  return (
    <div
      className={`${styles.page} ${supportsMobileAccordion ? styles.accordionPage : ''} ${caseStudyLayout === 'tuap' ? styles.tuapPage : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoPage : ''} ${caseStudyLayout === 'cedhu' ? styles.cedhuPage : ''} ${caseStudyLayout === 'villa' ? styles.villaPage : ''}`}
      style={{ '--project-accent': accent } as React.CSSProperties}
    >
      <Navbar activePage="proyectos" onNavigate={onNavigate} />

      <main className={styles.main}>
        <div className={styles.actions}>
          <a
            className={styles.backLink}
            href="/proyectos"
            onClick={(event) => {
              event.preventDefault();
              navigateToProjects();
            }}
          >
            <Icon name="chevronLeft" />
            <span>Volver a proyectos</span>
          </a>
        </div>

        <section
          className={`${styles.hero} ${accentFirstTitle ? styles.accentFirstTitle : ''}`}
          aria-labelledby="project-detail-title"
        >
          <div className={styles.heroCopy}>
            {logoImage && (
              <img
                className={`${styles.logo} ${logoWide ? styles.logoWide : ''}`}
                src={logoImage}
                alt={logoAlt ?? ''}
              />
            )}
            <h1 id="project-detail-title">
              {titlePrefix} <span>{titleAccent}</span>
            </h1>
            <p>{description}</p>
          </div>
          <div className={styles.heroVisual}>
            <img
              src={heroImage}
              alt={heroAlt}
              style={{ '--hero-image-scale': heroImageScale } as React.CSSProperties}
            />
          </div>
        </section>

        <section
          className={styles.metadata}
          aria-label="Información del proyecto"
          data-count={metadata.length}
        >
          {metadata.map((item) => (
            <article className={styles.metadataItem} key={item.label}>
              {item.kind === 'country' ? (
                <span className={styles.countryFlag} aria-hidden="true">
                  🇨🇴
                </span>
              ) : (
                <Icon name={PROJECT_METADATA_ICONS[item.kind]} />
              )}
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </article>
          ))}
        </section>

        {featuredVisualPlacement === 'top' && (
          <section className={styles.featuredVisual} aria-label="Vista principal del proyecto">
            <img src={featuredImage} alt={featuredAlt} />
          </section>
        )}

        {(blocks.length > 0 ||
          researchTitle ||
          researchDescription ||
          researchPoints.length > 0 ||
          researchInsights.length > 0) && (
          <section
            className={`${styles.caseStudySection} ${caseStudyLayout === 'wideProblems' ? styles.wideProblemsCaseStudy : ''} ${caseStudyLayout === 'tuap' ? styles.tuapCaseStudy : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoCaseStudy : ''} ${caseStudyLayout === 'cedhu' ? styles.cedhuCaseStudy : ''} ${caseStudyLayout === 'villa' ? styles.villaCaseStudy : ''}`}
            aria-label="Contexto del caso de estudio"
          >
            {blocks.length > 0 && (
              <div className={styles.contentBlocks}>
                {blocks.map((block) => (
                  <article
                    className={`${styles.contentCard} ${styles[`${block.tone ?? 'default'}Tone`]}`}
                    data-expanded={
                      isMobileAccordion ? activeMobileCaseStudyPanel === block.title : undefined
                    }
                    key={block.title}
                  >
                    {renderCaseStudyTitle(block.title)}
                    <div className={styles.caseStudyPanelContent}>
                      <div className={styles.caseStudyPanelInner}>
                        {block.body && <p>{block.body}</p>}
                        {block.items && (
                          <ul
                            className={
                              block.title === 'Problemas y fricciones detectados'
                                ? styles.visualBulletList
                                : undefined
                            }
                          >
                            {block.items.map((item) => {
                              if (block.title !== 'Problemas y fricciones detectados') {
                                return <li key={item}>{item}</li>;
                              }

                              const separatorIndex = item.indexOf(':');
                              const itemTitle =
                                separatorIndex >= 0 ? item.slice(0, separatorIndex) : '';
                              const itemDescription =
                                separatorIndex >= 0 ? item.slice(separatorIndex + 1).trim() : '';

                              return (
                                <li className={styles.bulletItem} key={item}>
                                  <Icon name="bulletSolid" />
                                  <div className={styles.bulletCopy}>
                                    {itemTitle && <strong>{itemTitle}</strong>}
                                    <span>{itemDescription || item}</span>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {(researchTitle ||
              researchDescription ||
              researchPoints.length > 0 ||
              researchInsights.length > 0) && (
              <div className={styles.researchSection}>
                <div
                  className={styles.researchCopy}
                  data-expanded={
                    isMobileAccordion ? activeMobileCaseStudyPanel === researchTitle : undefined
                  }
                >
                  {researchTitle && renderCaseStudyTitle(researchTitle, 'research-title')}
                  <div className={styles.caseStudyPanelContent}>
                    <div className={styles.caseStudyPanelInner}>
                      {researchDescription && <p>{researchDescription}</p>}
                      {researchPoints.length > 0 && (
                        <ul className={styles.visualBulletList}>
                          {researchPoints.map((point) => {
                            const separatorIndex = point.indexOf(':');
                            const pointTitle =
                              separatorIndex >= 0 ? point.slice(0, separatorIndex) : '';
                            const pointDescription =
                              separatorIndex >= 0 ? point.slice(separatorIndex + 1).trim() : point;

                            return (
                              <li className={styles.bulletItem} key={point}>
                                <Icon name="bulletSolid" />
                                {pointTitle ? (
                                  <div className={styles.bulletCopy}>
                                    <strong>{pointTitle}</strong>
                                    <span>{pointDescription}</span>
                                  </div>
                                ) : (
                                  <span>{pointDescription}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {researchInsights.length > 0 && (
                  <aside
                    className={styles.insights}
                    data-expanded={
                      isMobileAccordion ? activeMobileCaseStudyPanel === insightsTitle : undefined
                    }
                  >
                    {renderCaseStudyTitle(insightsTitle)}
                    <div className={styles.caseStudyPanelContent}>
                      <div className={styles.caseStudyPanelInner}>
                        {insightsDescription && <p>{insightsDescription}</p>}
                        <ul className={styles.visualBulletList}>
                          {researchInsights.map((insight) => (
                            <li
                              className={styles.bulletItem}
                              key={`${insight.title}-${insight.description}`}
                            >
                              <Icon name="bulletSolid" />
                              <div className={styles.bulletCopy}>
                                {insight.title && <strong>{insight.title}</strong>}
                                <span>{insight.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                )}
              </div>
            )}
          </section>
        )}

        {features.length > 0 && (
          <section
            className={`${styles.section} ${styles.featuresSection} ${caseStudyLayout === 'tuap' ? styles.tuapFeatures : ''}`}
            aria-labelledby="features-title"
          >
            <h2 id="features-title">Funcionalidades clave</h2>
            <div className={styles.features} data-count={features.length}>
              {features.map((feature) => (
                <article className={styles.feature} key={feature.title}>
                  {feature.imageSrc ? (
                    <img
                      aria-hidden="true"
                      className={styles.featureImage}
                      src={feature.imageSrc}
                      alt=""
                    />
                  ) : (
                    <Icon name={feature.icon} />
                  )}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {architecture.length > 0 && (
          <section
            className={`${styles.section} ${styles.architecture} ${caseStudyLayout === 'tuap' ? styles.tuapArchitecture : ''}`}
            aria-labelledby="architecture-title"
          >
            <h2 id="architecture-title">Arquitectura y flujo</h2>
            <div className={styles.flowGrid} data-count={architecture.length}>
              {architecture.map((item) => (
                <article className={styles.flowItem} key={item.title}>
                  <Icon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    {item.description !== item.title && <p>{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {mockupGallery && (
          <section
            className={styles.thumbnailGalleryComparison}
            aria-label="Galería de mockups del proyecto"
          >
            {mockupGallery}
          </section>
        )}

        {mockups.length > 0 && (
          <section className={styles.showcase} aria-label="Showcase de pantallas del proyecto">
            <CardStack
              items={mockups}
              cardWidth={760}
              cardHeight={380}
              loop
              autoAdvance
              intervalMs={8000}
              pauseOnHover={false}
              showDots
              ariaLabel="Pantallas del proyecto"
              renderCard={(item) => <img src={item.imageSrc} alt={item.alt} draggable={false} />}
              renderMobileThumbnail={
                caseStudyLayout === 'villa'
                  ? (item) => <img src={item.imageSrc} alt="" draggable={false} />
                  : undefined
              }
            />
          </section>
        )}

        {thumbnailGalleryItems.length > 0 && (
          <section
            className={styles.thumbnailGalleryComparison}
            aria-label="Galería de mockups del proyecto"
          >
            <ThumbnailMockupGallery
              ariaLabel={`Mockups de ${
                caseStudyLayout === 'cedhu'
                  ? 'CEDHU'
                  : caseStudyLayout === 'periodico'
                    ? 'Periódico Entérese'
                    : 'Villa de Leyva'
              }`}
              defaultIndex={thumbnailGalleryDefaultIndex}
              items={thumbnailGalleryItems}
              orientation={thumbnailGalleryOrientation}
              variant={thumbnailGalleryVariant}
            />
          </section>
        )}
        {results.length > 0 && (
          <section
            className={`${styles.section} ${styles.resultsSection} ${compactResults ? styles.compactResultsSection : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoResultsSection : ''}`}
            aria-labelledby="results-title"
          >
            <h2 id="results-title">Resultados e impacto</h2>
            <div className={styles.results} data-columns={resultsColumns}>
              {results.map((result) => (
                <article className={styles.result} key={result.label}>
                  <strong>{result.value}</strong>
                  <h3>{result.label}</h3>
                  {result.detail && <p>{result.detail}</p>}
                </article>
              ))}
            </div>
            {resultsNote && (
              <aside className={styles.resultsNote}>
                <Icon name="infoSolid" />
                <div>
                  <strong>{resultsNote.title}</strong>
                  <p>{resultsNote.body}</p>
                </div>
              </aside>
            )}
          </section>
        )}

        <section className={styles.cta} aria-label="Contacto">
          <p>{invitation}</p>
        </section>

        {featuredVisualPlacement === 'beforeFooter' && (
          <section className={styles.featuredVisual} aria-label="Vista principal del proyecto">
            <img src={featuredImage} alt={featuredAlt} />
          </section>
        )}
      </main>

      <FooterSection
        onOpenContact={() => undefined}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}
