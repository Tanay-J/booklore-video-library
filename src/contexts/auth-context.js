import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "utils/hooks/useLocalStorage";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token] = useLocalStorage("token", "");
  const [userData] = useLocalStorage("userData", "");

  let initialData = {
    isAuthenticated: token ? true : false,
    userData: userData,
    token: token,
  };

  const [authState, setAuthState] = useState(initialData);
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
