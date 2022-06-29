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
  const words = useSelector((state) => state.wordsDataSlice.words);
  // Single words
  const wordToTranslate = useSelector((state) => state.wordToTranslateSlice.wordToTranslate);
  const wordToTranslateIndex = words.findIndex((word) => word.id === wordToTranslate.id);
  //States
  const [answerCorrectness, setAnswerCorrectness] = useState({ state: 'Waiting', text: 'Waiting for your translation...' });
  const [clearInputFlag, setClearInputFlag] = useState(false);
  // User
  let userTranslation;
  const getUserTranslation = (val) => {
    userTranslation = val;
  };
  // Functioning
  function getIndexOfNewWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    //Avoiding same word as previous using index
    if (words.length >= 2) {
      while (randomIndex === wordToTranslateIndex) {
        randomIndex = Math.floor(Math.random() * words.length);
      }
    }
    return randomIndex;
  }
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
          <strong> {wordToTranslate.translation === ' ' ? 'Add your word!' : wordToTranslate.translation}</strong>
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
              alertForHints(wordToTranslate.correctTranslation);
            }}
            disabled={wordToTranslate ? false : true}
          >
            Hint !
          </Button>
          <Button
            onClick={() => {
              //Removing Whitespaces and transform to lower case translations
              userTranslation = userTranslation.trim();
              userTranslation = userTranslation.toLowerCase();
              let correctTranslation = wordToTranslate.correctTranslation;
              correctTranslation = correctTranslation.trim();
              correctTranslation = correctTranslation.toLowerCase();
              if (userTranslation === correctTranslation) {
                setAnswerCorrectness({ state: 'Correct', text: 'Well done!' });
                //Reroll the new word after 2 seconds
                setTimeout(function () {
                  clearInputFlagHandler();
                  dispatch(updateWordToTranslate(words[getIndexOfNewWord()]));
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
              dispatch(updateWordToTranslate(words[getIndexOfNewWord()]));
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
