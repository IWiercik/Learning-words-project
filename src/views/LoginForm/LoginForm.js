import Form from 'components/organisms/Form.js/Form';
import { useState } from 'react';
import { signInUser } from 'configFirebase/firebase';
const LoginForm = () => {
  const initialState = { login: '', password: '' };
  const [loginFormValues, setLoginFormValues] = useState(initialState);
  const [authState, setAuthState] = useState({ login: 'Default', password: 'Default' });
  const loginFormValidator = (e) => {
    e.preventDefault();
    signInUser(loginFormValues.login, loginFormValues.password);
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
