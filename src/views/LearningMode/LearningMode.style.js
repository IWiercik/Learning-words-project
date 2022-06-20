import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  text-align: center;
  h4 {
    color: ${({ answer }) => {
      if (answer === 'Waiting') {
        return 'Gray';
      } else if (answer === 'Correct') {
        return 'Green';
      } else if (answer === 'Wrong') {
        return 'Red';
      }
    }};
  }
  strong {
    color: #008ff6;
  }
`;
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
