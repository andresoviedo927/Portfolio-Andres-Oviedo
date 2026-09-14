import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { IntroScreen, LoadingScreen } from './modules/intro/components';
import introStyles from './modules/intro/components/IntroFlow.module.css';
import type { ProjectItem } from './types';

type ExperienceStage = 'intro' | 'intro-exiting' | 'loading' | 'loading-exiting' | 'landing';

const INTRO_EXIT_DURATION_MS = 520;
const LOADING_EXIT_DURATION_MS = 600;

export default function App() {
  const [experienceStage, setExperienceStage] = useState<ExperienceStage>('intro');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (experienceStage !== 'landing') return;

    const handleScroll = () => {
      const sections = ['hero', 'sobre-mi', 'proyectos', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [experienceStage]);

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
      setExperienceStage('loading');
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

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  const landing = (
    <div
      className={`${introStyles.landing} min-h-screen bg-surface-secondary text-text-primary font-sans flex flex-col relative`}
    >
      {/* Top Fixed Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero / Cover proyectos */}
        <HeroSection />

        {/* Sobre mí / Trayectoria & Filosofía */}
        <AboutSection />

        {/* Proyectos / Showcase Carousel */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
      </main>

      {/* Footer */}
      <FooterSection
        onOpenContact={() => setIsContactModalOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );

  if (experienceStage !== 'landing') {
    const isIntroVisible =
      experienceStage === 'intro' || experienceStage === 'intro-exiting';
    const isLoadingVisible = experienceStage !== 'intro';

    return (
      <div className={introStyles.experienceShell}>
        {experienceStage === 'loading-exiting' && landing}
        {isLoadingVisible && (
          <LoadingScreen
            key="loading-screen"
            isExiting={experienceStage === 'loading-exiting'}
            onComplete={() => setExperienceStage('loading-exiting')}
          />
        )}
        {isIntroVisible && (
          <IntroScreen
            key="intro-screen"
            isExiting={experienceStage === 'intro-exiting'}
            onEnter={() => setExperienceStage('intro-exiting')}
          />
        )}
      </div>
    );
  }

  return landing;
}
