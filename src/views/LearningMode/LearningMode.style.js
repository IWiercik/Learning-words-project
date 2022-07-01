import styled, { keyframes } from 'styled-components';
import { size } from 'assets/styles/mediaQueries.style';
//Animations
const dotEffect = keyframes`
  0%{
    opacity:0.7;
    color: #00bbe6;
  }
  25%{
    opacity:0.3 ;
    color: #00a7cc;
  }
  50%{
    opacity: 1 ;
    color: #0092b3;
  }
  75%{
    opacity: 0.3 ;
    color: #008fae;
  }
  100%{
    opacity: 0.7 ;
    color: #007d99;
  }
`;
//Styled
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  text-align: center;
  max-width: 400px;
  h4 {
    color: ${({ answer }) => {
      if (answer === 'Waiting') {
        return 'rgb(0, 143, 202)';
      } else if (answer === 'Correct') {
        return 'Green';
      } else if (answer === 'Wrong') {
        return 'Red';
      }
    }};
  }
  strong {
    color: #008ff6;
    word-break: break-all;
  }
`;
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: ${size.mobileL}) {
    && {
      padding: 0;
    }
    button {
      padding: 9px 10px;
      font-size: 14px;
    }
  }
`;

export const LettersBox = styled.h4`
  padding: 5px;
  display: flex;
  justify-content: center;
  span {
    min-width: 5px;
  }
  span:nth-child(29) {
    animation: ${dotEffect} 2s backwards infinite;
    animation-delay: 0.3s;
  }
  span:nth-child(30) {
    animation: ${dotEffect} 2s backwards infinite;
    animation-delay: 0.4s;
  }
  span:nth-child(31) {
    animation: ${dotEffect} 2s backwards infinite;
    animation-delay: 0.5s;
  }
  @media (max-width: ${size.mobileL}) {
    && {
      font-size: 14px;
    }
  }
`;
