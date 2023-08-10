// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7vS8TfW19pNSpfL5Kd2LTv7-wp1nrjZM",
  authDomain: "cong-xu-coaching.firebaseapp.com",
  projectId: "cong-xu-coaching",
  storageBucket: "cong-xu-coaching.appspot.com",
  messagingSenderId: "956740222538",
  appId: "1:956740222538:web:2e4908686e46c41b3730b3",
  measurementId: "G-55LQ09JYDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
