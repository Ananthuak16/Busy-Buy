import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC5Q6VQzhWVjycb_lH_NOf5W542fIKCsCM",
  authDomain: "buy-busy-6e266.firebaseapp.com",
  projectId: "buy-busy-6e266",
  storageBucket: "buy-busy-6e266.appspot.com",
  messagingSenderId: "770594251482",
  appId: "1:770594251482:web:70616e0260610f09203be3",
  measurementId: "G-NDGRS71NB9"
  // Firebase configuration
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth = getAuth(app);

export { db, auth };