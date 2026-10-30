import tropiStockObjective from '../assets/images/tropi-stock-objective.webp';
import styles from './TropiStockObjectiveSection.module.css';

export function TropiStockObjectiveSection() {
  return (
    <section className={styles.section} aria-labelledby="tropi-stock-objective-title">
      <div className={styles.content}>
        <h2 id="tropi-stock-objective-title">
          <span>Objetivo</span> del proyecto
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.copy}>
          <p>
            Diseñar una experiencia digital integral que conectara la toma de inventarios en campo
            con las necesidades de gestión y seguimiento de los equipos administrativos, mediante
            dos plataformas adaptadas a sus respectivos contextos de uso.
          </p>
          <p>
            La solución debía facilitar el registro estructurado de productos, optimizar la
            organización de la información y proporcionar herramientas de consulta que permitieran
            interpretar las existencias, revisar los registros y apoyar los procesos de seguimiento
            comercial.
          </p>
        </div>
      </div>

      <div className={styles.visual}>
        <img
          src={tropiStockObjective}
          alt="Escaneo inteligente de un producto para registrar su inventario"
        />
      </div>
    </section>
  );
}
