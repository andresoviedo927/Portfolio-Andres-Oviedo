import bigSchool from '../assets/images/about-big-school.webp';
import threePoints from '../assets/images/about-three-points.webp';
import uptc from '../assets/images/about-uptc.webp';
import colMayor from '../assets/images/about-col-mayor.webp';
import styles from './AboutTabletEducation.module.css';

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export function AboutTabletEducation({
  education,
  certifications,
}: {
  education: readonly Education[];
  certifications: readonly Education[];
}) {
  const logos = [bigSchool, threePoints, uptc, colMayor];
  return (
    <div className={styles.tablet}>
      <section className={styles.section} aria-label="Formación y certificaciones en Tablet">
        <div className={styles.column}>
          <h2>
            Formación <span>académica</span>
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.educationList}>
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
        </div>
        <div className={styles.column}>
          <h2>
            <span>Certificación</span> complementaria
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.certifications}>
            {certifications.map((item) => (
              <article className={styles.certificationCard} key={item.id}>
                <h3>{item.degree.replace(' Professional Certificate', '')}</h3>
                <p>
                  {item.institution} | {item.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
