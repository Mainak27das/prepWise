// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlieGPwLY25D6Hy8l5qJ8PThHc9UkMPHo",
  authDomain: "prepwise-ee272.firebaseapp.com",
  projectId: "prepwise-ee272",
  storageBucket: "prepwise-ee272.firebasestorage.app",
  messagingSenderId: "944698584230",
  appId: "1:944698584230:web:030867aaa89e9adf9b1867",
  measurementId: "G-TMD4CSMCZY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
