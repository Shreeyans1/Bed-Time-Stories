import firebase from 'firebase'
require ("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyARw47q7yroH-J6yymWOHYycbOa0ZbwElQ",
    authDomain: "story-hub-f8a93.firebaseapp.com",
    projectId: "story-hub-f8a93",
    storageBucket: "story-hub-f8a93.appspot.com",
    messagingSenderId: "714886157290",
    appId: "1:714886157290:web:53219a2667fc78caae1893",
    measurementId: "G-93H1CW864M"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()