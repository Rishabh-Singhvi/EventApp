import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA5_UsDFY6smX91dx7BWjoQQ31f8xfBnic",
  authDomain: "ionseve-c6f82.firebaseapp.com",
  databaseURL: "https://ionseve-c6f82.firebaseio.com",
  projectId: "ionseve-c6f82",
  storageBucket: "ionseve-c6f82.appspot.com",
  messagingSenderId: "345236853498",
  appId: "1:345236853498:web:dc9f134977cf53858d2f43",
  measurementId: "G-23HWC6P6D7"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;