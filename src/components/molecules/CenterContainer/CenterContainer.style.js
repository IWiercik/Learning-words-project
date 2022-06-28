import styled from 'styled-components';
export const CenterContainer = styled.div`
  align-self: center;
  justify-self: center;
  background: ${({ modifiers }) => (modifiers === 'none' ? 'none' : `rgba(0, 0, 0, 0.397)`)};
  min-width: 300px;
  position: relative;
  display: grid;
  box-shadow: ${({ modifiers }) => (modifiers === 'none' ? 'none' : `2px 2px 6px -1px rgb(0 0 0);`)};
  overflow: visible ;
`;
