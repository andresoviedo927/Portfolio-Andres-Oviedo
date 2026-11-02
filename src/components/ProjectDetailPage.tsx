import { MobileCaseStudyProvider, useMobileCaseStudy } from './MobileCaseStudySection';
import { useEffect, useState, type ReactNode } from 'react';
import type { IconName } from './ui/Icon';
import { Icon } from './ui/Icon';
import { CardStack, type CardStackItem } from './ui/CardStack';
import { ThumbnailMockupGallery, type ThumbnailMockupItem } from './ui/ThumbnailMockupGallery';
import { CedhuVisualSystemSection } from './CedhuVisualSystemSection';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import { CountryFlag } from './shared/CountryFlag';
import styles from './ProjectDetailPage.module.css';

type ProjectMetadataKind = 'year' | 'role' | 'platform' | 'projectType' | 'country';

interface ProjectMetadataItem {
  countryCode?: string;
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
  contextShowcase?: ReactNode;
  responsiveComponents?: ReactNode;
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
  mobileBreakpoint?: number;
  mockupGallery?: ReactNode;
  mockups?: readonly ProjectMockup[];
  thumbnailGalleryDefaultIndex?: number;
  thumbnailGalleryItems?: readonly ThumbnailMockupItem[];
  thumbnailGalleryOrientation?: 'landscape' | 'portrait';
  thumbnailGalleryVariant?: 'cedhu' | 'default' | 'periodico' | 'villa';
  onNavigate: (path: string) => void;
  insightsDescription?: string;
  researchDescription?: string;
  researchInsights: ProjectInsight[];
  researchPoints?: string[];
  researchTitle?: string;
  results: ProjectResult[];
  resultsColumns?: 3 | 4;
  resultsShowcase?: ReactNode;
  resultsShowcaseDesktopOnly?: boolean;
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
  contextShowcase,
  responsiveComponents,
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
  mobileBreakpoint = 719,
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
  resultsShowcase,
  resultsShowcaseDesktopOnly = false,
  resultsNote,
  seoDescription,
  seoTitle,
  titleAccent,
  titlePrefix,
}: ProjectDetailPageProps) {
  const [isMobileViewport, setIsMobileViewport] = useState(
    () => window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches,
  );
  const mobileSections = useMobileCaseStudy() && caseStudyLayout !== 'villa';
  const [activeMobileCaseStudyPanel, setActiveMobileCaseStudyPanel] = useState(
    blocks[0]?.title ?? '',
  );
  const supportsMobileAccordion = ['tuap', 'periodico', 'cedhu', 'villa'].includes(caseStudyLayout);
  const thumbnailGalleryIntro =
    caseStudyLayout === 'villa'
      ? {
          description:
            'La experiencia final conecta exploración, información y cultura en un recorrido visual que acompaña al visitante desde el descubrimiento de un lugar hasta las diferentes formas de conocerlo y vivirlo.',
          id: 'villa-high-definition-title',
        }
      : caseStudyLayout === 'cedhu'
        ? {
            description:
              'La solución final transforma diferentes momentos del acompañamiento académico en una experiencia continua, donde consultar, entender y actuar forman parte del mismo sistema. Una interfaz construida para mantener claridad incluso cuando cambia el tipo de información o la necesidad del acudiente.',
            id: 'cedhu-high-definition-title',
          }
        : caseStudyLayout === 'periodico'
          ? {
              description:
                'La experiencia final transforma una publicación impresa en un punto de entrada a contenido digital, manteniendo un flujo simple y reduciendo al mínimo las decisiones necesarias para explorar.',
              id: 'periodico-high-definition-title',
            }
          : caseStudyLayout === 'tuap'
            ? {
                description:
                  'La solución final conecta compra, gestión y operación comercial dentro de una experiencia multirrol y multiplataforma, manteniendo una lógica común entre Web y App sin perder las necesidades específicas de cada usuario.',
                id: 'tuap-high-definition-title',
              }
            : null;

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    const updateMobileViewport = () => setIsMobileViewport(mobileQuery.matches);
    updateMobileViewport();
    mobileQuery.addEventListener('change', updateMobileViewport);
    return () => mobileQuery.removeEventListener('change', updateMobileViewport);
  }, [mobileBreakpoint]);

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
    <MobileCaseStudyProvider>
      <div
        className={`${styles.page} ${supportsMobileAccordion ? styles.accordionPage : ''} ${caseStudyLayout === 'tuap' ? styles.tuapPage : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoPage : ''} ${caseStudyLayout === 'cedhu' ? styles.cedhuPage : ''} ${caseStudyLayout === 'villa' ? styles.villaPage : ''}`}
        data-project={caseStudyLayout}
        style={{ '--project-accent': accent } as React.CSSProperties}
      >
        <Navbar
          activePage="proyectos"
          onNavigate={onNavigate}
          tabletVariant={caseStudyLayout === 'villa' ? 'villa' : 'default'}
        />

        <main className={styles.main}>
          <div className={styles.heroBackdrop}>
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
          </div>

          <section
            className={styles.metadata}
            aria-label="Información del proyecto"
            data-count={metadata.length}
          >
            {metadata.map((item) => (
              <article className={styles.metadataItem} key={item.label}>
                {item.kind === 'country' ? (
                  <CountryFlag
                    className={styles.countryFlag}
                    countryCode={item.countryCode ?? 'CO'}
                  />
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

          {contextShowcase}

          {!mobileSections &&
            (blocks.length > 0 ||
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
                                    separatorIndex >= 0
                                      ? item.slice(separatorIndex + 1).trim()
                                      : '';

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
                                  separatorIndex >= 0
                                    ? point.slice(separatorIndex + 1).trim()
                                    : point;

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
                          isMobileAccordion
                            ? activeMobileCaseStudyPanel === insightsTitle
                            : undefined
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

          {!mobileSections && features.length > 0 && (
            <section
              className={`${styles.section} ${styles.featuresSection} ${styles.responsiveAccordionSection} ${caseStudyLayout === 'tuap' ? styles.tuapFeatures : ''}`}
              aria-labelledby="features-title"
              data-expanded={
                isMobileAccordion
                  ? activeMobileCaseStudyPanel === 'Funcionalidades clave'
                  : undefined
              }
            >
              {renderCaseStudyTitle('Funcionalidades clave', 'features-title')}
              <div className={styles.responsivePanelContent}>
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
                      <div className={styles.featureCopy}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {!mobileSections && architecture.length > 0 && (
            <section
              className={`${styles.section} ${styles.architecture} ${styles.responsiveAccordionSection} ${caseStudyLayout === 'tuap' ? styles.tuapArchitecture : ''}`}
              aria-labelledby="architecture-title"
              data-expanded={
                isMobileAccordion
                  ? activeMobileCaseStudyPanel === 'Arquitectura y flujo'
                  : undefined
              }
            >
              {renderCaseStudyTitle('Arquitectura y flujo', 'architecture-title')}
              <div className={styles.responsivePanelContent}>
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
              </div>
            </section>
          )}

          {caseStudyLayout === 'cedhu' && <CedhuVisualSystemSection />}

          {!mobileSections &&
            supportsMobileAccordion &&
            !['villa', 'cedhu'].includes(caseStudyLayout) && (
              <section
                className={`${styles.section} ${styles.responsiveVisualSystem} ${styles.responsiveAccordionSection}`}
                aria-labelledby="responsive-visual-system-title"
                data-expanded={
                  isMobileAccordion ? activeMobileCaseStudyPanel === 'Sistema visual' : undefined
                }
              >
                {renderCaseStudyTitle('Sistema visual', 'responsive-visual-system-title')}
                <div className={styles.responsivePanelContent}>
                  <div className={styles.responsiveVisualSystemGrid}>
                    <article className={styles.responsiveVisualIntro}>
                      {logoImage && <img src={logoImage} alt="" />}
                      <div>
                        <h3>Identidad del producto</h3>
                        <p>
                          Color, tipografía, iconografía y componentes mantienen una experiencia
                          consistente en todos los tamaños.
                        </p>
                      </div>
                    </article>
                    <article className={styles.responsiveVisualCard}>
                      <span>
                        <Icon name="palette" />
                      </span>
                      <div>
                        <h3>Color principal</h3>
                        <p>{accent.toUpperCase()}</p>
                      </div>
                    </article>
                    <article className={styles.responsiveVisualCard}>
                      <span className={styles.typographySample}>Aa</span>
                      <div>
                        <h3>Tipografía e iconos</h3>
                        <p>Lexend · Uicons Flaticon</p>
                      </div>
                    </article>
                    {responsiveComponents ? (
                      <div className={styles.responsiveComponents}>{responsiveComponents}</div>
                    ) : (
                      <article className={styles.responsiveVisualCard}>
                        <span>
                          <Icon name="appsSolid" />
                        </span>
                        <div>
                          <h3>Componentes</h3>
                          <p>Controles claros, repetibles y adaptables.</p>
                        </div>
                      </article>
                    )}
                  </div>
                </div>
              </section>
            )}

          {mockupGallery && (
            <section
              className={`${styles.thumbnailGalleryComparison} ${caseStudyLayout === 'tuap' ? styles.tuapThumbnailGallery : ''}`}
              aria-label={
                caseStudyLayout === 'tuap' ? undefined : 'Galería de mockups del proyecto'
              }
              aria-labelledby={caseStudyLayout === 'tuap' ? thumbnailGalleryIntro?.id : undefined}
            >
              {caseStudyLayout === 'tuap' && thumbnailGalleryIntro && (
                <div className={styles.thumbnailGalleryIntro}>
                  <h2 id={thumbnailGalleryIntro.id}>
                    Pantallas <span>en alta definición</span>
                  </h2>
                  <span aria-hidden="true" />
                  <p>
                    <span className={styles.tuapGalleryWideDescription}>
                      {thumbnailGalleryIntro.description}
                    </span>
                    <span className={styles.tuapGalleryMobileDescription}>
                      La experiencia final transforma una publicación impresa en un punto de entrada
                      a contenido digital, manteniendo un flujo simple y reduciendo al mínimo las
                      decisiones necesarias para explorar.
                    </span>
                  </p>
                </div>
              )}
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
              className={`${styles.thumbnailGalleryComparison} ${caseStudyLayout === 'villa' ? styles.villaThumbnailGallery : ''} ${caseStudyLayout === 'cedhu' ? styles.cedhuThumbnailGallery : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoThumbnailGallery : ''}`}
              aria-label={thumbnailGalleryIntro ? undefined : 'Galería de mockups del proyecto'}
              aria-labelledby={thumbnailGalleryIntro?.id}
            >
              {thumbnailGalleryIntro && (
                <div className={styles.thumbnailGalleryIntro}>
                  <h2 id={thumbnailGalleryIntro.id}>
                    {caseStudyLayout === 'periodico' ? (
                      <>
                        Pantallas <span>en alta definición</span>
                      </>
                    ) : (
                      'Pantallas en alta definición'
                    )}
                  </h2>
                  <span aria-hidden="true" />
                  <p>{thumbnailGalleryIntro.description}</p>
                </div>
              )}
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
          {resultsShowcase}
          {!mobileSections &&
            (!resultsShowcase || resultsShowcaseDesktopOnly) &&
            results.length > 0 && (
              <section
                className={`${styles.section} ${styles.resultsSection} ${styles.responsiveAccordionSection} ${compactResults ? styles.compactResultsSection : ''} ${caseStudyLayout === 'periodico' ? styles.periodicoResultsSection : ''} ${resultsShowcaseDesktopOnly ? styles.mobileOnlyResultsSection : ''}`}
                aria-labelledby="results-title"
                data-expanded={
                  isMobileAccordion
                    ? activeMobileCaseStudyPanel === 'Resultados e impacto'
                    : undefined
                }
              >
                {renderCaseStudyTitle('Resultados e impacto', 'results-title')}
                <div className={styles.responsivePanelContent}>
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
                </div>
              </section>
            )}

          <section className={styles.cta} aria-label="Contacto">
            <p>{invitation}</p>
          </section>

          {featuredVisualPlacement === 'beforeFooter' && (
            <section
              className={`${styles.featuredVisual} ${styles.closingBanner}`}
              aria-label="Vista principal del proyecto"
            >
              <div className={styles.closingBannerFrame}>
                <img src={featuredImage} alt={featuredAlt} />
              </div>
            </section>
          )}
        </main>

        <FooterSection
          onOpenContact={() => undefined}
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          theme={
            caseStudyLayout === 'villa'
              ? 'villa'
              : caseStudyLayout === 'cedhu'
                ? 'cedhu'
                : caseStudyLayout === 'periodico'
                  ? 'periodico'
                  : caseStudyLayout === 'tuap'
                    ? 'tuap'
                    : 'default'
          }
        />
      </div>
    </MobileCaseStudyProvider>
  );
}
