import Form from 'components/organisms/Form.js/Form';
import { useState } from 'react';
const LoginForm = () => {
  const initialState = { login: '', password: '' };
  const [loginFormValues, setLoginFormValues] = useState(initialState);
  const [authState, setAuthState] = useState({ login: 'Default', password: 'Default' });
  const loginFormValidator = (e) => {
    e.preventDefault();
  };
  return (
    <Form
      name="loginForm"
      title="Login"
      submit="Login"
      value={loginFormValues}
      updateValuesMethod={setLoginFormValues}
      formSubmitted={loginFormValidator}
      dataAuth={authState}
    ></Form>
  );
};
export default LoginForm;
