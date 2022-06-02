import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from '@firebase/firestore';
import { alertForAddingWordsToDataBase } from 'helpers/sweetAlert';

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
//FireStore
const db = getFirestore(app);
const collection = 'Words';
export const AddData = (userUID, userData) => {
  const document = userUID;
  const userRef = doc(db, collection, document);
  getDoc(userRef)
    .then((result) => {
      //If document exist we update it
      if (result.exists()) {
        updateDoc(userRef, { engWords: arrayUnion(userData.engWord), plWords: arrayUnion(userData.plWord) });
      } else {
        //If Document not exist we need to create initial form
        const engWords = [userData.engWord];
        const plWords = [userData.plWord];
        setDoc(userRef, { engWords, plWords });
      }
    })
    .then(alertForAddingWordsToDataBase);
};

export async function getData(userUID) {
  const document = userUID;
  const docRef = doc(db, collection, document);
  return getDoc(docRef).then((result) => result.data());
}
// export function listenForData(userUID) {
//   const document = userUID;
//   const docRef = doc(db, collection, document);

//   onSnapshot(docRef, (doc) => console.log(doc.data()));
// }
