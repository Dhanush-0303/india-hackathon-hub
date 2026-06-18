import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// !!! MAKE SURE TO USE YOUR ACTUAL CONFIGURATION KEYS FROM FIREBASE HERE !!!
const firebaseConfig = {
  apiKey: "AIzaSyAimixac4ssRm_InowTJTGKtBlSrdhtny4",
  authDomain: "hackathonapp-3cd50.firebaseapp.com",
  projectId: "hackathonapp-3cd50",
  storageBucket: "hackathonapp-3cd50.firebasestorage.app",
  messagingSenderId: "223597238977",
  appId: "1:223597238977:web:d24b6c556ac500de2b1240"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);