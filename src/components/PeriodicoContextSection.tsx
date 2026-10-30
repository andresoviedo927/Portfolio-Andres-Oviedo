import { MobileCaseStudySection } from './MobileCaseStudySection';
import { images } from '../assets/images';
import styles from './PeriodicoContextSection.module.css';

const ITEMS = [
  {
    text: 'El periódico continuaba siendo el origen de la experiencia.',
    iconClass: 'fi fi-sr-newspaper',
  },
  {
    text: 'El contenido digital funcionaba como una extensión de la publicación física.',
    iconClass: 'fi fi-sr-smartphone',
  },
  {
    text: 'La interacción móvil permitía incorporar formatos que el papel no podía ofrecer por sí solo.',
    iconClass: 'fi fi-sr-tap',
  },
] as const;

export function PeriodicoContextSection() {
  return (
    <MobileCaseStudySection title="Contexto del proyecto">
      <section className={styles.section} aria-labelledby="periodico-context-title">
        <div className={styles.visual}>
          <img
            src={images.periodicoContext}
            alt="Realidad aumentada proyectada sobre una publicación impresa"
          />
        </div>
        <div className={styles.content}>
          <h2 id="periodico-context-title">
            Contexto del <span>proyecto</span>
          </h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.description}>
            El punto de partida no era reemplazar el periódico, sino explorar cómo ampliar el valor
            de su contenido utilizando un canal digital complementario. Entérese RA planteó una
            experiencia mobile-first en la que determinadas publicaciones podían convertirse en
            puntos de acceso a contenido interactivo desde la cámara del celular.
          </p>
          <div className={styles.list}>
            {ITEMS.map((item) => (
              <article className={styles.item} key={item.text}>
                <span className={styles.iconBox}>
                  <i aria-hidden="true" className={item.iconClass} />
                </span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MobileCaseStudySection>
  );
}
