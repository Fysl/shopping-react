import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDtphAYGMK3Y7C4wWgOzMDSb45CtdqNewM",
    authDomain: "shopping-298fe.firebaseapp.com",
    databaseURL: "https://shopping-298fe.firebaseio.com",
    projectId: "shopping-298fe",
    storageBucket: "shopping-298fe.appspot.com",
    messagingSenderId: "720384890007",
    appId: "1:720384890007:web:e384c9d84dc7888d0b05d2",
    measurementId: "G-D0JN9DMHB3"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const Firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle =() => auth.signInWithPopup(provider)
  export default firebase;

