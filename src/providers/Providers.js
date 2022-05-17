import React, { useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'configFirebase/firebase';
export const appContext = React.createContext({
  currentUser: null,
  wordsData: null,
  setCurrentUser: () => {},
  setWordsData: () => {},
});

const Providers = ({ children }) => {
  //User Context
  const [currentUser, setCurrentUser] = useState(null);
  //Firebase Authorization Function
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  const { Provider } = appContext;
  return (
    <Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Provider>
  );
};
export default Providers;
