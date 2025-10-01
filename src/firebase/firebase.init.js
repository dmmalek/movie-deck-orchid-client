// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hsIoRawysc9HTw4PZiRz4vaBwvSufvg",
  authDomain: "movie-deck-212a8.firebaseapp.com",
  projectId: "movie-deck-212a8",
  storageBucket: "movie-deck-212a8.firebasestorage.app",
  messagingSenderId: "703094083943",
  appId: "1:703094083943:web:87c38c224871939c6e1fc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
