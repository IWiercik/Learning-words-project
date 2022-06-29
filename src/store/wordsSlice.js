import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  words: [],
};
export const wordsDataSlice = createSlice({
  name: 'wordsDataSlice',
  initialState,
  reducers: {
    downloadData: (state, data) => {
      state.words = data.payload;
    },
  },
});

export const { downloadData } = wordsDataSlice.actions;

export default wordsDataSlice.reducer;
