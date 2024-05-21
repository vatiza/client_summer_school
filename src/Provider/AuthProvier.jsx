import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Components/Firebase/Firebase.config";

export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvier = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginwithemailpass=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
  const authInfo = {
    user,
    createAccount,
    updateUserProfile,
    loginwithemailpass,
    logOut
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvier;
