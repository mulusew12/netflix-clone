import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { 
  addDoc, 
  collection, 
  getFirestore 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3vjuReCl6F2t2ZZoMacuvl3IJx1hloWk",
  authDomain: "net-clone-1223d.firebaseapp.com",
  projectId: "net-clone-1223d",
  storageBucket: "net-clone-1223d.appspot.com", // Fixed the storage bucket URL
  messagingSenderId: "1090168500049",
  appId: "1:1090168500049:web:87365de0a561715a7b2d70",
  measurementId: "G-9YTG2ZDBBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    await addDoc(collection(db, "users"), { // Changed "user" to "users" (more conventional)
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      createdAt: new Date() // Added timestamp for better data management
    });
    
    return user; // Return the user object for further use if needed
  } catch (error) {
    console.error("Signup Error:", error); // Better error logging
    throw error; // Re-throw the error to handle it in the calling component
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return user object for further use
  } catch (error) {
    console.error("Login Error:", error);
    throw error; // Re-throw for component-level handling
    
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

export { db, auth, signup, login, logout };