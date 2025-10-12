
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string[];
}

export interface SkillSet {
  technical: string[];
  languages: string[];
  soft: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  type: 'Extracurricular' | 'Training' | 'Certification';
  description: string;
}
