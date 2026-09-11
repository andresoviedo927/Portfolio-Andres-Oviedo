export interface ExperienceItem {
  id: string;
  period: string;
  location: string;
  role: string;
  company: string;
  description?: string;
  skills?: string[];
}

export interface EducationItem {
  id: string;
  year: string;
  institution: string;
  degree: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'UI/UX' | 'Mobile' | 'Web App' | 'Design System' | 'Branding';
  subtitle: string;
  description: string;
  coverType: 'heritage' | 'crypto' | 'luxury' | 'wellness' | 'ecommerce';
  accentColor: string;
  tags: string[];
  year: string;
  client?: string;
  metrics?: { label: string; value: string }[];
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  deliverables?: string[];
  figmaUrl?: string;
  behanceUrl?: string;
  liveUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  behance: string;
  dribbble: string;
  github: string;
  location: string;
}
