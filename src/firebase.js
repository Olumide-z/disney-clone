// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAADh3TYzkiFtBa0HPAwcxnR68WXihA-no",
  authDomain: "disney-plus-dd80b.firebaseapp.com",
  projectId: "disney-plus-dd80b",
  storageBucket: "disney-plus-dd80b.appspot.com",
  messagingSenderId: "652192154065",
  appId: "1:652192154065:web:b1510282595a11365660f0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
const storage = getStorage(firebaseApp)

export { auth, provider, storage };
export default db;
