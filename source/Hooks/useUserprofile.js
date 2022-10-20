import { firebaseConfig } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState } from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default () => {
  const [result, setResult] = useState();

  async function getProfile({ uid }) {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      setResult(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  }
  return [result, getProfile];
};
