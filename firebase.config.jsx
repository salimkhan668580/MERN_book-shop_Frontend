
import { initializeApp } from "firebase/app";

const VITE_FIREBASE_KEY=import.meta.env.VITE_FIREBASE_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_KEY,
  authDomain: "bookshop-12aac.firebaseapp.com",
  projectId: "bookshop-12aac",
  storageBucket: "bookshop-12aac.appspot.com",
  messagingSenderId: "1016940894082",
  appId: "1:1016940894082:web:57ead437abce763203219b"
};

// Initialize Firebase
const fireBaseAuth = initializeApp(firebaseConfig);

export default fireBaseAuth;
