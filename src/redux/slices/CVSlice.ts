import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import { initialCV } from '../../data/initialValues';
import { CVItemsType, CVType } from '../../../@types';

interface CVState {
  CV: CVType;
  lineSpacing: number;
}

interface DnDAction {
  activeId: string | number;
  overId: string | number;
  arrayName: string;
}

// Define the initial state using that type
const initialState: CVState = {
  CV: initialCV,
  lineSpacing: 1.3,
};

export const CVSlice = createSlice({
  name: 'CV',
  initialState,
  reducers: {
    setCV: (state, action: PayloadAction<CVType>) => {
      state.CV = action.payload;
    },
    incrementLineSpacing: (state) => {
      state.lineSpacing += 0.1;
    },
    decrementLineSpacing: (state) => {
      state.lineSpacing -= 0.1;
    },
    setDndIndexes: (state, action: PayloadAction<DnDAction>) => {
      const key = action.payload.arrayName;
      const oldIndex = state.CV[key as keyof CVItemsType].findIndex(
        (item: { id: string | number }) => item.id === action.payload.activeId
      );
      const newIndex = state.CV[key as keyof CVItemsType].findIndex(
        (item: { id: string | number }) => item.id === action.payload.overId
      );

      state.CV = {
        ...state.CV,
        [key]: arrayMove(
          // TODO
          // @ts-ignore
          state.CV[key as keyof CVItemsType],
          oldIndex,
          newIndex
        ),
      };
    },
  },
});

export const {
  setCV,
  incrementLineSpacing,
  decrementLineSpacing,
  setDndIndexes,
} = CVSlice.actions;
export default CVSlice.reducer;
