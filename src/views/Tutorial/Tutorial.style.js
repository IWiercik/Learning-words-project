import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from 'assets/styles/mediaQueries.style';
export const TutorialContainer = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  padding: 25px;
  background: rgba(13, 11, 11, 0.9);
  img {
    cursor: pointer;
  }
  h4 {
    padding-bottom: 10px;
    color: #008eca;
  }
`;

export const Exit = styled(Link)`
  position: absolute;
  justify-self: right;
  margin-top: 10px;
  margin-right: 10px;
`;
export const TutorialImage = styled.img`
  max-width: 280px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: ${size.mobileM}) {
    && {
      max-width: 220px;
    }
  }
`;
export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ArrowLeft = styled.img``;
export const ArrowRight = styled.img``;
