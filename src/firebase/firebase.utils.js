import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD5tIAkRAc8bYdOpesTNx1bbUKRsONbvo8",
  authDomain: "crwn-db-ada67.firebaseapp.com",
  projectId: "crwn-db-ada67",
  storageBucket: "crwn-db-ada67.appspot.com",
  messagingSenderId: "513845564050",
  appId: "1:513845564050:web:022aafb8143b2f11718c4b",
  measurementId: "G-E808TZYZTW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
