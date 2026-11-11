import propertySample from '../assets/images/troop-property-sample.jpg';
import { images } from '../assets/images';
import styles from './TroopComponentSamples.module.css';

const propertyDetails = [
  ['Ubicación', 'Bogotá, Co'],
  ['Tipo de activo', 'Comercial'],
  ['Precio del activo', '$850.000.000'],
  ['Monto mínimo de Inversión', '$500.000'],
];

const buttons = ['primary', 'secondary', 'neutral', 'disabled', 'text'];

function SampleIcon() {
  return (
    <svg className={styles.sampleIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h18v18H3zM3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function TroopComponentSamples() {
  const sliderValue = 50;
  return (
    <div className={styles.samples} data-component-samples>
      <article className={styles.propertyCard} aria-label="Tarjeta de propiedad de ejemplo">
        <div className={styles.propertyVisual}>
          <img src={propertySample} alt="" width={1024} height={1024} loading="lazy" />
          <div className={styles.dots} aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
        <div className={styles.propertyCopy}>
          <h4>Nombre de la propiedad</h4>
          <dl>
            {propertyDetails.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <div className={styles.progress} role="progressbar" aria-label="Avance de la venta de ejemplo" aria-valuenow={75}>
            <span>75%</span>
          </div>
          <span className={styles.propertyAction}>Ver más</span>
        </div>
      </article>

      <div className={styles.buttons} aria-label="Variantes de botón">
        {buttons.map((variant) => (
          <span className={styles.sampleButton} data-variant={variant} key={variant}>
            <SampleIcon /> Button <SampleIcon />
          </span>
        ))}
      </div>

      <ol className={styles.stepper} aria-label="Estados de un paso">
        <li data-state="complete">
          <svg className={styles.stepShape} aria-hidden="true" width="220" height="72" viewBox="0 0 220 72">
            <path d="M.5.5h202L219.5 36l-17 35.5H.5z" />
          </svg>
          <b aria-hidden="true">✓</b> Lorem ipsum
        </li>
        <li data-state="current">
          <svg className={styles.stepShape} aria-hidden="true" width="221" height="66" viewBox="0 0 221 66">
            <path d="M.5.5h204L220.5 33l-16 32.5H.5L13.5 33z" />
          </svg>
          <b>0</b> Lorem ipsum
        </li>
        <li data-state="pending"><b>0</b> Lorem ipsum</li>
      </ol>

      <div className={styles.avatars}>
        <span>A</span>
        <img src={images.avatarContactame} alt="Avatar de ejemplo" width={48} height={48} loading="lazy" />
      </div>
      <div className={styles.iconButtons} aria-hidden="true">
        <span><SampleIcon /></span><SampleIcon />
      </div>
      <label className={styles.slider}>
        <span>Label <SampleIcon /></span>
        <span className={styles.rangeRow}>
          <span>0</span>
          <input
            aria-label="Valor de ejemplo"
            type="range"
            min={0}
            max={100}
            defaultValue={sliderValue}
            disabled
            style={{ background: `linear-gradient(90deg, #48d3f4 ${sliderValue}%, #e8ecf1 ${sliderValue}%)` }}
          />
          <span>100</span>
        </span>
        <output>{sliderValue}</output>
        <small>Texto de asistencia</small>
      </label>

      <div className={styles.warningSample}>
        <i className="fi fi-sr-exclamation" aria-hidden="true" />
        <span>Descripción</span><span aria-hidden="true">×</span>
      </div>
      <label className={styles.field}>
        <span>Label <SampleIcon /></span>
        <input disabled type="text" placeholder="Lorem ipsum" />
        <small>Texto de asistencia</small>
      </label>
      <div className={styles.listSample}>
        <SampleIcon /><span>First line<small>Second line</small></span><SampleIcon />
      </div>
      <span className={styles.tabSample}><SampleIcon /> Lorem ipsum <i /></span>
      <div className={styles.choices} aria-label="Checkboxes de ejemplo">
        <label><input type="checkbox" defaultChecked disabled /> Lorem ipsum</label>
        <label><input type="checkbox" disabled /> Lorem ipsum</label>
      </div>
      <div className={styles.choices} aria-label="Radios de ejemplo">
        <label><input type="radio" defaultChecked disabled /> Lorem ipsum</label>
        <label><input type="radio" disabled /> Lorem ipsum</label>
      </div>
      <div className={`${styles.choices} ${styles.switches}`} aria-label="Interruptores de ejemplo">
        <label>Lorem ipsum <input type="checkbox" role="switch" disabled /></label>
        <label>Lorem ipsum <input type="checkbox" role="switch" defaultChecked disabled /></label>
      </div>
      <span className={styles.chip}><SampleIcon /> Etiqueta</span>
    </div>
  );
}
