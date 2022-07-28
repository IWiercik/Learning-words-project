import { AuthInput } from '../AuthInput/AuthInput.style';
function AuthLoginInput({ value, onChange, isValid }) {
  return (
    <div>
      <AuthInput
        required={true}
        name="login"
        placeholder="Your-Email"
        type="text"
        value={value}
        onChange={onChange}
        autoComplete="on"
        isValid={isValid}
      ></AuthInput>
    </div>
  );
}

export default AuthLoginInput;
