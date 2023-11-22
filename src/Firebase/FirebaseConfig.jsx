import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: import.meta.env.VIDE_APIKEY,
  authDomain: import.meta.env.VIDE_AUTHDOMAIN,
  projectId: import.meta.env.VIDE_PROJECTID,
  storageBucket: import.meta.env.VIDE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VIDE_MESSAGINGSENDERID,
  appId: import.meta.env.VIDE_APPID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
