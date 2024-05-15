import { configureStore } from '@reduxjs/toolkit';
import { CVAPI } from './API/CVAPI';
import CVSlice from './slices/CVSlice';

export const store = configureStore({
  reducer: {
    CVSLice: CVSlice,

    [CVAPI.reducerPath]: CVAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CVAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
