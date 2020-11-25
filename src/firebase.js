import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBpFN93V39KP_a_aVfSehvSN0rIhHlvjdI",
  authDomain: "tik-tok-clone-8d14e.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-8d14e.firebaseio.com",
  projectId: "tik-tok-clone-8d14e",
  storageBucket: "tik-tok-clone-8d14e.appspot.com",
  messagingSenderId: "149907230391",
  appId: "1:149907230391:web:6f1c90981228e4c7c48732",
  measurementId: "G-GJ2XXYJYTP"
};


  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;