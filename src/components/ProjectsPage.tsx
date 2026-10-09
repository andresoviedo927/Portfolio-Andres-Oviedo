import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { ProjectItem } from '../types';
import { isCaseStudyProjectId } from '../modules/projects/data/caseStudyAssets';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import { FEATURED_PROJECTS, ProjectCard } from './ProjectsSection';
import { PROJECT_DETAIL_PATHS } from './projectRoutes';
import styles from './ProjectsPage.module.css';

type ProjectFilter = 'all' | 'web' | 'mobile';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const FILTERS: ReadonlyArray<{ id: ProjectFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
];

const matchesFilter = (project: ProjectItem, filter: ProjectFilter) => {
  if (filter === 'all') return true;
  return project.platforms?.includes(filter) ?? false;
};

export function ProjectsPage({ onNavigate, onSelectProject }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const prefersReducedMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () => FEATURED_PROJECTS.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  );

  return (
    <div className={styles.page}>
      <Navbar activePage="proyectos" onNavigate={onNavigate} />

      <main className={styles.main}>
        <section className={styles.projects} aria-labelledby="projects-page-title">
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.titleGroup}>
                <h1 id="projects-page-title">
                  Proyectos <span>destacados</span>
                </h1>
                <span className={styles.titleDivider} aria-hidden="true" />
              </div>
              <p>
                Explora los procesos de investigación, arquitectura de información, sistemas de
                diseño e impacto medible en cada producto digital.
              </p>
            </header>

            <div className={styles.filters} role="tablist" aria-label="Filtrar proyectos">
              {FILTERS.map((filter) => {
                const isActive = filter.id === activeFilter;

                return (
                  <button
                    aria-controls="projects-page-grid"
                    aria-selected={isActive}
                    className={isActive ? styles.activeFilter : undefined}
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    role="tab"
                    type="button"
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <motion.div className={styles.grid} id="projects-page-grid" role="tabpanel">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.projectMotionItem}
                    exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
                    key={project.id}
                    layout={prefersReducedMotion ? false : 'position'}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                      duration: prefersReducedMotion ? 0 : 0.3,
                    }}
                  >
                    <ProjectCard
                      href={PROJECT_DETAIL_PATHS[project.id]}
                      isInteractive={isCaseStudyProjectId(project.id)}
                      onNavigate={onNavigate}
                      onSelect={onSelectProject}
                      project={project}
                      tiltEffect={index % 2 === 0 ? 'reverse' : 'normal'}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection
        onOpenContact={() => undefined}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}
