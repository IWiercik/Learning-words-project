import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
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
const ListItem = styled.li``;
const Navigation = () => (
  <Navbar>
    <List>
      <img src={logo} alt={'logo'} />
      <ListItem>
        <Link to="/">
          <h1>Registration</h1>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
      </ListItem>
    </List>
  </Navbar>
);
export default Navigation;
