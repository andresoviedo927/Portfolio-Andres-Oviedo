import { cedhuMockups, images, villaMockups } from '../../../assets/images';

export const CASE_STUDY_ASSETS = {
  'proj-1': {
    theme: 'villa',
    logo: images.villaLogo,
    hero: images.villaMockup,
    mockups: villaMockups,
  },
  'proj-2': {
    theme: 'cedhu',
    logo: images.cedhuLogo,
    hero: images.cedhuMockup,
    mockups: cedhuMockups,
  },
} as const;

export type CaseStudyProjectId = keyof typeof CASE_STUDY_ASSETS;

export function isCaseStudyProjectId(projectId: string): projectId is CaseStudyProjectId {
  return projectId in CASE_STUDY_ASSETS;
}
