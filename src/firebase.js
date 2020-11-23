import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnpF-SuGWHO58qP7HP0eRLWZsVvIjxILU",
    authDomain: "cryptotrader-1d759.firebaseapp.com",
    databaseURL: "https://cryptotrader-1d759.firebaseio.com",
    projectId: "cryptotrader-1d759",
    storageBucket: "cryptotrader-1d759.appspot.com",
    messagingSenderId: "898838539893",
    appId: "1:898838539893:web:15e920e171698f18b1123c",
    measurementId: "G-YDKMXHCYVV"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
