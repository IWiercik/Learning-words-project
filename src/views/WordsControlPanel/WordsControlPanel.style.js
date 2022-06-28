import styled from 'styled-components';
export const Table = styled.div`
  display: grid;
  width: 800px;
  text-align: center;
  .arrow {
    position: absolute;
    transition: 0.5s all;
    right: 0;
    top: -15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 1px solid gray;
    cursor: pointer;
  }
  .arrow:hover {
    top: -30px;
  }
`;
export const TableAdditionalOptions = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  z-index: 1;
  transition: 1s height;
  input {
    text-align: center;
    padding: 10px;
    border: 1px solid gray;
    outline: none;
    background: rgba(0, 0, 0, 0.397);
    font-size: 20px;
  }
  button {
    background: #0d0d0d;
    border: 1px solid gray;
    cursor: pointer;
  }
  //For CSS ANIMATION
  &&.hidden-content {
    height: 0px;
  }
  &&.show-content {
    height: 45px;
  }
`;
export const TableItemsContainer = styled.div`
  max-height: 477px;
  overflow-y: auto;
  z-index: 3;
  .sticky {
    position: sticky;
    top: 0;
    background: #1a1a1a;
  }
  ::-webkit-scrollbar {
    width: 15px;
    border: 1px solid gray;
    cursor: auto;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 10% 35% 35% 20%;
  background: rgba(0, 0, 0, 0.397);
  box-shadow: 2px 2px 6px -1px rgb(0 0 0);
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
