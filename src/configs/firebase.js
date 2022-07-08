// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAh-U7V6jI6bAYPIaUz2wGw75zcOdu7AE",
  authDomain: "imoney-f1829.firebaseapp.com",
  projectId: "imoney-f1829",
  storageBucket: "imoney-f1829.appspot.com",
  messagingSenderId: "1049967059422",
  appId: "1:1049967059422:web:acd09b96c65077f3edfd4f",
  measurementId: "G-P7R2V24EEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {
  db, auth, storage
}