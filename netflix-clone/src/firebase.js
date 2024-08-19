import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAzY0ZTCs9VOKlVkGxGhPdSWA3jKZA3ElI",
  authDomain: "netflix-clone-e70e0.firebaseapp.com",
  projectId: "netflix-clone-e70e0",
  storageBucket: "netflix-clone-e70e0.appspot.com",
  messagingSenderId: "190613958385",
  appId: "1:190613958385:web:bb85bc3422aa4f95c18350",
  measurementId: "G-4QL0MR7SN2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name,email,password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    });
    }catch(error){
       
       toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () =>{
    signOut(auth)
    toast.info("Logged Out")
}

export {auth,db,login,signup,logout}