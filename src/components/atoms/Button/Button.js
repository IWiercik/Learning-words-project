import styled from 'styled-components';

export const Button = styled.button`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgb(255, 255, 255, 0.3);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    background: white;
    color: black;
  }
`;
