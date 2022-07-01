import styled from 'styled-components';
import { size } from 'assets/styles/mediaQueries.style';
export const Box = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  label {
    font-size: 19px;
  }
  input {
    border-radius: 10px;
    padding: 9px 15px;
    border: 1px solid white;
    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
    background: rgba(0, 0, 0, 0.397);
  }
  @media (max-width: ${size.mobileL}) {
    && {
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
    }
    input {
      padding-right: 0px !important;
    }
    label {
      width: 100%;
      padding-bottom: 10px;
    }
  }
`;
