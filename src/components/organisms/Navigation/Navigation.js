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
              <ListItem to="/home">
                <h2>Home</h2>
              </ListItem>
              <ListItem to="/Account">
                <h2>Account</h2>
              </ListItem>
              <ListItem to="/typing">
                <h2>Typing Mode</h2>
              </ListItem>
              <ListItem to="/learning">
                <h2>Learning Mode</h2>
              </ListItem>
              <ListItem to="/wordsControlPanel">
                <h2>Words Control Panel</h2>
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
              <ListItem to="/home">
                <h2>Home</h2>
              </ListItem>
              <ListItem to="/register">
                <h2>Registration</h2>
              </ListItem>
              <ListItem to="/login">
                <h2>Login</h2>
              </ListItem>
            </React.Fragment>
          )}
        </List>
      </Navbar>
    </>
  );
};
export default Navigation;
