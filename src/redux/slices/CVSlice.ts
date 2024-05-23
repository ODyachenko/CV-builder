import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CVType } from '../../../@types';
import { v4 } from 'uuid';
import { arrayMove } from '@dnd-kit/sortable';

interface CVState {
  CV: CVType;
}

interface DnDAction {
  activeId: string | number;
  overId: string | number;
  arrayName: string;
}

// Define the initial state using that type
const initialState: CVState = {
  CV: {
    id: '',
    name: '',
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
  },
};

export const CVSlice = createSlice({
  name: 'CV',
  initialState,
  reducers: {
    setCV: (state, action: PayloadAction<CVType>) => {
      state.CV = action.payload;
    },
    setDndIndexes: (state, action: PayloadAction<DnDAction>) => {
      const arrayName = action.payload.arrayName;
      const oldIndex = state.CV[arrayName].findIndex(
        (item) => item.id === action.payload.activeId
      );
      const newIndex = state.CV[arrayName].findIndex(
        (item) => item.id === action.payload.overId
      );

      state.CV = {
        ...state.CV,
        [arrayName]: arrayMove(state.CV[arrayName], oldIndex, newIndex),
      };
    },
    createSkill: (state) => {
      const newSkill = {
        id: v4(),
        skill: '',
        level: 3,
      };
      state.CV = { ...state.CV, ['skills']: [...state.CV.skills, newSkill] };
    },
    createLanguage: (state) => {
      const newLanguage = {
        id: v4(),
        language: '',
        level: 0,
      };
      state.CV = {
        ...state.CV,
        ['languages']: [...state.CV.languages, newLanguage],
      };
    },
    createLink: (state) => {
      const newLink = {
        id: v4(),
        label: '',
        link: '',
      };
      state.CV = {
        ...state.CV,
        ['links']: [...state.CV.links, newLink],
      };
    },
    createEducation: (state) => {
      const newEducation = {
        id: v4(),
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      };
      state.CV = {
        ...state.CV,
        ['educations']: [...state.CV.educations, newEducation],
      };
    },
    createEmployment: (state) => {
      const newEmployment = {
        id: v4(),
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      };
      state.CV = {
        ...state.CV,
        ['employments']: [...state.CV.employments, newEmployment],
      };
    },
  },
});

export const {
  setCV,
  setDndIndexes,
  createSkill,
  createLanguage,
  createLink,
  createEducation,
  createEmployment,
} = CVSlice.actions;
export default CVSlice.reducer;
