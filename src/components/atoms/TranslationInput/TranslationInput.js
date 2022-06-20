import { InputBox } from './TranslationInput.styles';
import { useState } from 'react';
const TranslationInput = ({ value, onChange, sendData }) => {
  const initialTranslationValue = '';
  const [userTranslationValue, setUserTranslationValue] = useState(initialTranslationValue);
  const handleUserTranslation = (e) => {
    setUserTranslationValue(e.target.value);
  };
  (function passDataToParent() {
    sendData(userTranslationValue);
  })();
  return (
    <InputBox>
      <input type={'text'} placeholder="Your translation" value={userTranslationValue} onChange={handleUserTranslation}></input>
    </InputBox>
  );
};
export default TranslationInput;
