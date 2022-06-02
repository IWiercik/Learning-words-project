import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FieldWithInput from 'components/molecules/FieldWithInput/FieldWithInput';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { AddData } from 'configFirebase/firebase';
import { appContext } from 'providers/Providers';
import { useState } from 'react';
import { alertForEmptyInput } from 'helpers/sweetAlert';
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;
const TypingMode = () => {
  const initialState = { engWord: '', plWord: '' };
  const [words, setWords] = useState(initialState);
  const ctx = useContext(appContext);

  return (
    <Wrapper>
      <Title>Typing Mode</Title>
      <FieldWithInput updateValuesMethod={setWords} name="engWord" words={words} textContent="English Word:"></FieldWithInput>
      <FieldWithInput updateValuesMethod={setWords} name="plWord" words={words} textContent="Polish Word:"></FieldWithInput>
      <ButtonContainer>
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (words.engWord.length === 0 || words.plWord.length === 0) {
              alertForEmptyInput();
            } else {
              const userEmail = ctx.currentUser.email;
              AddData(userEmail, words);
              console.log('Wysłano!');
              setWords(initialState);
            }
          }}
        >
          ADD
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};
export default TypingMode;
