import React from 'react';

export type InputFieldType = {
  value: string;
  handler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'phone' | 'date' | 'month';
  name?: string;
  autoComplete?: string;
};

export type TextAreaType = {
  label?: string;
  className?: string;
  value: string;
  handler: (evt: string) => void;
  placeholder?: string;
};

export type OptionsType = {
  value: number;
  label: string;
};

export type SelectType = {
  options: OptionsType[];
  label?: string;
  placeholder?: string;
  className?: string;
  value: number;
  handler: (evt: React.ChangeEvent<HTMLSelectElement>, key: string) => void;
};

export type BtnType = {
  children: string | React.ReactNode;
  handler: () => void;
  className?: string;
};

export type DocumentType = {
  id: number;
  title: string;
  lastUpdate: string;
  screenshot: string;
};

export type DocumentActions = {
  id: number;
  icon: string;
  value: string;
};

export type EmploymentType = {
  id: string;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
};

export type EducationType = {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
};

export type SocialLinkType = {
  id: string;
  label: string;
  link: string;
};

export type LanguageType = {
  id: string;
  language: string;
  level: number;
};
export type SkillType = {
  id: string;
  skill: string;
  level: number;
};

export type CourseType = {
  id: string;
  course: string;
  institution: string;
  startDate: string;
  endDate: string;
};

export type CVBlockType = {
  title: string;
  text?: string;
  name: string;
  children: React.ReactNode;
};

export type CVType = {
  id: string;
  name: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  profile: string;
  employments: EmploymentType[];
  educations: EducationType[];
  links: SocialLinkType[];
  skills: SkillType[];
  courses: CourseType[];
  languages: LanguageType[];
};

export type TemplateProps = {
  CV: CVType;
  ref: React.LegacyRef<HTMLDivElement>;
};
