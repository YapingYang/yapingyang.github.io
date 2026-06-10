/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  category: 'web' | 'mobile' | 'design' | 'dev-tool';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string; // Tailwind/custom graphical placeholder description or mock path
  featured: boolean;
  completionDate: string;
  status?: string; // e.g. 'IN PROGRESS', 'PLANNED', 'SHIPPED'
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  items: Array<{
    name: string;
    level: number; // Percentage 0-100
    icon?: string;
  }>;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  details?: string[];
}
