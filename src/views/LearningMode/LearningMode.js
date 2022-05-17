import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import { alertForHints } from 'helpers/sweetAlert';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  text-align: center;
  h4 {
    color: ${({ answer }) => {
      if (answer === 'Waiting') {
        return 'Gray';
      } else if (answer === 'Good') {
        return 'Green';
      } else if (answer === 'Wrong') {
        return 'Red';
      }
    }};
  }
  input {
    border-radius: 10px;
    padding: 9px 20px;
    border: 1px solid white;
    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
    background: rgba(0, 0, 0, 0.397);
    transition: 0.5s all;
  }
  strong {
    color: #008ff6;
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LearningMode = () => {
  const engWords = useSelector((state) => state.engWords);
  const plWords = useSelector((state) => state.plWords);
  const answer = 'Waiting';
  const actualWordToTranslate =
    engWords && plWords ? engWords[Math.floor(Math.random() * engWords.length)] : 'Add your word!';
  return (
    <Wrapper answer={answer}>
      <Title>Learning Mode</Title>
      <Text>
        English Word:
        <strong> {actualWordToTranslate}</strong>
      </Text>
      <div>
        <input placeholder="Your translation"></input>
      </div>
      <h4>Waiting for translation...</h4>
      <ButtonsBox>
        <Button
          onClick={() => {
            alertForHints(actualWordToTranslate);
          }}
        >
          Hint !
        </Button>
        <Button>Check !</Button>
        <Button>Swap !</Button>
      </ButtonsBox>
    </Wrapper>
  );
};
export default LearningMode;
