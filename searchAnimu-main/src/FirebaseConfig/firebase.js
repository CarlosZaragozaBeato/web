
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBq6JhkXFaNeG9Qcc-vcUXQTNUQV-qg7xk",
  authDomain: "animus-c7ca4.firebaseapp.com",
  projectId: "animus-c7ca4",
  storageBucket: "animus-c7ca4.appspot.com",
  messagingSenderId: "615481709806",
  appId: "1:615481709806:web:bc86cb82219a99972d4fff"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)