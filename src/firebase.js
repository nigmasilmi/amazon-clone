// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC5qHXE5rlSfHVAZthE70-lHYYyui1jBOw",
    authDomain: "clone-3e6cf.firebaseapp.com",
    databaseURL: "https://clone-3e6cf.firebaseio.com",
    projectId: "clone-3e6cf",
    storageBucket: "clone-3e6cf.appspot.com",
    messagingSenderId: "1031226818492",
    appId: "1:1031226818492:web:b4a4a211dc3e97778c75b9"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

