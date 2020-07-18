import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBilSJPEDohnEmmIG1gPrIeseWrgKBfxFw",
  authDomain: "eves-18e42.firebaseapp.com",
  databaseURL: "https://eves-18e42.firebaseio.com",
  projectId: "eves-18e42",
  storageBucket: "eves-18e42.appspot.com",
  messagingSenderId: "672008820892",
  appId: "1:672008820892:web:59e0e417eace4b6a5ff559",
  measurementId: "G-9X04TCPDSR"
};
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;