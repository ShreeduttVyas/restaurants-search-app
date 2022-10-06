// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { firebaseConfig } from '../config/firebaseConfig';

// Initialize Firebase
export default useFirebase =() => {
    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
    },[])
};