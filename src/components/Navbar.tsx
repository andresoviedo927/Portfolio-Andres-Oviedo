import { useEffect, useState } from 'react';
import { TEXTS } from '../constants';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface-secondary/90 backdrop-blur-md shadow-elevation-small' : ''
      }`}
      id="main-navbar"
    >
      <nav
        aria-label={TEXTS.navigation.ariaLabel}
        className="mx-auto flex h-20 w-full items-center justify-center px-2 pt-[env(safe-area-inset-top)] sm:px-4"
        id="desktop-nav-group"
      >
        {TEXTS.navigation.items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex h-14 min-w-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-2xl px-2.5 font-lexend text-[14px] font-normal leading-[20px] text-text-body transition-[color,font-size,line-height,font-weight] duration-200 hover:text-text-primary sm:px-4 md:px-6 ${
                isActive
                  ? 'text-[16px] font-medium leading-[24px] text-text-primary'
                  : ''
              }`}
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-1 h-1 w-4 rounded-sm bg-brand-primary" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
