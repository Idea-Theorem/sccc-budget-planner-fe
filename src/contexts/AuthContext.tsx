import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import LoginState from "../interfaces/ITheme.interface";
import {
  forgotPassword,
  loggedIn,
  resetPassword,
} from "../services/authServices";
import StatusModal from "../components/StatusModal";

const AuthContext = createContext({
  user: null as null | any,
  login: (_: LoginState) => {},
  logout: () => {},
  authToken: "",
  loginLoading: "",
  currentRole: "",
  resetLoading: "",
  setCurrentRole: (_: string | boolean) => {},
  handleForgotPassword: (_: any) => {},
  handleResetPassword: (_: any) => {},
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
  const [resetLoading, setResetLoading] = useState<any>(false);
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
  const handleForgotPassword = async (data: any) => {
    try {
      setResetLoading(true);
      await forgotPassword(data);
      setStatusData({
        type: "success",
        message: "Password reset instructions have been sent to your email",
      });
      setResetLoading(false);
    } catch (error: any) {
      setResetLoading(false);
      if (error.response) {
        // Handle specific API error responses
        switch (error.response.status) {
          case 404:
            setStatusData({
              type: "error",
              message: "No account found with this email address",
            });
            break;
          case 429:
            setStatusData({
              type: "error",
              message: "Too many attempts. Please try again later",
            });
            break;
          default:
            setStatusData({
              type: "error",
              message:
                error.response.data?.message ||
                "Failed to process password reset request",
            });
        }
      } else if (error.request) {
        // Network error
        setStatusData({
          type: "error",
          message: "Network error. Please check your internet connection",
        });
      } else {
        // Other errors
        setStatusData({
          type: "error",
          message: "An unexpected error occurred. Please try again",
        });
      }
    }
  };

  const handleResetPassword = async (data: any) => {
    try {
      setResetLoading(true);
      const response = await resetPassword(data);
      setStatusData({
        type: "success",
        message: response?.data?.message,
      });
      navigate("/login");
      setResetLoading(false);
    } catch (error) {
      setResetLoading(false);
    }
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
          handleForgotPassword,
          resetLoading,
          handleResetPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
