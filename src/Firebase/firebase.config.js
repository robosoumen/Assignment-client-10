// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjLItjU6Er5ev8g9-V6xySUQnUNOoKFiA",
  authDomain: "assignment-ten-ec1b2.firebaseapp.com",
  projectId: "assignment-ten-ec1b2",
  storageBucket: "assignment-ten-ec1b2.firebasestorage.app",
  messagingSenderId: "585689955848",
  appId: "1:585689955848:web:6c28c465897baf8ef4dbbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);