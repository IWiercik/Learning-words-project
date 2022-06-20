import { configureStore } from '@reduxjs/toolkit';
import wordsDataSliceReducer from './wordsSlice';
import wordToTranslateSliceReducer from './wordToTranslateSlice';
export const store = configureStore({
  reducer: {
    wordsDataSlice: wordsDataSliceReducer,
    wordToTranslateSlice: wordToTranslateSliceReducer,
  },
});
