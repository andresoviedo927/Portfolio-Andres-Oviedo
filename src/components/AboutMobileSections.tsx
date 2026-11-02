import { useMobileCaseStudy } from '../hooks/useMobileCaseStudy';
import { Children, isValidElement, type ReactNode } from 'react';
import { Accordion, MobileCaseStudyProvider } from './MobileCaseStudySection';
import styles from './AboutMobileSections.module.css';
import { PRODUCT_VISION } from '../constants/productVision';
import { ABOUT_RESULTS } from '../constants/aboutResults';
import { Icon } from './ui/Icon';
import bigSchool from '../assets/images/about-big-school.webp';
import threePoints from '../assets/images/about-three-points.webp';
import uptc from '../assets/images/about-uptc.webp';
import colMayor from '../assets/images/about-col-mayor.webp';

const TITLES: Record<string, string> = {
  'professional-summary-title': 'Experiencia y visión de producto',
  'impact-title': 'Impacto y resultados',
  'experience-title': 'Experiencia profesional',
  'education-title': 'Formación académica',
  'certifications-title': 'Certificación complementaria',
  'tools-title': 'Herramientas',
};
interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export function AboutMobileSections({
  children,
  className,
  education,
  certifications,
}: {
  children: ReactNode;
  className: string;
  education: readonly Education[];
  certifications: readonly Education[];
}) {
  const mobile = useMobileCaseStudy();
  const nodes = Children.toArray(children);
  const section = (id: string) =>
    nodes.find(
      (child) =>
        isValidElement<{ 'aria-labelledby'?: string }>(child) &&
        child.props['aria-labelledby'] === id,
    );
  const logos = [bigSchool, threePoints, uptc, colMayor];
  const content: Record<string, ReactNode> = {
    'professional-summary-title': (
      <div className={styles.vision}>
        {PRODUCT_VISION.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    ),
    'experience-title': section('experience-title'),
    'education-title': (
      <div className={styles.list}>
        {education.map((item, index) => (
          <article className={styles.educationCard} key={item.id}>
            <img src={logos[index]} alt="" />
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
    ),
    'certifications-title': (
      <div className={styles.list}>
        {certifications.map((item) => (
          <article className={styles.certificationCard} key={item.id}>
            <h3>{item.degree.replace(' Professional Certificate', '')}</h3>
            <p>
              {item.institution} | {item.year}
            </p>
          </article>
        ))}
      </div>
    ),
    'tools-title': section('tools-title'),
    'impact-title': (
      <div className={styles.impact}>
        <p>
          A lo largo de mi trayectoria he contribuido a transformar desafíos complejos en
          experiencias digitales más intuitivas, eficientes y centradas en el usuario. Mediante la
          optimización de flujos, la mejora de la usabilidad y la implementación de Design Systems,
          he impulsado soluciones que simplifican las interacciones, fortalecen la satisfacción de
          los usuarios y optimizan los procesos de diseño.
        </p>
        <div className={styles.list}>
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
    ),
  };
  return (
    <MobileCaseStudyProvider>
      <div className={`${className} ${mobile ? styles.mobile : ''}`}>
        {mobile ? (
          <>
            {nodes.filter(
              (child) =>
                isValidElement<{ 'aria-labelledby'?: string }>(child) &&
                child.props['aria-labelledby'] === 'about-page-title',
            )}
            <div className={styles.group}>
              {[
                'professional-summary-title',
                'experience-title',
                'education-title',
                'certifications-title',
                'tools-title',
                'impact-title',
              ].map((id) => (
                <Accordion key={id} title={TITLES[id]}>
                  {content[id]}
                </Accordion>
              ))}
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </MobileCaseStudyProvider>
  );
}
