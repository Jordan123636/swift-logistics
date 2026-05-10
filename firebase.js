// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEHJh6V1aDjt3cRHG6Jki-7AjsYRI0ypw",
  authDomain: "swift-e7f64.firebaseapp.com",
  projectId: "swift-e7f64",
  storageBucket: "swift-e7f64.firebasestorage.app",
  messagingSenderId: "118888061500",
  appId: "1:118888061500:web:4fb267013a2bd912248139",
  measurementId: "G-CHWX06PVC9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);