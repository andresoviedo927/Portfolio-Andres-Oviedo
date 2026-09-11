import type { FC } from 'react';
import { PROJECTS, TEXTS } from '../constants';
import type { ProjectItem } from '../types';
import styles from './ProjectsSection.module.css';
import { Icon } from './ui/Icon';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FEATURED_PROJECTS = PROJECTS.slice(0, 2);

export const ProjectsSection: FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="proyectos" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="projects-title">{TEXTS.projects.title}</h2>
          <p>{TEXTS.projects.description}</p>
        </header>

        <div className={styles.grid}>
          {FEATURED_PROJECTS.map((project) => (
            <button
              key={project.id}
              id={`project-card-${project.id}`}
              className={styles.card}
              type="button"
              onClick={() => onSelectProject(project)}
              aria-label={`${TEXTS.projects.viewCase}: ${project.title}`}
            >
              <span className={styles.chip}>{project.category}</span>

              <span className={styles.cardOverlay}>
                <span className={styles.cardText}>
                  <strong>{project.title}</strong>
                  <span>{project.subtitle}</span>
                </span>
                <Icon name="arrowUpRight" className={styles.cardIcon} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
