// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArAFmx-XgJXdqcxeJ-U73hSIhsVLzYiH0",
  authDomain: "astro-course-module-11-b2c39.firebaseapp.com",
  projectId: "astro-course-module-11-b2c39",
  storageBucket: "astro-course-module-11-b2c39.appspot.com",
  messagingSenderId: "453181778723",
  appId: "1:453181778723:web:3127c46a8088d316ceba96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const projectAuth = getAuth(app);
