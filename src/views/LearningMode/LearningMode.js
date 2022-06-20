import React, { useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import TranslationInput from 'components/atoms/TranslationInput/TranslationInput';
import { Button } from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import { alertForHints } from 'helpers/sweetAlert';
import { ButtonsBox, Wrapper } from './LearningMode.style';
//Redux
import { useDispatch } from 'react-redux';
import { updateWordToTranslate } from 'store/wordToTranslateSlice';

const LearningMode = () => {
  //Redux
  const dispatch = useDispatch();
  //Data with words
  const engWords = useSelector((state) => state.wordsDataSlice.engWords);
  const plWords = useSelector((state) => state.wordsDataSlice.plWords);
  // Single words
  let wordToTranslate = useSelector((state) => Object.values(state.wordToTranslateSlice)[0]);
  const wordToTranslateIndex = engWords.findIndex((word) => word === wordToTranslate);
  const correctTranslationOfWord = plWords[wordToTranslateIndex];
  const [answerCorrectness, setAnswerCorrectness] = useState({ state: 'Waiting', text: 'Waiting for your translation...' });
  // User
  let userTranslation;
  const getUserTranslation = (val) => {
    userTranslation = val;
  };

  return (
    <Wrapper answer={answerCorrectness.state}>
      <Title>Learning Mode</Title>
      <Text>
        English Word:
        <strong> {wordToTranslate}</strong>
      </Text>
      <TranslationInput sendData={getUserTranslation}></TranslationInput>
      <h4>{answerCorrectness.text}</h4>
      <ButtonsBox>
        <Button
          onClick={() => {
            alertForHints(correctTranslationOfWord);
          }}
        >
          Hint !
        </Button>
        <Button
          onClick={() => {
            if (userTranslation === correctTranslationOfWord) {
              setAnswerCorrectness({ state: 'Correct', text: 'Well done!' });
              //Reroll the new word after 3 seconds
              setTimeout(function () {
                dispatch(updateWordToTranslate(engWords[Math.floor(Math.random() * engWords.length)]));
                setAnswerCorrectness({ state: 'Waiting', text: 'Waiting for your translation...' });
              }, 3000);
            } else {
              setAnswerCorrectness({ state: 'Wrong', text: 'Try again!' });
            }
          }}
        >
          Check !
        </Button>
        <Button>Swap !</Button>
      </ButtonsBox>
    </Wrapper>
  );
};
export default LearningMode;
