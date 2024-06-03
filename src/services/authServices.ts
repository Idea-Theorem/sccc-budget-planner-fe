import { HTTP_CLIENT } from "../utils/axiosClient";
import LoginState from "../interfaces/ITheme.interface";

const loggedIn = async (params: LoginState) => {
  return await HTTP_CLIENT.post("user/login", params);
};

const forgotPassword = async (params: LoginState) => {
  return await HTTP_CLIENT.post("user/forgot-password", params);
};

const resetPassword = async (params: LoginState) => {
  return await HTTP_CLIENT.post("user/reset-password", params);
};

const getUserRole = async () => {
  return await HTTP_CLIENT.get("/role");
};



export {
  loggedIn,
  getUserRole,
  forgotPassword,
  resetPassword
};