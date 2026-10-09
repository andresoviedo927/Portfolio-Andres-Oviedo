import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { images, toolIcons } from '../assets/images';
import { CERTIFICATIONS, EDUCATIONS, TEXTS } from '../constants';
import { AboutCursor } from './AboutCursor';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import { Icon } from './ui/Icon';
import styles from './AboutPage.module.css';

type CompanyId = 'nyxn' | 'xolit' | 'sofed';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const IMPACT_ITEMS = [
  {
    value: '+25%',
    title: 'Diseño más eficiente',
    description: 'Design System optimizado para acelerar la entrega y mejorar la consistencia.',
  },
  {
    value: '+25%',
    title: 'Experiencias más ágiles',
    description: 'Rediseño de interfaces B2B para mejorar la eficiencia de uso.',
  },
  {
    value: '-30%',
    title: 'Categorías de organización',
    description: 'Optimización de flujos para reducir tiempos de ejecución.',
  },
  {
    value: '↗',
    title: 'Crecimiento dentro de producto',
    description: 'Evolución hacia un rol con mayor alcance en diseño y definición de soluciones.',
  },
] as const;

const PROFESSIONAL_SUMMARY = [
  'Product Designer con experiencia en productos digitales B2B y SaaS, especializado en estructurar y simplificar experiencias que involucran procesos, información y necesidades de usuario con distintos niveles de complejidad.',
  'A lo largo de mi trayectoria he participado en el diseño y evolución de productos desde diferentes frentes: investigación de usuarios, arquitectura de información, definición de flujos, diseño de interacción, prototipado y construcción de Design Systems. Esta visión integral me permite entender la experiencia más allá de la interfaz y mantener coherencia entre las distintas etapas del producto.',
  'He trabajado en soluciones relacionadas con abastecimiento B2B, servicios legales, inversión inmobiliaria, gestión de talento y educación digital, colaborando con Product Owners y equipos de desarrollo para traducir necesidades de usuarios y negocio en soluciones viables.',
  'Complemento mi experiencia en diseño de producto con formación en accesibilidad e inteligencia artificial, áreas que incorporo como parte de una práctica de diseño enfocada en construir productos más claros, consistentes y preparados para evolucionar.',
] as const;

