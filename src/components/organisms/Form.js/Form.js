import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Input } from 'components/atoms/AuthInput/AuthInput';
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

const Form = ({ title, submit, value: formValues, updateValuesMethod, formSubmitted, dataAuth }) => {
  const inputChangeHandler = (e) => {
    updateValuesMethod({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper onSubmit={formSubmitted}>
      <Title>{title}</Title>
      <Input
        required={true}
        name="login"
        placeholder="Your-Email"
        type="text"
        value={formValues.login}
        onChange={inputChangeHandler}
        isValid={dataAuth.login}
      ></Input>
      <Input
        required={true}
        name="password"
        placeholder="Password"
        type="password"
        value={formValues.password}
        onChange={inputChangeHandler}
        isValid={dataAuth.password}
      ></Input>
      <Button>{submit}</Button>
    </Wrapper>
  );
};
export default Form;
