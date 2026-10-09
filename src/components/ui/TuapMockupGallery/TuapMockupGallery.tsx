import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { tuapAppThumbnailMockups, tuapWebThumbnailMockups } from '../../../assets/images';
import { Icon } from '../Icon';
import { ThumbnailMockupGallery } from '../ThumbnailMockupGallery';
import styles from './TuapMockupGallery.module.css';

type GalleryMode = 'web' | 'app';

export function TuapMockupGallery() {
  const [mode, setMode] = useState<GalleryMode>('web');
  const prefersReducedMotion = useReducedMotion();
  const isWeb = mode === 'web';
  const duration = prefersReducedMotion ? 0 : 0.52;

  return (
    <section aria-label="Mockups Web y App de TuAp" className={styles.wrapper} data-mode={mode}>
      <div aria-label="Plataforma" className={styles.tabs} role="tablist">
        <button
          aria-controls="tuap-gallery-panel"
          aria-selected={isWeb}
          className={styles.tab}
          data-active={isWeb || undefined}
          id="tuap-gallery-web-tab"
          onClick={() => setMode('web')}
          role="tab"
          type="button"
        >
          <Icon name={isWeb ? 'webDesignSolid' : 'browserRegular'} />
          <span>Web</span>
          {isWeb && (
            <motion.span
              className={styles.indicator}
              layoutId="tuap-platform-indicator"
              transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </button>
        <button
          aria-controls="tuap-gallery-panel"
          aria-selected={!isWeb}
          className={styles.tab}
          data-active={!isWeb || undefined}
          id="tuap-gallery-app-tab"
          onClick={() => setMode('app')}
          role="tab"
          type="button"
        >
          <Icon name={isWeb ? 'smartphoneRegular' : 'smartphoneSolid'} />
          <span>App</span>
          {!isWeb && (
            <motion.span
              className={styles.indicator}
              layoutId="tuap-platform-indicator"
              transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </button>
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          aria-labelledby={isWeb ? 'tuap-gallery-web-tab' : 'tuap-gallery-app-tab'}
          className={styles.panel}
          exit={{ opacity: 0 }}
          id="tuap-gallery-panel"
          initial={{ opacity: 0 }}
          key={mode}
          role="tabpanel"
          transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
        >
          <ThumbnailMockupGallery
            ariaLabel={`Mockups de TuAp ${isWeb ? 'Web' : 'App'}`}
            defaultIndex={2}
            items={isWeb ? tuapWebThumbnailMockups : tuapAppThumbnailMockups}
            orientation={isWeb ? 'landscape' : 'portrait'}
            variant={isWeb ? 'tuap-web' : 'tuap-app'}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
