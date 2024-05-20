import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../Components/Firebase/Firebase.config";

export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvier = ({ children }) => {
  const [user, setUser] = useState(null);
  const authInfo = {
    user,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvier;
