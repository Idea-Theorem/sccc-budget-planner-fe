import { HTTP_CLIENT } from "../utils/axiosClient";




const getAllDepartments = async (value: string) => {
  const modifyName = typeof value === "undefined" ? "" : value;
  return await HTTP_CLIENT.get(`/department?name=${modifyName}`);
};
const getSingleDepartments = async (id: any) => {
  return await HTTP_CLIENT.post("/department/update-status", id);
};

const createDepartment = async (data: any) => {
  return await HTTP_CLIENT.post("/department", data);
};

const updateDepartment = async (data: any, id: string) => {
  return await HTTP_CLIENT.put(`/department/${id}`, data);
};

const deleteDepartment = async (id: string) => {
  return await HTTP_CLIENT.delete(`/department/${id}`);
};
const departmentCount = async (id: string) => {
  return await HTTP_CLIENT.get(`department/program-count/${id}`);
};



export {
  departmentCount,
  getSingleDepartments,
  getAllDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment
};