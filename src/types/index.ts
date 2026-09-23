export interface ProjectScreen {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  icon: string;
  bgGradient: string;
  description: string;
  features: string[];
  imgUrl?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  badge?: string;
  award?: string;
  period?: string;
  company?: string;
  description: string;
  technologies: string[];
  floatingTags: string[];
  contributions?: string[];
  githubUserLink?: string;
  githubStaffLink?: string;
  storeLink?: string;
  isStorePlaceholder?: boolean;
  isUnderConstruction?: boolean;
  constructionStatus?: string;
  screens?: ProjectScreen[];
  theme: 'orange' | 'blue' | 'construction';
}

export interface TimelineItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  icon: string;
  type: 'education' | 'work' | 'project' | 'current';
}

export interface TechItem {
  name: string;
  category: 'Mobile' | 'Frontend' | 'Backend & DB' | 'Tools & Services' | 'Native & SDKs';
  level: 'Core' | 'Advanced' | 'Proficient';
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
