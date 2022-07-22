import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Input } from 'components/atoms/AuthInput/AuthInput.styles';
import { Button } from 'components/atoms/Button/Button';
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
      <Input
        required={true}
        name="login"
        placeholder="Your-Email"
        type="text"
        value={formValues.login}
        onChange={inputChangeHandler}
        isValid={dataAuth.login}
        autoComplete="on"
      ></Input>
      <Input
        required={true}
        name="password"
        placeholder="Password"
        type="password"
        value={formValues.password}
        onChange={inputChangeHandler}
        isValid={dataAuth.password}
        autoComplete="on"
      ></Input>
      <Button>{submit}</Button>
    </Wrapper>
  );
};
export default Form;
