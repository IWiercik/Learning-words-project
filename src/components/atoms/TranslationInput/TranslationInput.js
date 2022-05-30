import { InputBox } from './TranslationInput.styles';
import { useState } from 'react';
const TranslationInput = ({ value, onChange }) => {
  const initialTranslationValue = '';
  const [userTranslationValue, setUserTranslationValue] = useState(initialTranslationValue);
  const handleUserTranslation = (e) => {
    setUserTranslationValue(e.target.value);
  };
  return (
    <InputBox>
      <input type={'text'} value={userTranslationValue} onChange={handleUserTranslation}></input>
    </InputBox>
  );
};
export default TranslationInput;
