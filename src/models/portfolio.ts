export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  profiles: string[];
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  images?: string[];
}

export interface Competition {
  title: string;
  description: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}