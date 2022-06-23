import styled from 'styled-components';
export const Table = styled.div`
  display: grid;
  width: 800px;
  text-align: center;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 10% 35% 35% 20%;
  div {
    border: 1px solid gray;
    padding: 15px;
  }
  .action {
    display: flex;
    gap: 5px;
    justify-content: space-evenly;
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;
