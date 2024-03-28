import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginState from "../interfaces/ITheme.interface";
import { loggedIn } from "../services/authServices";

const AuthContext = createContext({
  user: "",
  login: (_: LoginState) => {},
  logout: () => {},
  authToken: ""
});

// const users = [
//   "programhead@gmail.com",
//   "departmenthead@gmail.com",
//   "admin@gmail.com",
//   "hr@gmail.com",
//   "suparadmin@gmail.com",
// ];

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [authToken, setAuthToken] = useState("");
  const navigate = useNavigate();

  const login = async (values: LoginState) => {
    try {
      const respone  = await loggedIn(values)
      setUser(respone?.data?.user)
      setAuthToken(respone?.data?.token)
      localStorage.setItem("userInfo", JSON.stringify(respone?.data?.user) )
      localStorage.setItem("authToken", respone?.data?.token)
      navigate("/hr");
    } catch (error) {
      
    }
 
    // const usr = users.find((user) => user === email);
    // setUser(usr as string);
    // localStorage.setItem("user", email);
    // if (email === "suparadmin@gmail.com") {
    //   navigate("/admin");
    // } else if (email === "admin@gmail.com") {
    //   navigate("/admin");
    // } else if (email === "departmenthead@gmail.com") {
    //   navigate("/department-head");
    // } else if (email === "programhead@gmail.com") {
    //   navigate("/program-head");
    // } else {
    //   navigate("/hr");
    // }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout , authToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
