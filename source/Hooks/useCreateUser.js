import { firebaseConfig } from "../config/firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export async function createFirestore(email, username, uid, rid) {
  console.log(email, username, uid, rid);
  try {
    await setDoc(doc(db, "users", uid), {
      email: email,
      username: username,
      uid: uid,
      rid: rid,
    });
    console.log("Document written");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function AddFirestore_rid(uid, rid) {
  try {
    const docRef = doc(db, "users", uid);
    // Atomically add a new region to the "regions" array field.
    await updateDoc(docRef, {
      rid: arrayUnion(rid),
    });
    console.log("Rid added:", rid);
  } catch (e) {
    console.log("Error Updating Rid:", e);
  }
}

export async function DeleteFirestore_rid(uid, rid) {
  try {
    const docRef = doc(db, "users", uid);
    // Atomically add a new region to the "regions" array field.
    await updateDoc(docRef, {
      rid: arrayRemove(rid),
    });
    console.log("Rid deleted:", rid);
  } catch (e) {
    console.log("Error Updating Rid:", e);
  }
}
