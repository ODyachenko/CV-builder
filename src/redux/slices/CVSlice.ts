import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CVType } from '../../../@types';

interface CVState {
  CV: CVType;
}

// Define the initial state using that type
const initialState: CVState = {
  CV: {
    id: 0,
    name: '',
    jobTitle: '',
    firstName: '',
    lastName: '',
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
  },
});

export const { setCV } = CVSlice.actions;
export default CVSlice.reducer;
