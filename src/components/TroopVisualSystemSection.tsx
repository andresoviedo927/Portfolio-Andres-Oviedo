import { images } from '../assets/images';
import interactionIcon from '../assets/images/troop-interaction-icon.png';
import { ComponentViewport, MobileCaseStudySection, useMobileCaseStudy } from './MobileCaseStudySection';
import { TroopComponentSamples } from './TroopComponentSamples';
import styles from './TroopVisualSystemSection.module.css';

const shades = [50, 75, 100, 200, 300, 400, 500];
const palette = [
  ['G', ['#fbfee7', '#edfb9b', '#e5fa71', '#daf834', '#d2f60b', '#93ac08', '#809607']],
  ['B', ['#edfbfe', '#b4edfa', '#95e5f9', '#67daf6', '#48d3f4', '#3294ab', '#2c8195']],
  ['O', ['#ffeeed', '#ffb8b4', '#ff9a95', '#ff6f67', '#ff5148', '#b33932', '#9c312c']],
] as const;

const principles = [
  [<i className="fi fi-rr-search" />, 'Claridad', 'Jerarquías visuales que priorizan información y datos relevantes.'],
  [<i className="fi fi-sr-layer-plus" />, 'Consistencia', 'Componentes y patrones que unifican la experiencia.'],
  [<img className={styles.interactionIcon} src={interactionIcon} alt="" width={24} height={24} />, 'Interacción', 'Estados visuales y elementos de feedback que orientan las acciones del usuario.'],
] as const;

const resources = [
  ['fi-sr-square-a', 'KoHo', 'Fuente'],
  ['fi-sr-select', 'Uicons Flaticon', 'Iconos'],
] as const;

function PanelHeading({ children }: { children: string }) {
  return <h3 className={styles.panelHeading}>{children}</h3>;
}

function Swatch({ token, hex, mobile }: { token: string; hex: string; mobile: boolean }) {
  const rgb = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
  const [red, green, blue] = rgb.map((value) => {
    const srgb = value / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  const ratios = [
    { foreground: 'negro', ratio: (luminance + 0.05) / 0.05 },
    { foreground: 'blanco', ratio: 1.05 / (luminance + 0.05) },
  ];

  return (
    <>
      <div className={styles.swatch} style={{ backgroundColor: hex }}>
        {ratios.map(({ foreground, ratio }) => (
          <span className={styles.badge} key={foreground} data-foreground={foreground}>
            <span className={styles.visuallyHidden}>Contraste con {foreground} </span>
            {ratio.toFixed(2)}
            {!mobile && ratio >= 4.5 && <b>{ratio >= 7 ? 'AAA' : 'AA'}</b>}
            {ratio >= 3 && <small>{ratio >= (mobile ? 7 : 4.5) ? 'AAA' : 'AA'}</small>}
          </span>
        ))}
      </div>
      <div className={styles.token}>
        <strong>{token}</strong>
        <span>{hex}</span>
        <span>rgb({rgb.join(', ')})</span>
      </div>
    </>
  );
}

export function TroopVisualSystemSection() {
  const mobile = useMobileCaseStudy();
  const paletteLabel = 'Paleta de colores de Troop';
  const swatches = (
    <div
      className={styles.swatches}
      role={mobile ? undefined : 'region'}
      aria-label={mobile ? undefined : paletteLabel}
      tabIndex={mobile ? undefined : 0}
    >
      {palette.map(([prefix, colors]) => (
        <ul className={styles.colorScale} key={prefix}>
          {colors.map((hex, index) => (
            <li className={styles.swatchRow} key={hex}>
              <Swatch token={`${prefix}${shades[index]}`} hex={hex} mobile={mobile} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );

  return (
    <MobileCaseStudySection title="Sistema visual" visual visualVariant="troop">
      <section className={styles.section} aria-labelledby="troop-visual-system-title">
        <div className={styles.intro}>
          <img className={styles.logo} src={images.troopLogo} alt="Troop" loading="lazy" />
          <h2 id="troop-visual-system-title">Sistema <span>visual</span></h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.description}>
            <p>
              La propuesta visual de TROOP se estructuró para facilitar la interpretación de
              información financiera y acompañar las decisiones del usuario a lo largo de la experiencia.
            </p>
            <p>
              Mediante una identidad cromática diferenciada, jerarquías tipográficas, componentes
              modulares y patrones de interacción consistentes, la interfaz organiza los contenidos,
              destaca indicadores relevantes y establece una relación clara entre información y acciones.
            </p>
          </div>
          <article className={styles.principlesCard}>
            <h3>Principios de interfaz</h3>
            <ul className={styles.principles}>
              {principles.map(([icon, title, description]) => (
                <li className={styles.principle} key={title}>
                  <span className={styles.iconBox} aria-hidden="true">{icon}</span>
                  <div><h4>{title}</h4><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className={styles.foundations}>
          <article className={styles.colorsCard}>
            <PanelHeading>Colores</PanelHeading>
            {mobile ? (
              <ComponentViewport
                label={paletteLabel}
                scrollbarLabel="Desplazamiento horizontal de colores"
              >
                {swatches}
              </ComponentViewport>
            ) : swatches}
          </article>
          <article className={styles.typeCard}>
            <PanelHeading>Tipografía e íconos</PanelHeading>
            {resources.map(([icon, title, description]) => (
              <div className={styles.resource} key={title}>
                <span className={styles.iconBox} aria-hidden="true"><i className={`fi ${icon}`} /></span>
                <div><strong>{title}</strong><p>{description}</p></div>
              </div>
            ))}
          </article>
        </div>

        <article className={styles.componentsCard}>
          <PanelHeading>Componentes</PanelHeading>
          <div className={styles.componentBoard}><TroopComponentSamples /></div>
        </article>
      </section>
    </MobileCaseStudySection>
  );
}
