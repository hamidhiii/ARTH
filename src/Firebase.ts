// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEULx71iPhP1RUiWK4VDF5vAfVR7U6KYc",
  authDomain: "airth-59af7.firebaseapp.com",
  projectId: "airth-59af7",
  storageBucket: "airth-59af7.firebasestorage.app",
  messagingSenderId: "69343900708",
  appId: "1:69343900708:web:86b2182e531f78cbbd94b1",
  measurementId: "G-YR86T6G5RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
