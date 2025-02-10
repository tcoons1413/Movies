// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_KEY,
  authDomain: "my-movies-e82be.firebaseapp.com",
  projectId: "my-movies-e82be",
  storageBucket: "my-movies-e82be.firebasestorage.app",
  messagingSenderId: "997420279340",
  appId: "1:997420279340:web:59d2a593738a67fd269389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
