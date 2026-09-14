import avatarContactame from './avatar-contactame.webp';
import avatarInicio from './avatar-inicio.webp';
import avatarSobreMi from './avatar-sobre-mi.webp';
import cedhuCard from './cedhu-card.webp';
import cedhuLogo from './cedhu-logo.webp';
import cedhuMockup from './cedhu-mockup.webp';
import cedhuMockup01 from './cedhu-mockup-01.webp';
import cedhuMockup02 from './cedhu-mockup-02.webp';
import cedhuMockup03 from './cedhu-mockup-03.webp';
import cedhuMockup04 from './cedhu-mockup-04.webp';
import cedhuMockup05 from './cedhu-mockup-05.webp';
import cedhuMockup06 from './cedhu-mockup-06.webp';
import cedhuMockup07 from './cedhu-mockup-07.webp';
import heroBanner from './hero-banner.webp';
import toolAdobeIllustrator from './tool-adobe-illustrator.webp';
import toolAdobeLightroom from './tool-adobe-lightroom.webp';
import toolAdobePhotoshop from './tool-adobe-photoshop.webp';
import toolAdobeXd from './tool-adobe-xd.webp';
import toolAiStudio from './tool-ai-studio.webp';
import toolClaudeCode from './tool-claude-code.webp';
import toolCodex from './tool-codex.webp';
import toolFigma from './tool-figma.webp';
import toolLovable from './tool-lovable.webp';
import toolMaze from './tool-maze.webp';
import toolMiro from './tool-miro.webp';
import toolNotion from './tool-notion.webp';
import villaCard from './villa-card.webp';
import villaLogo from './villa-logo.webp';
import villaMockup from './villa-mockup.webp';
import villaMockup01 from './villa-mockup-01.webp';
import villaMockup02 from './villa-mockup-02.webp';
import villaMockup03 from './villa-mockup-03.webp';
import villaMockup04 from './villa-mockup-04.webp';
import villaMockup05 from './villa-mockup-05.webp';
import villaMockup06 from './villa-mockup-06.webp';
import villaMockup07 from './villa-mockup-07.webp';

export const images = {
  avatarContactame,
  avatarInicio,
  avatarSobreMi,
  cedhuCard,
  cedhuLogo,
  cedhuMockup,
  heroBanner,
  villaCard,
  villaLogo,
  villaMockup,
} as const;

export const toolIcons = [
  { id: 'figma', name: 'Figma', imageSrc: toolFigma },
  { id: 'adobe-xd', name: 'Adobe XD', imageSrc: toolAdobeXd },
  { id: 'maze', name: 'Maze', imageSrc: toolMaze },
  { id: 'miro', name: 'Miro', imageSrc: toolMiro },
  { id: 'notion', name: 'Notion', imageSrc: toolNotion },
  { id: 'photoshop', name: 'Adobe Photoshop', imageSrc: toolAdobePhotoshop },
  { id: 'illustrator', name: 'Adobe Illustrator', imageSrc: toolAdobeIllustrator },
  { id: 'lightroom', name: 'Adobe Lightroom', imageSrc: toolAdobeLightroom },
  { id: 'lovable', name: 'Lovable', imageSrc: toolLovable },
  { id: 'ai-studio', name: 'Google AI Studio', imageSrc: toolAiStudio },
  { id: 'codex', name: 'OpenAI Codex', imageSrc: toolCodex },
  { id: 'claude-code', name: 'Claude Code', imageSrc: toolClaudeCode },
] as const;

export const cedhuMockups = [
  { id: 'cedhu-01', imageSrc: cedhuMockup01, alt: 'Inicio del control académico CEDHU' },
  { id: 'cedhu-02', imageSrc: cedhuMockup02, alt: 'Resumen académico en CEDHU' },
  { id: 'cedhu-03', imageSrc: cedhuMockup03, alt: 'Consulta de calificaciones en CEDHU' },
  { id: 'cedhu-04', imageSrc: cedhuMockup04, alt: 'Seguimiento de tareas en CEDHU' },
  { id: 'cedhu-05', imageSrc: cedhuMockup05, alt: 'Control de asistencia en CEDHU' },
  { id: 'cedhu-06', imageSrc: cedhuMockup06, alt: 'Horario escolar en CEDHU' },
  { id: 'cedhu-07', imageSrc: cedhuMockup07, alt: 'Notificaciones escolares en CEDHU' },
] as const;

export const villaMockups = [
  { id: 'villa-01', imageSrc: villaMockup01, alt: 'Pantalla de carga de la aplicación turística' },
  { id: 'villa-02', imageSrc: villaMockup02, alt: 'Pantalla de inicio de la aplicación turística' },
  { id: 'villa-03', imageSrc: villaMockup03, alt: 'Mapa turístico interactivo de Villa de Leyva' },
  { id: 'villa-04', imageSrc: villaMockup04, alt: 'Exploración de lugares de Villa de Leyva' },
  { id: 'villa-05', imageSrc: villaMockup05, alt: 'Detalle de una experiencia turística' },
  { id: 'villa-06', imageSrc: villaMockup06, alt: 'Contenido cultural de Villa de Leyva' },
  { id: 'villa-07', imageSrc: villaMockup07, alt: 'Experiencia de realidad aumentada' },
] as const;
