import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import exit from 'assets/images/icons/x.svg';
import menuIcon from 'assets/images/icons/align-justify.svg';
import { signOut } from '@firebase/auth';
import { auth } from 'configFirebase/firebase';
import { Navbar, List, ListItem, Logout, HamburgerMenu } from './Navigations.styles';

const Navigation = ({ isAuthorized }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  return (
    <>
      {isMenuHidden && (
        <HamburgerMenu
          src={menuIcon}
          alt="menu icon"
          onClick={() => {
            setIsMenuHidden(!isMenuHidden);
          }}
        />
      )}
      <Navbar className={isMenuHidden ? 'hideMenu' : 'showMenu'}>
        <List>
          <img src={logo} alt={'logo'} className="logo" />
          {!isMenuHidden && (
            <img
              src={exit}
              alt="exit"
              className="exit"
              onClick={() => {
                setIsMenuHidden(!isMenuHidden);
              }}
            />
          )}
          {isAuthorized ? (
            /* Authorized User */
            <React.Fragment>
              <ListItem activeClassName="active-link" to="/home">
                <h1>Home</h1>
              </ListItem>
              <ListItem activeClassName="active-link" to="/typing">
                <h1>Typing Mode</h1>
              </ListItem>
              <ListItem activeClassName="active-link" to="/learning">
                <h1>Learning Mode</h1>
              </ListItem>
              <ListItem activeClassName="active-link" to="/wordsControlPanel">
                <h1>Words Control Panel</h1>
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
              <ListItem activeClassName="active-link" to="/home">
                <h1>Home</h1>
              </ListItem>
              <ListItem activeClassName="active-link" to="/register">
                <h1>Registration</h1>
              </ListItem>
              <ListItem activeClassName="active-link" to="/login">
                <h1>Login</h1>
              </ListItem>
            </React.Fragment>
          )}
        </List>
      </Navbar>
    </>
  );
};
export default Navigation;
