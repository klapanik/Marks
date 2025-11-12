import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_cLx_Jg3Xp4_L8UJ4dHeunQAYsm_DsRM",
    authDomain: "marks-71838.firebaseapp.com",
    projectId: "marks-71838",
    storageBucket: "marks-71838.firebasestorage.app",
    messagingSenderId: "73826927915",
    appId: "1:73826927915:web:e7960553b8a58d4b83716e",
    measurementId: "G-RVCYDBNTS5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
