
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
   apiKey: "AIzaSyD1isj2whR7ScztKCYjeJEdlWIZBy1Utlk",
   authDomain: "my-portfolio-2d6e2.firebaseapp.com",
   projectId: "my-portfolio-2d6e2",
   storageBucket: "my-portfolio-2d6e2.firebasestorage.app",
   messagingSenderId: "437248928047",
   appId: "1:437248928047:web:eae3829669148b053459da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);