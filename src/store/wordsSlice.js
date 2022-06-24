import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  plWords: [],
  engWords: [],
  idsWords: [],
};
export const wordsDataSlice = createSlice({
  name: 'wordsDataSlice',
  initialState,
  reducers: {
    downloadData: (state, data) => {
      state.engWords = data.payload[0];
      state.plWords = data.payload[1];
      state.idsWords = data.payload[2];
    },
  },
});

export const { downloadData } = wordsDataSlice.actions;

export default wordsDataSlice.reducer;
