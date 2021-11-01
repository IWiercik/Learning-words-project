import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';

const app = initializeApp(firebaseConfig);
//AUTH, REGISTRATION + SIGN IN
export const auth = getAuth(app);
export const createUser = (login, password) => {
  createUserWithEmailAndPassword(auth, login, password)
    .then((userCredential) => {
      // Signed in
      //   const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.warn(errorCode, errorMessage);
    });
};
export function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.warn(errorCode, errorMessage);
    });
}
