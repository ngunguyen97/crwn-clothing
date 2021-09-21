import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDJmE_u4iF7rT79LBlDif4iKExEtofMGbM",
  authDomain: "crwn-db-38842.firebaseapp.com",
  projectId: "crwn-db-38842",
  storageBucket: "crwn-db-38842.appspot.com",
  messagingSenderId: "1073209877724",
  appId: "1:1073209877724:web:b8d9a8266f4d2f53abc019",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
