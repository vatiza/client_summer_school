import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
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
  const authInfo = {
    user,
    createAccount,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvier;
