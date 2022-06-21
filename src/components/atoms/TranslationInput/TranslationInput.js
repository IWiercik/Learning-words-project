import { InputBox } from './TranslationInput.styles';
import { useEffect, useState } from 'react';
const TranslationInput = ({ sendData, reset }) => {
  const initialTranslationValue = '';
  const [userTranslationValue, setUserTranslationValue] = useState(initialTranslationValue);
  const handleUserTranslation = (e) => {
    setUserTranslationValue(e.target.value);
  };
  useEffect(() => {
    function clearingInput() {
      if (reset === true) {
        setUserTranslationValue('');
      }
    }
    clearingInput();
  });
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
