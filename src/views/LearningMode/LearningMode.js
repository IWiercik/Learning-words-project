import React, { useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import TranslationInput from 'components/atoms/TranslationInput/TranslationInput';
import { Button } from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import { alertForHints } from 'helpers/sweetAlert';
import { ButtonsBox, Wrapper, LettersBox } from './LearningMode.style';
import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
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
  let correctTranslationOfWord = plWords[wordToTranslateIndex];
  const [answerCorrectness, setAnswerCorrectness] = useState({ state: 'Waiting', text: 'Waiting for your translation...' });
  // User
  let userTranslation;
  const getUserTranslation = (val) => {
    userTranslation = val;
  };
  // Functioning
  function getIndexOfNewWord() {
    let randomIndex = Math.floor(Math.random() * engWords.length);
    //Avoiding same word as previous using index
    if (engWords.length >= 2) {
      while (randomIndex === wordToTranslateIndex) {
        randomIndex = Math.floor(Math.random() * engWords.length);
      }
    }
    return randomIndex;
  }
  const [clearInputFlag, setClearInputFlag] = useState(false);
  function clearInputFlagHandler() {
    setClearInputFlag(true);
    setTimeout(() => {
      setClearInputFlag(false);
    }, 100);
  }
  //Animation item
  const singleLettersOfAnswerCorrectness = [...answerCorrectness.text];
  return (
    <BasicContainer>
      <Wrapper answer={answerCorrectness.state} text={answerCorrectness.text}>
        <Title>Learning Mode</Title>
        <Text>
          English Word:
          <strong> {wordToTranslate === ' ' ? 'Add your word!' : wordToTranslate}</strong>
        </Text>
        <TranslationInput reset={clearInputFlag} sendData={getUserTranslation}></TranslationInput>
        <LettersBox>
          {/* Divided letters to animate it */}
          {singleLettersOfAnswerCorrectness.map((letter, key) => {
            return <span key={key}>{letter}</span>;
          })}
        </LettersBox>
        <ButtonsBox>
          <Button
            onClick={() => {
              alertForHints(correctTranslationOfWord);
            }}
            disabled={wordToTranslate ? false : true}
          >
            Hint !
          </Button>
          <Button
            onClick={() => {
              userTranslation = userTranslation.trim();
              userTranslation = userTranslation.toLowerCase();
              correctTranslationOfWord = correctTranslationOfWord.trim();
              correctTranslationOfWord = correctTranslationOfWord.toLowerCase();
              if (userTranslation === correctTranslationOfWord) {
                setAnswerCorrectness({ state: 'Correct', text: 'Well done!' });
                //Reroll the new word after 2 seconds
                setTimeout(function () {
                  clearInputFlagHandler();
                  dispatch(updateWordToTranslate(engWords[getIndexOfNewWord()]));
                  setAnswerCorrectness({ state: 'Waiting', text: 'Waiting for your translation...' });
                }, 2000);
              } else {
                setAnswerCorrectness({ state: 'Wrong', text: 'Try again!' });
              }
            }}
            // used to avoid the user click spam when he quess the translate or there is no word
            disabled={(answerCorrectness.state === 'Correct' ? true : false) || (wordToTranslate ? false : true)}
          >
            Check !
          </Button>
          <Button
            onClick={() => {
              clearInputFlagHandler();
              dispatch(updateWordToTranslate(engWords[getIndexOfNewWord()]));
              setAnswerCorrectness({ state: 'Waiting', text: 'Waiting for your translation...' });
            }}
            disabled={answerCorrectness.state === 'Correct' ? true : false}
          >
            Swap !
          </Button>
        </ButtonsBox>
      </Wrapper>
    </BasicContainer>
  );
};
export default LearningMode;
