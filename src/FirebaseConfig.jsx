// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWSqk3rTA5olfa0d6wqol-gpdbRzLowN0",
  authDomain: "webapp-8deb4.firebaseapp.com",
  projectId: "webapp-8deb4",
  storageBucket: "webapp-8deb4.appspot.com",
  messagingSenderId: "934334745140",
  appId: "1:934334745140:web:35b5eb294b8aa436609861",
  measurementId: "G-FVRGJD4YJJ"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
const analytics = getAnalytics(appFirebase);