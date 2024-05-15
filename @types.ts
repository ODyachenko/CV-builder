import React from 'react';

export type InputFieldType = {
  value: string;
  handler: () => void;
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
  handler: () => void;
};

export type OptionsType = {
  value: string;
  label: string;
};

export type SelectType = {
  options: OptionsType[];
  label?: string;
  placeholder?: string;
  className?: string;
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
  id: number;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
};

export type EducationType = {
  id: number;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
};

export type SocialLinkType = {
  id: number;
  label: string;
  link: string;
};

export type LanguageType = {
  id: number;
  language: string;
  level: string;
};

export type CVBlockType = {
  title: string;
  text?: string;
  name: string;
  children: React.ReactNode;
};

export type CVType = {
  id: number;
  name: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  profile: string;
  employments: EmploymentType[];
  educations: EducationType[];
  links: SocialLinkType[];
  skills: string[];
  languages: LanguageType[];
};
