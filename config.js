import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCF1q5p0L9Nd7bjArB4WQh6jvQBMUUVN9Q",
    authDomain: "e-ride-a3119.firebaseapp.com",
    projectId: "e-ride-a3119",
    storageBucket: "e-ride-a3119.appspot.com",
    messagingSenderId: "718108605340",
    appId: "1:718108605340:web:a48bfb69f80d785a02e659"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
