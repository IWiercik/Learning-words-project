import styled from 'styled-components';
export const Input = styled.input`
  padding: 10px;
  color: white;
  background: rgb(255, 255, 255, 0.3);
  border: ${({ isValid }) => (isValid ? 'none' : '1px solid red')};
  border-radius: 20px;
  outline: none;
  &::placeholder {
    color: black;
  }
`;
