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
      state.engWords = data.payload[0];
      state.plWords = data.payload[1];
    },
  },
});

export const { downloadData } = wordsDataSlice.actions;

export default wordsDataSlice.reducer;
