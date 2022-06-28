import { useState } from 'react';
function Input({ placeholder, sendData }) {
  const initialInputValue = '';
  const [inputValue, setInputValue] = useState(initialInputValue);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  (function passDataToParent() {
    sendData(inputValue);
  })();
  return <input type={'text'} placeholder={placeholder} value={inputValue} onChange={handleInput}></input>;
}

export default Input;
