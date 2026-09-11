import React from 'react';
import { images } from '../assets/images';
import { CONTACT_DATA, TEXTS } from '../constants';
import { formatDisplayUrl } from '../utils/formatters';
import { Icon, type IconName } from './ui/Icon';

interface FooterSectionProps {
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onScrollToTop }) => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactLinks = [
    {
      id: 'email',
      icon: 'email' as IconName,
      heading: TEXTS.footer.links.email,
      address: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
      isAction: true,
      onClick: copyEmail,
    },
    {
      id: 'linkedin',
      icon: 'linkedin' as IconName,
      heading: TEXTS.footer.links.linkedin,
      address: formatDisplayUrl(CONTACT_DATA.linkedin),
      href: CONTACT_DATA.linkedin,
    },
    {
      id: 'behance',
      icon: 'globe' as IconName,
      heading: TEXTS.footer.links.behance,
      address: formatDisplayUrl(CONTACT_DATA.behance),
      href: CONTACT_DATA.behance,
    },
    {
      id: 'dribbble',
      icon: 'dribbble' as IconName,
      heading: TEXTS.footer.links.dribbble,
      address: formatDisplayUrl(CONTACT_DATA.dribbble),
      href: CONTACT_DATA.dribbble,
    },
  ];

  return (
    <footer
      id="contacto"
      className="relative w-full bg-surface-dark text-text-inverse pt-20 pb-12 overflow-hidden"
    >
      {/* Figma Glowing Ambient Blur Circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-36 w-[320px] h-[320px] rounded-full bg-brand-secondary/40 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 w-[320px] h-[320px] rounded-full bg-brand-secondary/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-brand-primary/40 blur-[140px]"
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col items-center gap-12">
        {/* Frame 1171277648: Center Avatar & Linear Gradient Divider Lines */}
        <div className="w-full flex items-center justify-center gap-4 sm:gap-6">
          {/* Left Gradient Divider */}
          <div className="hidden sm:block flex-1 max-w-[240px] h-[2px] bg-gradient-to-r from-brand-soft via-brand-primary to-brand-soft rounded-full opacity-80" />

          {/* Central Circular Avatar */}
          <div className="relative group">
            <div className="w-[110px] h-[110px] sm:w-[124px] sm:h-[124px] rounded-full p-1 bg-surface-dark border-2 border-brand-soft/60 shadow-elevation-large overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={images.avatar}
                alt={TEXTS.footer.avatarAlt}
                className="w-full h-full object-cover rounded-full filter grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-brand-primary text-text-inverse text-body-sm font-lexend font-medium tracking-wide shadow-elevation-medium whitespace-nowrap">
              {TEXTS.footer.avatarLabel}
            </div>
          </div>

          {/* Right Gradient Divider */}
          <div className="hidden sm:block flex-1 max-w-[240px] h-[2px] bg-gradient-to-r from-brand-soft via-brand-primary to-brand-soft rounded-full opacity-80" />
        </div>

        {/* Contact Invitation Pitch */}
        <div className="text-center max-w-xl space-y-2">
          <h3 className="text-title-lg sm:text-headline-sm font-semibold text-text-inverse tracking-tight">
            {TEXTS.footer.title}
          </h3>
          <p className="text-body-md sm:text-body-lg text-brand-soft">{TEXTS.footer.description}</p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-text-inverse font-medium text-body-md transition-all shadow-elevation-medium cursor-pointer inline-flex items-center gap-2"
            >
              <span>{TEXTS.footer.contact}</span>
            </button>
          </div>
        </div>

        {/* Figma Contact Items Row (Icon button, vertical divider, heading + address) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {contactLinks.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-primary/5 border border-brand-soft/20 backdrop-blur-xs hover:border-brand-soft/60 transition-all group"
            >
              {/* Figma Circular Icon Button (56x56, border #B3BEFF) */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-dark/90 border border-brand-soft shadow-elevation-medium flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-brand-primary/30 transition-all">
                <Icon name={item.icon} className="icon-lg text-text-inverse" />
              </div>

              {/* Figma Vertical Divider (1px, #B3BEFF) */}
              <div className="w-[1px] h-10 bg-brand-soft/40 shrink-0" />

              {/* Text Info */}
              <div className="flex flex-col min-w-0">
                <span className="text-body-sm font-medium text-brand-soft uppercase tracking-wider">
                  {item.heading}
                </span>

                {item.isAction ? (
                  <button
                    onClick={item.onClick}
                    className="text-body-sm sm:text-body-md text-text-inverse font-medium text-link truncate hover:text-brand-soft transition-colors text-left flex items-center gap-1 cursor-pointer"
                    title={TEXTS.footer.copyEmail}
                  >
                    <span className="truncate">{item.address}</span>
                    {emailCopied ? (
                      <Icon name="check" className="icon-xs text-status-success shrink-0" />
                    ) : (
                      <Icon name="copy" className="icon-xs text-text-secondary shrink-0" />
                    )}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm sm:text-body-md text-text-inverse font-medium text-link truncate hover:text-brand-soft transition-colors"
                  >
                    {item.address}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar with Copyright & Scroll to Top */}
        <div className="w-full pt-8 border-t border-surface-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-brand-soft/70">
          <p className="text-center sm:text-left">{TEXTS.footer.copyright}</p>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-primary/10 hover:bg-surface-primary/20 text-text-inverse transition-colors cursor-pointer"
            aria-label={TEXTS.footer.backToTop}
          >
            <span>{TEXTS.footer.backToTop}</span>
            <Icon name="arrowUp" className="icon-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};
