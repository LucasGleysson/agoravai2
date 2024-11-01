// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOh7kEEKGuRYItUU4qxht7mt3G9-5s-Og",
    authDomain: "teste2-a676d.firebaseapp.com",
    projectId: "teste2-a676d",
    storageBucket: "teste2-a676d.firebasestorage.app",
    messagingSenderId: "608048949767",
    appId: "1:608048949767:web:2d5cfe21d97c5ebe31d8a2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore
export const db = getFirestore(app);
