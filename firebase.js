import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS962hnGGMcLDckNzzzoOKwotzLpcGSQQ",
  authDomain: "signal-clone-yt-1ec4f.firebaseapp.com",
  projectId: "signal-clone-yt-1ec4f",
  storageBucket: "signal-clone-yt-1ec4f.appspot.com",
  messagingSenderId: "761579958325",
  appId: "1:761579958325:web:c62a7686e23a126cdc417c"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };