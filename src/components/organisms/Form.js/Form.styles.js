import styled from 'styled-components';
export const Wrapper = styled.form`
  width: 300px;
  height: 340px;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 20% 20% 15% 20%;
  align-items: end;
  justify-items: center;
  div {
    position: relative;
    max-width: 70%;
  }
`;

export const ResetPassword = styled.p`
  color: gray;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.15);
  }
`;
