import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import FieldWithInput from 'components/molecules/FieldWithInput/FieldWithInput';
import { Text } from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  h2 {
    color: ${({ goodAnswer }) => (goodAnswer ? 'Green' : 'Red')};
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LearningMode = () => {
  const goodAnswer = true;
  return (
    <Wrapper goodAnswer={goodAnswer}>
      <Title>Learning Mode</Title>
      <Text>Polish Word: KOT</Text>
      <FieldWithInput textContent="English Word:"></FieldWithInput>
      <h2>{goodAnswer ? 'Good' : 'Bad'}</h2>
      <ButtonsBox>
        <Button>Hint !</Button>
        <Button>Check !</Button>
        <Button>Swap !</Button>
      </ButtonsBox>
    </Wrapper>
  );
};
export default LearningMode;
