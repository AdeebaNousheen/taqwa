import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1PDvX1paXG1viX6J3GVqEabC_hNPsbqE",
  authDomain: "taqwa-c06fb.firebaseapp.com",
  projectId: "taqwa-c06fb",
  storageBucket: "taqwa-c06fb.firebasestorage.app",
  messagingSenderId: "104480572207",
  appId: "1:104480572207:web:b662032b7d372f265857da",
  measurementId: "G-K1FD5K7D4Z"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);

export default app;