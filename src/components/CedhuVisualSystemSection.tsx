import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import searchLocationIcon from '../assets/icons/villa-insight-discover.svg';
import bulbIcon from '../assets/icons/villa-insight-resolve.svg';
import practiceIcon from '../assets/icons/villa-insight-connect.svg';
import lexendIcon from '../assets/icons/flaticon-10455414.svg';
import flaticonIcon from '../assets/icons/flaticon-3914272.svg';
import styles from './CedhuVisualSystemSection.module.css';

const palette = [
  { name: 'O50', hex: '#ffebe6', rgb: 'rgb(255, 235, 230)', dark: '18.28 AAA', light: '1.15' },
  { name: 'O75', hex: '#feac98', rgb: 'rgb(254, 172, 152)', dark: '11.57 AAA', light: '1.82' },
  { name: 'O100', hex: '#fe8a6d', rgb: 'rgb(254, 138, 109)', dark: '9.07 AAA', light: '2.32' },
  { name: 'O200', hex: '#fd572f', rgb: 'rgb(253, 87, 47)', dark: '6.58 AAA', light: '3.19 AA' },
  { name: 'O300', hex: '#fd3504', rgb: 'rgb(253, 53, 4)', dark: '5.69 AAA', light: '3.69 AA' },
  { name: 'O400', hex: '#b12503', rgb: 'rgb(177, 37, 3)', dark: '3.14 AA', light: '6.70 AAA' },
  { name: 'O500', hex: '#9a2002', rgb: 'rgb(154, 32, 2)', dark: '2.58', light: '8.13 AAA' },
] as const;

const principles = [
  {
    icon: searchLocationIcon,
    title: 'Jerarquía clara',
    description:
      'La información importante aparece primero y los detalles se revelan progresivamente.',
  },
  {
    icon: bulbIcon,
    title: 'Estados reconocibles',
    description:
      'Color, etiquetas y feedback visual ayudan a diferenciar novedades, pendientes y resultados.',
  },
  {
    icon: practiceIcon,
    title: 'Consistencia',
    description:
      'Patrones y componentes compartidos mantienen familiar la experiencia en todo el producto.',
  },
] as const;

