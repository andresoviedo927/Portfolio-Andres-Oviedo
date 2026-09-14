import type { FC, ReactNode } from 'react';
import { images } from '../assets/images';
import { TEXTS } from '../constants';
import { ExpandableTabs, type ExpandableTabItem } from './shared/ExpandableTabs';
import { Icon } from './ui/Icon';
import { SpringElement } from './ui/SpringElement';
import styles from './FooterSection.module.css';

interface FooterSectionProps {
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

const icon = (name: 'behance' | 'linkedin' | 'emailSolid' | 'whatsapp'): ReactNode => (
  <Icon name={name} />
);

const SOCIAL_ITEMS: ExpandableTabItem[] = [
  {
    id: 'behance',
    accessibleName: 'Behance',
    icon: icon('behance'),
    label: 'AndresOviedoDesign',
    href: 'https://www.behance.net/AndresOviedoDesign',
    external: true,
  },
  {
    id: 'linkedin',
    accessibleName: 'LinkedIn',
    icon: icon('linkedin'),
    label: 'andresoviedo927',
    href: 'https://www.linkedin.com/in/andresoviedo927/',
    external: true,
  },
  {
    id: 'email',
    accessibleName: 'Correo',
    icon: icon('emailSolid'),
    label: 'andresoviedo927@outlook.com',
    href: 'mailto:andresoviedo927@outlook.com',
  },
  {
    id: 'whatsapp',
    accessibleName: 'WhatsApp',
    icon: icon('whatsapp'),
    label: '+57 320 736 8686',
    href: 'https://wa.me/573207368686',
    external: true,
  },
];

export const FooterSection: FC<FooterSectionProps> = () => (
  <footer id="contacto" className={styles.footer}>
    <div className={styles.glowLayer} aria-hidden="true">
      <span className={`${styles.glow} ${styles.glowLeft}`} />
      <span className={`${styles.glow} ${styles.glowRight}`} />
      <span className={`${styles.glow} ${styles.glowCenter}`} />
    </div>

    <div className={styles.content}>
      <h2 className={styles.title}>Contáctame</h2>

      <div className={styles.avatarRow}>
        <span className={styles.avatarLine} aria-hidden="true" />
        <SpringElement
          springClassName={`stroke-white ${styles.avatarSpring}`}
          springConfig={{ stiffness: 200, damping: 16 }}
          springPathConfig={{
            coilCount: 8,
            amplitudeMin: 8,
            amplitudeMax: 20,
            curveRatioMin: 0.5,
            curveRatioMax: 1,
            bezierOffset: 8,
          }}
          dragElastic={0.2}
        >
          <img
            className={styles.avatar}
            src={images.avatarContactame}
            alt={TEXTS.footer.avatarAlt}
            draggable={false}
          />
        </SpringElement>
        <span className={styles.avatarLine} aria-hidden="true" />
      </div>

      <ExpandableTabs ariaLabel="Redes y medios de contacto" items={SOCIAL_ITEMS} />

      <div className={styles.copyright}>
        <p>{TEXTS.footer.copyright}</p>
      </div>
    </div>
  </footer>
);
