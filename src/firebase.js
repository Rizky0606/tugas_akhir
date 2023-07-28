import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzuPIug25REX46RmYT8yom1KqsSyyLHQ",
  authDomain: "student-portal-fauzi.firebaseapp.com",
  projectId: "student-portal-fauzi",
  storageBucket: "student-portal-fauzi.appspot.com",
  messagingSenderId: "77935445032",
  appId: "1:77935445032:web:52faebb54ebf0fbcb7611d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
