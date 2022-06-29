import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  wordToTranslate: {
    id: '',
    translation: '',
    correctTranslation: '',
  },
};
export const wordToTranslateSlice = createSlice({
  name: 'wordToTranslateSlice',
  initialState,
  reducers: {
    updateWordToTranslate: (state, data) => {
      state.wordToTranslate = {
        id: data.payload.id,
        translation: data.payload.engWord,
        correctTranslation: data.payload.plWord,
      };
    },
  },
});

export const { updateWordToTranslate } = wordToTranslateSlice.actions;

export default wordToTranslateSlice.reducer;
