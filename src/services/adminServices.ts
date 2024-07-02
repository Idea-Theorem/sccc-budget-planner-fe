import { HTTP_CLIENT } from "../utils/axiosClient";

const getPrograms = async () => {
  return await HTTP_CLIENT.get("dashboard/programsCount");
};

const getPendingPrograms = async (status: any, value: string) => {
  const modifyValue = typeof value == "undefined" ? "" : value;
  return await HTTP_CLIENT.get(
    `/department/status/${status}?name=${modifyValue}`
  );
};
const getDepartment = async () => {
  return await HTTP_CLIENT.get("/department");
};
const addTotalbudget = async (data: any) => {
  return await HTTP_CLIENT.post("/dashboard/budget", data);
};

const getTotalbudget = async () => {
  return await HTTP_CLIENT.get("/dashboard/budget/1");
};
const getSuperAdminTotalbudget = async () => {
  return await HTTP_CLIENT.get("/dashboard/budget-super-admin/1");
};
const updateTotalbudget = async (data: any) => {
  return await HTTP_CLIENT.put("/dashboard/budget/1", data);
};
const addSuperAdminTotalbudget = async (data: any) => {
  return await HTTP_CLIENT.post("/dashboard/budget-super-admin", data);
};
const updateSuperAdminTotalbudget = async (data: any) => {
  return await HTTP_CLIENT.put("dashboard/budget-super-admin/1", data);
};

const fetchAllRecord = async () => {
  return await HTTP_CLIENT.get("/dashboard/record");
};

export {
  getPrograms,
  getPendingPrograms,
  getDepartment,
  addTotalbudget,
  getTotalbudget,
  updateTotalbudget,
  addSuperAdminTotalbudget,
  getSuperAdminTotalbudget,
  updateSuperAdminTotalbudget,
  fetchAllRecord,
};
