import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqCFk6GaHbelpyZVgDHWWI48bcaG0XBBk",
  authDomain: "kitzone-6390b.firebaseapp.com",
  projectId: "kitzone-6390b",
  storageBucket: "kitzone-6390b.appspot.com",
  messagingSenderId: "825323921313",
  appId: "1:825323921313:web:549e0e1b9bf6a7c06335e0",
  measurementId: "G-1G9FVHZDLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);