import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGKehzpTvyyDIznXAsSZCZbdrWVF176J0",
  authDomain: "team-29-web.firebaseapp.com",
  projectId: "team-29-web",
  storageBucket: "team-29-web.appspot.com",
  messagingSenderId: "282773694710",
  appId: "1:282773694710:web:5010cdb8876c2b232824d7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;