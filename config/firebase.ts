// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAclH93WRwK7czXe0rlQQprCT6DeF9bDLw",
  authDomain: "testando-fira-base.firebaseapp.com",
  projectId: "testando-fira-base",
  storageBucket: "testando-fira-base.appspot.com",
  messagingSenderId: "545265957264",
  appId: "1:545265957264:web:f38f91c12d313eed4c5b15"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp