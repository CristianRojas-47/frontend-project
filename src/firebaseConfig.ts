import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {  
  apiKey: "AIzaSyBYvoGHJIJAtyLjiprIXWNy17KyqwgDTlI",
  authDomain: "frontend-project-4c248.firebaseapp.com",
  projectId: "frontend-project-4c248",
  storageBucket: "frontend-project-4c248.appspot.com",
  messagingSenderId: "130659497037",
  appId: "1:130659497037:web:cdaf10a602fbeaab139804",
  measurementId: "G-EBW5RC7QF9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);