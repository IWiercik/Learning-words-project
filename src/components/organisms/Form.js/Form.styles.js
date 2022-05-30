import styled from 'styled-components';
export const Wrapper = styled.form`
  width: 300px;
  height: 300px;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input {
    max-width: 60%;
  }
`;