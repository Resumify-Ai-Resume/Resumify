// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbgeLa23cgY9A8pHiPhWrvhihxh95ODeQ",
  authDomain: "resumify-1275c.firebaseapp.com",
  projectId: "resumify-1275c",
  storageBucket: "resumify-1275c.appspot.com",
  messagingSenderId: "422528843690",
  appId: "1:422528843690:web:73a4060a0f93543feab5d3",
  measurementId: "G-LRVXM8PD2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);

export {auth , analytics};