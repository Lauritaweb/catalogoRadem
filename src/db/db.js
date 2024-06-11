import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAl_d-0GjLrGteGRFhCf04ClC54st5awwM",
    authDomain: "radem-17612.firebaseapp.com",
    projectId: "radem-17612",
    storageBucket: "radem-17612.appspot.com",
    messagingSenderId: "48115037327",
    appId: "1:48115037327:web:3c8376ed778a06e2912cfa"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db