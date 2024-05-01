import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
