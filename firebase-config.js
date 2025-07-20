// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeAqs_CW5Irf5ue_WuV9_dzuCQ7HFMOEQ",
  authDomain: "yusr-a98fd.firebaseapp.com",
  projectId: "yusr-a98fd",
  storageBucket: "yusr-a98fd.firebasestorage.app",
  messagingSenderId: "946985243840",
  appId: "1:946985243840:web:45b1b5567e4cf09516c925",
  measurementId: "G-B1JVQQ5VGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
