import React from 'react';
import { Box } from './FieldWithInput.style';
const FieldWithInput = ({ textContent, words, updateValuesMethod, name }) => {
  const inputChangeHandler = (e) => {
    updateValuesMethod({ ...words, [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <label htmlFor={textContent}>{textContent}</label>
      <input
        value={name === 'engWord' ? words.engWord : words.plWord}
        name={name}
        onChange={inputChangeHandler}
        type="text"
        id={textContent}
        placeholder="Place for word"
        required={true}
        minLength={1}
      ></input>
    </Box>
  );
};
export default FieldWithInput;
