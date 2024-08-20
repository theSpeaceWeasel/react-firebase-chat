// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // apiKey: import.meta.env.VITE_API_KEY,
    apiKey: "AIzaSyCnEJ8Legrh6pez61jkOUqyxZZnQzUwm2Y",
    authDomain: "fir-react-chat-app-ef380.firebaseapp.com",
    projectId: "fir-react-chat-app-ef380",
    storageBucket: "fir-react-chat-app-ef380.appspot.com",
    messagingSenderId: "678445391542",
    appId: "1:678445391542:web:4f8c266651a117397c5017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)