import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC4lCC3tExIX8z9VOXDWqCEHQRKjsVnfxc",
    authDomain: "event-8ab22.firebaseapp.com",
    databaseURL: "https://event-8ab22.firebaseio.com",
    projectId: "event-8ab22",
    storageBucket: "event-8ab22.appspot.com",
    messagingSenderId: "605358613516",
    appId: "1:605358613516:web:1779c6029ce0193436ba29",
    measurementId: "G-P6P2DZ5M6R"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;