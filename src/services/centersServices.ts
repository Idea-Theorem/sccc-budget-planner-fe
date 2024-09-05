import { HTTP_CLIENT } from "../utils/axiosClient";

const createCenters = async (data: any) => {
  return await HTTP_CLIENT.post("/center", data);
};
const getAllCenters = async (value: string) => {
  const modifyValue = typeof value === "undefined" ? "" : value;
  return await HTTP_CLIENT.get(`/center?name=${modifyValue}`);
};

const updateCenter = async (data: any, id: string) => {
  return await HTTP_CLIENT.put(`/center/${id}`, data);
};

const deleteCenter = async (id: string) => {
  return await HTTP_CLIENT.delete(`/center/${id}`);
};

const getDepartmentInCenters = async (id: string) => {
  return await HTTP_CLIENT.get(`/center/department/${id}`);
};

const getProgramInDepartment = async (id: string) => {
  return await HTTP_CLIENT.get(`/department/programs/${id}`);
};
const getProgramInDepartmentBystatus = async (
  id: string,
  tabstatus: string,
  name?: any
) => {
  return await HTTP_CLIENT.get(
    `/department/programs-by-status/${id}/${tabstatus}/${name ? name : ""}`
  );
};

export {
  createCenters,
  getAllCenters,
  updateCenter,
  deleteCenter,
  getDepartmentInCenters,
  getProgramInDepartment,
  getProgramInDepartmentBystatus,
};
