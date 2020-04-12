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
    appId: "1:1075166858109:web:a3cfeeeaf5af6e51a5da14"
};
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
                createdAt,
                email,
                displayName,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;