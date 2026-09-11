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
        className="mx-auto flex h-20 items-center justify-center"
        id="desktop-nav-group"
      >
        {TEXTS.navigation.items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              className={`relative flex h-14 items-center justify-center rounded-2xl px-6 text-body-lg font-medium text-text-body transition-colors hover:text-text-primary ${
                isActive ? 'text-text-primary' : ''
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
