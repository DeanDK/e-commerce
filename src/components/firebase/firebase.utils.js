import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDGWojCaxrXEM2U41ZjXXssniN4cJhhz9M",
  authDomain: "crown-db-216b9.firebaseapp.com",
  databaseURL: "https://crown-db-216b9.firebaseio.com",
  projectId: "crown-db-216b9",
  storageBucket: "",
  messagingSenderId: "77183792125",
  appId: "1:77183792125:web:d98c5cf85376cfaecfdf94"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// always trigger google oauth popup
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
