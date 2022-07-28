import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size } from 'assets/styles/mediaQueries.style';

export const HamburgerMenu = styled.img`
  position: absolute;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
`;
export const Navbar = styled.nav`
  width: 0px;
  height: 100vh;
  background: rgb(0, 0, 0, 0.1);
  border-right: 1px solid rgb(255, 255, 255, 0.4);
  position: absolute;
  z-index: 999;
  overflow: visible;
  transition: 1s width;
  .logo {
    width: 100px;
    height: 100px;
    align-self: center;
    margin-top: 40px;
  }
  .exit {
    cursor: pointer;
    position: absolute;
    left: 92%;
    top: 50%;
    margin-bottom: 13px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
    z-index: 3;
    background: gray;
  }
  //Above laptop size we hide elements horizotnally
  &&.hideMenu {
    width: 0px;
    border: none;
  }
  &&.showMenu {
    width: 300px;
  }
  .active h2 {
    border-left: 2px solid white;
    border-right: 2px solid white;
  }
  @media (max-width: ${size.laptop}) {
    // Below latop size we hide menu vertically
    && {
      transition: 1s height !important;
      width: 100% !important;
      overflow: hidden !important;
      background: #1a1a1a;
    }
    &&.hideMenu {
      height: 0px;
    }
    &&.showMenu {
      height: 100%;
    }
    .exit {
      top: auto;
      margin-top: 10px;
      margin-left: -35px;
      background: none;
      border: none;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 20px;
`;
export const ListItem = styled(NavLink)`
  h2 {
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }
`;
export const Logout = styled.button`
  position: absolute;
  bottom: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  text-align: center;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
