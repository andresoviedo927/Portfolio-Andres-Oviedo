import type { IconName } from '../components/ui/Icon';

export const ABOUT_RESULTS: readonly {
  value: string;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    value: '−41 %',
    title: 'Tiempo de interacción',
    description:
      'Optimización de flujos y recorridos para completar tareas de forma más rápida y sencilla.',
    icon: 'smartphoneSolid',
  },
  {
    value: '+34 %',
    title: 'Facilidad de uso',
    description:
      'Mejora en usabilidad percibida mediante interfaces intuitivas, navegación clara y jerarquía visual.',
    icon: 'tapSolid',
  },
  {
    value: '89 %',
    title: 'Satisfacción de usuarios',
    description:
      'Valoración positiva de experiencias digitales diseñadas en torno a necesidades reales.',
    icon: 'feedbackReviewSolid',
  },
  {
    value: '+25 %',
    title: 'Eficiencia de diseño',
    description:
      'Mayor velocidad de entrega mediante Design Systems, componentes reutilizables y estandarización.',
    icon: 'selectSolid',
  },
];
