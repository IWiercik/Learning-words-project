import styled from 'styled-components';
export const AuthInput = styled.input`
  padding: 10px;
  background: none !important;
  border: none;
  outline: none;
  border-bottom: ${({ isValid }) => (isValid ? '1px solid white' : '1px solid red')};
  font-size: ${({ theme }) => theme.fontSize.m};
  &::placeholder {
    color: white;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 50000s;
    -webkit-text-fill-color: white !important;
  }
`;
export const TogglePasswordVisibility = styled.img`
  position: absolute;
  cursor: pointer;
  right: 0;
`;
