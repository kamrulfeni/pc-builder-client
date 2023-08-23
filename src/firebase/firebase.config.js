// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCddxTG4euCHunUHbfkrykgVV3FMHkPh3o",
    authDomain: "technet-app.firebaseapp.com",
    projectId: "technet-app",
    storageBucket: "technet-app.appspot.com",
    messagingSenderId: "139227118549",
    appId: "1:139227118549:web:a1bdaa4926b8ec77749b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;