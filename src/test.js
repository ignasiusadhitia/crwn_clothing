import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("StMbjIjmhapc4Sy1dwSE")
  .collection("cartItems")
  .doc("AP1fVJajdKvu8YMrPtSD");

firestore.doc("/users/StMbjIjmhapc4Sy1dwSE/cartItems/AP1fVJajdKvu8YMrPtSD");
firestore.collection("/users/StMbjIjmhapc4Sy1dwSE/cartItems");