const EXPERIENCE_BY_COMPANY = {
  nyxn: [
    {
      title: 'UX/UI Designer Advance',
      company: 'NYXN',
      period: 'Sep 2025 — Jul 2026 | Remoto',
      summary:
        'Alcancé la posición de UX/UI Designer Advance como resultado de mi evolución dentro del equipo, después de desempeñarme como UX/UI Designer y Semi Senior II.',
      details: [
        'Participé en la evolución de productos digitales B2B y SaaS.',
        'Amplié mi participación en procesos de diseño y definición de soluciones.',
        'Colaboré con producto y desarrollo para mantener coherencia entre experiencia e implementación.',
      ],
      tags: ['Product Design', 'B2B', 'SaaS', 'UX Strategy', 'Product Collaboration'],
    },
    {
      title: 'UX/UI Designer Semi Senior II',
      company: 'NYXN',
      period: 'Feb 2023 — Sep 2025 | Remoto',
      summary:
        'Asumí mayor responsabilidad en la evolución de productos, conectando experiencia de usuario, arquitectura de información y sistemas de diseño.',
      details: [
        'Lideré rediseños de experiencias B2B.',
        'Formalicé y evolucioné el Design System en Figma.',
        'Participé en procesos de ideación y arquitectura de información.',
        'Trabajé en la optimización de flujos e interfaces.',
        'Integré IA generativa en investigación e ideación.',
      ],
      tags: [
        'Product Design',
        'Design Systems',
        'B2B',
        'Information Architecture',
        'UX Research',
        'Generative AI',
      ],
    },
    {
      title: 'UX/UI Designer',
      company: 'NYXN',
      period: 'Abr 2022 — Feb 2023 | Remoto',
      summary:
        'Diseñé experiencias para productos SaaS desde la estructuración inicial de los recorridos hasta la definición visual y prototipado de las soluciones.',
      details: [
        'Diseñé user flows y wireframes.',
        'Construí prototipos de alta fidelidad en Figma.',
        'Definí interfaces para diferentes flujos de producto.',
        'Trabajé junto a Product Owners y desarrollo durante el proceso de diseño.',
      ],
      tags: [
        'UX/UI Design',
        'SaaS',
        'User Flows',
        'Wireframing',
        'High-Fidelity Prototyping',
        'Figma',
      ],
    },
  ],
  xolit: [
    {
      title: 'Diseñador de Experiencia de Usuario I',
      company: 'Xolit',
      period: 'Ago 2020 — Feb 2022 | Remoto',
      summary:
        'Diseñé experiencias para productos digitales con distintos modelos de negocio, participando en la estructuración de flujos, interfaces y soluciones centradas en las necesidades de usuario.',
      details: [
        'Diseñé end-to-end el flujo de un marketplace B2B.',
        'Estructuré experiencias para productos de servicios legales, inventarios e inversión inmobiliaria.',
        'Desarrollé wireframes y prototipos de media y alta fidelidad.',
        'Incorporé accesibilidad y diseño adaptable en las interfaces.',
        'Trabajé junto a desarrollo en la definición y evolución de las soluciones.',
      ],
      tags: [],
    },
  ],
  sofed: [
    {
      title: 'Diseñador de Interfaz de Usuario Web',
      company: 'Sofed S.A.S.',
      period: 'Oct 2016 — Jun 2017 | Sogamoso, Boyacá',
      summary:
        'Diseñé experiencias digitales para aplicaciones educativas, adaptando interfaces y componentes a distintos dispositivos y contextos de uso.',
      details: [
        'Diseñé interfaces para aplicaciones móviles y tabletas.',
        'Creé componentes orientados a experiencias educativas.',
        'Participé en productos con geolocalización y realidad aumentada.',
        'Adapté las interfaces a diferentes formatos de pantalla.',
      ],
      tags: [],
    },
  ],
} as const;

const ADDITIONAL_EDUCATION = {
  id: 'edu-4',
  degree: 'Diseño Artesanal',
  institution: 'Institución Universitaria Colegio Mayor del Cauca',
  year: '2007 — 2010',
} as const;

const COMPLEMENTARY_CERTIFICATIONS = [
  { id: 'cert-4', degree: 'Figma to Lottie Course', institution: 'LottieFiles', year: '2025' },
  {
    id: 'cert-5',
    degree: 'Pruebas de usabilidad con usuarios reales',
    institution: 'Somos Edison',
    year: '2024',
  },
  { id: 'cert-6', degree: 'Diseño UX/UI', institution: 'Coderhouse', year: '2022' },
] as const;

