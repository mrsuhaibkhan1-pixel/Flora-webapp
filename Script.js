// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

// Firebase Config (your)
const firebaseConfig = {
  apiKey: "AIzaSyBotErxpKdMgbgQwnSIKEIGKv5Mjb_K3uQ",
  authDomain: "flora-e77a9.firebaseapp.com",
  projectId: "flora-e77a9",
  storageBucket: "flora-e77a9.firebasestorage.app",
  messagingSenderId: "831075043226",
  appId: "1:831075043226:web:f46f6ba25e90b790dfdc23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase connected:", app);
