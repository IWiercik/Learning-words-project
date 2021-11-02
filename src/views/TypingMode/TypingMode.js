import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import FieldWithInput from 'components/molecules/FieldWithInput/FieldWithInput';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;
const TypingMode = () => (
  <Wrapper>
    <Title>Learning APP</Title>
    <FieldWithInput textContent="English Word:"></FieldWithInput>
    <FieldWithInput textContent="Polish Word:"></FieldWithInput>
    <ButtonContainer>
      <Button>ADD</Button>
    </ButtonContainer>
  </Wrapper>
);
export default TypingMode;
