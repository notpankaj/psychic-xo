import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeL1yH3bWWqRTfLFnqaYC8GWKIV4pTznE",
  authDomain: "psychic-xo.firebaseapp.com",
  projectId: "psychic-xo",
  storageBucket: "psychic-xo.appspot.com",
  messagingSenderId: "933594147930",
  appId: "1:933594147930:web:9cc3f412ab1d649e32bc63",
  measurementId: "G-8Q9SGN6856"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();
export default firebase;