import React, { useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'firebase/firebase';
export const userContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //Firebase Authorization Function
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  const { Provider } = userContext;
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
export default UserProvider;
