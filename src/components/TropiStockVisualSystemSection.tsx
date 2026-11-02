import { useMobileCaseStudy } from '../hooks/useMobileCaseStudy';
import { ComponentViewport, MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './TropiStockVisualSystemSection.module.css';

const COLORS = [
  ['B50', '#eae6f5', 'rgb(234, 230, 245)', '17.14 AAA', '1.23'],
  ['B75', '#a898d6', 'rgb(168, 152, 214)', '8.13 AAA', '2.58'],
  ['B100', '#836dc4', 'rgb(131, 109, 196)', '4.95 AAA', '4.24 AA'],
  ['B200', '#4e2eab', 'rgb(78, 46, 171)', '2.30', '9.12 AAA'],
  ['B300', '#2a039a', 'rgb(42, 3, 154)', '1.58', '13.31 AAA'],
  ['B400', '#1d026c', 'rgb(29, 2, 108)', '1.28', '16.44 AAA'],
  ['B500', '#1a025e', 'rgb(26, 2, 94)', '1.21', '17.29 AAA'],
] as const;

const PRINCIPLES = [
  [
    'fi fi-sr-star',
    'Jerarquía funcional',
    'Destacar acciones principales y organizar contenidos según su relevancia.',
  ],
  [
    'fi fi-sr-pattern',
    'Reutilización',
    'Mantener patrones y componentes comunes para reducir inconsistencias.',
  ],
  [
    'fi fi-sr-table-layout',
    'Diseño contextual',
    'Adaptar la presentación de información a los procesos de registro móvil y consulta administrativa.',
  ],
] as const;

function CardHeader({ children }: { children: string }) {
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
      <b data-rating={rating}>{ratio}</b>
      {rating ? <small>{rating}</small> : null}
    </span>
  );
}

function SidebarPreview() {
  return (
    <div
      className={styles.sidebarPreview}
      aria-label="Vista previa de la navegación web de Tropi Stock"
    >
      <img src={images.tropiStockLogo} alt="" />
      <nav aria-label="Ejemplo de menú administrativo">
        {[
          'Resumen general',
          'Inventarios',
          'Puntos de venta',
          'Productos',
          'Seguimiento',
          'Reportes',
          'Usuarios',
        ].map((item) => (
          <span className={item === 'Reportes' ? styles.activeMenu : undefined} key={item}>
            {item}
          </span>
        ))}
      </nav>
      <div className={styles.sidebarUser}>
        <span>A</span>
        <div>
          <strong>Andres Oviedo</strong>
          <small>Administrador</small>
        </div>
        <b>›</b>
      </div>
    </div>
  );
}

function ComponentsBoard({ mobileVisualPanel }: { mobileVisualPanel?: string }) {
  const mobile = useMobileCaseStudy();
  const board = (
    <div className={styles.componentBoard}>
      <div className={styles.kitArea}>
        <div className={styles.buttonSamples}>
          <button className={styles.primaryButton} type="button">
            <i />
            Button
            <i />
          </button>
          <button className={styles.outlineButton} type="button">
            <i />
            Button
            <i />
          </button>
          <button className={styles.textButton} type="button">
            <i />
            Button
            <i />
          </button>
          <button className={styles.disabledButton} type="button" disabled>
            <i />
            Button
            <i />
          </button>
        </div>
        <div className={styles.iconSamples}>
          <b>◇</b>
          <b>◇</b>
          <b>◇</b>
        </div>
        <div className={styles.avatarSamples}>
          <span>A</span>
          <span>♙</span>
          <img src={images.avatarContactame} alt="Avatar de ejemplo" />
        </div>
        <div className={styles.fieldSample}>
          <label>Label</label>
          <span>Lorem ipsum</span>
          <small>Texto de asistencia</small>
        </div>
        <div className={styles.choiceSamples}>
          <span>
            <i className={styles.radioOn} />
            Lorem ipsum
          </span>
          <span>
            <i />
            Lorem ipsum
          </span>
        </div>
        <div className={styles.toastSample}>
          <b>i</b>
          <span>Descripción</span>
          <i>×</i>
        </div>
        <div className={styles.chipSample}>
          <span className={styles.webChip}>
            <i aria-hidden="true" />
            <span>Etiqueta</span>
            <b aria-hidden="true">×</b>
          </span>
        </div>
        <div className={styles.listSample}>
          <i />{' '}
          <span>
            First line<small>Second line</small>
          </span>
          <i />
        </div>
      </div>
      <SidebarPreview />
    </div>
  );
  return (
    <article
      className={styles.componentsCard}
      data-visual-panel={mobileVisualPanel}
      onPointerDown={mobile ? (event) => event.stopPropagation() : undefined}
    >
      <CardHeader>Componentes</CardHeader>
      {mobile ? (
        <ComponentViewport label="Explorar componentes de Tropi Stock">{board}</ComponentViewport>
      ) : (
        board
      )}
    </article>
  );
}

export function TropiStockVisualSystemSection() {
  return (
    <MobileCaseStudySection title="Sistema visual" visual visualVariant="tropi">
      <section className={styles.section} aria-labelledby="tropi-stock-visual-system-title">
        <div className={styles.intro}>
          <img src={images.tropiStockLogo} alt="Tropi Stock" />
          <h2 id="tropi-stock-visual-system-title">
            Sistema <span>visual</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.description}>
            <p>
              Desarrollamos un lenguaje visual que combina identidad de marca, jerarquía de
              información y componentes reutilizables para construir una experiencia consistente en
              móvil y web. El uso de tipografía Lexend, una paleta de violetas y patrones de
              interacción definidos permitió establecer una base visual compartida, adaptada a las
              particularidades de cada plataforma.
            </p>
            <p>
              El UI Kit reúne elementos como botones, campos de entrada, tarjetas, controles de
              selección y estados de interacción. Su organización favorece la coherencia de las
              interfaces y facilita la construcción de recorridos centrados en las tareas
              principales de cada usuario.
            </p>
          </div>
          <article className={styles.principlesCard}>
            <h3>Principios de interfaz</h3>
            <div className={styles.principles}>
              {PRINCIPLES.map(([iconClass, title, description]) => (
                <div className={styles.principle} key={title}>
                  <span>
                    <i aria-hidden="true" className={iconClass} />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className={styles.foundations}>
          <div className={styles.leftColumn}>
            <article className={styles.colorsCard}>
              <CardHeader>Colores</CardHeader>
              <div className={styles.swatches}>
                {COLORS.map(([token, hex, rgb, contrast, inverse]) => (
                  <div className={styles.swatchRow} key={token}>
                    <div className={styles.swatch} style={{ background: hex }}>
                      <ContrastBadge value={contrast} />
                      <ContrastBadge light value={inverse} />
                    </div>
                    <div className={styles.tokenData}>
                      <strong>{token}</strong>
                      <span>{hex}</span>
                      <span>{rgb}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className={styles.typeCard}>
              <CardHeader>Tipografía e íconos</CardHeader>
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
          <ComponentsBoard mobileVisualPanel="components" />
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
