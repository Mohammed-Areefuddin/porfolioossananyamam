export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  description: string;
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  social: {
    linkedin: string;
  };
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  awards: string[];
  publications: PublicationItem[];
  certifications: string[];
}