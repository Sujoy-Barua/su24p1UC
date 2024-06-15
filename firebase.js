import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "...",
  authDomain: "uber-clone-ee6d9.firebaseapp.com",
  projectId: "uber-clone-ee6d9",
  storageBucket: "uber-clone-ee6d9.appspot.com",
  messagingSenderId: "391649102542",
  appId: "1:391649102542:web:1ea31a6e4998f0b991de9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
