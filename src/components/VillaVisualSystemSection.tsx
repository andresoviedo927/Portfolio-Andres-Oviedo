import { images } from '../assets/images';
import styles from './VillaVisualSystemSection.module.css';
import { VillaComponentSamples } from './VillaComponentSamples';

const palette = [
  { name: 'Y50', hex: '#fef4e7', rgb: 'rgb(254, 244, 231)', dark: '19.31 AAA', light: '1.09' },
  { name: 'Y75', hex: '#fad39c', rgb: 'rgb(250, 211, 156)', dark: '14.86 AAA', light: '1.41' },
  { name: 'Y100', hex: '#f7c073', rgb: 'rgb(247, 192, 115)', dark: '12.74 AAA', light: '1.65' },
  { name: 'Y200', hex: '#f4a536', rgb: 'rgb(244, 165, 54)', dark: '10.28 AAA', light: '2.04' },
  { name: 'Y300', hex: '#f2930d', rgb: 'rgb(242, 147, 13)', dark: '8.95 AAA', light: '2.35' },
  { name: 'Y400', hex: '#a96709', rgb: 'rgb(169, 103, 9)', dark: '4.63 AA', light: '4.53 AAA' },
  { name: 'Y500', hex: '#945a08', rgb: 'rgb(148, 90, 8)', dark: '3.73 AA', light: '5.64 AAA' },
] as const;

function SectionHeading({ children }: { children: string }) {
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

function PrinciplesIcon() {
  return (
    <img alt="" aria-hidden="true" className={styles.principlesIcon} src={images.villaPrinciples} />
  );
}

export function VillaVisualSystemSection() {
  return (
    <section className={styles.section} aria-labelledby="villa-visual-system-title">
      <div className={styles.introRow}>
        <div className={styles.intro}>
          <img alt="Iglesia colonial de Villa de Leyva" src={images.villaLogo} />
          <h2 id="villa-visual-system-title">
            Sistema <span>visual</span>
          </h2>
          <div className={styles.titleDivider} aria-hidden="true" />
          <p>
            La identidad visual busca que explorar Villa de Leyva se sienta cercano, dinámico y
            fácil de entender. Los tonos oscuros dan protagonismo a fotografías, mapas y contenido
            multimedia, mientras que el naranja destaca las principales interacciones. La
            combinación tipográfica y los componentes compartidos mantienen una experiencia clara,
            coherente y reconocible.
          </p>
        </div>

        <article className={styles.principles}>
          <PrinciplesIcon />
          <div>
            <h3>Principios de interfaz</h3>
            <p>
              La experiencia se construyó sobre patrones simples y repetibles para que el usuario
              pudiera aprender rápidamente cómo moverse por el producto. La accesibilidad, el
              feedback de las acciones y la jerarquía progresiva de la información formaron parte de
              estas decisiones. Además, la orientación landscape permitió aprovechar mejor el
              espacio para experiencias donde mapas, imágenes y contenido interactivo tienen un
              papel central.
            </p>
          </div>
        </article>
      </div>

      <div className={styles.foundationRow}>
        <article className={`${styles.panel} ${styles.colorsPanel}`}>
          <SectionHeading>Colores</SectionHeading>
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
            <SectionHeading>Tipografía e íconos</SectionHeading>
            <div className={styles.resources}>
              <div className={styles.resourceItem}>
                <span className={styles.resourceIcon}>
                  <i aria-hidden="true" className="fi fi-sr-square-a" />
                </span>
                <div>
                  <strong>Lexend</strong>
                  <span>Fuente</span>
                </div>
              </div>
              <div className={styles.resourceItem}>
                <span className={styles.resourceIcon}>
                  <i aria-hidden="true" className="fi fi-sr-select" />
                </span>
                <div>
                  <strong>Uicons Flaticon</strong>
                  <span>Íconos</span>
                </div>
              </div>
            </div>
          </article>

          <article className={`${styles.panel} ${styles.componentsPanel}`}>
            <SectionHeading>Componentes</SectionHeading>
            <VillaComponentSamples className={styles.componentSamples} />
          </article>
        </div>
      </div>
    </section>
  );
}
