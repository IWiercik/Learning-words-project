import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import TranslationInput from 'components/atoms/TranslationInput/TranslationInput';
import { Button } from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import { alertForHints } from 'helpers/sweetAlert';
import { ButtonsBox, Wrapper } from './LearningMode.style';

const LearningMode = () => {
  //Data with words
  const engWords = useSelector((state) => state.engWords);
  const plWords = useSelector((state) => state.plWords);
  const actualWordToTranslate = engWords && plWords ? engWords[Math.floor(Math.random() * engWords.length)] : 'Add your word!';
  return (
    <Wrapper answer="Waiting">
      <Title>Learning Mode</Title>
      <Text>
        English Word:
        <strong> {actualWordToTranslate}</strong>
      </Text>
      {/* <TranslationInput value={userTranslationValue} onChange={handleUserTranslation}></TranslationInput> */}
      <TranslationInput></TranslationInput>
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
