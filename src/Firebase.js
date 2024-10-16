// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcyTbrqsymwmTFQVzmjeuaGYPpy0CnfRo",
  authDomain: "venderservice-a8c7f.firebaseapp.com",
  projectId: "venderservice-a8c7f",
  storageBucket: "venderservice-a8c7f.appspot.com",
  messagingSenderId: "931852824309",
  appId: "1:931852824309:web:d8dc0be3f62bc711be9fbc",
  measurementId: "G-QQS48QQQXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);

const storage=getStorage(app)
export{app,analytics,db,auth,storage}