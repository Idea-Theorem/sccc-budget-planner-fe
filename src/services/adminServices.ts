import { HTTP_CLIENT } from "../utils/axiosClient";

const getPrograms = async () => {
  return await HTTP_CLIENT.get("dashboard/programsCount");
};

const getPendingPrograms = async (status: any, value: string) => {
  const modifyValue = typeof value == "undefined" ? "" : value
  return await HTTP_CLIENT.get(`/department/status/${status}?name=${modifyValue}`);
};
const getDepartment = async () => {
  return await HTTP_CLIENT.get("/department");
};



export {
  getPrograms,
  getPendingPrograms,
  getDepartment
};