import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwY0cmYVYCs0gA9-3cxt3-r9Yiai64k-k",
    authDomain: "dis-hot-clone.firebaseapp.com",
    projectId: "dis-hot-clone",
    storageBucket: "dis-hot-clone.appspot.com",
    messagingSenderId: "552689961779",
    appId: "1:552689961779:web:814e9d5ff521904b454c46",
    measurementId: "G-VMYW7KRPVX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;