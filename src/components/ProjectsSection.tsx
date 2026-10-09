import {
  useEffect,
  useRef,
  type CSSProperties,
  type DragEvent,
  type FC,
  type PointerEvent,
} from 'react';
import { images } from '../assets/images';
import { PROJECTS, TEXTS } from '../constants';
import { useCardTilt } from '../hooks/useCardTilt';
import { isCaseStudyProjectId } from '../modules/projects/data/caseStudyAssets';
import type { ProjectItem } from '../types';
import styles from './ProjectsSection.module.css';
import { PROJECT_DETAIL_PATHS } from './projectRoutes';
import { Icon } from './ui/Icon';

interface ProjectsSectionProps {
  onNavigate: (path: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const PROJECT_COVERS: Record<string, string> = {
  'proj-1': images.villaCard,
  'proj-2': images.cedhuCard,
  'proj-3': images.periodicoCard,
  'proj-4': images.tuapCard,
};
const getProjectDateValue = (project: ProjectItem) => {
  const [year, month = '01'] = (project.projectDate ?? project.year).split('-');
  return Number(year) * 12 + Number(month);
};

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.id in PROJECT_COVERS)
  .sort(
    (firstProject, secondProject) =>
      getProjectDateValue(secondProject) - getProjectDateValue(firstProject),
  )
  .slice(0, 6);

interface ProjectCardProps {
  href?: string;
  isInteractive: boolean;
  onNavigate?: (path: string) => void;
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  tiltEffect: 'normal' | 'reverse';
}

export const ProjectCard: FC<ProjectCardProps> = ({
  href,
  isInteractive,
  onNavigate,
  project,
  onSelect,
  tiltEffect,
}) => {
  const { cardRef, handlePointerEnter, handlePointerMove, handlePointerLeave } =
    useCardTilt<HTMLDivElement>(tiltEffect);
  const coverStyle = {
    '--project-cover-art': `url("${PROJECT_COVERS[project.id]}")`,
  } as CSSProperties;
  const isCardInteractive = isInteractive || Boolean(href);

  const handleSelect = () => {
    if (href) {
      onNavigate?.(href);
      return;
    }
    if (isInteractive) onSelect(project);
  };

  const card = (
    <div ref={cardRef} id={`project-card-${project.id}`} className={styles.card}>
      <span className={styles.cardBackdrop} style={coverStyle} aria-hidden="true" />
      <span className={styles.cardDivider} aria-hidden="true" />

      <span className={styles.cardOverlay}>
        <span className={styles.cardText}>
          <strong>{project.title}</strong>
          <span>{project.description}</span>
        </span>
      </span>
    </div>
  );

  const sharedProps = {
    className: `${styles.cardWrap} ${isCardInteractive ? styles.cardWrapInteractive : ''}`,
    'data-project-id': project.id,
    onDragStart: (event: DragEvent<HTMLElement>) => event.preventDefault(),
    onPointerEnter: handlePointerEnter,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onPointerCancel: handlePointerLeave,
  };

  if (href) {
    return (
      <a
        {...sharedProps}
        aria-label={`${TEXTS.projects.goTo}: ${project.title}`}
        href={href}
        onClick={(event) => {
          event.preventDefault();
          handleSelect();
        }}
      >
        {card}
      </a>
    );
  }

  return (
    <div
      {...sharedProps}
      role={isCardInteractive ? 'button' : undefined}
      tabIndex={isCardInteractive ? 0 : undefined}
      aria-label={isCardInteractive ? `${TEXTS.projects.viewCase}: ${project.title}` : undefined}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (isCardInteractive && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          handleSelect();
        }
      }}
    >
      {card}
    </div>
  );
};

export const ProjectsSection: FC<ProjectsSectionProps> = ({ onNavigate, onSelectProject }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const previousFrameRef = useRef<number | null>(null);
  const directionRef = useRef(1);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const pauseAutoScroll = () => {
    clearResumeTimeout();
    isPausedRef.current = true;
  };

  const resumeAutoScroll = (delay = 0) => {
    clearResumeTimeout();
    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      previousFrameRef.current = null;
    }, delay);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const AUTO_SCROLL_SPEED = 0.012;

    const animate = (timestamp: number) => {
      const carousel = carouselRef.current;

      if (carousel && !isPausedRef.current && carousel.scrollWidth > carousel.clientWidth) {
        const previousTimestamp = previousFrameRef.current ?? timestamp;
        const elapsed = Math.min(timestamp - previousTimestamp, 48);
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const nextScrollLeft =
          carousel.scrollLeft + directionRef.current * elapsed * AUTO_SCROLL_SPEED;

        if (nextScrollLeft >= maxScrollLeft) {
          carousel.scrollLeft = maxScrollLeft;
          directionRef.current = -1;
        } else if (nextScrollLeft <= 0) {
          carousel.scrollLeft = 0;
          directionRef.current = 1;
        } else {
          carousel.scrollLeft = nextScrollLeft;
        }
      }

      previousFrameRef.current = timestamp;
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      clearResumeTimeout();
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;

    pauseAutoScroll();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) <= 4 && !drag.moved) return;

    if (!drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = 'true';
    }

    event.currentTarget.scrollLeft = drag.startScrollLeft - distance;
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delete event.currentTarget.dataset.dragging;
    drag.pointerId = -1;
    resumeAutoScroll(2200);
  };

  return (
    <section id="proyectos" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <h2 id="projects-title">
              Proyectos <span>destacados</span>
            </h2>

            <a
              className={styles.viewAllProjects}
              href="/proyectos"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('/proyectos');
              }}
            >
              <span>Ver todos los proyectos ({FEATURED_PROJECTS.length})</span>
              <Icon name="arrowSmallRightRegular" className={styles.viewAllProjectsIcon} />
            </a>
          </div>
          <p>{TEXTS.projects.description}</p>
        </header>

        <div className={styles.carousel}>
          <div
            aria-label="Carrusel de proyectos. Arrastra horizontalmente para explorar."
            className={styles.grid}
            onClickCapture={(event) => {
              if (!dragRef.current.moved) return;
              event.preventDefault();
              event.stopPropagation();
              dragRef.current.moved = false;
            }}
            onFocusCapture={pauseAutoScroll}
            onBlurCapture={() => resumeAutoScroll(1200)}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={() => resumeAutoScroll(1200)}
            onPointerCancel={finishDrag}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            ref={carouselRef}
            role="region"
            tabIndex={0}
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard
                href={PROJECT_DETAIL_PATHS[project.id]}
                key={project.id}
                isInteractive={isCaseStudyProjectId(project.id)}
                onNavigate={onNavigate}
                project={project}
                onSelect={onSelectProject}
                tiltEffect={index % 2 === 0 ? 'reverse' : 'normal'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
