import { images } from '../assets/images';
import styles from './TropiStockClosingSection.module.css';

export function TropiStockClosingSection() {
  return (
    <>
      <section className={styles.invitation} aria-label="Invitación"><p>¿Te gustaría aplicar algo así en tu producto?</p></section>
      <section className={styles.banner} aria-label="Presentación visual de Tropi Stock"><div className={styles.bannerFrame}><img src={images.tropiStockCard} alt="Tropi Stock: experiencia de inventario en punto de venta" /></div></section>
    </>
  );
}
