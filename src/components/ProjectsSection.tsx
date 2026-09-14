import type { CSSProperties, FC } from 'react';
import { images } from '../assets/images';
import { PROJECTS, TEXTS } from '../constants';
import { useCardTilt } from '../hooks/useCardTilt';
import { isCaseStudyProjectId } from '../modules/projects/data/caseStudyAssets';
import type { ProjectItem } from '../types';
import styles from './ProjectsSection.module.css';
import { Icon } from './ui/Icon';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FEATURED_PROJECTS = PROJECTS.slice(0, 2);
const PROJECT_COVERS: Record<string, string> = {
  'proj-1': images.villaCard,
  'proj-2': images.cedhuCard,
};

interface ProjectCardProps {
  isInteractive: boolean;
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  tiltEffect: 'normal' | 'reverse';
}

const ProjectCard: FC<ProjectCardProps> = ({ isInteractive, project, onSelect, tiltEffect }) => {
  const { cardRef, handlePointerEnter, handlePointerMove, handlePointerLeave } =
    useCardTilt<HTMLDivElement>(tiltEffect);
  const coverStyle = {
    '--project-cover-art': `url("${PROJECT_COVERS[project.id]}")`,
  } as CSSProperties;

  const handleSelect = () => {
    if (isInteractive) onSelect(project);
  };

  return (
    <div
      className={`${styles.cardWrap} ${isInteractive ? styles.cardWrapInteractive : ''}`}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `${TEXTS.projects.viewCase}: ${project.title}` : undefined}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          handleSelect();
        }
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      <div
        ref={cardRef}
        id={`project-card-${project.id}`}
        className={styles.card}
      >
        <span className={styles.cardBackdrop} style={coverStyle} aria-hidden="true" />

        <span className={styles.cardOverlay}>
          <span className={styles.cardText}>
            <strong>{project.title}</strong>
            <span>{project.description}</span>
          </span>
          {isInteractive && <Icon name="arrowSmallRight" className={styles.cardIcon} />}
        </span>
      </div>
    </div>
  );
};

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
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              isInteractive={isCaseStudyProjectId(project.id)}
              project={project}
              onSelect={onSelectProject}
              tiltEffect={index % 2 === 0 ? 'reverse' : 'normal'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
