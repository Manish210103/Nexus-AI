// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1426e.firebaseapp.com",
  projectId: "mern-auth-1426e",
  storageBucket: "mern-auth-1426e.appspot.com",
  messagingSenderId: "351855191341",
  appId: "1:351855191341:web:f0c376ff51ca82728f9fa4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
