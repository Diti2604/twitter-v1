// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTCYH4fFaKTsvR7wO7rsxmjuCx0yuLw8",
  authDomain: "twitter-final-90eac.firebaseapp.com",
  projectId: "twitter-final-90eac",
  storageBucket: "twitter-final-90eac.appspot.com",
  messagingSenderId: "281601293148",
  appId: "1:281601293148:web:6d7d18012853b8888a1f99",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
