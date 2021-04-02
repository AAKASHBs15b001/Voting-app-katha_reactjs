import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAJmD3L91fiOsafByVNQpVYPO_OtpzVx8A",
  authDomain: "new-react-website-aakash.firebaseapp.com",
  projectId: "new-react-website-aakash",
  storageBucket: "new-react-website-aakash.appspot.com",
  messagingSenderId: "966835275073",
  appId: "1:966835275073:web:5460004a345694d8ffcdc0",
  measurementId: "G-CHNH1GFJ3Q"
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
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
