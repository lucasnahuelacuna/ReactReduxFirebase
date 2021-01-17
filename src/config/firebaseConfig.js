// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBwfrkgQHbwb0Nj_VPL02g46cmpN5ll1VQ",
    authDomain: "gamerzone-e66ca.firebaseapp.com",
    projectId: "gamerzone-e66ca",
    storageBucket: "gamerzone-e66ca.appspot.com",
    messagingSenderId: "1068199639955",
    appId: "1:1068199639955:web:0d746ea2a55a07d0e6c666",
    measurementId: "G-XLN72YZ1FJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;