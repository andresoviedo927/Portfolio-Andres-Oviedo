import type { FC, ReactNode } from 'react';
import { images } from '../assets/images';
import { EDUCATIONS, EXPERIENCES, PERSONAL_INFO, TEXTS } from '../constants';
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
}

const TimelineCard: FC<TimelineCardProps> = ({ children, id, title }) => (
  <article id={id} className={styles.timelineCard}>
    <header className={styles.cardHeader}>
      <h3>{title}</h3>
      <span aria-hidden="true" />
    </header>
    <ol className={styles.timeline}>{children}</ol>
  </article>
);

export const AboutSection: FC = () => {
  return (
    <section id="sobre-mi" className={styles.section} aria-labelledby="about-label">
      <svg
        className={`${styles.decorativeCurve} ${styles.curveTop}`}
        viewBox="0 0 430 260"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 252C80 53 260 -24 426 74" />
      </svg>
      <svg
        className={`${styles.decorativeCurve} ${styles.curveBottom}`}
        viewBox="0 0 760 260"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 256C-8 90 267 36 754 4" />
        <path className={styles.arrowHead} d="M8 256L1 222L38 238Z" />
      </svg>
      <svg
        className={`${styles.decorativeCurve} ${styles.curveConnector}`}
        viewBox="0 0 140 150"
        fill="none"
        aria-hidden="true"
      >
        <path d="M22 4C16 61 11 87 42 142M102 42C119 91 119 113 132 144" />
      </svg>

      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <img className={styles.avatar} src={images.avatar} alt={TEXTS.about.avatarAlt} />
          <div className={styles.badgeWrap}>
            <span className={styles.pointer} aria-hidden="true" />
            <h2 id="about-label" className={styles.badge}>
              {TEXTS.about.label}
            </h2>
          </div>
        </div>

        <p className={styles.introduction}>
          {TEXTS.about.introPrefix} <strong>{TEXTS.about.introAccent}</strong>
        </p>

        <div className={styles.cards}>
          <TimelineCard id="card-experiencia" title={TEXTS.about.experience}>
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

          <TimelineCard id="card-educacion" title={TEXTS.about.education}>
            {EDUCATIONS.map((education) => (
              <TimelineItem
                key={education.id}
                date={education.year}
                title={education.degree}
                subtitle={education.institution}
              />
            ))}
          </TimelineCard>
        </div>

        <figure className={styles.quote}>
          <span className={styles.quoteLineTop} aria-hidden="true" />
          <blockquote>“{PERSONAL_INFO.tagline}”</blockquote>
          <span className={styles.quoteLineBottom} aria-hidden="true" />
        </figure>
      </div>
    </section>
  );
};
