import { HTTP_CLIENT } from "../utils/axiosClient";

const getPrograms = async () => {
  return await HTTP_CLIENT.get("dashboard/programsCount");
};

const getPendingPrograms = async (status: any) => {
  return await HTTP_CLIENT.get(`/department/status/${status}`);
};
const getDepartment = async () => {
  return await HTTP_CLIENT.get("/department");
};



export {
  getPrograms,
  getPendingPrograms,
  getDepartment
};