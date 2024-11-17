// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZbGzG9mKraHLob54jmIDB7K2Vunwz6VQ",
  authDomain: "session-2-project-b5851.firebaseapp.com",
  projectId: "session-2-project-b5851",
  storageBucket: "session-2-project-b5851.firebasestorage.app",
  messagingSenderId: "299797840553",
  appId: "1:299797840553:web:c720224402ffb1ee63dfb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;