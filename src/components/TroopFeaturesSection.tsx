import discoverAnimation from '../assets/images/troop-feature-discover.gif';
import manageAnimation from '../assets/images/troop-feature-manage.gif';
import participateAnimation from '../assets/images/troop-feature-participate.gif';
import projectAnimation from '../assets/images/troop-feature-project.gif';
import sellAnimation from '../assets/images/troop-feature-sell.gif';
import understandAnimation from '../assets/images/troop-feature-understand.gif';
import { MobileCaseStudySection } from './MobileCaseStudySection';
import styles from './TroopAnimatedCards.module.css';

const features = [
  {
    title: 'Descubrir',
    description:
      'Organización de oportunidades inmobiliarias mediante un catálogo con búsqueda y filtros, facilitando la identificación de propiedades según los intereses y posibilidades de participación.',
    image: discoverAnimation,
  },
  {
    title: 'Comprender',
    description:
      'Centralización de características, condiciones comerciales e indicadores financieros en fichas estructuradas que permiten interpretar el valor y las particularidades de cada activo.',
    image: understandAnimation,
  },
  {
    title: 'Proyectar',
    description:
      'Incorporación de un simulador interactivo que relaciona el monto de participación con estimaciones de ingresos, costos y rentabilidad para facilitar la exploración de posibles escenarios.',
    image: projectAnimation,
  },
  {
    title: 'Participar',
    description:
      'Integración de las etapas de exploración, detalle, registro y contacto para acompañar al usuario desde el descubrimiento de una oportunidad hasta la manifestación de interés.',
    image: participateAnimation,
  },
  {
    title: 'Comercializar',
    description:
      'Diseño de un recorrido específico para propietarios, organizado en la selección del tipo de inmueble, el registro de sus características y la entrega de documentación.',
    image: sellAnimation,
  },
  {
    title: 'Gestionar',
    description:
      'Estructuración de un espacio de usuario que reúne datos personales, participaciones, movimientos y preferencias para facilitar la consulta y el seguimiento de la información.',
    image: manageAnimation,
  },
];

export function TroopFeaturesSection() {
  return (
    <MobileCaseStudySection title="Funcionalidades clave">
      <section className={`${styles.section} ${styles.features}`} aria-labelledby="troop-features-title">
        <header className={styles.header}>
          <h2 id="troop-features-title">
            Funcionalidades <span>clave</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>
        <div className={styles.cards}>
          {features.map(({ title, description, image }) => (
            <article className={styles.card} key={title}>
              <img src={image} alt="" width={64} height={64} loading="lazy" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
