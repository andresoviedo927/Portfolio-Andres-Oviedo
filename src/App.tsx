import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectsPage } from './components/ProjectsPage';
import { VillaProjectPage } from './components/VillaProjectPage';
import { CedhuProjectPage } from './components/CedhuProjectPage';
import { PeriodicoProjectPage } from './components/PeriodicoProjectPage';
import { TuapProjectPage } from './components/TuapProjectPage';
import { FooterSection } from './components/FooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { IntroScreen, LoadingScreen } from './modules/intro/components';
import introStyles from './modules/intro/components/IntroFlow.module.css';
import type { ProjectItem } from './types';

type ExperienceStage = 'intro' | 'intro-exiting' | 'loading' | 'loading-exiting' | 'landing';

const INTRO_EXIT_DURATION_MS = 650;
const LOADING_EXIT_DURATION_MS = 600;
const LOADING_SCREEN_ENABLED = false;

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [experienceStage, setExperienceStage] = useState<ExperienceStage>(() =>
    window.location.pathname === '/' ? 'intro' : 'landing',
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  useEffect(() => {
    let restoreFrame = 0;
    const scrollFrame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      restoreFrame = window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => {
      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(restoreFrame);
    };
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      setPathname(window.location.pathname);
      setExperienceStage('landing');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (experienceStage === 'landing') return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0 });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [experienceStage]);

  useEffect(() => {
    if (experienceStage !== 'intro-exiting') return;

    const introTimer = window.setTimeout(() => {
      if (LOADING_SCREEN_ENABLED) {
        setExperienceStage('loading');
        return;
      }

      setExperienceStage('landing');
      window.scrollTo({ top: 0 });
    }, INTRO_EXIT_DURATION_MS);

    return () => window.clearTimeout(introTimer);
  }, [experienceStage]);

  useEffect(() => {
    if (experienceStage !== 'loading-exiting') return;

    const loadingTimer = window.setTimeout(() => {
      setExperienceStage('landing');
      window.scrollTo({ top: 0 });
    }, LOADING_EXIT_DURATION_MS);

    return () => window.clearTimeout(loadingTimer);
  }, [experienceStage]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (path: string) => {
    if (path === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.history.pushState({}, '', path);
    setPathname(path);
    setExperienceStage('landing');
  };

  if (pathname === '/sobre-mi') {
    return <AboutPage onNavigate={handleNavigate} />;
  }

  if (pathname === '/proyectos') {
    return (
      <>
        <ProjectsPage
          onNavigate={handleNavigate}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </>
    );
  }

  if (pathname === '/proyectos/villa-de-leyva') {
    return <VillaProjectPage onNavigate={handleNavigate} />;
  }

  if (pathname === '/proyectos/cedhu') {
    return <CedhuProjectPage onNavigate={handleNavigate} />;
  }

  if (pathname === '/proyectos/periodico-enterese') {
    return <PeriodicoProjectPage onNavigate={handleNavigate} />;
  }

  if (pathname === '/proyectos/tuap') {
    return <TuapProjectPage onNavigate={handleNavigate} />;
  }

  const landing = (
    <div
      className={`${introStyles.landing} min-h-screen bg-surface-secondary text-text-primary font-sans flex flex-col relative`}
    >
      {/* Top Fixed Navbar */}
      <Navbar activePage="hero" onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero / Cover proyectos */}
        <HeroSection />

        {/* Sobre mí / Trayectoria & Filosofía */}
        <AboutSection />

        {/* Proyectos / Showcase Carousel */}
        <ProjectsSection
          onNavigate={handleNavigate}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Footer */}
      <FooterSection
        onOpenContact={() => setIsContactModalOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );

  const isIntroVisible = experienceStage === 'intro' || experienceStage === 'intro-exiting';
  const isLoadingVisible =
    LOADING_SCREEN_ENABLED &&
    (experienceStage === 'loading' || experienceStage === 'loading-exiting');
  const isLandingVisible =
    !LOADING_SCREEN_ENABLED ||
    experienceStage === 'loading-exiting' ||
    experienceStage === 'landing';

  return (
    <div className={introStyles.experienceShell}>
      {isLandingVisible && landing}
      {isLoadingVisible && (
        <LoadingScreen
          isExiting={experienceStage === 'loading-exiting'}
          onComplete={() => setExperienceStage('loading-exiting')}
        />
      )}
      {isIntroVisible && (
        <IntroScreen
          isExiting={experienceStage === 'intro-exiting'}
          onEnter={() => setExperienceStage('intro-exiting')}
        />
      )}
    </div>
  );
}
