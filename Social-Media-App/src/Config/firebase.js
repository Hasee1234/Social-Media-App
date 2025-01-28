import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHRe23Amu6pNF_vWNPPjI43lL8bIZg_e8",
  authDomain: "social-media-app-31226.firebaseapp.com",
  projectId: "social-media-app-31226",
  storageBucket: "social-media-app-31226.firebasestorage.app",
  messagingSenderId: "1081399170513",
  appId: "1:1081399170513:web:21a0f5dbd4b02d01643cf0",
  measurementId: "G-3QQKZBR13V"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const auth = getAuth(app);
