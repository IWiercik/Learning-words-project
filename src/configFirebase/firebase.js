import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, updateDoc, setDoc, onSnapshot, deleteField, deleteDoc } from '@firebase/firestore';
import { alertForAddingWordsToDataBase, alertForSuccessfulLogin } from 'helpers/sweetAlert';

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
export async function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alertForSuccessfulLogin();
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
export const AddData = async (userUID, userData, array) => {
  const document = userUID;
  const userRef = doc(db, collection, document);
  getDoc(userRef)
    .then((result) => {
      //If document exist we update it
      if (result.exists()) {
        const id = getLowestId(array);
        updateDoc(userRef, { [id]: { engWord: userData.engWord, plWord: userData.plWord } });
      } else {
        //If Document not exist we need to create initial form
        setDoc(userRef, { '01': { engWord: userData.engWord, plWord: userData.plWord } });
      }
    })
    .then(alertForAddingWordsToDataBase);
};

export async function getData(userUID) {
  const document = userUID;
  const docRef = doc(db, collection, document);
  return getDoc(docRef).then((result) => {
    if (result.exists()) {
      const dataToReturn = []; // I want the new data to be sorted array instead of object
      const dataDownloaded = result.data();
      //Creating New Array
      Object.entries(dataDownloaded).forEach((item) =>
        dataToReturn.push({
          // [0] id [1] attributes
          id: item[0],
          engWord: item[1].engWord,
          plWord: item[1].plWord,
        })
      );
      // Then sorting Array
      dataToReturn.sort((a, b) => {
        return a.id - b.id;
      });
      return dataToReturn;
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
    }
  });
}
export async function deleteSingleData(userUID, elementId) {
  const document = userUID;
  const userRef = doc(db, collection, document);
  await updateDoc(userRef, {
    [elementId]: deleteField(),
  });
}
export async function deleteAllData(userUID) {
  const document = userUID;
  const userRef = doc(db, collection, document);
  await deleteDoc(userRef);
}
export async function editData(userUID, wordID, newEngWord, newPlWord) {
  const document = userUID;
  const userRef = doc(db, collection, document);
  await updateDoc(userRef, {
    [wordID]: {
      engWord: newEngWord,
      plWord: newPlWord,
    },
  });
}
//Customs functions for firebase
function getLowestId(array) {
  const sortedIdsOfWords = [...array].sort();
  let lowestId;
  let index = 1;
  while (lowestId === undefined) {
    if (index < 10) {
      // Less than 10 format : 01,02,03,04...
      if (`0${index}` !== sortedIdsOfWords[index - 1]) {
        lowestId = `0${index}`;
      }
    } else {
      // Above 10 format 11,12,13...
      if (`${index}` !== sortedIdsOfWords[index - 1]) {
        lowestId = index;
      }
    }
    index++;
  }
  return lowestId;
}
