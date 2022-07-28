import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 10px;
  padding: 9px 20px;
  margin: 5px;
  border: 1px solid ${({ blueTemplate, theme }) => (blueTemplate ? theme.colors.blue : 'white')};
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.397);
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
  margin-top: 5px;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.15);
  }
`;
