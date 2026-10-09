import { images } from '../assets/images';
import { PROJECTS } from '../constants';
import { ProjectDetailPage } from './ProjectDetailPage';
import { TuapMockupGallery } from './ui/TuapMockupGallery';

interface TuapProjectPageProps {
  onNavigate: (path: string) => void;
}

export function TuapProjectPage({ onNavigate }: TuapProjectPageProps) {
  const project = PROJECTS.find((item) => item.id === 'proj-4');

  if (!project) return null;

  return (
    <ProjectDetailPage
      accent="#bd020a"
      accentFirstTitle
      architecture={[
        {
          title: 'Web',
          description: 'Cliente · Vendedor · Administrador',
          icon: 'webDesignSolid',
        },
        {
          title: 'App',
          description: 'Cliente · Vendedor',
          icon: 'smartphoneSolid',
        },
        {
          title: 'Núcleo compartido',
          description: 'Buscar · Comprar · Gestionar · Seguir',
          icon: 'appsSolid',
        },
      ]}
      blocks={[
        {
          title: 'Contexto del proyecto',
          body: 'El canal tradicional operaba sobre una relación altamente asistida entre comerciantes y fuerza comercial. La oportunidad estaba en transformar ese modelo en una experiencia digital capaz de facilitar el abastecimiento sin perder la conexión con la operación del negocio.',
        },
        {
          title: 'Desafío de diseño',
          body: 'Diseñar una experiencia capaz de simplificar compra, gestión y seguimiento para distintos tipos de usuario, manteniendo una lógica común entre Web y App.',
          tone: 'accent',
        },
        {
          title: 'Problemas y fricciones detectados',
          body: 'Las principales fricciones estaban en la autonomía, la recurrencia de compra y la continuidad de la operación.',
          items: [
            'La compra dependía en gran medida de vendedores y canales asistidos.',
            'Reabastecer implicaba repetir búsquedas, selecciones y decisiones frecuentes.',
            'Soporte, logística y seguimiento podían fragmentar la experiencia después de comprar.',
            'La adopción digital requería una experiencia clara y acompañamiento durante el proceso.',
          ],
          tone: 'warning',
        },
      ]}
      caseStudyLayout="tuap"
      description="Una experiencia B2B que llevó la compra, gestión y seguimiento del abastecimiento de pequeños comercios desde procesos asistidos y presenciales hacia un ecosistema digital multicanal."
      featuredAlt="Tendero usando TuAp para gestionar el abastecimiento de su negocio"
      featuredImage={images.tuapCard}
      featuredVisualPlacement="beforeFooter"
      features={[
        {
          title: 'Compra asistida',
          description: 'Un recorrido guiado para facilitar la selección de productos.',
          imageSrc: images.tuapFeatureCompra,
        },
        {
          title: 'Reabastecimiento recurrente',
          description: 'Listas y recomendaciones para agilizar compras frecuentes.',
          imageSrc: images.tuapFeatureReabastecimiento,
        },
        {
          title: 'Descubrimiento flexible',
          description:
            'Búsqueda, categorías, casas y marcas como distintos caminos para explorar el portafolio.',
          imageSrc: images.tuapFeatureDescubrimiento,
        },
        {
          title: 'Gestión de punta a punta',
          description: 'Producto, carrito, pago y pedido dentro de un mismo recorrido.',
          imageSrc: images.tuapFeatureGestion,
        },
        {
          title: 'Visibilidad postcompra',
          description: 'Estados y notificaciones para mantener al usuario informado.',
          imageSrc: images.tuapFeatureVisibilidad,
        },
        {
          title: 'Herramientas comerciales',
          description:
            'Funciones específicas para gestionar clientes, pedidos e indicadores desde el rol Vendedor.',
          imageSrc: images.tuapFeatureHerramientas,
        },
      ]}
      heroAlt="TuAp en su experiencia web y móvil"
      heroImage={images.tuapMockup}
      invitation="¿Te gustaría aplicar algo así en tu producto?"
      logoAlt="TuAp"
      logoImage={images.tuapLogo}
      logoWide
      metadata={[
        { kind: 'year', label: 'Año', value: '2020 · Agosto' },
        { kind: 'role', label: 'Rol', value: 'Diseñador de experiencia de usuario I' },
        { kind: 'platform', label: 'Plataforma', value: 'Web · App' },
        {
          kind: 'projectType',
          label: 'Tipo de proyecto',
          value: 'B2B Marketplace · e-procurement',
        },
      ]}
      mockupGallery={<TuapMockupGallery />}
      onNavigate={onNavigate}
      insightsDescription="Los principales aprendizajes mostraron que la experiencia debía equilibrar autonomía, recurrencia y continuidad durante todo el proceso de compra."
      researchDescription="La investigación combinó conocimiento del usuario, validación y análisis de la operación para entender qué debía simplificarse antes de diseñar la experiencia."
      researchInsights={[
        {
          title: '',
          description:
            'La autogestión debía reducir la dependencia sin eliminar el acompañamiento.',
        },
        {
          title: '',
          description:
            'El abastecimiento requería facilitar acciones y decisiones que se repiten constantemente.',
        },
        {
          title: '',
          description:
            'La experiencia debía extenderse más allá del pago, incorporando seguimiento, estados y soporte.',
        },
      ]}
      researchPoints={[
        'Research para reducir incertidumbre.',
        'Contexto → Validación → Fricciones → Arquitectura.',
        'Más de 120 grupos focales ayudaron a contrastar la propuesta durante su evolución.',
      ]}
      researchTitle="Metodología de UX Research"
      results={[
        {
          value: '+12.000',
          label: 'Referencias disponibles dentro del ecosistema de abastecimiento.',
        },
        {
          value: '5.951',
          label: 'Descargas históricas registradas de la app Android.',
        },
        {
          value: '289',
          label:
            'Clientes compradores reportados durante 2022 en la implementación de TuAp Supermercados.',
        },
        {
          value: '+120',
          label:
            'La propuesta fue contrastada con usuarios durante su evolución antes de continuar escalando la experiencia.',
        },
        {
          value: '>95 %',
          label:
            'De entregas a tiempo reportadas posteriormente en la operación logística integrada con Drivin.',
        },
        {
          value: '6h → 1h',
          label:
            'Reducción reportada en el tiempo de planificación de rutas tras la incorporación del sistema logístico.',
        },
      ]}
      resultsColumns={3}
      resultsNote={{
        title: 'Importante',
        body: 'Las métricas de entregas y planificación corresponden al caso de operación con Drivin y no representan resultados atribuibles directamente al diseño UX. El dato de descargas corresponde a un registro histórico de terceros de Google Play.',
      }}
      seoDescription="TuAp: experiencia B2B multicanal para digitalizar la compra, gestión y seguimiento del abastecimiento de pequeños comercios."
      seoTitle={`${project.title} | Andrés Oviedo`}
      titleAccent="del canal tradicional"
      titlePrefix="Digitalizando el abastecimiento"
    />
  );
}
