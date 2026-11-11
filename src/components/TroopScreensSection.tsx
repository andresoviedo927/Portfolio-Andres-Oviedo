import welcomeMockup from '../assets/images/troop-web-mockup-1.webp';
import sellMockup from '../assets/images/troop-web-mockup-2.webp';
import guideMockup from '../assets/images/troop-web-mockup-3.webp';
import signInMockup from '../assets/images/troop-web-mockup-4.webp';
import catalogMockup from '../assets/images/troop-web-mockup-5.webp';
import investmentsMockup from '../assets/images/troop-web-mockup-6.webp';
import profileMockup from '../assets/images/troop-web-mockup-7.webp';
import propertyFormMockup from '../assets/images/troop-web-mockup-8.webp';
import { Icon } from './ui/Icon';
import { ThumbnailMockupGallery } from './ui/ThumbnailMockupGallery';
import styles from './TroopScreensSection.module.css';

const webMockups = [
  { src: welcomeMockup, alt: 'Bienvenida a Troop' },
  { src: sellMockup, alt: 'Opciones para vender un inmueble' },
  { src: guideMockup, alt: 'Cómo funciona Troop' },
  { src: signInMockup, alt: 'Inicio de sesión' },
  { src: catalogMockup, alt: 'Catálogo de oportunidades inmobiliarias' },
  { src: investmentsMockup, alt: 'Mis inversiones' },
  { src: profileMockup, alt: 'Perfil de usuario' },
  { src: propertyFormMockup, alt: 'Formulario para ofrecer un inmueble' },
];

export function TroopScreensSection() {
  return (
    <section className={styles.section} aria-labelledby="troop-high-definition-title">
      <header className={styles.header}>
        <h2 id="troop-high-definition-title">Pantallas <span>en alta definición</span></h2>
        <div className={styles.divider} aria-hidden="true" />
        <p>
          La solución de TROOP conecta información inmobiliaria, indicadores financieros y
          herramientas interactivas mediante interfaces que acompañan al usuario desde la
          exploración de oportunidades hasta su evaluación y gestión. Una experiencia web responsive
          que prioriza la claridad, la continuidad de los recorridos y la facilidad de interacción
          en cada etapa.
        </p>
        <a className={styles.siteLink} href="https://troop.com.co/">
          <Icon name="browserSolid" />
          <span>Ir al sitio web</span>
        </a>
      </header>
      <ThumbnailMockupGallery
        ariaLabel="Mockups web de Troop"
        defaultIndex={4}
        items={webMockups}
        variant="troop"
      />
    </section>
  );
}
