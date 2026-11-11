import { ComponentViewport, MobileCaseStudySection, useMobileCaseStudy } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TuapVisualSystemSection.module.css';

const COLORS = [
  {
    token: 'R50',
    hex: '#f8e6e7',
    rgb: 'rgb(248, 230, 231)',
    contrast: '17.46 AAA',
    inverse: '1.20',
  },
  {
    token: 'R75',
    hex: '#e4979b',
    rgb: 'rgb(228, 151, 155)',
    contrast: '9.20 AAA',
    inverse: '2.28',
  },
  {
    token: 'R100',
    hex: '#d96c71',
    rgb: 'rgb(217, 108, 113)',
    contrast: '6.33 AAA',
    inverse: '3.32 AA',
  },
  {
    token: 'R200',
    hex: '#c82d34',
    rgb: 'rgb(200, 45, 52)',
    contrast: '3.88 AA',
    inverse: '5.41 AAA',
  },
  {
    token: 'R300',
    hex: '#bd020a',
    rgb: 'rgb(189, 2, 10)',
    contrast: '3.18 AA',
    inverse: '6.61 AAA',
  },
  { token: 'R400', hex: '#840107', rgb: 'rgb(132, 1, 7)', contrast: '1.99', inverse: '10.56 AAA' },
  { token: 'R500', hex: '#730106', rgb: 'rgb(115, 1, 6)', contrast: '1.74', inverse: '12.10 AAA' },
] as const;

const PRINCIPLES = [
  {
    iconClass: 'fi fi-sr-workflow',
    title: 'Priorizar antes que decorar',
    description:
      'La jerarquía visual dirige la atención hacia información y acciones relevantes para cada tarea.',
  },
  {
    iconClass: 'fi fi-sr-pattern',
    title: 'Patrones reconocibles',
    description:
      'Formularios, tarjetas, tablas, modales, estados y navegación reutilizan estructuras consistentes para reducir aprendizaje.',
  },
  {
    iconClass: 'fi fi-sr-feedback-hand',
    title: 'Contexto y feedback',
    description:
      'Indicadores, etiquetas y estados hacen visible el resultado de las acciones y ayudan a mantener al usuario orientado.',
  },
] as const;

