import { useEffect, useState } from 'react';
import { TEXTS } from '../constants';

interface NavbarProps {
  activePage: 'hero' | 'sobre-mi' | 'proyectos';
  onNavigate: (path: string) => void;
  tabletVariant?: 'default' | 'villa';
}

const PAGE_PATHS: Partial<Record<string, string>> = {
  hero: '/',
  'sobre-mi': '/sobre-mi',
  proyectos: '/proyectos',
};

export function Navbar({ activePage, onNavigate, tabletVariant = 'default' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface-secondary/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-elevation-small' : 'border-b border-border-subtle/40'
      }`}
      id="main-navbar"
    >
      <nav
        aria-label={TEXTS.navigation.ariaLabel}
        className={`mx-auto flex h-20 w-full items-center justify-center px-2 pt-[env(safe-area-inset-top)] sm:px-4 ${
          tabletVariant === 'villa' ? 'min-[720px]:max-[1024px]:px-12' : ''
        }`}
        id="desktop-nav-group"
      >
        {TEXTS.navigation.items.map((item) => {
          const isActive = activePage === item.id;
          const path = PAGE_PATHS[item.id];
          const className = `relative flex h-14 min-w-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-2xl px-1.5 font-lexend text-[12px] font-normal leading-[18px] text-text-body no-underline transition-[color,font-size,line-height,font-weight] duration-200 hover:text-text-primary min-[380px]:px-2 sm:px-4 sm:text-[14px] sm:leading-[20px] md:px-6 ${
            isActive
              ? 'text-[14px] font-medium leading-[20px] text-text-primary sm:text-[16px] sm:leading-[24px]'
              : ''
          }`;
          const content = (
            <>
              {item.label}
              {isActive && (
                <span className="absolute bottom-1 h-1 w-4 rounded-sm bg-brand-primary" />
              )}
            </>
          );

          if (path) {
            return (
              <a
                aria-current={isActive ? 'page' : undefined}
                className={className}
                href={path}
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(path);
                }}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              aria-disabled="true"
              className={className}
              id={`nav-item-${item.id}`}
              key={item.id}
              type="button"
            >
              {content}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
