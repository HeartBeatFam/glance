import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyCr93r3Mntb7DwD522C0TYTl7ymEumcM98",
    authDomain: "glancemyapp.firebaseapp.com",
    projectId: "glancemyapp",
    storageBucket: "glancemyapp.appspot.com",
    messagingSenderId: "899157509821",
    appId: "1:899157509821:web:6e0733d3e0d249a9bb99d4",
    measurementId: "G-0Z1PJP6ERC"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')