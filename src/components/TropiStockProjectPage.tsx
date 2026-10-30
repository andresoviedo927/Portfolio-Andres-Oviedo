import { MobileCaseStudyProvider } from './MobileCaseStudySection';
import { useEffect } from 'react';
import { images } from '../assets/images';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import { CountryFlag } from './shared/CountryFlag';
import { TropiStockArchitectureSection } from './TropiStockArchitectureSection';
import { TropiStockChallengeSection } from './TropiStockChallengeSection';
import { TropiStockContextSection } from './TropiStockContextSection';
import { TropiStockFeaturesSection } from './TropiStockFeaturesSection';
import { TropiStockInsightsSection } from './TropiStockInsightsSection';
import { TropiStockObjectiveSection } from './TropiStockObjectiveSection';
import { TropiStockResearchSection } from './TropiStockResearchSection';
import { TropiStockVisualSystemSection } from './TropiStockVisualSystemSection';
import { TropiStockScreensSection } from './TropiStockScreensSection';
import { TropiStockResultsSection } from './TropiStockResultsSection';
import { TropiStockClosingSection } from './TropiStockClosingSection';
import type { IconName } from './ui/Icon';
import { Icon } from './ui/Icon';
import styles from './TropiStockProjectPage.module.css';

interface TropiStockProjectPageProps {
  onNavigate: (path: string) => void;
}

const PROJECT_INFO: Array<{ icon: IconName; label: string; value: string; webValue?: string }> = [
  { icon: 'calendarSolid', label: 'Año', value: '2021 · Enero', webValue: '2020 · Noviembre' },
  {
    icon: 'userSolid',
    label: 'Rol',
    value: 'Diseñador de experiencia de usuario I',
  },
  { icon: 'webDesignSolid', label: 'Plataforma', value: 'Web · App' },
  {
    icon: 'rocketLunchSolid',
    label: 'Tipo de proyecto',
    value: 'Producto digital de gestión de inventarios',
    webValue: 'Solución digital B2B',
  },
];

export function TropiStockProjectPage({ onNavigate }: TropiStockProjectPageProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = existingDescription?.content;
    const descriptionElement = existingDescription ?? document.createElement('meta');

    document.title = 'Tropi Stock | Andrés Oviedo';
    descriptionElement.name = 'description';
    descriptionElement.content =
      'Tropi Stock: experiencia digital para capturar inventarios en puntos de venta y conectarlos con la gestión comercial.';
    if (!existingDescription) document.head.appendChild(descriptionElement);

    return () => {
      document.title = previousTitle;
      if (existingDescription && previousDescription !== undefined) {
        existingDescription.content = previousDescription;
      } else {
        descriptionElement.remove();
      }
    };
  }, []);

  return (
    <MobileCaseStudyProvider>
      <div
        className={styles.page}
        style={
          {
            '--project-accent': '#5c17e5',
            '--mobile-accordion-inset': '16px',
          } as import('react').CSSProperties
        }
      >
        <Navbar activePage="proyectos" onNavigate={onNavigate} />

        <main className={styles.main}>
          <section className={styles.hero} aria-labelledby="tropi-stock-title">
            <div className={styles.content}>
              <div className={styles.copy}>
                <img className={styles.logo} src={images.tropiStockLogo} alt="Tropi Stock" />
                <h1 id="tropi-stock-title">
                  Conectando la toma de inventarios con la <span>gestión comercial</span>
                </h1>
                <p>
                  Una experiencia digital diseñada para estructurar la captura de inventarios en
                  puntos de venta y facilitar el acceso a información relevante para la gestión
                  comercial.
                </p>
              </div>

              <div className={styles.visual}>
                <img
                  src={images.tropiStockMockup}
                  alt="Tropi Stock en su experiencia web y móvil"
                />
              </div>
            </div>
          </section>

          <section className={styles.info} aria-label="Información del proyecto Tropi Stock">
            {PROJECT_INFO.map((item) => (
              <div className={styles.infoItem} key={item.label}>
                <Icon className={styles.infoIcon} name={item.icon} />
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <strong className={styles.infoValue}>
                    {item.webValue ? <><span className={styles.infoCompactValue}>{item.value}</span><span className={styles.infoWebValue}>{item.webValue}</span></> : item.value}
                  </strong>
                </div>
              </div>
            ))}

            <div className={styles.infoItem}>
              <CountryFlag className={styles.countryFlag} countryCode="CO" />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>País</span>
                <strong className={styles.infoValue}>Colombia</strong>
              </div>
            </div>
          </section>

          <TropiStockContextSection />

          <TropiStockChallengeSection />

          <TropiStockObjectiveSection />

          <TropiStockResearchSection />

          <TropiStockInsightsSection />

          <TropiStockFeaturesSection />

          <TropiStockArchitectureSection />

          <TropiStockVisualSystemSection />

          <TropiStockScreensSection />

          <TropiStockResultsSection />

          <TropiStockClosingSection />
        </main>

        <FooterSection
          theme="tropi"
          onOpenContact={() => undefined}
          onScrollToTop={() => window.scrollTo(0, 0)}
        />
      </div>
    </MobileCaseStudyProvider>
  );
}
