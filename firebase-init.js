// PASTE YOUR FIREBASE CONFIG HERE
// Get this from: Firebase Console → Project Settings → Your Apps

const firebaseConfig = {
  apiKey: "AIzaSyBEHJh6V1aDjt3cRHG6Jki-7AjsYRI0ypw",
  authDomain: "swift-e7f64.firebaseapp.com",
  projectId: "swift-e7f64",
  storageBucket: "swift-e7f64.firebasestorage.app",
  messagingSenderId: "118888061500",
  appId: "1:118888061500:web:4fb267013a2bd912248139",
  measurementId: "G-CHWX06PVC9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth and db available to code.js
const auth = firebase.auth();
const db = firebase.firestore();
