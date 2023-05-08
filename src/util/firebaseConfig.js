import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrUvQJQF6wuUgGVr0PVelBOVIAq46KT6w",
  authDomain: "keiibo-portfolio.firebaseapp.com",
  projectId: "keiibo-portfolio",
  storageBucket: "keiibo-portfolio.appspot.com",
  messagingSenderId: "531976541787",
  appId: "1:531976541787:web:26e42fda9e1c346e8a517e",
  measurementId: "G-WDKY10FXFH",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
