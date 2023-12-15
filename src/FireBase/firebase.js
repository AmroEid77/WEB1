import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGKehzpTvyyDIznXAsSZCZbdrWVF176J0",
  authDomain: "team-29-web.firebaseapp.com",
  projectId: "team-29-web",
  storageBucket: "team-29-web.appspot.com",
  messagingSenderId: "282773694710",
  appId: "1:282773694710:web:5010cdb8876c2b232824d7"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
