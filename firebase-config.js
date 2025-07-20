// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeAqs_CW5Irf5ue_WuV9_dzuCQ7HFMOEQ",
  authDomain: "yusr-a98fd.firebaseapp.com",
  projectId: "yusr-a98fd",
  storageBucket: "yusr-a98fd.appspot.com",
  messagingSenderId: "946985243840",
  appId: "1:946985243840:web:45b1b5567e4cf09516c925",
  measurementId: "G-B1JVQQ5VGK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
