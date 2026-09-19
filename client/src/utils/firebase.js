
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hirly-3d8e9.firebaseapp.com",
  projectId: "hirly-3d8e9",
  storageBucket: "hirly-3d8e9.firebasestorage.app",
  messagingSenderId: "794478526630",
  appId: "1:794478526630:web:1403eabe83cdb4d3727467"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}