import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  plWords: [],
  engWords: [],
};
export const wordsDataSlice = createSlice({
  name: 'wordsDataSlice',
  initialState,
  reducers: {
    downloadData: (state, data) => {
      state.plWords = data.payload.plWords;
      state.engWords = data.payload.engWords;
    },
  },
});

export const { downloadData } = wordsDataSlice.actions;

export default wordsDataSlice.reducer;
