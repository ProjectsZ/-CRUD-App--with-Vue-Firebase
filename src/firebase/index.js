import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArMsQFCn12cujKvtym4EEYv27c5gEY_is",
  authDomain: "vue-authentication-app-f96aa.firebaseapp.com",
  projectId: "vue-authentication-app-f96aa",
  storageBucket: "vue-authentication-app-f96aa.appspot.com",
  messagingSenderId: "423564516521",
  appId: "1:423564516521:web:4f97c897dc77f144b51db8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };