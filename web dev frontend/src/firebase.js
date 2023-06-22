import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA06k3vwodJLuzqEZ0d9d8PVCS_GcfPEz0",
  authDomain: "video-55ff1.firebaseapp.com",
  projectId: "video-55ff1",
  storageBucket: "video-55ff1.appspot.com",
  messagingSenderId: "920639349462",
  appId: "1:920639349462:web:57d774547bcb8932111f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;