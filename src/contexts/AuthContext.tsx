import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: "",
  login: (_: string) => {},
  logout: () => {},
});

const users = [
  "programhead@gmail.com",
  "departmenthead@gmail.com",
  "admin@gmail.com",
  "hr@gmail.com",
  "suparadmin@gmail.com",
];

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const navigate = useNavigate();

  const login = (email: string) => {
    const usr = users.find((user) => user === email);
    setUser(usr as string);
    localStorage.setItem("user", email);
    if (email === "suparadmin@gmail.com") {
      navigate("/admin");
    } else if (email === "admin@gmail.com") {
      navigate("/admin");
    } else if (email === "departmenthead@gmail.com") {
      navigate("/department-head");
    } else if (email === "programhead@gmail.com") {
      navigate("/program-head");
    } else {
      navigate("/hr");
    }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
