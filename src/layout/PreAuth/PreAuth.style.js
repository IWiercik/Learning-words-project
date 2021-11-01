import styled from 'styled-components';
import backgroundIMG from 'assets/images/background.JPEG';
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundIMG});
  background-position: center 35;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: grid;
`;
export const CenteredContent = styled.div`
  width: 300px;
  height: 300px;
  justify-self: center;
  align-self: center;
`;
