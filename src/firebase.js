// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import firebase from "firebase";
//import { collection } from 'firebase/firestore';
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZTeyULc7Xdk8lhhEycVkmN2YDVcHOkY",
  authDomain: "slack-clone-4ce04.firebaseapp.com",
  projectId: "slack-clone-4ce04",
  storageBucket: "slack-clone-4ce04.appspot.com",
  messagingSenderId: "662945487039",
  appId: "1:662945487039:web:2d7ad3787151ff2db04e0a",
  measurementId: "G-9FWKYRP71G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
