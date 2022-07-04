import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from 'assets/styles/mediaQueries.style';
export const HomeContainer = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding-bottom: 25px;
  font-family: Arial;
  h1 {
    margin-top: 30px;
  }
  p {
    color: #008eca;
  }
  span {
    color: white;
    font-weight: bold;
  }
  button {
    padding: 10px;
    border: 1px solid #008eca;
  }
  @media (max-width: ${size.mobileM}) {
    && {
      width: 330px;
    }
  }
`;

export const ButtonLink = styled(Link)``;
