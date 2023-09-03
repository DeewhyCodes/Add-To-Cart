// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDID2fdlyDT0WRHYJCKYvwYh4OWYnX90s8",
  authDomain: "my-e-commerce-app-89189.firebaseapp.com",
  projectId: "my-e-commerce-app-89189",
  storageBucket: "my-e-commerce-app-89189.appspot.com",
  messagingSenderId: "842394488060",
  appId: "1:842394488060:web:1f65190c0c4c14ef465b79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
