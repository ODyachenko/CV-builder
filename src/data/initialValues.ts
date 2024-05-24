import { v4 } from 'uuid';

export const initialCV = {
  id: '',
  name: 'Untitled',
  jobTitle: '',
  firstName: '',
  lastName: '',
  avatarUrl: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  profile: '',
  employments: [],
  educations: [],
  links: [],
  skills: [],
  languages: [],
};

export const newSkill = {
  id: v4(),
  skill: '',
  level: 3,
};

export const newLanguage = {
  id: v4(),
  language: '',
  level: 0,
};

export const newLink = {
  id: v4(),
  label: '',
  link: '',
};

export const newEducation = {
  id: v4(),
  school: '',
  degree: '',
  startDate: '',
  endDate: '',
  city: '',
  description: '',
};

export const newEmployment = {
  id: v4(),
  jobTitle: '',
  employer: '',
  startDate: '',
  endDate: '',
  city: '',
  description: '',
};
