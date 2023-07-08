// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHeTzOE5_WhlPvmhgu16ucVChD4YsT2wc",
  authDomain: "homestate-155d0.firebaseapp.com",
  projectId: "homestate-155d0",
  storageBucket: "homestate-155d0.appspot.com",
  messagingSenderId: "764364016883",
  appId: "1:764364016883:web:2818b0c450b1cbfb18fb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
