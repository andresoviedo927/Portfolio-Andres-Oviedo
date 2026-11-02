import { useMobileCaseStudy } from '../hooks/useMobileCaseStudy';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { tropiStockAppThumbnailMockups, tropiStockWebThumbnailMockups } from '../assets/images';
import { Icon } from './ui/Icon';
import { ThumbnailMockupGallery } from './ui/ThumbnailMockupGallery';
import styles from './TropiStockMockupGallery.module.css';

type GalleryMode = 'app' | 'web';

export function TropiStockMockupGallery() {
  const mobile = useMobileCaseStudy();
  const [mode, setMode] = useState<GalleryMode>(() => (mobile ? 'web' : 'app'));
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={styles.wrapper} data-mode={mode}>
      <div aria-label="Plataforma" className={styles.tabs} role="tablist">
        <button
          aria-controls="tropi-app-panel"
          aria-selected={mode === 'app'}
          className={styles.tab}
          data-active={mode === 'app' || undefined}
          onClick={() => setMode('app')}
          role="tab"
          type="button"
        >
          <Icon name={mode === 'app' ? 'smartphoneSolid' : 'smartphoneRegular'} />
          <span>App</span>
          {mode === 'app' && (
            <motion.i
              className={styles.indicator}
              layoutId="tropi-platform-indicator"
              transition={{ duration: prefersReducedMotion ? 0 : 0.38 }}
            />
          )}
        </button>
        <button
          aria-controls="tropi-web-panel"
          aria-selected={mode === 'web'}
          className={styles.tab}
          data-active={mode === 'web' || undefined}
          onClick={() => setMode('web')}
          role="tab"
          type="button"
        >
          <Icon name={mode === 'web' ? 'webDesignSolid' : 'browserRegular'} />
          <span>Web</span>
          {mode === 'web' && (
            <motion.i
              className={styles.indicator}
              layoutId="tropi-platform-indicator"
              transition={{ duration: prefersReducedMotion ? 0 : 0.38 }}
            />
          )}
        </button>
      </div>
      <div
        className={styles.panel}
        data-visible={mode === 'app' || undefined}
        id="tropi-app-panel"
        role="tabpanel"
      >
        <ThumbnailMockupGallery
          ariaLabel="Mockups de Tropi Stock App"
          className={styles.gallery}
          defaultIndex={2}
          items={tropiStockAppThumbnailMockups}
          orientation="portrait"
          variant="tuap-app"
        />
      </div>
      <div
        className={styles.panel}
        data-visible={mode === 'web' || undefined}
        id="tropi-web-panel"
        role="tabpanel"
      >
        <ThumbnailMockupGallery
          ariaLabel="Mockups de Tropi Stock Web"
          className={styles.gallery}
          defaultIndex={2}
          items={tropiStockWebThumbnailMockups}
          orientation="landscape"
          variant="tuap-web"
        />
      </div>
    </div>
  );
}
