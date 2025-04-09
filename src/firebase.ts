// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPD4NJypRW5YidSF0VoeuLjeiewcw4ncw",
  authDomain: "expense-app-26cdc.firebaseapp.com",
  projectId: "expense-app-26cdc",
  storageBucket: "expense-app-26cdc.firebasestorage.app",
  messagingSenderId: "547632059024",
  appId: "1:547632059024:web:925ffe7497542b53af3e15",
  measurementId: "G-E2CW32Z4VM"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);