import { TropiStockMockupGallery } from './TropiStockMockupGallery';
import styles from './TropiStockScreensSection.module.css';

export function TropiStockScreensSection() {
  return (
    <section className={styles.section} aria-labelledby="tropi-stock-screens-title">
      <header className={styles.header}>
        <h2 id="tropi-stock-screens-title">Pantallas <span className={styles.webAccent}>en</span> <span>alta definición</span></h2>
        <div aria-hidden="true" />
        <p>Una experiencia diseñada para acompañar cada momento del inventario: identificar productos, registrar sus existencias y consultar la información recopilada. Tropi Stock combina la agilidad de una interfaz móvil con la organización de una plataforma administrativa, dando forma a dos experiencias que responden a un mismo propósito.</p>
      </header>
      <TropiStockMockupGallery />
    </section>
  );
}