function PanelHeading({ children }: { children: string }) {
  return (
    <div className={styles.panelHeading}>
      <h3>{children}</h3>
      <span aria-hidden="true" />
    </div>
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

function MissingIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.placeholderIcon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.75 3.75H20.25V20.25H3.75V3.75ZM3.75 3.75L20.25 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CedhuVisualSystemSection() {
  return (
    <MobileCaseStudySection title="Sistema visual" visual visualVariant="cedhu">
      <section
        className={styles.section}
        aria-labelledby="cedhu-visual-system-title"
      >
        <div className={styles.intro}>
          <img className={styles.logo} src={images.cedhuLogo} alt="Logotipo de CEDHU" />
          <h2 id="cedhu-visual-system-title">
            <span className={styles.introHeading}>
              <span>
                Sistema <span>visual</span>
              </span>
              <i
                aria-hidden="true"
                className={`${styles.titleChevron} fi-sr-caret-down`}
              />
            </span>
          </h2>
          <div className={styles.titleDivider} aria-hidden="true" />
          <div className={styles.introCopy}>
            <p>
              El sistema visual se planteó como una herramienta para organizar información,
              establecer prioridades y facilitar la lectura. Una tipografía de alta legibilidad,
              componentes modulares y estados semánticos permiten recorrer contenidos académicos
              diferentes sin perder consistencia.
            </p>
            <p>
              El naranja funciona como elemento principal de identidad, mientras que colores
              complementarios ayudan a comunicar desempeño, alertas, estados y categorías sin
              depender únicamente del texto.
            </p>
          </div>

          <article className={styles.principles}>
            <h3>Principios de interfaz</h3>
            <div className={styles.principlesGrid}>
              {principles.map((principle) => (
                <div className={styles.principle} key={principle.title}>
                  <span className={styles.principleIcon}>
                    <img alt="" aria-hidden="true" src={principle.icon} />
                  </span>
                  <div>
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.foundationRow}>
          <article className={`${styles.panel} ${styles.colorsPanel}`}>
            <PanelHeading>Colores</PanelHeading>
            <div className={styles.palette}>
              {palette.map((color) => (
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
              <PanelHeading>Tipografía e íconos</PanelHeading>
              <div className={styles.resources}>
                <div className={styles.resourceItem}>
                  <span className={styles.resourceIcon}>
                    <img alt="" aria-hidden="true" src={lexendIcon} />
                  </span>
                  <div>
                    <strong>Lexend</strong>
                    <span>Fuente</span>
                  </div>
                </div>
                <div className={styles.resourceItem}>
                  <span className={styles.resourceIcon}>
                    <img alt="" aria-hidden="true" src={flaticonIcon} />
                  </span>
                  <div>
                    <strong>Uicons Flaticon</strong>
                    <span>Íconos</span>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${styles.panel} ${styles.componentsPanel}`}>
              <PanelHeading>Componentes</PanelHeading>
              <div className={styles.componentBoard} data-component-samples>
                <div className={styles.buttonSamples}>
                  <button className={styles.primaryButton} disabled type="button">
                    <MissingIcon />
                    Button
                    <MissingIcon />
                  </button>
                  <button className={styles.outlineButton} disabled type="button">
                    <MissingIcon />
                    Button
                    <MissingIcon />
                  </button>
                  <button className={styles.textButton} disabled type="button">
                    <MissingIcon />
                    Button
                    <MissingIcon />
                  </button>
                  <button className={styles.disabledButton} disabled type="button">
                    <MissingIcon />
                    Button
                    <MissingIcon />
                  </button>
                </div>

                <div className={styles.toastSamples}>
                  <div className={styles.successToast}>
                    <i className="fi-sr-check-circle" />
                    <span>Descripción</span>
                    <i className="fi-rr-cross-small" />
                  </div>
                  <div className={styles.errorToast}>
                    <i className="fi-sr-triangle-warning" />
                    <span>Descripción</span>
                    <i className="fi-rr-cross-small" />
                  </div>
                  <div className={styles.warningToast}>
                    <i className="fi-sr-exclamation" />
                    <span>Descripción</span>
                    <i className="fi-rr-cross-small" />
                  </div>
                </div>

                <div className={styles.bottomNav} role="group" aria-label="Muestra de navegación de CEDHU">
                  <div className={styles.activeNav}>
                    <i className="fi-sr-home" />
                    <span>Inicio</span>
                  </div>
                  <div>
                    <i className="fi-rr-headset" />
                    <span>Contactos</span>
                  </div>
                  <div>
                    <i className="fi-rr-user" />
                    <span>Perfil</span>
                  </div>
                </div>

                <div className={styles.avatarSamples}>
                  <span>A</span>
                  <img src={images.avatarContactame} alt="Avatar de ejemplo" />
                </div>

                <div className={styles.iconButtons}>
                  <button aria-label="Acción principal" disabled type="button">
                    <MissingIcon />
                  </button>
                  <button
                    aria-label="Acción secundaria"
                    className={styles.textIconButton}
                    disabled type="button"
                  >
                    <MissingIcon />
                  </button>
                </div>

                <div className={styles.fieldSamples}>
                  <label>
                    Label <MissingIcon />
                  </label>
                  <div className={styles.disabledField}>
                    <MissingIcon />
                    <span>Lorem ipsum</span>
                  </div>
                  <small>Texto de asistencia</small>
                </div>

                <div className={styles.listSample}>
                  <MissingIcon />
                  <div>
                    <strong>First line</strong>
                    <small>Second line</small>
                  </div>
                  <MissingIcon />
                </div>
                <div className={styles.navItemSample}>
                  <MissingIcon />
                  <span>Lorem ipsum</span>
                  <b />
                </div>

                <div className={styles.switchSamples}>
                  <label>
                    <input defaultChecked disabled type="checkbox" />
                    <span />
                    Lorem ipsum
                  </label>
                  <label>
                    <input disabled type="checkbox" />
                    <span />
                    Lorem ipsum
                  </label>
                </div>

                <div className={styles.fileSample}>
                  <svg
                    aria-hidden="true"
                    className={styles.fileOutline}
                    width="30.56"
                    height="40"
                    viewBox="0 0 30.56 40"
                    fill="none"
                  >
                    <path
                      d="M5.58.93H17.5L29.63 13.06V34.42A4.65 4.65 0 0 1 24.98 39.07H5.58A4.65 4.65 0 0 1 .93 34.42V5.58A4.65 4.65 0 0 1 5.58.93Z"
                      fill="white"
                      stroke="#27313F"
                      strokeWidth="1.86"
                    />
                    <path
                      d="M17.5.93V8.41A4.65 4.65 0 0 0 22.15 13.06H29.63"
                      stroke="#27313F"
                      strokeWidth="1.86"
                    />
                  </svg>
                  <span>.pdf</span>
                </div>

                <div className={styles.chip}>
                  <span className={styles.chipLabel}>
                    <MissingIcon />
                    <span>Etiqueta</span>
                  </span>
                  <i className="fi-rr-cross-small" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
