import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from '@firebase/firestore';
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
export const AddData = async (userUID, userData, userWordsDataLength) => {
  const document = userUID;
  const userRef = doc(db, collection, document);
  getDoc(userRef)
    .then((result) => {
      //If document exist we update it
      if (result.exists()) {
        const id = userWordsDataLength + 1;
        updateDoc(userRef, { [id]: { engWord: userData.engWord, plWord: userData.plWord } });
      } else {
        //If Document not exist we need to create initial form
        setDoc(userRef, { 1: { engWord: userData.engWord, plWord: userData.plWord } });
      }
    })
    .then(alertForAddingWordsToDataBase);
};

export async function getData(userUID) {
  const document = userUID;
  const docRef = doc(db, collection, document);
  return getDoc(docRef).then((result) => {
    if (result.exists()) {
      const obj = result.data();
      const engWords = [];
      const plWords = [];
      (function prepareTheDataToReturn() {
        Object.keys(obj).forEach((word) => {
          engWords.push(obj[word].engWord);
          plWords.push(obj[word].plWord);
        });
      })();
      return [engWords, plWords];
    } else {
      return result.data();
    }
  });
}
export async function listenForData(userUID, updateReduxWordData) {
  const document = userUID;
  const docRef = doc(db, collection, document);
  //On new data we get Data and Update Redux state (React)
  onSnapshot(docRef, async () => {
    const data = await getData(document);
    if (data !== undefined) {
      updateReduxWordData(data);
    } else {
      console.log('You need to first have data!');
    }
  });
}
