
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword, 
         signOut} from "firebase/auth"
import { addDoc, 
         collection, 
          getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3vjuReCl6F2t2ZZoMacuvl3IJx1hloWk",
  authDomain: "net-clone-1223d.firebaseapp.com",
  projectId: "net-clone-1223d",
  storageBucket: "net-clone-1223d.firebasestorage.app",
  messagingSenderId: "1090168500049",
  appId: "1:1090168500049:web:87365de0a561715a7b2d70",
  measurementId: "G-9YTG2ZDBBZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user=res.user;
   await addDoc(collection(db, "user"),{
     uid: user.uid,
     name,
     authProvider: "local",
     email
   })
  } catch (error) {
    console.log(error);
    alert(error)
    
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    alert(error)
    
  }
}
const logout = () => {
  signOut(auth)
}

export {db, auth, signup, login, logout}


