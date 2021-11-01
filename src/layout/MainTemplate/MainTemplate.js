import React from 'react';
import { signOut } from '@firebase/auth';
import { auth } from 'firebase/firebase';
const MainTemplate = () => {
  return (
    <React.Fragment>
      <h1>User:</h1>
      <button
        onClick={function () {
          signOut(auth);
        }}
      >
        Wyloguj
      </button>
    </React.Fragment>
  );
};
export default MainTemplate;
