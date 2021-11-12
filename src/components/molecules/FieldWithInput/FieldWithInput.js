import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
  display: flex;
  text-align: left;
  grid-template-columns: 45% auto;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  label {
    font-size: 19px;
  }
  input {
    border-radius: 10px;
    padding: 9px 15px;
    border: 1px solid white;
    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
    background: rgba(0, 0, 0, 0.397);
  }
`;
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
      ></input>
    </Box>
  );
};
export default FieldWithInput;