function SectionHeader({ children }: { children: string }) {
  return (
    <div className={styles.cardHeader}>
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

function CloseIcon() {
  return (
    <svg aria-hidden="true" className={styles.closeIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PlaceholderIcon() {
  return (
    <svg className={styles.placeholderIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h18v18H3zM3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ProductArt({ round = false }: { round?: boolean }) {
  return (
    <span className={`${styles.productArt} ${round ? styles.roundArt : ''}`} aria-hidden="true" />
  );
}

function ProductCopy() {
  return (
    <div className={styles.productCopy}>
      <p>Lorem ipsum dolor sit amet consectetur. Sem eu lectus.</p>
      <div className={styles.productOptions}>
        <strong>Presentación <i aria-hidden="true" className="fi fi-rr-angle-small-down" /></strong>
        <span className={styles.productTags} aria-hidden="true">
          <i className="fi fi-sr-tags" /><i className="fi fi-sr-tags" /><i className="fi fi-sr-tags" />
        </span>
      </div>
      <div className={styles.productPriceRow}>
        <div><small>$0.00</small><b>$0.00</b></div>
        <button disabled type="button" aria-label="Añadir producto de ejemplo" className={styles.productCart}><i aria-hidden="true" className="fi fi-rr-shopping-cart-add" /></button>
      </div>
    </div>
  );
}

export function TuapComponentsBoard({ mobileVisualPanel }: { mobileVisualPanel?: string }) {
  const mobile = useMobileCaseStudy();
  const board = (
      <div className={styles.componentBoard} data-component-samples>
        <div className={styles.productCardLarge}>
          <ProductArt />
          <ProductCopy />
        </div>
        <div className={styles.productCardCompact}>
          <ProductArt />
          <ProductCopy />
        </div>
        <div className={styles.roundProduct}>
          <ProductArt round />
          <strong>Lorem</strong>
        </div>
        <div className={styles.avatars}>
          <span className={styles.letterAvatar}>A</span>
          <span className={styles.userAvatar}>♙</span>
          <img src={images.avatarContactame} alt="Avatar de ejemplo" />
        </div>

        <div className={styles.bottomNav}>
          <span>
            <i aria-hidden="true" className="fi fi-rr-home" /><small>Inicio</small>
          </span>
          <span className={styles.activeNav}>
            <img src={images.tuapLogo} alt="" /><small>Tienda</small>
          </span>
          <span>
            <i aria-hidden="true" className="fi fi-rr-truck-side" /><small>Envío</small>
          </span>
          <span>
            <i aria-hidden="true" className="fi fi-rr-shopping-cart" /><small>Carrito</small>
          </span>
          <span>
            <i aria-hidden="true" className="fi fi-rr-user" /><small>Perfil</small>
          </span>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryButton} disabled type="button">
            <PlaceholderIcon />
            Button
            <PlaceholderIcon />
          </button>
          <button className={styles.secondaryButton} disabled type="button">
            <PlaceholderIcon />
            Button
            <PlaceholderIcon />
          </button>
          <button className={styles.textButton} disabled type="button">
            <PlaceholderIcon />
            Button
            <PlaceholderIcon />
          </button>
          <button className={styles.disabledButton} type="button" disabled>
            <PlaceholderIcon />
            Button
            <PlaceholderIcon />
          </button>
        </div>

        <div className={styles.iconButtons}>
          <button className={styles.primaryIconButton} disabled type="button">
            <PlaceholderIcon />
          </button>
          <button className={styles.secondaryIconButton} disabled type="button">
            <PlaceholderIcon />
          </button>
          <PlaceholderIcon />
        </div>

        <div className={styles.folderTabs}>
          <div className={styles.tabActive}>
            <PlaceholderIcon />
            <span>Lorem ipsum</span><i />
          </div>
          <div>
            <PlaceholderIcon />
            <span>Lorem ipsum</span><i />
          </div>
        </div>

        <div className={styles.fieldBlock}>
          <label>Label <PlaceholderIcon /></label>
          <div className={styles.input}>Lorem ipsum</div>
          <small>Texto de asistencia</small>
        </div>

        <div className={styles.sliderBlock}>
          <label>Label <PlaceholderIcon /></label>
          <div className={styles.slider}>
            <span>0</span>
            <i>
              <b />
            </i>
            <span>100</span>
          </div>
          <strong>50</strong>
          <small>Texto de asistencia</small>
        </div>

        <div className={styles.listItem}>
          <PlaceholderIcon />
          <span>
            First line<small>Second line</small>
          </span>
          <PlaceholderIcon />
        </div>

        <div className={styles.navItem}>
          <PlaceholderIcon />
          <span>Lorem ipsum</span>
          <i />
        </div>

        <div className={styles.toast}>
          <span className={styles.toastIcon}><i aria-hidden="true" className="fi fi-sr-info" /></span>
          <span className={styles.toastDescription}>Descripción</span>
          <CloseIcon />
        </div>

        <div className={styles.radios}>
          <label>
            <span className={styles.radioOn} />
            Lorem ipsum
          </label>
          <label>
            <span className={styles.radioOff} />
            Lorem ipsum
          </label>
        </div>

        <div className={styles.checkboxes}>
          <label>
            <span className={styles.checkOn}>✓</span>Lorem ipsum
          </label>
          <label>
            <span className={styles.checkOff} />
            Lorem ipsum
          </label>
        </div>

        <div className={styles.switches}>
          <div className={styles.switchRow}>
            <span>Lorem ipsum</span>
            <i className={styles.switchOn} />
          </div>
          <div className={styles.switchRow}>
            <span>Lorem ipsum</span>
            <i className={styles.switchOff} />
          </div>
        </div>

        <span className={styles.chip}>
          <span className={styles.chipContent}><PlaceholderIcon /><span>Etiqueta</span></span>
          <CloseIcon />
        </span>
      </div>
  );
  return (
    <article className={styles.componentsCard} data-visual-panel={mobileVisualPanel}>
      <SectionHeader>Componentes</SectionHeader>
      {mobile ? <ComponentViewport label="Explorar componentes de TuAp">{board}</ComponentViewport> : board}
    </article>
  );
}

export function TuapVisualSystemSection() {
  return (
    <MobileCaseStudySection title="Sistema visual" visual visualVariant="tuap">
      <section className={styles.section} aria-labelledby="tuap-visual-system-title">
        <div className={styles.intro}>
          <img src={images.tuapLogo} alt="TuAp" />
          <h2 id="tuap-visual-system-title">
            Sistema <span>visual</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.description}>
            <p>
              <span className={styles.mobileDescriptionPrefix}>Al tratarse de una tecnología poco habitual para parte </span>
              TuAp necesitaba mantener coherencia entre experiencias de compra, gestión y operación
              comercial sin hacer que la interfaz se sintiera compleja.
            </p>
            <p>
              El sistema visual se planteó como una capa común capaz de organizar diferentes módulos
              y roles bajo una misma lógica de interacción. Una paleta de alto contraste, jerarquías
              claras y componentes reutilizables permiten destacar las acciones importantes,
              comunicar estados y mantener continuidad entre Web y App.
            </p>
          </div>

          <article className={styles.principlesCard}>
            <h3>Principios de interfaz</h3>
            <div className={styles.principles}>
              {PRINCIPLES.map((principle) => (
                <div className={styles.principle} key={principle.title}>
                  <span className={styles.principleIcon}>
                    <i aria-hidden="true" className={principle.iconClass} />
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

        <div className={styles.foundations}>
          <div className={styles.leftColumn}>
            <article className={styles.colorsCard}>
              <SectionHeader>Colores</SectionHeader>
              <div className={styles.swatches}>
                {COLORS.map((color) => (
                  <div className={styles.swatchRow} key={color.token}>
                    <div className={styles.swatch} style={{ background: color.hex }}>
                      <ContrastBadge value={color.contrast} />
                      <ContrastBadge light value={color.inverse} />
                    </div>
                    <div className={styles.tokenData}>
                      <strong>{color.token}</strong>
                      <span>{color.hex}</span>
                      <span>{color.rgb}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.typeCard}>
              <SectionHeader>Tipografía e íconos</SectionHeader>
              <div className={styles.typeItem}>
                <span>
                  <i aria-hidden="true" className="fi fi-sr-square-a" />
                </span>
                <div>
                  <strong>Lexend</strong>
                  <small>Fuente</small>
                </div>
              </div>
              <div className={styles.typeItem}>
                <span>
                  <i aria-hidden="true" className="fi fi-sr-select" />
                </span>
                <div>
                  <strong>Uicons Flaticon</strong>
                  <small>Iconos</small>
                </div>
              </div>
            </article>
          </div>

          <TuapComponentsBoard mobileVisualPanel="components" />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
