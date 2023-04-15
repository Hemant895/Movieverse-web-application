// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-3guAeeq7MKIB-pVE2Qa5rqLMb6EH3A",
  authDomain: "movieverse-215df.firebaseapp.com",
  projectId: "movieverse-215df",
  storageBucket: "movieverse-215df.appspot.com",
  messagingSenderId: "490164208052",
  appId: "1:490164208052:web:55a8c1febf4754b1e6b2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db,"Movies")
export default app;