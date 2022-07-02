import styled from 'styled-components';
import backgroundIMG from 'assets/images/background.JPEG';
import { size } from 'assets/styles/mediaQueries.style';
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundIMG});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: grid;
  @media (max-width: ${size.laptop}) {
    background-position: center 35%;
  }
`;
