import axios from "axios";
import { HTTP_CLIENT } from "../utils/axiosClient";
import LoginState from "../interfaces/ITheme.interface";

const loggedIn = async (params: LoginState) => {
  return await HTTP_CLIENT.post("user/login", params);
};

const getUserRole = async () => {
  return await HTTP_CLIENT.get("/role");
};


const getAllDepartments = async () => {
  return await HTTP_CLIENT.get("/department");
};





export {
  loggedIn,
  getUserRole,
  getAllDepartments
};