import { createStore } from 'redux';
export const downloadData = (payload) => {
  return {
    type: 'DOWNLOAD_DATA',
    payload,
  };
};
export const updateData = (payload) => {
  return {
    type: 'UPDATE_DATA',
    payload,
  };
};
const initialState = {
  plWords: [],
  engWords: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOWNLOAD_DATA':
      return {
        ...state,
        plWords: action.payload.plWords,
        engWords: action.payload.engWords,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        plWords: action.payload.plWords,
        engWords: action.payload.engWords,
      };
    default:
      return state;
  }
};
export const store = createStore(dataReducer);
