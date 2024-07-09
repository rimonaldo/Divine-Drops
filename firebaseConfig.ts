// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9ivF28ThT8Mhiwkw35w1w6tpHhKaxiKM",
    authDomain: "divine-drops.firebaseapp.com",
    projectId: "divine-drops",
    storageBucket: "divine-drops.appspot.com",
    messagingSenderId: "508017499421",
    appId: "1:508017499421:web:82946be9f70d45a9c595f4",
    measurementId: "G-FS24R11X54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);