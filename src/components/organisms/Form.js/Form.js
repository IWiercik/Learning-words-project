import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
const Wrapper = styled.form`
  width: 300px;
  height: 300px;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input {
    max-width: 60%;
  }
`;

const Form = ({ title, submit }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input></Input>
      <Input></Input>
      <Button>{submit}</Button>
    </Wrapper>
  );
};
export default Form;
