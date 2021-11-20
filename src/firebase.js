import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNhYqXBcBO1B7A6fq1o6XNZyimV9RNf9I",
  authDomain: "linkedin-clone-f330f.firebaseapp.com",
  projectId: "linkedin-clone-f330f",
  storageBucket: "linkedin-clone-f330f.appspot.com",
  messagingSenderId: "8646361723",
  appId: "1:8646361723:web:22737393865cdbe944d8de",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
