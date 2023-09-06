import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEmYaagZfu4SL5ZTqFtRhrxgRIRAegY5E",
  authDomain: "myprotfolio-8597e.firebaseapp.com",
  databaseURL: "https://myprotfolio-8597e-default-rtdb.firebaseio.com",
  projectId: "myprotfolio-8597e",
  storageBucket: "myprotfolio-8597e.appspot.com",
  messagingSenderId: "354274725463",
  appId: "1:354274725463:web:7431301fc255a86b535d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);