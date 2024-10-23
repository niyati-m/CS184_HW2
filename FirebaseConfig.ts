// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy8tqrIAA4mUAt9KbHYrLwnP2it5yKWwY",
  authDomain: "cs184-hw2-24498.firebaseapp.com",
  projectId: "cs184-hw2-24498",
  storageBucket: "cs184-hw2-24498.appspot.com",
  messagingSenderId: "651799653045",
  appId: "1:651799653045:web:8e26b8bb2c0f401d09acfc"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getAuth(FIREBASE_APP);