import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FieldWithInput from 'components/molecules/FieldWithInput/FieldWithInput';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { AddData } from 'firebase/firebase';
import { userContext } from 'providers/CurrentUser';
import { useState } from 'react';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;
const TypingMode = () => {
  const initialState = { engWord: '', plWord: '' };
  const [words, setWords] = useState(initialState);
  const ctx = useContext(userContext);
  // const userUID = ctx.currentUser.uid;
  const userEmail = ctx.currentUser.email;
  return (
    <Wrapper>
      <Title>Learning APP</Title>
      <FieldWithInput
        updateValuesMethod={setWords}
        name="engWord"
        words={words}
        textContent="English Word:"
      ></FieldWithInput>
      <FieldWithInput
        updateValuesMethod={setWords}
        name="plWord"
        words={words}
        textContent="Polish Word:"
      ></FieldWithInput>
      <ButtonContainer>
        <Button
          onClick={() => {
            AddData(userEmail, words);
            console.log('Wysłano!');
            setWords(initialState);
          }}
        >
          ADD
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};
export default TypingMode;
