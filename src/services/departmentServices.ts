import { HTTP_CLIENT } from "../utils/axiosClient";




const getAllDepartments = async () => {
  return await HTTP_CLIENT.get("/department");
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

  


export {

  getAllDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment
};