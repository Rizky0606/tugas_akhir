import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKzuPIug25REX46RmYT8yom1KqsSyyLHQ",
  authDomain: "student-portal-fauzi.firebaseapp.com",
  databaseURL:
    "https://student-portal-fauzi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-portal-fauzi",
  storageBucket: "student-portal-fauzi.appspot.com",
  messagingSenderId: "77935445032",
  appId: "1:77935445032:web:52faebb54ebf0fbcb7611d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase(app);
