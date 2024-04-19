import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import LoginState from "../interfaces/ITheme.interface";
import { loggedIn } from "../services/authServices";
import StatusModal from "../components/StatusModal";

const AuthContext = createContext({
  user: null as null | any,
  login: (_: LoginState) => {},
  logout: () => {},
  authToken: "",
  loginLoading: "",
  currentRole: "",
  setCurrentRole: (_: string | boolean) => {},
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
  const [user, setUser] = useState<null | any>(null);
  const [currentRole, setCurrentRole] = useState<any>("");
  const [authToken, setAuthToken] = useState("");
  const [loginLoading, setLoginLoading] = useState<any>(false);
  const [statusData, setStatusData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user: any = localStorage.getItem("userInfo");

    const toParse = JSON.parse(user);
    if (toParse && toParse?.roles) {
      setUser(toParse);
    }
    const currentRole: any = localStorage.getItem("currentRole");
    if (currentRole) {
      setCurrentRole(currentRole);
    } else {
      setCurrentRole(toParse?.roles[0].name);
    }
  }, []);

  const login = async (values: LoginState) => {
    try {
      setLoginLoading(true);
      const respone = await loggedIn(values);
      setUser(respone?.data?.user);
      setCurrentRole(respone?.data?.user?.roles[0].name);
      setAuthToken(respone?.data?.token);
      localStorage.setItem("currentRole", respone?.data?.user?.roles[0].name);
      localStorage.setItem("userInfo", JSON.stringify(respone?.data?.user));
      localStorage.setItem("authToken", respone?.data?.token);
      setLoginLoading(false);
      setStatusData({
        type: "success",
        message: "User LoggedIn Successfully",
      });
      switch (respone?.data?.user?.roles[0].name) {
        case "Program_Head":
          navigate("/program-head");
          break;
        case "Admin":
          navigate("/admin");
          break;
        case "Super_Admin":
          navigate("/super-admin");
          break;
        case "Department_Head":
          navigate("/department-head/review-budgets");
          break;
        default:
          navigate("/hr/employees");
      }
    } catch (error: any) {
      setLoginLoading(false);
      console.log(error);
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
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
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <>
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
          authToken,
          loginLoading,
          currentRole,
          setCurrentRole,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
