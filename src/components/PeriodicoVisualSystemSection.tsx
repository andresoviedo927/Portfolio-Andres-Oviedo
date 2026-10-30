import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoVisualSystemSection.module.css';

const PALETTE = [
  { name: 'P50', hex: '#ffebf5', rgb: 'rgb(255, 235, 245)', dark: '18.45 AAA', light: '1.14' },
  { name: 'P75', hex: '#fdacd6', rgb: 'rgb(253, 172, 214)', dark: '12.05 AAA', light: '1.74' },
  { name: 'P100', hex: '#fc8ac5', rgb: 'rgb(252, 138, 197)', dark: '9.58 AAA', light: '2.19' },
  { name: 'P200', hex: '#fb57ac', rgb: 'rgb(251, 87, 172)', dark: '7.06 AAA', light: '2.97' },
  { name: 'P300', hex: '#fa359b', rgb: 'rgb(250, 53, 155)', dark: '6.05 AAA', light: '3.47 AA' },
  { name: 'P400', hex: '#af256d', rgb: 'rgb(175, 37, 109)', dark: '3.31 AA', light: '6.35 AAA' },
  { name: 'P500', hex: '#99205f', rgb: 'rgb(153, 32, 95)', dark: '2.73', light: '7.70 AAA' },
] as const;

function Heading({ children }: { children: string }) {
  return (
    <div className={styles.panelHeading}>
      <h3>{children}</h3>
      <span aria-hidden="true" />
    </div>
  );
}

function PlaceholderIcon() {
  return (
    <svg aria-hidden="true" className={styles.placeholderIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h18v18H3zM3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ContrastBadge({ light = false, value }: { light?: boolean; value: string }) {
  const [ratio, rating] = value.split(' ');

  return (
    <span className={light ? styles.lightBadge : styles.darkBadge}>
      <i aria-hidden="true" />
      <b>{ratio}</b>
      {rating ? <small>{rating}</small> : null}
    </span>
  );
}

export function PeriodicoVisualSystemSection() {
  return (
    <MobileCaseStudySection title="Sistema visual" visual visualVariant="periodico">
      <section className={styles.section} aria-labelledby="periodico-visual-title">
        <header className={styles.intro}>
          <img src={images.periodicoLogo} alt="Periódico Entérese" />
          <h2 id="periodico-visual-title">
            Sistema <span>visual</span>
          </h2>
          <div className={styles.titleDivider} aria-hidden="true" />
          <p>
            Al tratarse de una tecnología poco habitual para parte de la audiencia, el sistema
            visual debía hacer que la experiencia se sintiera sencilla desde el primer contacto. Por
            eso priorizamos patrones reconocibles, acciones claramente jerarquizadas y una interfaz
            con pocos elementos simultáneos.
          </p>
          <p>
            La identidad de Entérese se mantiene presente mediante el color y la tipografía,
            mientras que la interfaz permanece en segundo plano para dar protagonismo al contenido.
          </p>
          <div className={styles.principles}>
            <strong>Principios de interfaz</strong>
            {['Familiaridad', 'Simplicidad', 'Feedback', 'Jerarquía'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </header>

        <div className={styles.foundationRow}>
          <article className={`${styles.panel} ${styles.colorsPanel}`}>
            <Heading>Colores</Heading>
            <div className={styles.palette}>
              {PALETTE.map((color) => (
                <div className={styles.colorRow} key={color.name}>
                  <div className={styles.swatch} style={{ backgroundColor: color.hex }}>
                    <ContrastBadge value={color.dark} />
                    <ContrastBadge light value={color.light} />
                  </div>
                  <div className={styles.tokenData}>
                    <strong>{color.name}</strong>
                    <span>{color.hex}</span>
                    <span>{color.rgb}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className={styles.rightColumn}>
            <article className={`${styles.panel} ${styles.resourcesPanel}`}>
              <Heading>Tipografía e íconos</Heading>
              <div className={styles.resources}>
                <div>
                  <b>
                    <i aria-hidden="true" className="fi fi-sr-square-a" />
                  </b>
                  <span>
                    <strong>Lexend</strong>
                    <small>Fuente</small>
                  </span>
                </div>
                <div>
                  <b>
                    <i aria-hidden="true" className="fi fi-sr-select" />
                  </b>
                  <span>
                    <strong>Uicons Flaticon</strong>
                    <small>Iconos</small>
                  </span>
                </div>
              </div>
            </article>

            <article className={`${styles.panel} ${styles.componentsPanel}`}>
              <Heading>Componentes</Heading>
              <div className={styles.componentContent}>
                <div className={styles.buttonSamples}>
                  <button className={styles.primary} type="button">
                    <PlaceholderIcon />
                    Button
                    <PlaceholderIcon />
                  </button>
                  <button className={styles.secondary} type="button">
                    <PlaceholderIcon />
                    Button
                    <PlaceholderIcon />
                  </button>
                  <button className={styles.textButton} type="button">
                    <PlaceholderIcon />
                    Button
                    <PlaceholderIcon />
                  </button>
                  <button className={styles.disabled} disabled type="button">
                    <PlaceholderIcon />
                    Button
                    <PlaceholderIcon />
                  </button>
                </div>
                <div className={styles.iconButtonSamples}>
                  <button
                    aria-label="Acción primaria"
                    className={styles.squarePrimary}
                    type="button"
                  >
                    <PlaceholderIcon />
                  </button>
                  <button
                    aria-label="Acción secundaria"
                    className={styles.squareSecondary}
                    type="button"
                  >
                    <PlaceholderIcon />
                  </button>
                </div>
                <div className={styles.listSample}>
                  <PlaceholderIcon />
                  <div>
                    <strong>First line</strong>
                    <span>Second line</span>
                  </div>
                  <PlaceholderIcon />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
