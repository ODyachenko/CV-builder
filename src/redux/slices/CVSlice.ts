import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import { initialCV } from '../../data/initialValues';
import { CVType } from '../../../@types';

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
  CV: initialCV,
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
  },
});

export const { setCV, setDndIndexes } = CVSlice.actions;
export default CVSlice.reducer;
