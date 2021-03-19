import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBesg71Drmkj6j1WAMbio_XAaibFfJ_gJo",
    authDomain: "challenge-dcc77.firebaseapp.com",
    projectId: "challenge-dcc77",
    storageBucket: "challenge-dcc77.appspot.com",
    messagingSenderId: "46743737902",
    appId: "1:46743737902:web:b0b5104a1759583dc5f1bf",
    measurementId: "G-QP531TC8HJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };