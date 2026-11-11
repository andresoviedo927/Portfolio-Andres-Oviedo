import type { FC } from 'react';
import { images } from '../assets/images';
import { TEXTS } from '../constants';
import { CONTACT_LINKS } from '../constants/contactLinks';
import { ExpandableTabs, type ExpandableTabItem } from './ui/ExpandableTabs';
import { Icon } from './ui/Icon';
import { SpringElement } from './ui/SpringElement';
import styles from './FooterSection.module.css';

interface FooterSectionProps {
  onOpenContact: () => void;
  onScrollToTop: () => void;
  theme?: 'cedhu' | 'default' | 'periodico' | 'troop' | 'tropi' | 'tuap' | 'villa';
}

const SOCIAL_ITEMS: ExpandableTabItem[] = CONTACT_LINKS.map(({ icon, ...link }) => ({
  ...link,
  icon: <Icon name={icon} />,
}));

export const FooterSection: FC<FooterSectionProps> = ({ theme = 'default' }) => (
  <footer id="contacto" className={styles.footer} data-theme={theme} tabIndex={-1}>
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
          {theme !== 'default' && theme !== 'tropi' ? (
            <span className={styles[`${theme}AvatarFrame`]}>
              <img
                className={styles.avatar}
                src={images.avatarContactame}
                alt={TEXTS.footer.avatarAlt}
                draggable={false}
              />
            </span>
          ) : (
            <img
              className={styles.avatar}
              src={images.avatarContactame}
              alt={TEXTS.footer.avatarAlt}
              draggable={false}
            />
          )}
        </SpringElement>
        <span className={styles.avatarLine} aria-hidden="true" />
      </div>

      <ExpandableTabs
        ariaLabel="Redes y medios de contacto"
        className={styles.socialTabs}
        directLinksOnMobile
        items={SOCIAL_ITEMS}
      />

      <div className={styles.copyright}>
        <p>{TEXTS.footer.copyright}</p>
      </div>
    </div>
  </footer>
);
