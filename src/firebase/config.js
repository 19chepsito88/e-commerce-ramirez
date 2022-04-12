import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhj2tFa4apjwjwkDzx18s2tBUk9AGUW7U",
  authDomain: "e-commerce-ramirez.firebaseapp.com",
  projectId: "e-commerce-ramirez",
  storageBucket: "e-commerce-ramirez.appspot.com",
  messagingSenderId: "576487570571",
  appId: "1:576487570571:web:dd952248e6513e9b2e688e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app;
}