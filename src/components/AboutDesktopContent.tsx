import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { images } from '../assets/images';
import { PRODUCT_VISION } from '../constants/productVision';
import bigSchool from '../assets/images/about-big-school.webp';
import threePoints from '../assets/images/about-three-points.webp';
import uptc from '../assets/images/about-uptc.webp';
import colMayor from '../assets/images/about-col-mayor.webp';
import { Icon } from './ui/Icon';
import { ABOUT_RESULTS } from '../constants/aboutResults';
import styles from './AboutDesktopContent.module.css';

type Company = 'nyxn' | 'xolit' | 'sofed';
interface Experience {
  title: string;
  company: string;
  period: string;
  summary: string;
  details: readonly string[];
  tags: readonly string[];
}
interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}
interface Props {
  experiences: Record<Company, readonly Experience[]>;
  education: readonly Education[];
  certifications: readonly Education[];
  tools: readonly { id: string; name: string; imageSrc: string }[];
}

const COMPANIES: readonly Company[] = ['nyxn', 'xolit', 'sofed'];

export function AboutDesktopContent({ experiences, education, certifications, tools }: Props) {
  const [activeCompany, setActiveCompany] = useState<Company>('nyxn');
  const reducedMotion = useReducedMotion();
  const logos = [bigSchool, threePoints, uptc, colMayor];
  return (
    <div className={styles.desktop}>
      <section className={styles.profile} aria-labelledby="desktop-about-title">
        <img className={styles.avatar} src={images.avatarSobreMi} alt="Andrés Oviedo Narváez" />
        <div className={styles.profileCopy}>
          <p className={styles.role}>Product Designer | UX/UI Designer</p>
          <h1 id="desktop-about-title">
            <span>Andrés</span> Oviedo Narváez
          </h1>
          <p className={styles.specialties}>
            B2B | SaaS | UX Research | Design Systems | AI-Driven Design
          </p>
          <div className={styles.contacts}>
            <span>
              <Icon name="mapMarkerSolid" />
              Medellín, Colombia
            </span>
            <a href="https://wa.me/573207368686">
              <Icon name="whatsapp" />
              <span>+57 320 736 8686</span>
            </a>
            <a href="mailto:andresoviedo927@outlook.com">
              <Icon name="emailSolid" />
              <span>andresoviedo927@outlook.com</span>
            </a>
          </div>
        </div>
        <a className={styles.download} href="/Andres_Oviedo_UX_UI_Product_Designer.pdf" download>
          <Icon name="download" />
          Descargar HV
        </a>
      </section>

      <section
        className={`${styles.section} ${styles.summary}`}
        aria-labelledby="desktop-summary-title"
      >
        <div className={styles.summaryInner}>
          <h2 id="desktop-summary-title">
            Experiencia <span>y visión de producto</span>
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.summaryText}>
            {PRODUCT_VISION.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.experience}`}
        aria-labelledby="desktop-experience-title"
      >
        <header className={styles.experienceHeader}>
          <h2 id="desktop-experience-title">
            Experiencia <span>profesional</span>
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div
            className={styles.companies}
            role="tablist"
            aria-label="Empresas de la experiencia profesional"
          >
            {COMPANIES.map((company) => (
              <button
                type="button"
                key={company}
                role="tab"
                id={`desktop-company-${company}`}
                aria-selected={activeCompany === company}
                aria-controls="desktop-company-panel"
                onClick={() => setActiveCompany(company)}
              >
                {company === 'sofed' ? 'Sofed' : company.toUpperCase()}
              </button>
            ))}
          </div>
        </header>
        <div className={styles.experienceList}>
          <AnimatePresence initial={false} mode="wait">
            {[activeCompany].map((company) => (
              <motion.div
                className={styles.companyGroup}
                key={company}
                data-company={company}
                role="tabpanel"
                id="desktop-company-panel"
                aria-labelledby={`desktop-company-${company}`}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
              >
                {experiences[company].map((item) => (
                  <article className={styles.experienceCard} key={item.title}>
                    <div>
                      <h3>
                        {item.title} <span>| {item.company}</span>
                      </h3>
                      <p className={styles.period}>{item.period}</p>
                    </div>
                    <span className={styles.cardDivider} aria-hidden="true" />
                    <p className={styles.experienceSummary}>{item.summary}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className={styles.tags}>
                      {(item.tags.length
                        ? item.tags
                        : company === 'xolit'
                          ? [
                              'Product Design',
                              'UX/UI',
                              'B2B',
                              'User Flows',
                              'Prototyping',
                              'Accessibility',
                            ]
                          : [
                              'UX/UI',
                              'Mobile',
                              'Tablet',
                              'EdTech',
                              'Geolocation',
                              'Augmented Reality',
                            ]
                      ).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.education}`}
        aria-label="Formación y certificaciones"
      >
        <div className={styles.educationColumn}>
          <h2>
            Formación <span>académica</span>
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.educationList}>
            {education.map((item, i) => (
              <article className={styles.educationCard} key={item.id}>
                <img src={logos[i]} alt="" />
                <div>
                  <h3>{item.degree}</h3>
                  <p>
                    {item.id === 'edu-2'
                      ? 'Three Points — The School for Digital Business'
                      : item.institution}{' '}
                    | {item.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.educationColumn}>
          <h2>
            <span>Certificación</span> complementaria
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.certifications}>
            {certifications.map((item) => (
              <article className={styles.certificationCard} key={item.id}>
                <h3 title={item.degree}>{item.degree.replace(' Professional Certificate', '')}</h3>
                <p>
                  {item.institution} | {item.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.toolsSection}`}
        aria-labelledby="desktop-tools-title"
      >
        <div className={styles.toolsHeader}>
          <h2 id="desktop-tools-title">Herramientas</h2>
          <span className={styles.divider} aria-hidden="true" />
        </div>
        <ul className={styles.tools}>
          {tools.map((tool) => (
            <li key={tool.id} title={tool.name}>
              <img src={tool.imageSrc} alt={tool.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.section} ${styles.impact}`}
        aria-labelledby="desktop-impact-title"
      >
        <div className={styles.impactInner}>
          <h2 id="desktop-impact-title">
            Impacto <span>y resultados</span>
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <p className={styles.impactIntro}>
            A lo largo de mi trayectoria he contribuido a transformar desafíos complejos en
            experiencias digitales más intuitivas, eficientes y centradas en el usuario. Mediante la
            optimización de flujos, la mejora de la usabilidad y la implementación de Design
            Systems, he impulsado soluciones que simplifican las interacciones, fortalecen la
            satisfacción de los usuarios y optimizan los procesos de diseño.
          </p>
          <div className={styles.results}>
            {ABOUT_RESULTS.map((item) => (
              <article className={styles.resultCard} key={item.title}>
                <span className={styles.resultIcon}>
                  <Icon name={item.icon} />
                </span>
                <div>
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.invitation} aria-label="Invitación">
        <p>¿Hablamos de lo que podemos construir juntos?</p>
      </section>
    </div>
  );
}
