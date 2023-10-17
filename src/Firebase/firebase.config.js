import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM9hP4v-FNdk1zaB57r08L5mOOq9eG1aM",
  authDomain: "assignment-10-72807.firebaseapp.com",
  projectId: "assignment-10-72807",
  storageBucket: "assignment-10-72807.appspot.com",
  messagingSenderId: "92555095009",
  appId: "1:92555095009:web:e6569b2ff96499286340a0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
