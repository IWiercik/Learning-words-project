import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
  display: grid;
  text-align: left;
  grid-template-columns: 45% auto;
  align-items: center;
  label {
    margin-left: 20px;
    font-size: 19px;
  }
  input {
    justify-self: right;
    background: rgba(255, 255, 255, 0.315);
    outline: none;
    border: 1px solid black;
    color: white;
    border-radius: 5px;
    margin-right: 20px;
    padding: 5px;
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
      ></input>
    </Box>
  );
};
export default FieldWithInput;
