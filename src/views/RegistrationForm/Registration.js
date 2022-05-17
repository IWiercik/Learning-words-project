import Form from 'components/organisms/Form.js/Form';
import { useState } from 'react';
import { createUser } from 'configFirebase/firebase';
//Firebase
const RegistrationForm = () => {
  //Registration Values
  const initialState = { login: '', password: '' };
  const [registrationFormValues, setRegistrationFormValues] = useState(initialState);
  // Auth Values
  const [authState, setAuthState] = useState({ login: true, password: true });
  const registrationFormValidator = (e) => {
    const emailValidation =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let loginCorrect = Boolean;
    let passwordCorrect = Boolean;
    e.preventDefault();
    if (registrationFormValues.login.match(emailValidation)) {
      loginCorrect = true;
    } else {
      loginCorrect = false;
    }
    if (registrationFormValues.password.length < 6) {
      passwordCorrect = false;
    } else {
      passwordCorrect = true;
    }
    setAuthState({ login: loginCorrect, password: passwordCorrect });
    if (loginCorrect && passwordCorrect) {
      setRegistrationFormValues(initialState); // clear the inputs
      createUser(registrationFormValues.login, registrationFormValues.password);
    }
  };
  return (
    <Form
      name="registrationForm"
      title="Create Account"
      submit="Register"
      value={registrationFormValues}
      updateValuesMethod={setRegistrationFormValues}
      formSubmitted={registrationFormValidator}
      dataAuth={authState}
    ></Form>
  );
};
export default RegistrationForm;