const ABOUT_TOOL_ORDER = [
  'figma',
  'miro',
  'notion',
  'maze',
  'ai-studio',
  'lovable',
  'codex',
  'claude-code',
  'adobe-xd',
  'photoshop',
  'illustrator',
  'lightroom',
] as const;

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [activeCompany, setActiveCompany] = useState<CompanyId>('nyxn');
  const shouldReduceMotion = useReducedMotion();
  const academicItems = [EDUCATIONS[1], EDUCATIONS[2], ADDITIONAL_EDUCATION];
  const certificationItems = [
    CERTIFICATIONS[0],
    EDUCATIONS[0],
    CERTIFICATIONS[1],
    COMPLEMENTARY_CERTIFICATIONS[0],
    CERTIFICATIONS[2],
    COMPLEMENTARY_CERTIFICATIONS[1],
    COMPLEMENTARY_CERTIFICATIONS[2],
  ];
  const aboutTools = ABOUT_TOOL_ORDER.map((toolId) =>
    toolIcons.find((tool) => tool.id === toolId),
  ).filter((tool): tool is (typeof toolIcons)[number] => Boolean(tool));

  return (
    <div className={styles.page}>
      <Navbar activePage="sobre-mi" onNavigate={onNavigate} />

      <main className={styles.main}>
        <AboutCursor />
        <section className={styles.profileSection} aria-labelledby="about-page-title">
          <div className={styles.profile}>
            <img
              className={styles.profileAvatar}
              src={images.avatarSobreMi}
              alt={TEXTS.about.avatarAlt}
            />
            <div className={styles.profileContent}>
              <p className={styles.role}>Product Designer | UX/UI Designer</p>
              <h1 id="about-page-title">
                <span>Andrés</span> Oviedo Narváez
              </h1>
              <p className={styles.specialties}>
                B2B | SaaS | Design Systems | UX Research | AI aplicada al diseño
              </p>
              <div className={styles.contactRow}>
                <span>
                  <Icon name="mapMarkerSolid" />
                  Medellín, Colombia
                </span>
                <a href="https://wa.me/573207368686">
                  <Icon name="whatsapp" />
                  +57 320 736 8686
                </a>
                <a href="mailto:andresoviedo927@outlook.com">
                  <Icon name="emailSolid" />
                  andresoviedo927@outlook.com
                </a>
              </div>
            </div>
            <button className={styles.downloadButton} type="button">
              <Icon name="download" />
              <span>Descargar HV</span>
            </button>
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="professional-summary-title">
          <h2 id="professional-summary-title">Resumen profesional</h2>
          <div className={styles.summaryCard}>
            {PROFESSIONAL_SUMMARY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="impact-title">
          <h2 id="impact-title">Impacto y logros</h2>
          <div className={styles.impactGrid}>
            {IMPACT_ITEMS.map((item) => (
              <article className={styles.impactCard} key={item.title}>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="experience-title">
          <h2 id="experience-title">Experiencia profesional</h2>
          <div className={styles.tabs} role="tablist" aria-label="Empresas">
            {(['nyxn', 'xolit', 'sofed'] as const).map((company) => (
              <button
                aria-selected={activeCompany === company}
                className={activeCompany === company ? styles.activeTab : undefined}
                key={company}
                onClick={() => setActiveCompany(company)}
                role="tab"
                type="button"
              >
                {company === 'nyxn' ? 'NYXN' : company === 'xolit' ? 'XOLIT' : 'Sofed'}
              </button>
            ))}
          </div>
          <motion.div
            className={styles.experienceTransition}
            data-company={activeCompany}
            layout={!shouldReduceMotion}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { layout: { duration: 0.36, ease: [0.22, 1, 0.36, 1] } }
            }
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                className={styles.experienceList}
                key={activeCompany}
                role="tabpanel"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {EXPERIENCE_BY_COMPANY[activeCompany].map((experience) => (
                  <article
                    className={styles.experienceCard}
                    key={`${experience.title}-${experience.period}`}
                  >
                    <h3>
                      {experience.title} <span>| {experience.company}</span>
                    </h3>
                    <p className={styles.period}>{experience.period}</p>
                    <span className={styles.cardDivider} aria-hidden="true" />
                    <p className={styles.experienceSummary}>{experience.summary}</p>
                    <ul>
                      {experience.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {experience.tags.length > 0 && (
                      <div className={styles.tags}>
                        {experience.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>

        <section className={styles.contentSection} aria-labelledby="education-title">
          <h2 id="education-title">Formación académica</h2>
          <div className={styles.listGrid}>
            {academicItems.map((item) => (
              <article className={styles.listCard} key={item.id}>
                <h3>{item.degree}</h3>
                <p>
                  {item.institution} | {item.year}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="certifications-title">
          <h2 id="certifications-title">Certificaciones y formación complementaria</h2>
          <div className={styles.certificationGrid}>
            {certificationItems.map((item) => (
              <article className={styles.listCard} key={item.id}>
                <h3>{item.degree}</h3>
                <p>
                  {item.institution} | {item.year}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`${styles.contentSection} ${styles.toolsSection}`}
          aria-labelledby="tools-title"
        >
          <h2 id="tools-title">Herramientas</h2>
          <ul className={styles.tools}>
            {aboutTools.map((tool) => (
              <li key={tool.id} title={tool.name}>
                <img src={tool.imageSrc} alt={tool.name} loading="lazy" draggable={false} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <FooterSection
        onOpenContact={() => undefined}
        onScrollToTop={() => window.scrollTo({ top: 0 })}
      />
    </div>
  );
}
