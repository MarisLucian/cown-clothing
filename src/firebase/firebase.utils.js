import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0qtyDxpATVEHuR_mU5wwnUFeJX7puiN0",
    authDomain: "crown-clothing-742ee.firebaseapp.com",
    databaseURL: "https://crown-clothing-742ee.firebaseio.com",
    projectId: "crown-clothing-742ee",
    storageBucket: "crown-clothing-742ee.appspot.com",
    messagingSenderId: "1075166858109",
    appId: "1:1075166858109:web:a3cfeeeaf5af6e51a5da14",
    measurementId: "G-MRCH8F42QS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;