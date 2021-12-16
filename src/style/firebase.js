// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdu5VboDm9DApPx7xJsZkcjnFC2dxqytM',
  authDomain: 'pinterest-clone-2b624.firebaseapp.com',
  projectId: 'pinterest-clone-2b624',
  storageBucket: 'pinterest-clone-2b624.appspot.com',
  messagingSenderId: '1043051290317',
  appId: '1:1043051290317:web:70323b8fee57668958d384',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new firebaseConfig.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
