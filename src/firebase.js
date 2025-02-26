// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzTipwpkAdGdgRgnG3edCzP33RG0nYELI",
  authDomain: "twitter-clone-7e65b.firebaseapp.com",
  projectId: "twitter-clone-7e65b",
  storageBucket: "twitter-clone-7e65b.firebasestorage.app",
  messagingSenderId: "878315425682",
  appId: "1:878315425682:web:6188fe870bef53c2587b4b",
  measurementId: "G-2ZP6VV6EN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
