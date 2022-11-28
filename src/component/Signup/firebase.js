// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCehk-0mEewBq1pWAQ8LpPerru-gPEUBG4",
  authDomain: "netflix-clone-f5b26.firebaseapp.com",
  databaseURL: "https://netflix-clone-f5b26-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-f5b26",
  storageBucket: "netflix-clone-f5b26.appspot.com",
  messagingSenderId: "699613367113",
  appId: "1:699613367113:web:6c99e2d481cb6c7c0d6898",
  measurementId: "G-KN5M5X6V4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;