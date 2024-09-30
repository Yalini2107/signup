
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBULOdGjJ2mDk5xiHJH-LgVzrfP16yj87s",
  authDomain: "loginpage-12a54.firebaseapp.com",
  projectId: "loginpage-12a54",
  storageBucket: "loginpage-12a54.appspot.com",
  messagingSenderId: "134535100572",
  appId: "1:134535100572:web:40b5f70b3f176eb8629559",
  measurementId: "G-L09RMQX0G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




export {auth,provider};