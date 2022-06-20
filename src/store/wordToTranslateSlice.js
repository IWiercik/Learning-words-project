import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  wordToTranslate: '',
};
export const wordToTranslateSlice = createSlice({
  name: 'wordToTranslateSlice',
  initialState,
  reducers: {
    updateWordToTranslate: (state, data) => {
      console.log(data.payload);
      state.wordToTranslate = data.payload
    },
  },
});

export const { updateWordToTranslate } = wordToTranslateSlice.actions;

export default wordToTranslateSlice.reducer;
