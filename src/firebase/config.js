// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjDtZWi6szEgsKA9TslhRzJKOwTqbgGiQ",
  authDomain: "proyectocoder-2c39e.firebaseapp.com",
  projectId: "proyectocoder-2c39e",
  storageBucket: "proyectocoder-2c39e.appspot.com",
  messagingSenderId: "409965326002",
  appId: "1:409965326002:web:023d9e015bc3ed90ef23ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app
}