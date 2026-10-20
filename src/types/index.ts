export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend/API';
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isPlaceholderLinks: boolean;
  mockupType: 'taskora' | 'piggypilot' | 'tiffinwallah' | 'wanderlust' | 'eventhub';
  badge?: string;
}

export interface SkillItem {
  name: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  contributions: string[];
  technologies: string[];
  isCurrent?: boolean;
  badge?: string;
  note?: string;
}

export interface FormFeedback {
  type: 'success' | 'error' | null;
  message: string;
}
