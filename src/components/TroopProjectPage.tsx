import { images } from '../assets/images';
import { TROOP_PROJECT } from '../constants/texts';
import { ProjectDetailPage } from './ProjectDetailPage';
import { TroopArchitectureSection } from './TroopArchitectureSection';
import { TroopArchetypesSection } from './TroopArchetypesSection';
import { TroopChallengeSection } from './TroopChallengeSection';
import { TroopContextSection } from './TroopContextSection';
import { TroopFeaturesSection } from './TroopFeaturesSection';
import { TroopImpactSection } from './TroopImpactSection';
import { TroopInsightsSection } from './TroopInsightsSection';
import { TroopResearchSection } from './TroopResearchSection';
import { TroopScreensSection } from './TroopScreensSection';
import { TroopVisualSystemSection } from './TroopVisualSystemSection';

interface TroopProjectPageProps {
  onNavigate: (path: string) => void;
}

export function TroopProjectPage({ onNavigate }: TroopProjectPageProps) {
  return (
    <ProjectDetailPage
      accent="#48d3f4"
      architecture={[]}
      blocks={[]}
      caseStudyLayout="troop"
      contextShowcase={
        <>
          <TroopContextSection />
          <TroopChallengeSection />
          <TroopResearchSection />
          <TroopInsightsSection />
          <TroopArchetypesSection />
          <TroopFeaturesSection />
          <TroopArchitectureSection />
          <TroopVisualSystemSection />
          <TroopScreensSection />
        </>
      }
      description={TROOP_PROJECT.description}
      featuredAlt="Persona analizando una inversión inmobiliaria en un portátil"
      featuredImage={images.troopCard}
      featuredVisualPlacement="beforeFooter"
      features={[]}
      heroAlt="Vista de la plataforma web Troop"
      heroImage={images.troopMockup}
      invitation="¿Te gustaría aplicar algo así en tu producto?"
      logoImage={images.troopLogo}
      logoWide
      metadata={[
        { kind: 'year', label: 'Año', value: `${TROOP_PROJECT.year} · Junio` },
        { kind: 'role', label: 'Rol', value: 'Diseñador de experiencia de usuario I' },
        { kind: 'platform', label: 'Plataforma', value: 'Web responsive' },
        { kind: 'projectType', label: 'Tipo de proyecto', value: 'PropTech · Real Estate' },
        { kind: 'country', label: 'País', value: 'Colombia', countryCode: 'CO' },
      ]}
      onNavigate={onNavigate}
      researchInsights={[]}
      results={[]}
      resultsShowcase={<TroopImpactSection />}
      seoDescription={TROOP_PROJECT.description}
      seoTitle="Troop | Andrés Oviedo"
      titleAccent="inversión inmobiliaria"
      titlePrefix="Simplificando el acceso a la"
    />
  );
}
