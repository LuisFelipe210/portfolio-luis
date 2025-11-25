export enum ProjectCategory {
  PROFESSIONAL = 'Profissional',
  ACADEMIC = 'Acadêmico/Pessoal'
}

export interface TechStack {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  repoLink?: string;
  tags: string[];
  category: ProjectCategory;
  imagePlaceholder: string; // Using picsum for demo
}

export interface Skill {
  category: string;
  items: string[];
}

export interface StatData {
  subject: string;
  A: number;
  fullMark: number;
}