import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-ne5W6TcHAAqaehtKYFjZmGN0rWeM488",
    authDomain: "messaging-app-mern-f16b0.firebaseapp.com",
    projectId: "messaging-app-mern-f16b0",
    storageBucket: "messaging-app-mern-f16b0.appspot.com",
    messagingSenderId: "948939729952",
    appId: "1:948939729952:web:183b2e5b04544870bde045"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
  
export { auth, provider };
export default db;