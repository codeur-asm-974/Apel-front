import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDq8wcvJjSVu2RlTpi2YKHe_014MAicnhw",
  authDomain: "apel-front.firebaseapp.com",
  projectId: "apel-front",
  storageBucket: "apel-front.appspot.com",
  messagingSenderId: "382375681515",
  appId: "1:382375681515:web:86dc1100c4ca1b7fc20dae",
  measurementId: "G-ZC6MQB5T88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
