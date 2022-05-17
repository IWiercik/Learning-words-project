import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import { auth } from 'configFirebase/firebase';

const Navbar = styled.nav`
  width: 300px;
  height: 100vh;
  background: rgb(0, 0, 0, 0.1);
  border-right: 1px solid rgb(255, 255, 255, 0.3);
  position: absolute;
  img {
    width: 100px;
    height: 100px;
    align-self: center;
    margin-top: 40px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* padding-right: 20px; */
  row-gap: 20px;
`;
const ListItem = styled(NavLink)`
  h1 {
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }
  &.active-link h1 {
    border-right: 2px solid white;
    border-left: 2px solid white;
  }
`;
const Logout = styled.button`
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
const Navigation = ({ isAuthorized }) => {
  return (
    <Navbar>
      <List>
        <img src={logo} alt={'logo'} />
        {isAuthorized ? (
          /* Authorized User */
          <React.Fragment>
            <ListItem activeClassName="active-link" exact to="/home">
              <h1>Home</h1>
            </ListItem>
            <ListItem activeClassName="active-link" exact to="/typing">
              <h1>Typing Mode</h1>
            </ListItem>
            <ListItem activeClassName="active-link" exact to="/learning">
              <h1>Learning Mode</h1>
            </ListItem>
            <Logout
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </Logout>
          </React.Fragment>
        ) : (
          /* Not Authorized User */
          <React.Fragment>
            <ListItem activeClassName="active-link" exact to="/register">
              <h1>Registration</h1>
            </ListItem>
            <ListItem activeClassName="active-link" exact to="/login">
              <h1>Login</h1>
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </Navbar>
  );
};
export default Navigation;
