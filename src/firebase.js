// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCzX7xxsP9DWQO7-Oer-8Qxyx441-a9_w",
    authDomain: "facebook-clone-75ca6.firebaseapp.com",
    databaseURL: "https://facebook-clone-75ca6.firebaseio.com",
    projectId: "facebook-clone-75ca6",
    storageBucket: "facebook-clone-75ca6.appspot.com",
    messagingSenderId: "580220654487",
    appId: "1:580220654487:web:0457c92a7c36d63f866ad2",
    measurementId: "G-Z4F6BQCVVT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;