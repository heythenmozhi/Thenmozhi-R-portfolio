export interface ProjectItem {
  id: string;
  name: string;
  subtitle?: string;
  category: 'Full Stack & AI' | 'Full Stack Web' | 'Academic & Systems' | 'Programming';
  description: string;
  longDescription?: string;
  keyFeatures: string[];
  techStack: string[];
  aiIntegration?: string;
  workflow?: string[];
  userRoles?: string[];
  teamMembers?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  coreMessage?: string;
  designNotes?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location?: string;
  period: string;
  gradeMetric: string;
  gradeValue: string;
  expectedGraduation?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duration?: string;
  mode?: string;
  domain?: string;
  description: string;
  keyPoints: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  color: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: string;
  date?: string;
  grade?: string;
}

export interface PublicationItem {
  title: string;
  status: string;
  date: string;
  applicationNumber?: string;
  description?: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
}

export interface AdditionalProjectItem {
  title: string;
  period?: string;
  description: string;
  tech?: string;
}

export interface ReferenceItem {
  name: string;
  designation: string;
  contact: string;
}

export interface PersonalDetails {
  dateOfBirth: string;
  gender: string;
  nationality: string;
  hometown: string;
  permanentAddress: string;
  phone: string;
  mobility: string;
}
