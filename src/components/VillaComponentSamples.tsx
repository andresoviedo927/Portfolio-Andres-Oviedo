import { useState, type CSSProperties } from 'react';
import { images } from '../assets/images';
import villaVisualGuide from '../assets/images/Personaje-1.webp';
import villaServicesMap from '../assets/images/Icono_Home_Servicios.webp';
import villaCoffee from '../assets/images/Icono_Servicios_Cafeteria.webp';
import styles from './VillaComponentSamples.module.css';


function MiniMap() {
  return (
    <img alt="" aria-hidden="true" className={styles.miniMap} src={villaServicesMap} />
  );
}


export function VillaComponentSamples({ className = '' }: { className?: string }) {
  const [sampleValue, setSampleValue] = useState(50);
  return (
    <div className={`${styles.componentSamples} ${className}`}>
      <img
        alt="Guía virtual de Villa de Leyva"
        className={styles.guide}
        src={villaVisualGuide}
      />

      <div className={styles.buttonSamples}>
        <button className={styles.primaryButton} type="button">
          <i className="fi-rr-square" />
          Button
          <i className="fi-rr-square" />
        </button>
        <button className={styles.textButton} type="button">
          <i className="fi-rr-square" />
          Button
          <i className="fi-rr-square" />
        </button>
        <button className={styles.disabledButton} disabled type="button">
          <i className="fi-rr-square" />
          Button
          <i className="fi-rr-square" />
        </button>
        <button className={styles.disabledTextButton} disabled type="button">
          <i className="fi-rr-square" />
          Button
          <i className="fi-rr-square" />
        </button>
      </div>

      <div className={styles.avatarSamples}>
        <span>A</span>
        <i className="fi-rr-square" />
        <img alt="Avatar de ejemplo" src={images.avatarContactame} />
      </div>

      <div className={styles.iconButtonSamples}>
        <button aria-label="Acción principal" type="button">
          <i className="fi-rr-square" />
        </button>
        <button aria-label="Acción secundaria" type="button">
          <i className="fi-rr-square" />
        </button>
        <i className="fi-rr-square" />
      </div>

      <div className={styles.sliderSample}>
        <span>Label<i className={styles.sliderInfoIcon} aria-hidden="true" /></span>
        <div>
          <b>0</b>
          <input
            aria-label="Valor de ejemplo"
            value={sampleValue}
            onChange={(event) => setSampleValue(Number(event.target.value))}
            style={{ '--slider-progress': `${sampleValue}%` } as CSSProperties}
            max="100"
            min="0"
            type="range"
          />
          <b>100</b>
        </div>
        <strong>{sampleValue}</strong>
        <small>Texto de asistencia</small>
      </div>

      <MiniMap />

      <div className={styles.switchSamples}>
        <label>
          Lorem ipsum <input defaultChecked type="checkbox" />
          <span />
        </label>
        <label>
          Lorem ipsum <input type="checkbox" />
          <span />
        </label>
      </div>

      <div className={styles.categorySample}>
        <div className={styles.categoryBubble}>
          <img alt="" aria-hidden="true" src={villaCoffee} width={24} height={24} />
        </div>
        <span>Cafetería</span>
      </div>
    </div>
  );
}

