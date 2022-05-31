import { configureStore } from '@reduxjs/toolkit';
import wordsDataSliceReducer from './wordsSlice';
export const store = configureStore({
  reducer: {
    wordsDataSlice: wordsDataSliceReducer,
  },
});
