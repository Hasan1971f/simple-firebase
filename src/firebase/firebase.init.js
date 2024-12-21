// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OBhr0KWETXBX_QXm72qBRmfTDS0wCIs",
  authDomain: "simple-firebase2-58585.firebaseapp.com",
  projectId: "simple-firebase2-58585",
  storageBucket: "simple-firebase2-58585.firebasestorage.app",
  messagingSenderId: "923820861530",
  appId: "1:923820861530:web:42483c981fa82e0a30d063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
