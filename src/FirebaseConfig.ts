import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJz_8PDJKPaXuq80_MiKHw2dmVBfKXX0o",
  authDomain: "senai-rms.firebaseapp.com",
  projectId: "senai-rms",
  storageBucket: "senai-rms.appspot.com",
  messagingSenderId: "536291254568",
  appId: "1:536291254568:web:a0765c2b17db94ccc8f01d"
};



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
