// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPMVrVIuft6F-hK0XnjR47x8VxTAFl4c",
  authDomain: "todo-list-5fa0a.firebaseapp.com",
  projectId: "todo-list-5fa0a",
  storageBucket: "todo-list-5fa0a.appspot.com",
  messagingSenderId: "924533963620",
  appId: "1:924533963620:web:9aa0e2c801f45e7e515871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)