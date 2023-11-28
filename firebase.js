// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdKeQVyUU1c66Bo_MlWZmtOGV4CtHe_Tk",
  authDomain: "twitter-v4-a3930.firebaseapp.com",
  projectId: "twitter-v4-a3930",
  storageBucket: "twitter-v4-a3930.appspot.com",
  messagingSenderId: "496458559967",
  appId: "1:496458559967:web:67c25f913fcdd67d6fd46a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };