// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "firedemo-239bc.firebaseapp.com",
  projectId: "firedemo-239bc",
  storageBucket: "firedemo-239bc.firebasestorage.app",
  messagingSenderId: "16536794158",
  appId: "1:16536794158:web:6fa400245f10a7008a9bbf",
  measurementId: "G-ZK9CBZKDPL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestoreDB = getFirestore(app);