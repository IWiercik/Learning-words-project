import React from 'react';
import { AuthInput } from '../AuthInput/AuthInput.style';
import { TogglePasswordVisibility } from '../AuthInput/AuthInput.style';
import passwordHidden from 'assets/images/icons/eye.svg';
import passwordShowed from 'assets/images/icons/eye-off.svg';
import { useState } from 'react';
function AuthPasswordInput({ value, onChange, isValid }) {
  const initialState = false;
  const [passwordVisibility, setPasswordVisibility] = useState(initialState);
  return (
    <div>
      <TogglePasswordVisibility
        src={passwordVisibility ? passwordShowed : passwordHidden}
        onClick={() => {
          setPasswordVisibility(!passwordVisibility);
        }}
      />
      <AuthInput
        required={true}
        name="password"
        placeholder="Password"
        type={passwordVisibility ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        autoComplete="on"
        isValid={isValid}
      ></AuthInput>
    </div>
  );
}

export default AuthPasswordInput;
