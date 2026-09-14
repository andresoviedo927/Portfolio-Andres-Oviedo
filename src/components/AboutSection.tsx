import type { FC, ReactNode, SVGProps } from 'react';
import { images, toolIcons } from '../assets/images';
import { CERTIFICATIONS, EDUCATIONS, EXPERIENCES, PERSONAL_INFO, TEXTS } from '../constants';
import { Cursor } from './ui/cursor';
import styles from './AboutSection.module.css';

const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42.5} height={50} fill="none" {...props}>
    <g clipPath="url(#about-cursor-clip)">
      <path
        fill="#22c55e"
        fillRule="evenodd"
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={2}
        d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="about-cursor-clip">
        <path fill="#22c55e" d="M0 0h26v31H0z" />
      </clipPath>
    </defs>
  </svg>
);

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
    <section id="sobre-mi" className={styles.section} aria-label={TEXTS.about.label}>
      <Cursor
        attachToParent
        hotspot={{ x: 2.549, y: 2.935 }}
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{ ease: 'easeInOut', duration: 0.15 }}
        className={styles.aboutCustomCursor}
      >
        <div className={styles.aboutCursorContent}>
          <MouseIcon />
          <span>Sobre mí</span>
        </div>
      </Cursor>

      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <img className={styles.avatar} src={images.avatarSobreMi} alt={TEXTS.about.avatarAlt} />
        </div>

        <div className={styles.introduction}>
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

          <TimelineCard id="card-certificaciones" title={TEXTS.about.certifications}>
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

        <ul className={styles.tools} aria-label="Herramientas que utilizo">
          {toolIcons.map((tool) => (
            <li className={styles.toolItem} key={tool.id} title={tool.name}>
              <img
                src={tool.imageSrc}
                alt={tool.name}
                loading="lazy"
                draggable={false}
              />
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
