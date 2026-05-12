
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDdZC6LylccNORu0ulcL2_Pes9js9xl06s",
  authDomain: "react-project-1a.firebaseapp.com",
  projectId: "react-project-1a",
  storageBucket: "react-project-1a.firebasestorage.app",
  messagingSenderId: "949598741273",
  appId: "1:949598741273:web:671e84b013944ded269b88",
  measurementId: "G-EZT7G560DP"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseapp)
export const database = getFirestore(firebaseapp)