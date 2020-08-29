import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

