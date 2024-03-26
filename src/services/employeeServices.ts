import { HTTP_CLIENT } from "../utils/axiosClient";



const getEmployee = async () => {
    return await HTTP_CLIENT.get("/user");
  };


const createEmployee = async (data: any) => {
    return await HTTP_CLIENT.post("/user", data);
  };
  
const deleteEmployee = async (id: string) => {
    return await HTTP_CLIENT.delete(`/user/${id}`);
  }





export {
  getEmployee,
  createEmployee,
  deleteEmployee
};