import React from 'react';
import { Title } from 'components/atoms/Title/Title.style';
import AuthLoginInput from 'components/atoms/AuthLoginInput/AuthLoginInput';
import AuthPasswordInput from 'components/atoms/AuthPasswordInput/AuthPasswordInput';
import { Button } from 'components/atoms/Button/Button.style';
import { Wrapper } from './Form.styles';
const Form = ({ title, submit, value: formValues, updateValuesMethod, formSubmitted, dataAuth }) => {
  const inputChangeHandler = (e) => {
    updateValuesMethod({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Wrapper onSubmit={formSubmitted}>
      <Title>{title}</Title>
      <AuthLoginInput value={formValues.login} onChange={inputChangeHandler} isValid={dataAuth.login}></AuthLoginInput>
      <AuthPasswordInput
        value={formValues.password}
        onChange={inputChangeHandler}
        isValid={dataAuth.password}
      ></AuthPasswordInput>
      <Button>{submit}</Button>
    </Wrapper>
  );
};
export default Form;
