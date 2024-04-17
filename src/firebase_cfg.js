// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEpwmq1Pm4p89iQ7hgALEHYUyodOw6Ihs",
  authDomain: "bmpadvogada.firebaseapp.com",
  projectId: "bmpadvogada",
  storageBucket: "bmpadvogada.appspot.com",
  messagingSenderId: "373992235937",
  appId: "1:373992235937:web:6d9346013bf2e935f2a1e0",
  measurementId: "G-RV1D0QF8TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);